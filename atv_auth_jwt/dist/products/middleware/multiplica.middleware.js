"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplicaMiddleware = void 0;
const common_1 = require("@nestjs/common");
const value_zero_exception_1 = require("../exceptions/value-zero.exception");
let MultiplicaMiddleware = class MultiplicaMiddleware {
    use(req, res, next) {
        if (req.body.value == 0)
            throw new value_zero_exception_1.ValueZeroException("O valor do produto é igual a zero");
        req.body.value *= 1.25;
        next();
    }
};
exports.MultiplicaMiddleware = MultiplicaMiddleware;
exports.MultiplicaMiddleware = MultiplicaMiddleware = __decorate([
    (0, common_1.Injectable)()
], MultiplicaMiddleware);
//# sourceMappingURL=multiplica.middleware.js.map