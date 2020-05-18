import searchRange from './index';

describe('searchRange', () => {
  test('Problem example 1', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });

  test('Problem example 2', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });

  test('Single element', () => {
    expect(searchRange([1, 1, 6, 1, 1], 6)).toEqual([2, 2]);
    expect(searchRange([1, 6, 1, 1], 6)).toEqual([1, 1]);
  });

  test('Long streak', () => {
    expect(searchRange([1, 1, 6, 6, 6], 6)).toEqual([2, 4]);
    expect(searchRange([1, 6, 6, 6, 6], 6)).toEqual([1, 4]);
    expect(searchRange([1, 1, 6, 6, 6, 6], 6)).toEqual([2, 5]);
  });
});
