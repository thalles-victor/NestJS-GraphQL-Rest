import { Injectable } from '@nestjs/common';

import { UserInput } from './UserInputs';

const users = [
  {
    id: 0,
    name: 'thalles',
  },
  {
    id: 1,
    name: 'Víctor',
  },
];

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
