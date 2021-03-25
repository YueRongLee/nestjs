import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserResolver } from './resolver/user.resolver';
import { UserService } from './service/user.service';
import { User, UserSchema } from './model/user.model';
import { MessageModule } from 'src/message/message.module';

// * 若多模組 互相依賴，需要互相引入，則需要使用 forwardRef 的方式
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), forwardRef(() => MessageModule)],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule { }
