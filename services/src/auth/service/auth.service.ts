import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createToken(username: string, password: string): Promise<any> {
    return jwt.sign({ username, password }, 'secret');
  }

  // async ifUserExist(username: string, password: string): Promise<any> {
  //   const user = await this.userService.findOneUser(undefined, { username, password }, true);

  //   if(user && user.password === password) {
  //     return user;
  //   }
  //   return null;
  // }
}
