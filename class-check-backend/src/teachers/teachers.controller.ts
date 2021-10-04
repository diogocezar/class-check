import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher as TeacherModel } from '@prisma/client';

@Controller()
export class TeachersController {
  constructor(private teacherService: TeachersService) {}

  @Post('teachers')
  async create(@Body() teacherData: { name: string }): Promise<TeacherModel> {
    return this.teacherService.create(teacherData);
  }

  @Get('teachers')
  async getAll(): Promise<TeacherModel[]> {
    return this.teacherService.getAll();
  }
}
