import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../type/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public async getAllProducts(): Promise<Product[]> {
    return await this.http.get<Product[]>(environment.host + 'product/all').toPromise();
  }

  public async getProduct(productId: string): Promise<Product> {
    return await this.http.get<Product>(environment.host + 'product/' + productId).toPromise();
  }
}
