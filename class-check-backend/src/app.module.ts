import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TeacherService } from './teacher.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, TeacherService],
})
export class AppModule {}
