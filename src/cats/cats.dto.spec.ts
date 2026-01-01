import { CreateCatDto, UpdateCatDto, ListAllEntities } from './cats.dto';

describe('CreateCatDto', () => {
  it('should be defined', () => {
    expect(new CreateCatDto()).toBeDefined();
  });
});

describe('UpdateCatDto', () => {
  it('should be defined', () => {
    expect(new UpdateCatDto()).toBeDefined();
  });
});

describe('ListAllEntitiesDto', () => {
  it('should be defined', () => {
    expect(new ListAllEntities()).toBeDefined();
  });
});
