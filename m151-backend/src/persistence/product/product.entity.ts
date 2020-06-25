import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('product')
export class ProductEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 128})
    name: string;

    @Column({type: 'float'})
    price: string;

    @Column({type: 'varchar', length: 256})
    image: string

    @Column({type: 'varchar', length: 256})
    description: string
}
