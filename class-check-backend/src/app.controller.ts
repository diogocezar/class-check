import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher as TeacherModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private teacherService: TeacherService) {}

  @Post('teacher')
  async createTeacher(
    @Body() teacherData: { name: string },
  ): Promise<TeacherModel> {
    return this.teacherService.createTeacher(teacherData);
  }

  @Get('teacher')
  async getAllTeachers(): Promise<TeacherModel[]> {
    return this.teacherService.teachers();
  }
}
