import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Product, Order } from '@prisma/client';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('products')
  async createProduct(@Body() data: { name: string; price: number }): Promise<Product> {
    return this.shopService.createProduct(data);
  }

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return this.shopService.getProducts();
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number): Promise<Product> {
    return this.shopService.getProductById(id);
  }

  @Put('products/:id')
  async updateProduct(@Param('id') id: number, @Body() data: { name?: string; price?: number }): Promise<Product> {
    return this.shopService.updateProduct(id, data);
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: number): Promise<Product> {
    return this.shopService.deleteProduct(id);
  }

  @Post('orders')
  async createOrder(@Body() data: { userId: number; productId: number; quantity: number; totalPrice: number }): Promise<Order> {
    return this.shopService.createOrder(data);
  }

  @Get('orders')
  async getOrders(): Promise<Order[]> {
    return this.shopService.getOrders();
  }

  @Get('orders/:id')
  async getOrderById(@Param('id') id: number): Promise<Order> {
    return this.shopService.getOrderById(id);
  }

  @Put('orders/:id')
  async updateOrder(@Param('id') id: number, @Body() data: { userId?: number; productId?: number; quantity?: number; totalPrice?: number }): Promise<Order> {
    return this.shopService.updateOrder(id, data);
  }

  @Delete('orders/:id')
  async deleteOrder(@Param('id') id: number): Promise<Order> {
    return this.shopService.deleteOrder(id);
  }
}
