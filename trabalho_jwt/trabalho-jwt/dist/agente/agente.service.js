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
exports.AgenteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AgenteService = class AgenteService {
    constructor(agenteModel) {
        this.agenteModel = agenteModel;
    }
    async createFromValorantApi() {
        const fetchData = await fetch('https://valorant-api.com/v1/agents');
        const jsonData = await fetchData.json();
        console.log(jsonData);
        if (!jsonData || !jsonData.data) {
            console.error('Dados inválidos');
            return;
        }
        jsonData.data.forEach(async (element) => {
            if (element &&
                element.displayName &&
                element.description &&
                element.displayIcon &&
                element.role &&
                element.role.displayName) {
                const createAgent = {
                    uuid: element.uuid,
                    name: element.displayName,
                    description: element.description,
                    icon: element.displayIcon,
                    role: element.role.displayName,
                };
                try {
                    const createdAgent = new this.agenteModel(createAgent);
                    await createdAgent.save();
                }
                catch (error) {
                    if (error.code === 11000) {
                        console.error(`Agente com a uuid ${element.uuid} já existe no banco de dados`);
                    }
                    else {
                        console.error('Error ao criar agente:', error);
                    }
                }
            }
            else {
                console.warn('Dados incompletos para o elemento:', element);
            }
        });
    }
    async create(createAgenteDto) {
        const createdProduct = new this.agenteModel(createAgenteDto);
        return await createdProduct.save();
    }
    async findAll() {
        return await this.agenteModel.find().exec();
    }
    async findOne(id) {
        return await this.agenteModel.findById(id).exec();
    }
    async update(id, updateAgenteDto) {
        await this.agenteModel.updateOne({ _id: id }, updateAgenteDto).exec();
        return this.findOne(id);
    }
    async remove(id) {
        return await this.agenteModel.deleteOne({ _id: id }).exec();
    }
};
exports.AgenteService = AgenteService;
exports.AgenteService = AgenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Agente')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AgenteService);
//# sourceMappingURL=agente.service.js.map