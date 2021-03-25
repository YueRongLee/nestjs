import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UseGuards } from "@nestjs/common";

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

import { Message } from 'src/message/model/message.model';
import { MessageService } from 'src/message/service/message.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly messageService: MessageService,
  ) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    console.log(123)
    return this.userService.findUsers();
  }
}
