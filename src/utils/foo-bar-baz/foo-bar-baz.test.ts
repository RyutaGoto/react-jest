import defaultExport, { bar, foo } from './foo-bar-baz';

jest.mock('./foo-bar-baz', () => {
  const originalModule = jest.requireActual('./foo-bar-baz');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(),
    foo: 'mocked foo',
  };
});

const mockFooBarBaz = defaultExport as jest.MockedFunction<typeof defaultExport>;

test('should do a partial mock', () => {
  mockFooBarBaz.mockImplementation(() => 'mocked baz');
  const defaultExportResult = mockFooBarBaz();
  expect(defaultExportResult).toEqual('mocked baz');
  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
