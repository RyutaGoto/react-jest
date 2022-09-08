import { eightNumber } from './eightNumber';

test('eightNumber', () => {
  expect(eightNumber()).toMatch(/[0-9]{8}/);
});
