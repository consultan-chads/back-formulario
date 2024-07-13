import { IsEmail, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateBlogSect1Dto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    @IsEmail()
    email: string;

    @IsNumber()
    @IsPositive()
    telefono: number;

    @IsString()
    @MinLength(1)
    mensaje: string;



}
