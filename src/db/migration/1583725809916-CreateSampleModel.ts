import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSampleModel1583725809916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sample_model',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'attribute',
            type: 'string',
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sample_model')
  }
}
