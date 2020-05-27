import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../../../domain/aggregate/user/create-user.dto";
import {AuthManager} from "../../../domain/usecase/auth/auth.manager";

@Controller('auth')
export class AuthController {
    constructor(private readonly authManager: AuthManager) {}

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.authManager.register(createUserDto);
    }

    @Post('login')
    public async login(): Promise<void> {
        await this.authManager.login();
    }
}
