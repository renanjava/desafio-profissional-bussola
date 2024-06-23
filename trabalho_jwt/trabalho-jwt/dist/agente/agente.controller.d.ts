import { AgenteService } from './agente.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
export declare class AgenteController {
    private readonly agenteService;
    constructor(agenteService: AgenteService);
    createFromValorantApi(): Promise<void>;
    create(createAgenteDto: CreateAgenteDto): Promise<import("mongoose").Document<unknown, {}, import("./agente").Agente> & import("./agente").Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./agente").Agente> & import("./agente").Agente & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./agente").Agente> & import("./agente").Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAgenteDto: UpdateAgenteDto): Promise<import("mongoose").Document<unknown, {}, import("./agente").Agente> & import("./agente").Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<any>;
}
