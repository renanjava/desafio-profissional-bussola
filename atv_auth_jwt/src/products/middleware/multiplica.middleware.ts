import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';
import { ValueZeroException } from '../exceptions/value-zero.exception';

@Injectable()
export class MultiplicaMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.body.value == 0)
            throw new ValueZeroException("O valor do produto é igual a zero")
        req.body.value *= 1.25;
        next();
    }
}