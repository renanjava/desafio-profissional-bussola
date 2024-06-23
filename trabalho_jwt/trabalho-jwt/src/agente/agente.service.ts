import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agente } from './agente';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';

@Injectable()
export class AgenteService {
  constructor(@InjectModel('Agente') private readonly agenteModel: Model<Agente>) {}

  async createFromValorantApi() {
    const fetchData = await fetch('https://valorant-api.com/v1/agents');
    const jsonData = await fetchData.json();
    console.log(jsonData);

    if (!jsonData || !jsonData.data) {
      console.error('Dados inválidos');
      return;
    }

    jsonData.data.forEach(async (element) => {
      if (
        element &&
        element.displayName &&
        element.description &&
        element.displayIcon &&
        element.role &&
        element.role.displayName
      ) {
        const createAgent: Partial<Agente> = {
          uuid: element.uuid,
          name: element.displayName,
          description: element.description,
          icon: element.displayIcon,
          role: element.role.displayName,
        };

        try {
          const createdAgent = new this.agenteModel(createAgent);
          await createdAgent.save();
        } catch (error) {
          if (error.code === 11000) {
            console.error(`Agente com a uuid ${element.uuid} já existe no banco de dados`);
          } else {
            console.error('Error ao criar agente:', error);
          }
        }
      } else {
        console.warn('Dados incompletos para o elemento:', element);
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
    await this.agenteModel.updateOne({ _id: id }, updateAgenteDto).exec();
    return this.findOne(id);
  }

  async remove(id: string): Promise<any> {
    return await this.agenteModel.deleteOne({ _id: id }).exec();
  }
}
