import { Controller, Get } from '@nestjs/common';
import {AppQuery} from "../../domain/usecase/query/app.query";

@Controller()
export class AppController {
  constructor(private readonly appQuery: AppQuery) {}

  @Get()
  public async getHello(): Promise<string> {
    return await this.appQuery.getStatus();
  }
}
