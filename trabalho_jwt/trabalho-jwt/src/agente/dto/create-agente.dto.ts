// create-agente.dto.ts

import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAgenteDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly icon: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    readonly role: string;
}
