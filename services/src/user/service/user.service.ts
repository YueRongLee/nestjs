import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from "../model/user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async findUsers(criteria? : object): Promise<User[]> {
    const results = await this.userModel.find(criteria).exec();
    console.log(results)
    return results;
  }
  
  // async findOneUser(id?: string, criteria?: object, login?: boolean): Promise<User> {
  //   let result: User;

  //   if(id) {
  //     result = await this.userRepository.findOne(id);
  //   } else {
  //     result = await this.userRepository.findOne(criteria);
  //   }

  //   if(!result && !login) {
  //     throw new Error('User not found!');
  //   }

  //   return result;
  // }

  // async createUser(username: string, password: string): Promise<User> {
  //   const result: User = await this.userRepository.save({ username, password });

  //   return result;
  // }
}