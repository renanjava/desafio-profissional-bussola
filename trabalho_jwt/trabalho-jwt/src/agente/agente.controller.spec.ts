import { Test, TestingModule } from '@nestjs/testing';
import { AgenteController } from './agente.controller';
import { AgenteService } from './agente.service';

describe('AgenteController', () => {
  let controller: AgenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgenteController],
      providers: [AgenteService],
    }).compile();

    controller = module.get<AgenteController>(AgenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});