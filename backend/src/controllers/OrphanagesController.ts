import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import OrphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';

// Query params : /users?search=pedro
// Route params : /users/10/50 (usado geralmente para identificar um recurso)
// Body params : /users (pega o corpo do resquest)

export default {

  async index(request: Request, response: Response) {

    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });
    return response.send(OrphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {

    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });
    return response.send(OrphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      whatsapp,
      approved,
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const requestImages = request.files as Express.Multer.File[];
   
    const images = requestImages.map(image => {
      return { path: image.filename }
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      whatsapp,
      approved: approved === 'true',
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      whatsapp: Yup.string().required(),
      approved: Yup.boolean(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }
      ))
    });

    // pega todos os erros de apitar o erro
    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);
  
    await orphanagesRepository.save(orphanage);

    return response.status(201).send(orphanage);
  }
}