import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Message } from '../../message/model/message.model';

@Schema()
@ObjectType()
export class User extends Document {
  // Prop --> 定義資料庫的欄位
  // Field --> 定義回傳資料的欄位
  
  @Field(() => ID)
  id: string

  @Prop()
  @Field()
  username: string

  @Prop()
  @Field()
  password: string

  @Prop()
  @Field(() => [Message])
  messages?: [Message]
}

export const UserSchema = SchemaFactory.createForClass(User);