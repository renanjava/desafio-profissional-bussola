import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';

@Controller('agente')
export class AgenteController {
  constructor(private readonly agenteService: AgenteService) {}

  @Post('/consumir-api')
  createFromValorantApi(){
    return this.agenteService.createFromValorantApi();
  }

  @Post()
  create(@Body() createAgenteDto: CreateAgenteDto) {
    return this.agenteService.create(createAgenteDto);
  }

  @Get()
  findAll() {
    return this.agenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenteDto: UpdateAgenteDto) {
    return this.agenteService.update(id, updateAgenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.agenteService.remove(id);
  }
}
