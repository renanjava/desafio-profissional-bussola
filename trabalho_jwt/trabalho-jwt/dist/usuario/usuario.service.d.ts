import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuario';
export declare class UsuarioService {
    private readonly usuarioModel;
    constructor(usuarioModel: Model<Usuario>);
    criar(usuarioData: CreateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByUsername(username: string): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, usuarioData: Partial<UpdateUsuarioDto>): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(username: string, password: string): Promise<string>;
}
