import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { Message } from './message/model/message.model';
import { User } from './user/model/user.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'test',
      entities: [Message, User],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'schema.gql',
      resolverValidationOptions: {
        requireResolversForResolveType: false
      }
    }),
    MessageModule,
    UserModule
  ],
})
export class AppModule {}
