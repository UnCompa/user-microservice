import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/core/application/dto/create-user.dto';
import { UpdateUserDto } from 'src/core/application/dto/update-user.dto';
import { UserService } from 'src/core/application/users/user.service';
import { User } from 'src/core/domain/user.entity';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    example: {
      message: 'Usuario creado correctamente',
    },
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiCreatedResponse({
    status: 201,
    description: 'The record has been successfully created.',
    example: {
      message: 'Usuario creado correctamente',
    },
  })
  @Post('1.0')
  @HttpCode(201)
  async createUser(@Body() data: CreateUserDto): Promise<object> {
    return this.userService.create(data);
  }
  @Get('1.0')
  async getAllUsers(@Query() params): Promise<User[]> {
    const { limit } = params;
    return this.userService.findAll(limit);
  }

  @Get('1.0/:id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put('1.0/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, data);
  }

  @Delete('1.0/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
