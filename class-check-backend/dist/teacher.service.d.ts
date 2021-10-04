import { PrismaService } from './prisma.service';
import { Teacher, Prisma } from '@prisma/client';
export declare class TeacherService {
    private prisma;
    constructor(prisma: PrismaService);
    teacher(teacherWhereUniqueInput: Prisma.TeacherWhereUniqueInput): Promise<Teacher | null>;
    teachers(): Promise<Teacher[]>;
    createTeacher(data: Prisma.TeacherCreateInput): Promise<Teacher>;
    updateTeacher(params: {
        where: Prisma.TeacherWhereUniqueInput;
        data: Prisma.TeacherUpdateInput;
    }): Promise<Teacher>;
    deleteTeacher(where: Prisma.TeacherWhereUniqueInput): Promise<Teacher>;
}
