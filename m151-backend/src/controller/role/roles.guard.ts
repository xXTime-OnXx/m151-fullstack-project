import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const role = this.reflector.get<string>('role', context.getHandler());
        if (!role) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        console.log(
            '----------------------------------------------------\n' +
            'Request\n' +
            '------------------------------------------------------------');
        console.log(request);

        return role === request.user.role || (role === 'user' && request.user.role === 'admin');
    }
}
