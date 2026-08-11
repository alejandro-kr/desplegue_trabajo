import { MigrationInterface, QueryRunner } from "typeorm";

export class Creastro1786483700580 implements MigrationInterface {
    name = 'Creastro1786483700580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "prueba1" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_26c215f85f27eb6cce6dbb39881" UNIQUE ("prueba1")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "prueba2" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fd4714563be38a2c712c6a06af0" UNIQUE ("prueba2")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fd4714563be38a2c712c6a06af0"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "prueba2"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_26c215f85f27eb6cce6dbb39881"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "prueba1"`);
    }

}
