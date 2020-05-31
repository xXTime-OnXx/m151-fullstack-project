import {UserRepository} from "../../aggregate/user/user.repository";
import {User} from "../../aggregate/user/user.type";
import {CreateUserDto} from "../../aggregate/user/create-user.dto";

export class UserManager {

    constructor(private readonly userRepository: UserRepository) {
    }

    public async create(createUserDto: CreateUserDto): Promise<void> {
        await this.userRepository.create(createUserDto);
    }

}
