import {Injectable} from "@nestjs/common";
import {ProductRepository} from "../../aggregate/product/product.repository";
import {Product} from "../../aggregate/product/product.type";

@Injectable()
export class ProductQuery {

    constructor(private readonly productRepository: ProductRepository) {
    }

    public async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.getAllProducts();
    }

}
