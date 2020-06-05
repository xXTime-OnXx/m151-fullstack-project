import {MigrationInterface, QueryRunner} from "typeorm";

export class Init_1591345168417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE EXTENSION pgcrypto');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP EXTENSION pgcrypto');
    }

}
