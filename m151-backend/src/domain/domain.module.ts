import {Module} from '@nestjs/common';
import {PersistenceModule} from "../persistence/persistence.module";
import {AppQuery} from "./usecase/app.query";
import {AuthManager} from "./usecase/auth/auth.manager";

const managers = [
    AuthManager,
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
