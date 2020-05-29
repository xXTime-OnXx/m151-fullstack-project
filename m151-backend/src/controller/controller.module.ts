import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from "./rest/app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AuthService} from "./auth/auth.service";
import {LocalStrategy} from "./auth/local.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/constants";

@Module({
    imports: [
        DomainModule,
        CacheModule.register(), // TODO: Add Redis as caching store 'https://docs.nestjs.com/techniques/caching#different-stores'
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class ControllerModule {
}
