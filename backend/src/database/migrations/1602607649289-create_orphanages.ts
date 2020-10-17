import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602607649289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZA ALTERAÇÕES NA TABELA
    // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO

    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'whatsapp',
          type: 'text',
        },
        {
          name: 'approved',
          type: 'boolean',
          default: false,
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZ O QUE FOI FEITO NO UP

    await queryRunner.dropTable('orphanages');
  }
}
