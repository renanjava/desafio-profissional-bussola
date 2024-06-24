import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogService } from './request-log.service';
import { RequestLogSchema, RequestLogModel } from './request-log.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'RequestLog', schema: RequestLogSchema }]),
    // Outros módulos necessários
  ],
  providers: [RequestLogService],
  exports: [RequestLogService], // Se necessário exportar o serviço
})
export class RequestLogModule {}
