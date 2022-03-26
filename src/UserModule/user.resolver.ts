import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from './user.model';
import { UserService } from './user.service';
import { UserInput } from './UserInputs';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers() {
    return await this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('data') input: UserInput): Promise<User> {
    return this.userService.createUser(input);
  }
}
