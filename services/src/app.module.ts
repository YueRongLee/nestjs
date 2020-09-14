import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { Message } from './message/model/message.model';
import { User } from './user/model/user.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        database: configService.get<string>('DB_NAME'),
        username: configService.get<string>('DB_ROOT_USER'),
        password: configService.get<string>('DB_ROOT_PASS'),
        entities: [Message, User],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'schema.gql',
      resolverValidationOptions: {
        requireResolversForResolveType: false
      },
      context: ({ req }) => ({ headers: req.headers })
    }),
    MessageModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule {}
