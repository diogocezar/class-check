import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Teacher, Prisma } from '@prisma/client';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async teacher(
    teacherWhereUniqueInput: Prisma.TeacherWhereUniqueInput,
  ): Promise<Teacher | null> {
    return this.prisma.teacher.findUnique({
      where: teacherWhereUniqueInput,
    });
  }

  // async teachers(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.TeacherWhereUniqueInput;
  //   where?: Prisma.TeacherWhereInput;
  //   orderBy?: Prisma.TeacherOrderByWithRelationInput;
  // }): Promise<Teacher[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.teacher.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async teachers(): Promise<Teacher[]> {
    return this.prisma.teacher.findMany();
  }

  async createTeacher(data: Prisma.TeacherCreateInput): Promise<Teacher> {
    return this.prisma.teacher.create({
      data,
    });
  }

  async updateTeacher(params: {
    where: Prisma.TeacherWhereUniqueInput;
    data: Prisma.TeacherUpdateInput;
  }): Promise<Teacher> {
    const { where, data } = params;
    return this.prisma.teacher.update({
      data,
      where,
    });
  }

  async deleteTeacher(where: Prisma.TeacherWhereUniqueInput): Promise<Teacher> {
    return this.prisma.teacher.delete({
      where,
    });
  }
}
