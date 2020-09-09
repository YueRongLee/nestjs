import { Module, forwardRef } from '@nestjs/common';
import  { TypeOrmModule } from '@nestjs/typeorm';

import { MessageResolver } from './resolver/message.resolver';
import { MessageService } from './service/message.service';
import { Message } from './model/message.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), forwardRef(() => UserModule)],
  providers: [MessageResolver, MessageService],
  exports: [TypeOrmModule, MessageService],
})
export class MessageModule {}
