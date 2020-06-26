import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from "./rest/app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {AuthService} from "./auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/constants";
import {LocalStrategy} from "./auth/strategy/local.strategy";
import {JwtStrategy} from "./auth/strategy/jwt.strategy";
import {AuthController} from "./rest/auth/auth.controller";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {ProductController} from "./rest/product/product.controller";
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        DomainModule,
        CacheModule.register({
            store: redisStore,
            host: 'redis',
            port: 6379,
        }),
        PassportModule.register({}),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '900s'}, // 900s = 15 min
        }),
    ],
    controllers: [
        AppController,
        AuthController,
        ProductController,
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
