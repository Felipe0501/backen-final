import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OpinionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsNotEmpty()
     readonly nombre: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    @IsNotEmpty()
    readonly correo: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsNotEmpty()
    readonly destino: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsNotEmpty()
    readonly experiencia: string;
    
}
