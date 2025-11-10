import { type MigrationInterface, type QueryRunner, Table, TableIndex, TableForeignKey } from 'typeorm';

export class CreateNoteTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'content',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tags',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'is_shared',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          }
        ],
      }),
      true
    );


    await queryRunner.createForeignKey(
      'notes',
      new TableForeignKey({
        name: 'fk_notes_user_id',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createIndex(
      'notes',
      new TableIndex({
        name: 'idx_notes_user_id',
        columnNames: ['user_id'],
      })
    );

    await queryRunner.createIndex(
      'notes',
      new TableIndex({
        name: 'idx_notes_user_id',
        columnNames: ['user_id'],
      })
    );

    await queryRunner.createIndex(
      'notes',
      new TableIndex({
        name: 'idx_notes_is_shared',
        columnNames: ['is_shared'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('notes', 'idx_notes_user_id');
    await queryRunner.dropIndex('notes', 'idx_notes_is_shared');
    await queryRunner.dropForeignKey('notes', 'fk_notes_user_id');
    await queryRunner.dropTable('notes');
  }
}
