import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserQuery} from "../../domain/usecase/user/user.query";
import {CreateUserDto} from "../../domain/aggregate/user/create-user.dto";
import {UserManager} from "../../domain/usecase/user/user.manager";
import {User} from "../../domain/aggregate/user/user.type";
import moment = require('moment');

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private userQuery: UserQuery,
                private userManager: UserManager) {
    }

    async validateUser(username: string, pass: string): Promise<User> {
        const user: User = await this.userQuery.findOne(username, pass);
        if (user && user.password === pass) {
            user.password = null;
            return user;
        }
        return null;
    }

    async login(user: User) {
        const payload = {sub: user.id, username: user.username, role: user.role};
        const access_token = this.jwtService.sign(payload);
        return {
            access_token,
            expires: moment().add(599, 's'),
        };
    }

    async register(createUserDto: CreateUserDto) {
        await this.userManager.create(createUserDto);
    }
}
