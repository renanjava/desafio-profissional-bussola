import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ExampleDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}