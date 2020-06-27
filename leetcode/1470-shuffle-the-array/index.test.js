import shuffle from './index';

describe('shuffle', () => {
  test('Example #1', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
  });

  test('Example #2', () => {
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  test('Example #3', () => {
    expect(shuffle([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2]);
  });

  test('Edge case, n = 1', () => {
    expect(shuffle([1, 2], 1)).toEqual([1, 2]);
  });

  test('Extra test case', () => {
    expect(shuffle([
      1, 2, 3, 4, 5, 6,
      -1, -2, -3, -4, -5, -6
    ], 6)).toEqual([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]);
  });
});
