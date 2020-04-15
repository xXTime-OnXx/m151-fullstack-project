import {Module} from '@nestjs/common';
import {AppQuery} from "./usecase/query/app.query";
import {PersistenceModule} from "../persistence/persistence.module";

const managers = [
];

const queries = [
    AppQuery,
];

const services = [
];

@Module({
    imports: [
        PersistenceModule,
    ],
    providers: [...managers, ...queries, ...services],
    exports: [...managers, ...queries],
})
export class DomainModule {
}
