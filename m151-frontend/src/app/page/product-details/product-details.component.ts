import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../type/product.type";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    const productId = this.activatedRoute.snapshot.params.id;
    this.product = await this.productService.getProduct(productId);
  }

}
