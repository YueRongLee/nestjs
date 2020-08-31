import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/model/users.model';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string

  @Field({ nullable: true })
  description: string

  @Field(() => ID)
  userId: string

  @Field( () => User, { nullable: true } )
  user?: User
}