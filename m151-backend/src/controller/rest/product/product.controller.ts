import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {RolesGuard} from "../../role/roles.guard";
import {ProductQuery} from "../../../domain/usecase/product/product.query";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {Role} from "../../role/roles.decorator";
import {Product} from "../../../domain/aggregate/product/product.type";

@Controller('product')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductController {
    constructor(private productQuery: ProductQuery) {
    }

    @Role('user')
    @Get('all')
    async getAllProducts(): Promise<Product[]> {
        return await this.productQuery.getAllProducts();
    }

    @Role('user')
    @Get(':id')
    async getProduct(@Param() params): Promise<Product> {
        return await this.productQuery.getProduct(params.id);
    }
}
