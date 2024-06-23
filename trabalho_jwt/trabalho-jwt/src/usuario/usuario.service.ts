import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) {}

    async criar(usuarioData: Usuario): Promise<Usuario> {
        const usuario = this.usuarioRepository.create(usuarioData);
        return await this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne(id);
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }
        return usuario;
    }

    async findByUsername(username: string): Promise<Usuario> {
        return await this.usuarioRepository.findOne({ where: { username } });
    }

    async update(id: string, usuarioData: Partial<Usuario>): Promise<Usuario> {
        const usuario = await this.findOne(id);
        await this.usuarioRepository.update(id, usuarioData);
        return await this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usuarioRepository.delete(id);
    }

    async login(username: string, password: string): Promise<string> {
        const usuario = await this.usuarioRepository.findOne({ where: { username } });
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
