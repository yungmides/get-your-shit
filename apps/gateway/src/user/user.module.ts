import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  imports: [],
  controllers: [],
  exports: [UserService],
})
export class UserModule {}
