import { Module } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { AgenteController } from './agente.controller';
import { AgenteSchema } from './entities/agente.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Agente', schema: AgenteSchema}])],
  controllers: [AgenteController],
  providers: [AgenteService],
})
export class AgenteModule {}
