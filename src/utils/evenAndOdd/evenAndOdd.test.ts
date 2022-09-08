import { evenAndOdd } from './evenAndOdd';

test('numList width even or odd', () => {
  const numList = [0, 1, 2];
  expect(evenAndOdd(numList)).toStrictEqual([
    { num: 0, isEven: true },
    { num: 1, isEven: false },
    { num: 2, isEven: true },
  ]);
});
