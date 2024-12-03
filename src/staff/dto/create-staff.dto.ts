import { IsEmail, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateStaffDto {
    @IsNumber()
    @IsPositive()
    legajo: number;

    @IsNumber()
    @IsPositive()
    dni: number;

    @IsNumber()
    @IsPositive()
    cuil:number;

    @IsString()
    @MinLength(1)
    apellido: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    direccion?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    ubigeo_provincia?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    ubigeo_departamento?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    ubigeo_localidad?: number;

    @IsString()    
    @IsOptional()
    provincia?: string;

    @IsString()    
    @IsOptional()
    departamento?: string;

    @IsString()    
    @IsOptional()
    localidad?: string;

    @IsString()
    telefono?: string;

    @IsString()
    @IsOptional()
    celular?: string;

    @IsString()
    @IsOptional()
    @IsEmail()
    correo?: string;

    @IsString()
    @IsOptional()
    obra_social?: string;
}
