import { PointManagement } from './PointManagement';

let pointManagement: PointManagement;

beforeAll(() => {
  pointManagement = new PointManagement(100);
});

afterAll(() => {
  pointManagement.clear();
});

it('add 1', () => {
  expect(pointManagement.add(1)).toBe(101);
  expect(pointManagement.total).toBe(101);
});

it('sub 1', () => {
  expect(pointManagement.sub(1)).toBe(100);
  expect(pointManagement.total).toBe(100);
});
