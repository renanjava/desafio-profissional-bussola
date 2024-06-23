import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

  async criar(usuarioData: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(usuarioData.password, 10);
    const newUsuario = new this.usuarioModel({ ...usuarioData, password: hashedPassword });
    return newUsuario.save();
  }

  async findAll() {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string) {
    const usuario = await this.usuarioModel.findOne({ id }).exec();
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  async findByUsername(username: string) {
    return this.usuarioModel.findOne({ username }).exec();
  }

  async update(id: string, usuarioData: Partial<UpdateUsuarioDto>) {
    const updatedUsuario = await this.usuarioModel.findOneAndUpdate({ id }, usuarioData, { new: true }).exec();
    if (!updatedUsuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return updatedUsuario;
  }

  async remove(id: string) {
    const deletedUsuario = await this.usuarioModel.findOneAndDelete({ id }).exec();
    if (!deletedUsuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return deletedUsuario;
  }

  async login(username: string, password: string) {
    const usuario = await this.findByUsername(username);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isValidPassword = await bcrypt.compare(password, usuario.password);
    if (!isValidPassword) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ username: usuario.username, id: usuario.id }, 'chave-secreta', { expiresIn: '1h' });
    return token;
  }
}
