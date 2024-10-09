import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'src/core/domain/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: data,
    });
  }
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: id } });
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }
  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
