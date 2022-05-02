import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrdersDocument = Orders & Document;

@Schema()
export class Orders {
    @Prop()
    productId: string

    @Prop()
    qty: number

    @Prop()
    amount: number

    @Prop()
    isPaid: boolean

    @Prop()
    createdAt: Date
    
    @Prop()
    updatedAt: Date
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);