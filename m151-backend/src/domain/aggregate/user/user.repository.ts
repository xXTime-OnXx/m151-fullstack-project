import {CreateUserDto} from "./create-user.dto";

export abstract class UserRepository {
    abstract createUser(createUserDto: CreateUserDto): Promise<string>;
}
