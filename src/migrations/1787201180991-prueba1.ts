import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba11787201180991 implements MigrationInterface {
    name = 'Prueba11787201180991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying(255) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "viva_goku" TIMESTAMP NOT NULL DEFAULT now(), "hola_mundp" TIMESTAMP NOT NULL DEFAULT now(), "prueba1" character varying(150), "prueba3" character varying(150), "prueba2" character varying(150), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
