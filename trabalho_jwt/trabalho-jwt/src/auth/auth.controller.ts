import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomException } from 'src/exception/exception';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() { username, password }: { username: string; password: string }) {
    try{
      return this.authService.signIn(username, password);
    } catch (error) {
      throw new CustomException('Erro ao processar');
    }
  }
}
