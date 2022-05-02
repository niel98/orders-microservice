import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateOrderDto {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    productId: any

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNumber()
    @IsNotEmpty()
    qty: number

}