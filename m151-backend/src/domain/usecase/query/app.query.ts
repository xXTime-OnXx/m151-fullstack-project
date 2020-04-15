import {Injectable} from '@nestjs/common';
import {AppRepository} from "../../aggregate/app/app.repository";

@Injectable()
export class AppQuery {
    constructor(private readonly appRepository: AppRepository) {
    }

    public async getStatus(): Promise<string> {
        return await this.appRepository.getStatus();
    }
}
