import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRequestLog } from './request-log.model';

@Injectable()
export class RequestLogService {
  constructor(
    @InjectModel('RequestLog') private readonly requestLogModel: Model<IRequestLog>,
  ) {}

  async create(method: string, endpoint: string, responseTime: number): Promise<IRequestLog> {
    const createdRequestLog = new this.requestLogModel({ method, endpoint, responseTime });
    return createdRequestLog.save();
  }

  // Outros métodos do serviço
}
