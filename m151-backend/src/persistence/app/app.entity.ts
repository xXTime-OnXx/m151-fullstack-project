import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('app')
export class AppEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 64})
    name: string;

    @Column({type: 'varchar', length: 64})
    username: string;
}
