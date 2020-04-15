import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('app')
export class AppEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({type: 'varchar', length: 64})
    public name: string;

    @Column({type: 'varchar', length: 64})
    public username: string;
}
