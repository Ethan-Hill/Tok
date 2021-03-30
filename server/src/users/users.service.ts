import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import bcrypt = require('bcrypt');
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async createUser(
    email: string,
    password: string,
    username: string,
  ): Promise<User> {
    const encryptedPassword: string = await bcrypt.hash(password, 10);

    return this.usersRepository.create({
      userId: uuidv4(),
      email,
      username,
      password: encryptedPassword,
      tasks: [],
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
