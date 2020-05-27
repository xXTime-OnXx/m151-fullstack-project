import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from "./rest/app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {APP_INTERCEPTOR} from "@nestjs/core";

@Module({
    imports: [
        DomainModule,
        CacheModule.register(), // TODO: Add Redis as caching store 'https://docs.nestjs.com/techniques/caching#different-stores'
    ],
    controllers: [
        AppController
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class ControllerModule {
}
