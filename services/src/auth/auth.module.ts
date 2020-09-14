import { Module, forwardRef } from '@nestjs/common';

import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './resolver/auth.resolver';

@Module({
  imports: [PassportModule, forwardRef(() => UserModule)],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
