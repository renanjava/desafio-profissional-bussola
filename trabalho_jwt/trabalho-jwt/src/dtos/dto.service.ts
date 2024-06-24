import { Injectable } from '@nestjs/common';
import { ExampleDto } from '../dtos/dto';   

@Injectable()
export class AppService {
  getExample1(): string {
    return getExample1;
  }

  postExample2(data: ExampleDto): string {
    return `Received data: ${JSON.stringify(data)}`;
  }
}
