import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user/user.controller';
import { UserService } from 'src/core/aplication/users/user.service';
import { PrismaService } from 'src/core/aplication/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
