import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DonationsModule } from './donations/donations.module';
import { ShopModule } from './shop/shop.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from '@shared/shared.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    DonationsModule,
    ShopModule,
    BlogModule,
    SharedModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
