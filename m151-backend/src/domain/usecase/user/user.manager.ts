import {UserRepository} from "../../aggregate/user/user.repository";
import {CreateUserDto} from "../../aggregate/user/create-user.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserManager {

    constructor(private readonly userRepository: UserRepository) {
    }

    public async create(createUserDto: CreateUserDto): Promise<void> {
        await this.userRepository.create(createUserDto);
    }

}
