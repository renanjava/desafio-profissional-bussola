import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RequestLogService } from './request-log.service';
import { RequestLog } from './request-log.model';
import { performance } from 'perf_hooks';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ExternalService {
  constructor(
    private readonly requestLogService: RequestLogService,
    private readonly httpService: HttpService,
  ) {}

  async fetchDataFromExternalApi() {
    const start = performance.now();
    const response = await firstValueFrom(this.httpService.get('https://valorant-api.com/v1/agents'));
    const end = performance.now();
    const responseTime = end - start;

    const log = new RequestLog('/external-api', 'GET', responseTime);
    this.requestLogService.addLog(log);

    return response.data;
  }
}
