import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1643630460929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "user"(
            id SERIAL NOT NULL,
            created_at timestamptz not null DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamptz not null DEFAULT CURRENT_TIMESTAMP,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            active BOOLEAN NOT NULL DEFAULT true,
            email VARCHAR(255) NOT NULL,
            email_checked BOOLEAN NOT NULL DEFAULT true,
            url_img VARCHAR(255) NULL,
            blocked BOOLEAN DEFAULT false,
            cpf VARCHAR(15) NOT NULL,
            user_type VARCHAR(255),
            first_acess BOOLEAN DEFAULT false,
            attempt int DEFAULT 0,
            cellphone varchar(16) NULL,
            comercial_phone varchar(16) NULL,
            birth_date date NULL,
            deleted BOOLEAN DEFAULT false,
            CONSTRAINT pk_user PRIMARY KEY (id)
          )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
