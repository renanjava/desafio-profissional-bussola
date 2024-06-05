import { HttpException } from '@nestjs/common';
export declare class ValueZeroException extends HttpException {
    constructor(message: string);
}
