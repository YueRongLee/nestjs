import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageResolver } from './resolver/message.resolver';
import { MessageService } from './service/message.service';
import { Message, MessageSchema } from './model/message.model';
import { UserModule } from 'src/user/user.module';

// * 若別的模組 import Message模組，想使用 Message 模組封裝的service function
// * 需要在 Message 模組 export Message servie
@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]), forwardRef(() => UserModule)],
  providers: [MessageResolver, MessageService],
  exports: [MessageService],
})
export class MessageModule { }
