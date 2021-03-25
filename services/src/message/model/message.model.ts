import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from '../../user/model/user.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Message extends Document  {
  // Prop --> 定義資料庫的欄位
  // Field --> 定義回傳資料的欄位
  
  @Field(() => ID)
  id: string

  @Prop()
  @Field()
  description: string

  @Prop()
  @Field()
  userId: string

  @Prop()
  @Field(() => User)
  user?: User
}

export const MessageSchema = SchemaFactory.createForClass(Message);