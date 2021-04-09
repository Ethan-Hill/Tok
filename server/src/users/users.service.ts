import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import bcrypt = require('bcrypt');
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { Error } from './schemas/error.schema';
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

  async loginUser(email: string, password: string): Promise<User | Error> {
    const user = await this.usersRepository.findOne({ email });

    if (user) {
      const cmp = await bcrypt.compare(password, user.password);
      console.log(cmp);

      if (cmp) {
        return user;
      } else {
        return { message: 'Wrong email or password' };
      }
    } else {
      return { message: 'Wrong email or password' };
    }
  }

  async createUser(
    email: string,
    username: string,
    password: string,
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
