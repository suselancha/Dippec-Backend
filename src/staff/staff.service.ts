import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StaffService extends PrismaClient implements OnModuleInit {

  async OnModuleInit() {
    await this.$connect();
  }

  create(createStaffDto: CreateStaffDto) {
    
  }

  findAll() {
    return `This action returns all staff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
