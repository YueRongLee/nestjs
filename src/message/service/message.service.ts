import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Message } from '../model/message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findMessages(criteria?: object): Promise<Message[]> {
    const results: Message[] = await this.messageRepository.find(criteria);

    return results;
  }

  async findOneMessage(id: string): Promise<Message> {
    const result: Message = await this.messageRepository.findOne(id);

    if (!result) {
      throw new Error('Message not found!');
    }

    return result;
  }

  async deleteMessage(id: string): Promise<string> {
    let string: string;

    // 問題: delete 不管 db 存不存在 都會執行，並且 好像無法返回 delete 成功的該筆資料

    // 只能先確認傳入的id 是否存在db，存在才執行 delete，不存在 throw error
    const result: Message = await this.messageRepository.findOne(id);

    if (!result) {
      throw new Error('Message not found!');
    } else {
      await this.messageRepository.delete(id).then(() => {
        string = `Message(id: ${result.id}) has been deleted.`;
      });

      return string;
    }
  }

  async createMessage(criteria: object): Promise<Message> {
    const result: Message = await this.messageRepository.save(criteria);

    return result;
  }
}
