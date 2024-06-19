"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenteModule = void 0;
const common_1 = require("@nestjs/common");
const agente_service_1 = require("./agente.service");
const agente_controller_1 = require("./agente.controller");
const agente_entity_1 = require("./entities/agente.entity");
const mongoose_1 = require("@nestjs/mongoose");
let AgenteModule = class AgenteModule {
};
exports.AgenteModule = AgenteModule;
exports.AgenteModule = AgenteModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Agente', schema: agente_entity_1.AgenteSchema }])],
        controllers: [agente_controller_1.AgenteController],
        providers: [agente_service_1.AgenteService],
    })
], AgenteModule);
//# sourceMappingURL=agente.module.js.map