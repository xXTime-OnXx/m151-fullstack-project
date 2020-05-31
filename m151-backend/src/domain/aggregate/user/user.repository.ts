import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.type";

export abstract class UserRepository {
    abstract create(createUserDto: CreateUserDto): Promise<void>;

    abstract findOne(username: string, password: string): Promise<User>;
}
