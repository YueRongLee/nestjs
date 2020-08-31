import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false
      }
    }),
    MessagesModule,
    UsersModule
  ],
})
export class AppModule {}
