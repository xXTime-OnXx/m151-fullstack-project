import {Injectable} from '@nestjs/common';
import {UserRepository} from "../../domain/aggregate/user/user.repository";
import {CreateUserDto} from "../../domain/aggregate/user/create-user.dto";
import {User} from "../../domain/aggregate/user/user.type";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserRepositoryImpl extends UserRepository {
    async create(createUserDto: CreateUserDto): Promise<void> {
        const userEntity = new UserEntity();
        userEntity.username = createUserDto.username;
        userEntity.username = createUserDto.password;
        await userEntity.save();
    }

    async findOne(username: string, password: string): Promise<User> {
        return await UserEntity.findOne({ username: username, password: password });
    }
}
