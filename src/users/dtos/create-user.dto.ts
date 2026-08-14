import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Camila Ruiz' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'camila@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'clave12345' })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

    @ApiProperty({ example: 'algún valor', required: false })
  @IsString()
  @IsOptional()
  prueba1?: string;

  @ApiProperty({ example: 'otro valor', required: false })
  @IsString()
  @IsOptional()
  prueba2?: string;

    @ApiProperty({ example: 'otro valor', required: false })
  @IsString()
  @IsOptional()
  prueba3?: string;

}