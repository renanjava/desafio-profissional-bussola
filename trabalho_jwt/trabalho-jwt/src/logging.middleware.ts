import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { IRequestLog, RequestLogModel } from './request-log.model';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(@InjectModel(RequestLogModel.name) private requestLogModel: Model<IRequestLog>) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();

    // Executa a próxima função no middleware
    next();

    const end = Date.now();
    const responseTime = end - start;

    // Cria uma instância do modelo RequestLog para salvar no banco de dados
    const log = new this.requestLogModel({ method, endpoint: originalUrl, responseTime });
    log.save().then(() => {
      console.log('Log de requisição salvo com sucesso.');
    }).catch(err => {
      console.error('Erro ao salvar o log de requisição:', err);
    });
  }
}
