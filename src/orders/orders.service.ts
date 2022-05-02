import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orders, OrdersDocument } from './orders.model';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Orders.name) private readonly ordersModel: Model<OrdersDocument>
    )
    {}

    async handleCreateOrder(data: any) {
        try {
            //Check if the product exist

            return await this.ordersModel.create({...data,
            isPaid: false,
            createdAt: new Date(),
            updatedAt: new Date() 
            });
            
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleGetOrders() {
        try {

            return await this.ordersModel.find();
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleUpdateOrder(data: any) {
        try {

            const order = await this.ordersModel.findOne({ _id: data.id })
            if (!order) throw new Error('Order does not exist')

            return this.ordersModel.findOneAndUpdate({ _id: data.id }, { $set: { qty: data.qty, amount: data.amount }});
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleDeleteOrder(id: string) {
        try {

            const order = await this.ordersModel.findOne({ _id: id })
            if (!order) throw new Error('Order does not exist')

            return this.ordersModel.findOneAndDelete({ _id: id });
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }
}
