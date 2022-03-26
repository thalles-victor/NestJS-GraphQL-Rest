import { Injectable } from '@nestjs/common';

import { UserInput } from './UserInputs';
import { users } from './database';

@Injectable()
export class UserService {
  async findAll() {
    return await users;
  }

  async createUser(user: UserInput) {
    await users.push(user);
    return user;
  }
}
