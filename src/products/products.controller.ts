import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsServese } from "./products.servese";

@Controller("products")
export class ProductsController {

  constructor(private readonly productsService: ProductsServese) {

  }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: string) {
    return `response ${id}`;
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(id)
  }

  @Put(":id")
  update(@Body() prod: UpdateProductDto, @Param("id") id: string) {
    return this.productsService.update(id, prod)
  }


}
