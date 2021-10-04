import { TeacherService } from './teacher.service';
import { Teacher as TeacherModel } from '@prisma/client';
export declare class TeachersController {
    private teacherService;
    constructor(teacherService: TeacherService);
    create(teacherData: {
        name: string;
    }): Promise<TeacherModel>;
    getAll(): Promise<TeacherModel[]>;
}
