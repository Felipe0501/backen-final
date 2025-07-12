import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752345232784 implements MigrationInterface {
    name = 'Init1752345232784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_01cd2b829e0263917bf570cb672"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nombreCompleto" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "correo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_37e80954fd8499125ff14c586dd" UNIQUE ("correo")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "contrasena" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "pais" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "pais"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contrasena"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_37e80954fd8499125ff14c586dd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nombreCompleto"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
