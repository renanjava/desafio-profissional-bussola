import { Injectable } from '@nestjs/common';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';

@Injectable()
export class AgenteService {
  create(createAgenteDto: CreateAgenteDto) {
    return 'This action adds a new agente';
  }

  findAll() {
    return `This action returns all agente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agente`;
  }

  update(id: number, updateAgenteDto: UpdateAgenteDto) {
    return `This action updates a #${id} agente`;
  }

  remove(id: number) {
    return `This action removes a #${id} agente`;
  }
}
