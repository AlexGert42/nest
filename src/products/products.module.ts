import { Module } from "@nestjs/common";
import { ProductsServese } from "./products.servese";
import { ProductsController } from "./products.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schemas/product.schema";

@Module({
  providers: [ProductsServese],
  controllers: [ProductsController],
  imports: [MongooseModule.forFeature([
    {name: Product.name, schema: ProductSchema}
  ])]
})

export class ProductsModule {

}