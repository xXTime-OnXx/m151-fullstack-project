import {UserRepository} from "../../aggregate/user/user.repository";
import {User} from "../../aggregate/user/user.type";

export class UserQuery {

    constructor(private readonly userRepository: UserRepository) {
    }

    public async findOne(username: string, password: string): Promise<User> {
        return await this.userRepository.findOne(username, password);
    }

}
