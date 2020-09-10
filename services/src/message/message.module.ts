import { Module, forwardRef } from '@nestjs/common';
import  { TypeOrmModule } from '@nestjs/typeorm';

import { MessageResolver } from './resolver/message.resolver';
import { MessageService } from './service/message.service';
import { Message } from './model/message.model';
import { UserModule } from 'src/user/user.module';

// * 若別的模組 import Message模組，想使用 Message 模組封裝的service function
// * 需要在 Message 模組 export Message servie
@Module({
  imports: [TypeOrmModule.forFeature([Message]), forwardRef(() => UserModule)],
  providers: [MessageResolver, MessageService],
  exports: [TypeOrmModule, MessageService],
})
export class MessageModule {}
