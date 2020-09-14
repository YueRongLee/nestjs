import { Resolver, Query, Mutation, Args, Context } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthService } from "../service/auth.service";
import { User } from "src/user/model/user.model";
import { AuthGuard } from "../guard/auth.guard";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  
  @Query(() => User)
  @UseGuards(new AuthGuard())
  me(@Context('user')user: User) {
    return user;
  }

  @Mutation(() => String)
  async login(@Args('username') username: string, @Args('password') password: string): Promise<any> {
    const user = await this.authService.ifUserExist(username, password);

    if(!user) {
      throw new Error('User not found!');
    }
    return this.authService.createToken(username, password);
  }
}