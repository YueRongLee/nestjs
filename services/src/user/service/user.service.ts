import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from "../model/user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findUsers(criteria? : object): Promise<User[]> {
    const results: User[] = await this.userRepository.find(criteria);

    return results;
  }
  
  async findOneUser(id?: string, criteria?: object): Promise<User> {
    let result: User;
    if(id) {
      result = await this.userRepository.findOne(id);
    } else {
      result = await this.userRepository.findOne(criteria);
    }

    if(!result) {
      throw new Error('User not found!');
    }

    return result;
  }

  async createUser(username: string, password: string): Promise<User> {
    const result: User = await this.userRepository.save({ username, password });

    return result;
  }
}