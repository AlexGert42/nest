import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product, ProductDocument } from "./schemas/product.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UpdateProductDto } from "./dto/update-product.dto";


@Injectable()
export class ProductsServese {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

  }
  // private products = [];


  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id)
  }

  async update(id: string, prod: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, prod, {new: true})
  }
}
