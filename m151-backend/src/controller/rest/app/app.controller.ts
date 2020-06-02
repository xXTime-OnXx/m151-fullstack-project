import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {RolesGuard} from "../../role/roles.guard";
import {Roles} from "../../role/roles.decorator";
import {AppQuery} from "../../../domain/usecase/app.query";
import {AuthService} from "../../auth/auth.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";

@Controller('app')
@UseGuards(RolesGuard)
export class AppController {

    constructor(private readonly appQuery: AppQuery, private authService: AuthService) {
    }

    @UseGuards(JwtAuthGuard)
    @Roles('admin')
    @Get('status')
    public async getStatus(): Promise<string> {
        return await this.appQuery.getStatus();
    }

    @UseGuards(JwtAuthGuard)
    @Roles('user')
    @Get('status')
    public async getProfile(@Request() req): Promise<string> {
        return req.user;
    }

}
