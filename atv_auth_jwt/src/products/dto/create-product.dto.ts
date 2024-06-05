import { IsString, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly value: number;

  @IsNumber()
  readonly quantity: number;
}
