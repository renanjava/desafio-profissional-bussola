import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomException, ValidationException } from '../exception/exception'; 


@Controller('agente')
export class AgenteController {
  constructor(private readonly agenteService: AgenteService) {}

  @UseGuards(AuthGuard)
  @Post('/consumir-api')
  createFromValorantApi(){
    try{
      return this.agenteService.createFromValorantApi();
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createAgenteDto: CreateAgenteDto) {
    try{
      return this.agenteService.create(createAgenteDto);
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    try{
      return this.agenteService.findAll();
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
      return this.agenteService.findOne(id);
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenteDto: UpdateAgenteDto) {
    try{
     return this.agenteService.update(id, updateAgenteDto);
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    try{
      return this.agenteService.remove(id);
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }
}
