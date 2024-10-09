import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/core/aplication/dto/create-user.dto';
import { UserService } from 'src/core/aplication/users/user.service';
import { User } from 'src/core/domain/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  private logger = new Logger(UserController.name);
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    this.logger.error('XD');
    console.log(data);
    return this.userService.create(data);
  }
}
