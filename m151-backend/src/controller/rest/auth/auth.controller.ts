import {Body, Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import {RolesGuard} from "../../role/roles.guard";
import {AppQuery} from "../../../domain/usecase/app.query";
import {AuthService} from "../../auth/auth.service";
import {LocalAuthGuard} from "../../auth/guard/local-auth.guard";
import {CreateUserDto} from "../../../domain/aggregate/user/create-user.dto";

@Controller('auth')
@UseGuards(RolesGuard)
export class AppController {
    constructor(private readonly appQuery: AppQuery, private authService: AuthService) {}

    @UseGuards(LocalAuthGuard) // JwtAuthGuard
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }
}
