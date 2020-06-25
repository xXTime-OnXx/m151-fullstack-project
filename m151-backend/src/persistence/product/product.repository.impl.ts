import {Injectable} from '@nestjs/common';
import {ProductRepository} from "../../domain/aggregate/product/product.repository";
import {ProductEntity} from "./product.entity";
import {Product} from "../../domain/aggregate/product/product.type";

@Injectable()
export class ProductRepositoryImpl extends ProductRepository {
    public async getAllProducts(): Promise<Product[]> {
        return await ProductEntity.createQueryBuilder().getMany();
    }

}
