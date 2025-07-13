import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Userdto {

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly nombreCompleto: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly correo: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly contrasena: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly pais: string;
}
