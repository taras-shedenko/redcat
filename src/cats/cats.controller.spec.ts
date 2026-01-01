import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should return appropriate message', () => {
      const res = controller.getAll({ limit: 1 });
      expect(res).toEqual('This action returns all cats (limit: 1 items)');
    });
  });

  describe('getOne', () => {
    it('should return appropriate message', () => {
      const res = controller.getOne('1');
      expect(res).toEqual('This action returns a #1 cat');
    });
  });

  describe('create', () => {
    it('should return appropriate message', () => {
      const res = controller.create({ name: '', age: 0, breed: '' });
      expect(res).toEqual('This action adds a new cat');
    });
  });

  describe('update', () => {
    it('should return appropriate message', () => {
      const res = controller.update('1', { name: '', age: 0, breed: '' });
      expect(res).toEqual('This action updates a #1 cat');
    });
  });

  describe('remove', () => {
    it('should return appropriate message', () => {
      const res = controller.remove('1');
      expect(res).toEqual('This action removes a #1 cat');
    });
  });
});
