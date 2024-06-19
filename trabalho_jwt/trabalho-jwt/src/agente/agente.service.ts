import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agente } from './agente';
import { Console } from 'console';
import { json } from 'stream/consumers';

@Injectable()
export class AgenteService {

  constructor(@InjectModel('Agente') private readonly agenteModel: Model<Agente>){}

  async createFromValorantApi(){
    const fetchData = await fetch("https://valorant-api.com/v1/agents");
    const jsonData = await fetchData.json();
    console.log(jsonData);
    

    jsonData.data.forEach(element => {
      if(!((typeof element.displayName == "undefined") && (typeof element.description == "undefined") && (typeof element.displayIcon == "undefined") && (typeof element.role == "undefined"))){
        let createAgent: Agente;

        createAgent.name = element.displayName
        createAgent.description = element.description
        createAgent.icon = element.displayIcon
        createAgent.role = element.role

        if(createAgent.name && createAgent.description && createAgent.icon && createAgent.role){
          let createdAgent = new this.agenteModel(createAgent);
          createdAgent.save()
        }
      }
    });
  }

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
