import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Product } from './product.entity';
import { Order } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Order])],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
