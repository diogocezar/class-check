import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';
import { Teacher, Prisma } from '@prisma/client';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  async getOne(
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

  async getAll(): Promise<Teacher[]> {
    return this.prisma.teacher.findMany();
  }

  async create(data: Prisma.TeacherCreateInput): Promise<Teacher> {
    return this.prisma.teacher.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.TeacherWhereUniqueInput;
    data: Prisma.TeacherUpdateInput;
  }): Promise<Teacher> {
    const { where, data } = params;
    return this.prisma.teacher.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.TeacherWhereUniqueInput): Promise<Teacher> {
    return this.prisma.teacher.delete({
      where,
    });
  }
}
