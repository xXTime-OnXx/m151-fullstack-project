import {CreateUserDto} from "../../aggregate/user/create-user.dto";
import {UserRepository} from "../../aggregate/user/user.repository";


export class AuthManager {

    constructor(private readonly userRepository: UserRepository) {}

    public async register(createUserDto: CreateUserDto): Promise<void> {
        await this.userRepository.createUser(createUserDto);
    }

    public async login(): Promise<void> {
        // TODO: implementation
    }

}
