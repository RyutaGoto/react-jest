import { PointManagement } from './PointManagement';

let pointManagement: PointManagement;

beforeEach(() => {
  pointManagement = new PointManagement(100);
});

afterEach(() => {
  pointManagement.clear();
});

it('add 1', () => {
  expect(pointManagement.add(1)).toBe(101);
  expect(pointManagement.total).toBe(101);
});

it('sub 1', () => {
  expect(pointManagement.sub(1)).toBe(99);
  expect(pointManagement.total).toBe(99);
});
