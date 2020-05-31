import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";

@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 64})
    username: string;

    @Column({type: 'varchar', length: 64})
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
