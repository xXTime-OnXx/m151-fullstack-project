import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.type";

export abstract class UserRepository {
    public async abstract create(createUserDto: CreateUserDto): Promise<void>;

    public async abstract findOne(username: string, password: string): Promise<User>;
}
