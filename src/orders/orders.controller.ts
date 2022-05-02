import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDto } from './dtos/createOrderDto.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private service: OrdersService
    )
    {}

    @MessagePattern({ cmd: 'create-order' })
    createOrder(data: CreateOrderDto) {
        return this.service.handleCreateOrder(data);
    }

    @MessagePattern({ cmd: 'get-orders' })
    getOrders() {
        return this.service.handleGetOrders();
    }

    @MessagePattern({ cmd: 'update-order' })
    updateOrder(data: UpdateOrderDto) {
        return this.service.handleUpdateOrder(data);
    }

    @MessagePattern({ cmd: 'delete-order' })
    deleteOrder(id: string) {
        return this.service.handleDeleteOrder(id);
    }
}
