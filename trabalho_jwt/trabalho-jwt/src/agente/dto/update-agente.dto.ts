// update-agente.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateAgenteDto } from './create-agente.dto';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class UpdateAgenteDto extends PartialType(CreateAgenteDto) {
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
    @Length(3, 50) // Exemplo de validação de comprimento mínimo e máximo
    readonly role: string;
}
