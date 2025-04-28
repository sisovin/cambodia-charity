import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { Donation } from '@prisma/client';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDonation(data: { amount: number; userId: number }): Promise<Donation> {
    return this.prisma.donation.create({
      data,
    });
  }

  async getDonations(): Promise<Donation[]> {
    return this.prisma.donation.findMany();
  }

  async getDonationById(id: number): Promise<Donation> {
    return this.prisma.donation.findUnique({
      where: { id },
    });
  }

  async updateDonation(id: number, data: { amount?: number; userId?: number }): Promise<Donation> {
    return this.prisma.donation.update({
      where: { id },
      data,
    });
  }

  async deleteDonation(id: number): Promise<Donation> {
    return this.prisma.donation.delete({
      where: { id },
    });
  }
}
