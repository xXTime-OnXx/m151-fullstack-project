import {Controller, Get, UseGuards} from "@nestjs/common";
import {RolesGuard} from "../../role/roles.guard";
import {ProductQuery} from "../../../domain/usecase/product/product.query";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {Role} from "../../role/roles.decorator";

@Controller('product')
@UseGuards(RolesGuard)
export class ProductController {
    constructor(private productQuery: ProductQuery) {
    }

    @UseGuards(JwtAuthGuard)
    @Role('user')
    @Get('products')
    async getAllProducts(): Promise<any> {
        return this.productQuery.getAllProducts();
    }
}
