import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { Repository } from 'typeorm';
import { RequestLog } from './request-log.entidade';
import { performance } from 'perf_hooks';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(RequestLog)
    private readonly requestLogRepository: Repository<RequestLog>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();

    res.on('finish', async () => {
      const end = performance.now();
      const responseTime = end - start;
      const routeName = req.route?.path || req.url;
      const method = req.method;

      const log = new RequestLog(routeName, method, responseTime);
      await this.requestLogRepository.save(log);
    });

    next();
  }
}