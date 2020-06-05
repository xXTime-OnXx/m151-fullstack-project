import {Module} from '@nestjs/common';
import {ConnectionOptions} from "tls";
import {AppRepository} from "../domain/aggregate/app/app.repository";
import {AppRepositoryImpl} from "./app/app.repository.impl";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepositoryImpl} from "./user/user.repository.impl";
import {UserRepository} from "../domain/aggregate/user/user.repository";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'postgres', // for prod 'postgres' else 'localhost'
            port: 5432,
            username: 'admin',
            password: 'admin',
            database: 'postgres',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [
                __dirname + '/migration/**/*{.ts,.js}',
            ],
            migrationsRun: true, // for migration true!
            synchronize: true,
        } as ConnectionOptions),
    ],
    controllers: [],
    providers: [
        {
            useClass: AppRepositoryImpl,
            provide: AppRepository,
        },
        {
            useClass: UserRepositoryImpl,
            provide: UserRepository,
        },
    ],
    exports: [
        AppRepository,
        UserRepository,
    ],
})
export class PersistenceModule {
}
