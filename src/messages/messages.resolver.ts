import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Message } from './model/messages.model';
import { User } from '../users/model/users.model';
import { UsersResolver } from '../users/users.resolver';

@Resolver(() => Message)
export class MessagesResolver {
  messagesThatReallyShouldBeInADb = [
    { id: '0', description: 'This is first description', userId: 'user001' },
    { id: '1', description: 'This is second description', userId: 'user002' },
    { id: '2', description: 'This is third description', userId: 'user003' },
    { id: '3', description: 'This is fourth description', userId: 'user004' },
    { id: '4', description: 'This is fifth description', userId: 'user005' },
    { id: '5', description: 'This is sixth description', userId: 'user006' },
  ];

  @Query('messages')
  getMessages(): Message[] {
    return this.messagesThatReallyShouldBeInADb;
  }

  @Query('message')
  message(@Args('id') id: string): Message {
    const result = this.messagesThatReallyShouldBeInADb.find(
      element => element.id === id,
    );
    if (!result) {
      throw new Error('Message not found!');
    }
    return result;
  }

  @Mutation()
  deleteMessage(@Args('id') id: string): Message {
    const index = this.messagesThatReallyShouldBeInADb.findIndex(element => {
      return element.id === id;
    });
    if (index === -1) {
      throw new Error('Message not found!');
    }
    const deleteElement = this.messagesThatReallyShouldBeInADb[index];
    this.messagesThatReallyShouldBeInADb.splice(index, 1);

    return deleteElement;
  }

  @Mutation()
  createMessageFromUser(
    @Args('description') description: string,
    @Args('userId') userId: string,
  ): Message {
    // 檢查 user 存不存在
    const users = new UsersResolver().usersThatReallyShouldBeInADb;
    const find = users.find(user => user.id === userId);

    if (!find) {
      throw new Error('User not found!');
    }

    const id = this.messagesThatReallyShouldBeInADb.length.toString();
    const newMessage = { id, description, userId };
    this.messagesThatReallyShouldBeInADb.push(newMessage);

    return newMessage;
  }

  @ResolveField(() => User)
  user(@Parent() message: Message): User {
    const users = new UsersResolver().usersThatReallyShouldBeInADb;
    const find = users.find(user => user.id === message.userId);
    return find;
  }
}
