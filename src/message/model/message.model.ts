import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/model/user.model';


@ObjectType()
@Entity()
export class Message {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field({ nullable: true })
  @Column('text')
  description: string

  @Field(() => ID)
  @Column()
  userId: string

  @Field( () => User, { nullable: true })
  user?: User
}