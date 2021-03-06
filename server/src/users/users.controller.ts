import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { Error } from './schemas/error.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const checkedEmail = await this.usersService.getUserByEmail(
      createUserDto.email,
    );

    if (checkedEmail) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Email already exists',
          error: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.username,
      createUserDto.password,
    );
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<User | Error> {
    const checkedUser = await this.usersService.loginUser(
      loginUserDto.email,
      loginUserDto.password,
    );

    if (!checkedUser) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          message: 'Email or password incorrect',
          error: 'Unauthorized',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return checkedUser;
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}
