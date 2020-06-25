import {Module} from '@nestjs/common';
import {PersistenceModule} from "../persistence/persistence.module";
import {AppQuery} from "./usecase/app.query";
import {UserQuery} from "./usecase/user/user.query";
import {UserManager} from "./usecase/user/user.manager";
import {ProductQuery} from "./usecase/product/product.query";

const managers = [
    UserManager,
];

const queries = [
    AppQuery,
    UserQuery,
    ProductQuery,
];

const services = [];

@Module({
    imports: [
        PersistenceModule,
    ],
    providers: [...managers, ...queries, ...services],
    exports: [...managers, ...queries],
})
export class DomainModule {
}
