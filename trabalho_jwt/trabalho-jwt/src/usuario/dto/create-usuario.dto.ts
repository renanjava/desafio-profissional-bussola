// create-usuario.dto.ts

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6) // Exemplo de validação de comprimento mínimo da senha
    readonly password: string;
}
