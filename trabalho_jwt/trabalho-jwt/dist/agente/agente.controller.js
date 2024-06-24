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
exports.AgenteController = void 0;
const common_1 = require("@nestjs/common");
const agente_service_1 = require("./agente.service");
const create_agente_dto_1 = require("./dto/create-agente.dto");
const update_agente_dto_1 = require("./dto/update-agente.dto");
const auth_guard_1 = require("../auth/auth.guard");
let AgenteController = class AgenteController {
    constructor(agenteService) {
        this.agenteService = agenteService;
    }
    createFromValorantApi() {
        return this.agenteService.createFromValorantApi();
    }
    create(createAgenteDto) {
        return this.agenteService.create(createAgenteDto);
    }
    findAll() {
        return this.agenteService.findAll();
    }
    findOne(id) {
        return this.agenteService.findOne(id);
    }
    update(id, updateAgenteDto) {
        return this.agenteService.update(id, updateAgenteDto);
    }
    remove(id) {
        return this.agenteService.remove(id);
    }
};
exports.AgenteController = AgenteController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/consumir-api'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgenteController.prototype, "createFromValorantApi", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agente_dto_1.CreateAgenteDto]),
    __metadata("design:returntype", void 0)
], AgenteController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgenteController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agente_dto_1.UpdateAgenteDto]),
    __metadata("design:returntype", void 0)
], AgenteController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgenteController.prototype, "remove", null);
exports.AgenteController = AgenteController = __decorate([
    (0, common_1.Controller)('agente'),
    __metadata("design:paramtypes", [agente_service_1.AgenteService])
], AgenteController);
//# sourceMappingURL=agente.controller.js.map