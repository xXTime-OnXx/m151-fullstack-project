import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from "./rest/app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AuthService} from "./auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/constants";
import {LocalStrategy} from "./auth/strategy/local.strategy";
import {JwtStrategy} from "./auth/strategy/jwt.strategy";
import {AuthController} from "./rest/auth/auth.controller";

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
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class ControllerModule {
}
