import { TeacherService } from './teacher.service';
import { Teacher as TeacherModel } from '@prisma/client';
export declare class AppController {
    private teacherService;
    constructor(teacherService: TeacherService);
    createTeacher(teacherData: {
        name: string;
    }): Promise<TeacherModel>;
    getAllTeachers(): Promise<TeacherModel[]>;
}
