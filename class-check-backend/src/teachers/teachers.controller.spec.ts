import { Test, TestingModule } from '@nestjs/testing';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { PrismaService } from '../shared/prisma.service';

describe('TeachersController', () => {
  let teachersController: TeachersController;

  const mockGetAllResult = { foo: 'bar' };
  const mockCreateResult = { foo: 'bar' };

  const mockTeachersService = {
    getAll: jest.fn(() => mockGetAllResult),
    create: jest.fn(() => mockCreateResult),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeachersController],
      providers: [TeachersService, PrismaService],
    })
      .overrideProvider(TeachersService)
      .useFactory({ factory: () => mockTeachersService })
      .compile();

    teachersController = app.get<TeachersController>(TeachersController);
  });

  describe('getAll', () => {
    it('should get a list of teachers"', async () => {
      const result = await teachersController.getAll();
      expect(result).toBe(mockGetAllResult);
    });
  });

  describe('create', () => {
    it('should create a teacher"', async () => {
      const body = {
        name: 'bar',
      };
      const result = await teachersController.create(body);
      expect(result).toBe(mockCreateResult);
    });
  });
});
