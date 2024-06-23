"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsuarioService = class UsuarioService {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async criar(usuarioData) {
        const hashedPassword = await bcrypt.hash(usuarioData.password, 10);
        const newUsuario = new this.usuarioModel({ ...usuarioData, password: hashedPassword });
        return newUsuario.save();
    }
    async findAll() {
        return this.usuarioModel.find().exec();
    }
    async findOne(id) {
        const usuario = await this.usuarioModel.findOne({ id }).exec();
        if (!usuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return usuario;
    }
    async findByUsername(username) {
        return this.usuarioModel.findOne({ username }).exec();
    }
    async update(id, usuarioData) {
        const updatedUsuario = await this.usuarioModel.findOneAndUpdate({ id }, usuarioData, { new: true }).exec();
        if (!updatedUsuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return updatedUsuario;
    }
    async remove(id) {
        const deletedUsuario = await this.usuarioModel.findOneAndDelete({ id }).exec();
        if (!deletedUsuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return deletedUsuario;
    }
    async login(username, password) {
        const usuario = await this.findByUsername(username);
        if (!usuario) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        const isValidPassword = await bcrypt.compare(password, usuario.password);
        if (!isValidPassword) {
            throw new Error('Credenciais inválidas');
        }
        const token = jwt.sign({ username: usuario.username, id: usuario.id }, 'chave-secreta', { expiresIn: '1h' });
        return token;
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map