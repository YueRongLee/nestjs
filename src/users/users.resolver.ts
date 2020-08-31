import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from './model/users.model';
import { Message } from '../messages/model/messages.model';

import { MessagesResolver } from '../messages/messages.resolver';

@Resolver(() => User)
export class UsersResolver {
  usersThatReallyShouldBeInADb = [
    { id: 'user001', name: 'Arron' },
    { id: 'user002', name: 'Billy' },
    { id: 'user003', name: 'Calvon' },
    { id: 'user004', name: 'Daniel' },
    { id: 'user005', name: 'Eggie' },
    { id: 'user006', name: 'Fanny' },
  ];

  @Query('users')
  getUsers(): User[] {
    return this.usersThatReallyShouldBeInADb;
  }

  @Query('user')
  user(@Args('id') id: string): User {
    const result = this.usersThatReallyShouldBeInADb.find(
      element => element.id === id,
    );

    if (!result) {
      throw new Error('User not found!');
    }
    return result;
  }

  @Mutation()
  createUser(@Args('name') name: string): User {
    const serialNum = this.usersThatReallyShouldBeInADb.length + 1;
    const id = `user00${serialNum.toString()}`;
    const newUser = { id, name };
    this.usersThatReallyShouldBeInADb.push(newUser);

    return newUser;
  }

  // Array<Message>, [Message], Message[]
  @ResolveField(() => [Message])
  messages(@Parent() user: User): Message[] {
    const messages = new MessagesResolver().messagesThatReallyShouldBeInADb;
    const find = messages.filter(message => message.userId === user.id);

    console.log(find);

    return find;
  }
}
