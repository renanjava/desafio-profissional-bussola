"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueZeroException = void 0;
const common_1 = require("@nestjs/common");
class ValueZeroException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ValueZeroException = ValueZeroException;
//# sourceMappingURL=value-zero.exception.js.map