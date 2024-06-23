import { Model } from 'mongoose';
import { Agente } from './agente';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
export declare class AgenteService {
    private readonly agenteModel;
    constructor(agenteModel: Model<Agente>);
    createFromValorantApi(): Promise<void>;
    create(createAgenteDto: CreateAgenteDto): Promise<import("mongoose").Document<unknown, {}, Agente> & Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Agente> & Agente & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Agente> & Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAgenteDto: UpdateAgenteDto): Promise<import("mongoose").Document<unknown, {}, Agente> & Agente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<any>;
}
