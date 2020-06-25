import {Product} from "./product.type";

export abstract class ProductRepository {
    public async abstract getAllProducts(): Promise<Product[]>;
}
