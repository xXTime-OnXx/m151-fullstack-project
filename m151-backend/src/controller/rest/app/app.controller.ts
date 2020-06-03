import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {Role} from "../../role/roles.decorator";
import {AppQuery} from "../../../domain/usecase/app.query";
import {User} from "../../../domain/aggregate/user/user.type";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {RolesGuard} from "../../role/roles.guard";

@Controller('app')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppController {

    constructor(private readonly appQuery: AppQuery) {
    }

    @Role('admin')
    @Get('status')
    public async getStatus(): Promise<string> {
        return await this.appQuery.getStatus();
    }

    @Role('user')
    @Get('profile')
    public async getProfile(@Request() req): Promise<User> {
        return req.user;
    }

}
