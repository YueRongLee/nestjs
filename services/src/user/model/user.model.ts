import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Message } from '../../message/model/message.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field({ nullable: false })
  @Column()
  username: string

  @Field({ nullable: false })
  @Column()
  password: string

  @Field(() => [Message], { nullable: true } )
  messages?: [Message]
}