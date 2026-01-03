/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatDto } from './cats.dto';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: {
            getAll: jest.fn(),
            getOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should call getAll service', () => {
      controller.getAll();
      expect(service.getAll).toHaveBeenCalled();
    });
  });

  describe('getOne', () => {
    it('should call getOne service', () => {
      controller.getOne('1');
      expect(service.getOne).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should call create service', () => {
      controller.create({} as any as CatDto);
      expect(service.create).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should call create service', () => {
      controller.update('1', {} as any as CatDto);
      expect(service.update).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should call remove service', () => {
      controller.remove('1');
      expect(service.remove).toHaveBeenCalled();
    });
  });
});
