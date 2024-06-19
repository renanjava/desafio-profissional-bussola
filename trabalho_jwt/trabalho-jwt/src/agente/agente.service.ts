import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agente } from './agente';

@Injectable()
export class AgenteService {

  constructor(@InjectModel('Agente') private readonly agenteModel: Model<Agente>){}

  async create(createAgenteDto: CreateAgenteDto) {
    const createdProduct = new this.agenteModel(createAgenteDto);
    return await createdProduct.save();
  }

  async findAll() {
    return await this.agenteModel.find().exec();
  }

  async findOne(id: string) {
    return await this.agenteModel.findById(id).exec();
  }

  async update(id: string, updateAgenteDto: UpdateAgenteDto) {
    await this.agenteModel.updateOne({_id: id}, updateAgenteDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.agenteModel.deleteOne({_id: id,}).exec()
  }
}
