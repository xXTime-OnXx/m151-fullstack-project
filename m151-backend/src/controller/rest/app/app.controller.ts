import {Controller, Get, UseGuards} from '@nestjs/common';
import {AppQuery} from "../../../domain/usecase/query/app.query";
import {RolesGuard} from "../../guard/roles.guard";
import {Roles} from "../../guard/roles.decorator";

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appQuery: AppQuery) {}

  @Get()
  @Roles('admin')
  public async getStatus(): Promise<string> {
    return await this.appQuery.getStatus();
  }
}
