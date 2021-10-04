import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [TeachersModule, ConfigModule.forRoot()],
})
export class AppModule {}
