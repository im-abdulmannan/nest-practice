import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PassportLocalStrategy } from './passport.local.strategy';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [PassportLocalStrategy],
})
export class AuthModule {}
