import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth/guard/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * 全域身份驗證
  app.useGlobalGuards(new AuthGuard());

  const configService = app.get(ConfigService);
  await app.listen(configService.get<string>('APP_PORT'));
}
bootstrap();
