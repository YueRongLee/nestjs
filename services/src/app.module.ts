import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const auth = `${configService.get<string>(
          'DB_ROOT_USER',
        )}:${configService.get<string>('DB_ROOT_PASS')}`;
        const host = `${configService.get<string>(
          'DB_HOST',
        )}:${configService.get<string>('DB_PORT')}`;
        const db = configService.get<string>('DB_NAME');
        const uri = `mongodb://${auth}@${host}/${db}?authSource=admin`;

        return {
          uri,
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
          // useFindAndModify: false,
        };
      },
      inject: [ConfigService],
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
    UserModule
  ],
})
export class AppModule {}
