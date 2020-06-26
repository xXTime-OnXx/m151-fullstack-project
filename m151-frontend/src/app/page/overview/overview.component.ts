import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../type/product.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.productService.getAllProducts();
  }

  async getProductDetails(product: Product): Promise<void> {
    await this.router.navigate(['product/' + product.id]);
  }
}
