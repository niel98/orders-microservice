import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './orders.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Orders.name,
      schema: OrdersSchema
    }])
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
