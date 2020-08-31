import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Message } from '../../messages/model/messages.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field({ nullable: false })
  name: string

  @Field(() => [Message], { nullable: true } )
  messages?: [Message]
}