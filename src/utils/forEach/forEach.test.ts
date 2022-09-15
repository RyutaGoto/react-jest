import { forEach } from './forEach';

describe('forEach', () => {
  let mockCallback: jest.Mock<any, any>;

  beforeEach(() => {
    mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);
  });

  test('call length', () => {
    // mockCallbackはちょうど2回だけ呼ばれたことをチェックする
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test('first argument of the first call', () => {
    // mockCallback関数の1回目の呼び出しの1番目の引数は'0'であることをチェックする
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test('first argument of the second call', () => {
    // mockCallback関数の2回目の呼び出しの1番目の引数は'1'であることをチェックする
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  test('return value of the first call', () => {
    // mockCallback関数の1回目の呼び出しの返り値は'42'であることをチェックする
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
