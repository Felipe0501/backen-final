import { MigrationInterface, QueryRunner } from "typeorm";

export class Init21752383973749 implements MigrationInterface {
    name = 'Init21752383973749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "opinion_entity" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "correo" character varying NOT NULL, "destino" character varying NOT NULL, "experiencia" character varying NOT NULL, CONSTRAINT "PK_7a8d89fb05274d7bdb122ded13d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "opinion_entity"`);
    }

}
