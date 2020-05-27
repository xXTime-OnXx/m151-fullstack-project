import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from "./rest/app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AuthController} from "./rest/auth/auth.controller";

@Module({
    imports: [
        DomainModule,
        CacheModule.register(), // TODO: Add Redis as caching store 'https://docs.nestjs.com/techniques/caching#different-stores'
    ],
    controllers: [
        AppController,
        AuthController,
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
