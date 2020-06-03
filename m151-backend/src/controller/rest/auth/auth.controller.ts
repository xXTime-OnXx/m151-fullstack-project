import {Body, Controller, Post, Request, UseGuards} from "@nestjs/common";
import {RolesGuard} from "../../role/roles.guard";
import {AppQuery} from "../../../domain/usecase/app.query";
import {AuthService} from "../../auth/auth.service";
import {LocalAuthGuard} from "../../auth/guard/local-auth.guard";
import {CreateUserDto} from "../../../domain/aggregate/user/create-user.dto";

@Controller('auth')
@UseGuards(RolesGuard)
export class AuthController {
    constructor(private readonly appQuery: AppQuery, private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<any> {
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.authService.register(createUserDto);
    }

}
