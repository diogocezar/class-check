import { Module } from '@nestjs/common';

import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { PrismaService } from '../shared/prisma.service';

@Module({
  imports: [],
  controllers: [TeachersController],
  providers: [TeachersService, PrismaService],
})
export class TeachersModule {}
