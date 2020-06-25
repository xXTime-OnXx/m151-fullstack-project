import {MigrationInterface, QueryRunner} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";

export class Init_1591345168417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE EXTENSION pgcrypto`);

        const admin = new UserEntity()
        admin.username = 'admin';
        admin.password = 'admin';
        admin.role = UserRole.ADMIN;
        await admin.save();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP EXTENSION pgcrypto`);


    }

}
