import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from '../dtos/dto.service';
import { ExampleDto } from '../dtos/dto'; 
import { CustomException } from 'src/exception/exception';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/example1')
  async getExample1(): Promise<string> {
    try{
        return this.appService.getExample1();
    } catch (error) {
        throw new CustomException('Erro ao processar');
    }
  }

  @Post('/example2')
  async postExample2(@Body(ValidationPipe) dto: ExampleDto): Promise<string> {
    try{
        return this.appService.postExample2(dto);
    } catch (error) {
        throw new CustomException('Erro ao processar');
    }
  }
}
