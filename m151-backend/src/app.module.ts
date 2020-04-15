import { Module } from '@nestjs/common';
import {ControllerModule} from "./controller/controller.module";
import {DomainModule} from "./domain/domain.module";

@Module({
  imports: [
      ControllerModule,
      DomainModule,
  ],
})
export class AppModule {}
