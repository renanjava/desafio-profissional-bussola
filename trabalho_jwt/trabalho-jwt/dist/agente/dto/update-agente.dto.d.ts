import { CreateAgenteDto } from './create-agente.dto';
declare const UpdateAgenteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAgenteDto>>;
export declare class UpdateAgenteDto extends UpdateAgenteDto_base {
    readonly name: string;
    readonly description: string;
    readonly icon: string;
    readonly role: string;
}
export {};
