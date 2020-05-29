import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {RolesGuard} from "../../role/roles.guard";
import {Roles} from "../../role/roles.decorator";
import {AppQuery} from "../../../domain/usecase/app.query";
import {LocalAuthGuard} from "../../auth/local-auth.guard";
import {AuthService} from "../../auth/auth.service";

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appQuery: AppQuery, private authService: AuthService) {}

  // TODO: continue at https://docs.nestjs.com/techniques/authentication#implementing-passport-jwt
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Roles('admin')
  @Get('status')
  public async getStatus(): Promise<string> {
    return await this.appQuery.getStatus();
  }
}
