import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly value: number;

  @IsOptional()
  @IsNumber()
  readonly quantity: number;
}

