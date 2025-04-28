import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Donation } from '@prisma/client';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  async create(@Body() data: { amount: number; userId: number }): Promise<Donation> {
    return this.donationsService.createDonation(data);
  }

  @Get()
  async findAll(): Promise<Donation[]> {
    return this.donationsService.getDonations();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Donation> {
    return this.donationsService.getDonationById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: { amount?: number; userId?: number }): Promise<Donation> {
    return this.donationsService.updateDonation(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Donation> {
    return this.donationsService.deleteDonation(id);
  }

  @Post('process-payment')
  async processPayment(@Body() data: { amount: number; userId: number }): Promise<{ status: string }> {
    // Implement payment processing logic here
    return { status: 'Payment processed successfully' };
  }
}
