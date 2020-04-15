import {Injectable} from '@nestjs/common';
import {AppRepository} from "../../domain/aggregate/app/app.repository";
import {AppEntity} from "./app.entity";

@Injectable()
export class AppRepositoryImpl extends AppRepository {
    async getStatus(): Promise<string> {
        if (0 >= await AppEntity.createQueryBuilder('app').getCount()) {
            return 'ok';
        }
        return 'error';
    }
}
