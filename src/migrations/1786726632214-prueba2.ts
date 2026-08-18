import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba21786726632214 implements MigrationInterface {
    name = 'Prueba21786726632214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "prueba3" character varying(150)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "prueba3"`);
    }

}
