import { Module } from '@nestjs/common';
import { AgenteModule } from './agente/agente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestjs"), AgenteModule, UsuarioModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }