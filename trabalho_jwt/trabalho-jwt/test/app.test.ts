import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module'; 
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('Testes de Integração', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Deve retornar status 200 para GET /example1', () => {
    return request(app.getHttpServer())
      .get('/example1')
      .expect(200);
  });

  it('Deve retornar status 200 para POST /example2', () => {
    return request(app.getHttpServer())
      .post('/example2')
      .send({}) 
      .expect(200);
  });
});
