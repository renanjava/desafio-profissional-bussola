import { Controller, Get } from '@nestjs/common';
import { ExternalService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly externalService: ExternalService) {}

  @Get('example1')
  async getExample1() {
    const data = await this.externalService.fetchDataFromExternalApi();
    return data;
  }
}
