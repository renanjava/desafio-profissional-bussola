import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products';

@Injectable()
export class ProductsService {

  constructor(@InjectModel('Product') private readonly productModel: Model<Product>){ }

  async create(createProductDto: CreateProductDTO) {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findOne(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDTO) {
    await this.productModel.updateOne({_id: id}, updateProductDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.productModel.deleteOne({_id: id,}).exec()
  }
}
