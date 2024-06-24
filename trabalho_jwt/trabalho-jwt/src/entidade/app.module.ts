import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestLog } from './request-log.entidade';
import { LoggingMiddleware } from './logging.middleware';
import { ExternalService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'request_log.db',
      entities: [RequestLog],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([RequestLog]),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService, ExternalService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
