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

import { AuthGuard } from "../../auth/guard/auth.guard";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly messageService: MessageService,
  ) {}

  @Query(() => [User])
  @UseGuards(new AuthGuard())
  users(): Promise<User[]> {
    return this.userService.findUsers();
  }

  // * 接收使用者輸入 的參數若可為空，須在 @Args()裡面加上 nullable: true
  // * 直接在參數上 ? 無效， ex: username?: string
  @Query(() => User)
  @UseGuards(new AuthGuard())
  user(
    @Args('id', { nullable: true }) id: string,
    @Args('username', { nullable: true }) username: string,
  ): Promise<User> {
    return this.userService.findOneUser(id, { username });
  }

  @Mutation(() => User)
  @UseGuards(new AuthGuard())
  createUser(@Args('username') username: string, @Args('password') password: string): Promise<User> {
    return this.userService.createUser(username, password);
  }

  // Array<Message>, [Message], Message[] 有何不同或限制
  // * 網路上說都可以使用，但可能有些 tslint 會限制寫法，所以報錯
  @ResolveField(() => [Message])
  messages(@Parent() user: User): Promise<Message[]> {
    const messages = this.messageService.findMessages({ userId: user.id });

    return messages;
  }
}
