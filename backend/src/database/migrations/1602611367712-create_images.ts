import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602611367712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, // coluna comeca com numero positivo
            isPrimary: true, // chave primaria
            isGenerated: true, // vai ser gerada automaticamente
            generationStrategy: 'increment', // vai ser gerada com auto-increment
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'integer',
          }
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
    }

}
