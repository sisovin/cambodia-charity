import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { Product, Order } from '@prisma/client';

@Injectable()
export class ShopService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: { name: string; price: number }): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async updateProduct(id: number, data: { name?: string; price?: number }): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async createOrder(data: { userId: number; productId: number; quantity: number; totalPrice: number }): Promise<Order> {
    return this.prisma.order.create({
      data,
    });
  }

  async getOrders(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async getOrderById(id: number): Promise<Order> {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  async updateOrder(id: number, data: { userId?: number; productId?: number; quantity?: number; totalPrice?: number }): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data,
    });
  }

  async deleteOrder(id: number): Promise<Order> {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
