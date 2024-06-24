import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('agente')
export class AgenteController {
  constructor(private readonly agenteService: AgenteService) {}

  @UseGuards(AuthGuard)
  @Post('/consumir-api')
  createFromValorantApi(){
    return this.agenteService.createFromValorantApi();
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createAgenteDto: CreateAgenteDto) {
    return this.agenteService.create(createAgenteDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.agenteService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenteService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenteDto: UpdateAgenteDto) {
    return this.agenteService.update(id, updateAgenteDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.agenteService.remove(id);
  }
}
