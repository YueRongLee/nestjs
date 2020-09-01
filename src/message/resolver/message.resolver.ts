import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Field
} from '@nestjs/graphql';

import { Message } from '../model/message.model';
import { MessageService } from '../service/message.service';
import { UserService } from 'src/user/service/user.service';
import { User } from 'src/user/model/user.model';


@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly userService: UserService
  ) {};

  @Query(() => [Message])
  messages(): Promise<Message[]> {
    return this.messageService.findMessages();
  }

  @Query(() => Message)
  message(@Args('id') id: string): Promise<Message> {
    return this.messageService.findOneMessage(id);
  }

  @Mutation(() => String)
  deleteMessage(@Args('id') id: string): Promise<string> {
    return this.messageService.deleteMessage(id);
  }

  @Mutation(() => Message)
  createMessageFromUser(
    @Args('description') description: string,
    @Args('userId') userId: string,
  ): Promise<Message> {
    // 檢查 user 存不存在
    const user: Promise<User> = this.userService.findOneUser(userId);
    
    if(!user) {
      throw new Error('User not found!');
    }

    const message = this.messageService.createMessage({ description, userId });

    return message;
  }

  @ResolveField(() => User)
  user(@Parent() message: Message): Promise<User> {
    const user = this.userService.findOneUser(message.userId);

    return user;
  }
}
