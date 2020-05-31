import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserQuery} from "../../domain/usecase/user/user.query";
import {CreateUserDto} from "../../domain/aggregate/user/create-user.dto";
import {UserManager} from "../../domain/usecase/user/user.manager";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private userQuery: UserQuery,
                private userManager: UserManager) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userQuery.findOne(username, pass);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto) {
        await this.userManager.create(createUserDto);
    }
}
