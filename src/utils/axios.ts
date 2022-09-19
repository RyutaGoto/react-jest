export default {
  get: (path: string) => Promise.resolve({ data: [{ name: 'axios user data' }] }),
};
