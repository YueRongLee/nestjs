import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

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
    return this.userService.findUsers();
  }

  @Query(() => User)
  user(@Args('id') id: string): Promise<User> {
    return this.userService.findOneUser(id);
  }

  @Mutation(() => User)
  createUser(@Args('name') name: string): Promise<User> {
    return this.userService.createUser(name);
  }

  // Array<Message>, [Message], Message[] 有何不同或限制
  @ResolveField(() => [Message])
  messages(@Parent() user: User): Promise<Message[]> {
    const messages = this.messageService.findMessages({ userId: user.id });

    return messages;
  }
}
