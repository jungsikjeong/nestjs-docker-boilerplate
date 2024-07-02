import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { JwtAccessStrategies } from './strategies/jwt-access.strategies';

@Module({
  imports: [
    JwtModule.register({}), //
    UsersModule,
  ],

  providers: [
    JwtAccessStrategies,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}
