import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/core/aplication/dto/create-user.dto';
import { UpdateUserDto } from 'src/core/aplication/dto/update-user.dto';
import { UserService } from 'src/core/aplication/users/user.service';
import { User } from 'src/core/domain/user.entity';
@ApiTags('user')
@Controller({ version: '1', path: 'user' })
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: User })
  @Post()
  async createUser(data: CreateUserDto): Promise<User> {
    console.log(data);
    return this.userService.create(data);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, data);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
