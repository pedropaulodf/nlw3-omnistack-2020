import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';

import { LinearGradient } from 'expo-linear-gradient';

import earthImg from '../../images/onb-earth.png';

interface OrphanageDataRouteParams {
  position: {
    latitude: number,
    longitude: number,
  }
}

export default function OrphanageData() {

  const route = useRoute();
  
  const navigate = useNavigation();

  const routeParams = route.params as OrphanageDataRouteParams;
  
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpenHours] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  async function handleCreateOrphanage(){
    const { latitude, longitude} = routeParams.position;
    
    console.log({
      name,
      about,
      instruction: instructions,
      openHours: opening_hours,
      openOnWeekends: open_on_weekends,
      latitude,
      whatsapp,
      longitude
    });

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('whatsapp', whatsapp);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await api.post('orphanages', data);

    navigate.navigate('OrphanagesMap');

  }

  async function handleSelectImages() {
    const {status} = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        "Aviso",
        "Eita! Precisamos do acesso às suas fotos, para poder postá-las.",
        [
          { text: "Entendi!", onPress: () => {} }
        ]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) {
      return;
    }

    const { uri } = result;
    setImages([...images, uri]);

  }
  
  function handleDeleteImageUploaded(index: number){
    images.splice(index, 1);
    setImages([...images])
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        // style={name ? [styles.input, styles.inputValidationGood] : [styles.input, styles.inputValidationWrong]}
        style={name.length === 0 ? [styles.input] : name.length > 5 ? [styles.input, styles.inputValidationGood] : [styles.input, styles.inputValidationWrong]}
        value={name}
        onChangeText={setName}
      />

      <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
        <Text style={styles.label}>Sobre</Text>
        <Text style={[styles.label, {fontSize: 12}]}>Máximo de 300 caracteres</Text>
      </View>
      <TextInput
        // style={about ? [styles.input, styles.inputValidationGood, { height: 110 }] : [styles.input, styles.inputValidationWrong, { height: 110 }]}
        style={about.length === 0 ? [styles.input, { height: 110 }] : about.length < 300 ? [styles.input, styles.inputValidationGood, { height: 110 }] : [styles.input, styles.inputValidationWrong, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={whatsapp.length === 0 ? [styles.input] : whatsapp.length > 11 ? [styles.input, styles.inputValidationGood] : [styles.input, styles.inputValidationWrong]}
        value={whatsapp}
        onChangeText={setWhatsapp}
      />

      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImagesContainer}>
        {images.map((image, index) => { 
          return ( 
            <View key={image}>
              <View style={styles.bgDeleteImage}>
                <RectButton style={styles.deleteImageButton} onPress={() => handleDeleteImageUploaded(index) }>
                  <Feather name="x" size={22} color="#FF679E" />
                </RectButton>
              </View>
              <Image source={{uri: image}} style={styles.uploadedImage} />
            </View>
            // <LinearGradient key={image} start={{ x: 0, y: 0 }} end={{x: 1, y: 0 }} colors={['#A1E9C5', '#FFC2D8']} style={styles.boxFile} >
            //   <LinearGradient colors={['#FCF0F4', '#EDFFF6']} style={styles.innerBoxFile} start={{ x: 1, y: 0 }}>
            //     <Image source={{uri: image}} style={styles.uploadedImageInBox} />
            //     <View>
            //       <Text style={styles.fileName}>imagem_01.jpg</Text>
            //       <Text style={styles.fileSize}>245kbps</Text>
            //     </View>
            //     <RectButton onPress={() => handleDeleteImageUploaded(index) } style={styles.deleteImageButton}>
            //       <Feather name="x" size={24} color="#FF679E" />
            //     </RectButton>
            //   </LinearGradient>
            // </LinearGradient>
           )
          })
        }
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
        <Text style={styles.textAddPhoto}>Adicionar foto</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        // style={instructions ? [styles.input, styles.inputValidationGood, { height: 110 }] : [styles.input, styles.inputValidationWrong, { height: 110 }]}
        style={instructions.length === 0 ? [styles.input, { height: 110 }] : instructions.length > 5 ? [styles.input, styles.inputValidationGood, { height: 110 }] : [styles.input, styles.inputValidationWrong, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        // style={opening_hours ? [styles.input, styles.inputValidationGood] : [styles.input, styles.inputValidationWrong]}
        style={opening_hours.length === 0 ? [styles.input] : opening_hours.length > 5 ? [styles.input, styles.inputValidationGood] : [styles.input, styles.inputValidationWrong]}
        value={opening_hours}
        onChangeText={setOpenHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  inputValidationWrong: {
    borderColor: '#FFC3D8',
  },

  inputValidationGood: {
    borderColor: '#A1E9C5',
  },

  uploadedImagesContainer: {
    width: '100%',
    borderRadius: 20,
    borderColor: '#A1E9C5',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  bgDeleteImage:{
    backgroundColor: '#ffffff',
    borderColor: '#CEDEE5',
    borderWidth: 1,
    width: 30,
    height: 30,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 10,
    zIndex: 1,
    alignSelf: 'flex-end',
    marginBottom: -30,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteImageButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadedImage: {
    width: 90,
    height: 90,
    borderRadius: 14,
    marginBottom: 10,
    marginRight: 8,
  },
  
  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    flexDirection: 'row',
  },
  
  textAddPhoto: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#15B6D6',
    marginLeft: 8,
    fontSize: 15,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  
  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  
  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },

  signUpButton: {
    margin: 1,
    width: 200,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  // uploadedImageInBox: {
  //   // backgroundColor: 'red',
  //   width: 64,
  //   height: 64,
  //   borderRadius: 14,
  //   marginRight: -44,
  // },

  // boxFile: {
  //   borderRadius: 20,
  //   paddingHorizontal: 1,
  //   paddingVertical: 1,
  //   marginBottom: 10,
  // },
  
  // innerBoxFile: {
  //   padding: 10, 
  //   height: 86, 
  //   borderRadius: 18, 
  //   borderColor: 'transparent', 
  //   borderWidth: 0.8, 
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },

  // fileName:{
  //   fontFamily: 'Nunito_800ExtraBold',
  //   color: '#37C77F',
  // },

  // fileSize: {
  //   fontFamily: 'Nunito_800ExtraBold',
  //   color: '#8FA7B2',
  // },

  // deleteImageButton: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  // },
})