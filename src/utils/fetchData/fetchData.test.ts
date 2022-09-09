import { fetchData } from './fetchData';

test('the data is peanut butter', async () => {
  const str = await fetchData();
  expect(str).toBe('peanut butter');
});
