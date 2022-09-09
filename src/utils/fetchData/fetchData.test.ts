import { fetchData } from './fetchData';

test('the data is peanut butter', () => {
  return fetchData().then((str) => {
    expect(str).toBe('peanut butter');
  });
});
