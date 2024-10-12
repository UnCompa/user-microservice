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
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/core/application/dto/create-user.dto';
import { UpdateUserDto } from 'src/core/application/dto/update-user.dto';
import { UserService } from 'src/core/application/users/user.service';
import { User } from 'src/core/domain/user.entity';
import { apiStatus } from 'src/shared/api/apiStatus';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: apiStatus.create.httpcode,
    description: apiStatus.create.message,
    example: apiStatus.create.example,
  })
  @ApiResponse({
    status: apiStatus.internalServerError.httpcode,
    description: apiStatus.internalServerError.message,
    example: apiStatus.internalServerError.example,
  })
  @ApiCreatedResponse({
    status: apiStatus.ok.httpcode,
    description: apiStatus.ok.message,
    example: {
      message: 'Usuario creado correctamente',
    },
    type: apiStatus.ok.type,
  })
  @Post('1.0')
  @HttpCode(201)
  async createUser(@Body() data: CreateUserDto): Promise<object> {
    return this.userService.create(data);
  }

  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit number of users',
  })
  @ApiResponse({
    status: apiStatus.ok.httpcode,
    description: apiStatus.ok.message,
    example: apiStatus.ok.example,
  })
  @ApiResponse({
    status: apiStatus.noContent.httpcode,
    description: apiStatus.noContent.message,
    example: apiStatus.noContent.example,
  })
  @ApiResponse({
    status: apiStatus.internalServerError.httpcode,
    description: apiStatus.internalServerError.message,
    example: apiStatus.internalServerError.example,
  })
  @Get('1.0')
  async getAllUsers(@Query() params): Promise<User[]> {
    const { limit } = params;
    return this.userService.findAll(limit);
  }

  @ApiParam({ name: 'id', required: true, description: 'User ID' })
  @ApiResponse({
    status: apiStatus.ok.httpcode,
    description: apiStatus.ok.message,
    example: apiStatus.ok.example,
  })
  @ApiResponse({
    status: apiStatus.notFound.httpcode,
    description: apiStatus.notFound.message,
    example: apiStatus.notFound.example,
  })
  @ApiResponse({
    status: apiStatus.internalServerError.httpcode,
    description: apiStatus.internalServerError.message,
    example: apiStatus.internalServerError.example,
  })
  @Get('1.0/:id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true, description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: apiStatus.ok.httpcode,
    description: apiStatus.ok.message,
    example: apiStatus.ok.example,
  })
  @ApiResponse({
    status: apiStatus.notFound.httpcode,
    description: apiStatus.notFound.message,
    example: apiStatus.notFound.example,
  })
  @ApiResponse({
    status: apiStatus.internalServerError.httpcode,
    description: apiStatus.internalServerError.message,
    example: apiStatus.internalServerError.example,
  })
  @Put('1.0/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, data);
  }

  @ApiParam({ name: 'id', required: true, description: 'User ID' })
  @ApiResponse({
    status: apiStatus.ok.httpcode,
    description: apiStatus.ok.message,
    example: apiStatus.ok.example,
  })
  @ApiResponse({
    status: apiStatus.notFound.httpcode,
    description: apiStatus.notFound.message,
    example: apiStatus.notFound.example,
  })
  @ApiResponse({
    status: apiStatus.internalServerError.httpcode,
    description: apiStatus.internalServerError.message,
    example: apiStatus.internalServerError.example,
  })
  @Delete('1.0/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
