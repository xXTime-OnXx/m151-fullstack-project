import {Module} from '@nestjs/common';
import {ConnectionOptions} from "tls";
import {AppRepository} from "../domain/aggregate/app/app.repository";
import {AppRepositoryImpl} from "./app/app.repository.impl";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost', // for prod 'postgres' else 'localhost'
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
    ],
    exports: [
        AppRepository,
    ],
})
export class PersistenceModule {
}
