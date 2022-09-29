import { Users } from './Users';
import axios from '../utils/axios';

jest.mock('../utils/axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  mockAxios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
