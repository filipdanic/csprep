import networkDelayTime from './index';

describe('networkDelayTime', () => {
  test('Problem example', () => {
    expect(networkDelayTime(
      [ [2, 1, 1],[2, 3, 1], [3, 4, 1] ], 4, 2)).toEqual(2);
  });

  test('Edge case', () => {
    expect(networkDelayTime(
      [
        [2, 1, 1], [2, 3, 1], [3, 4, 1],
        [1, 6, 200], [4, 5, 1], [5, 6, 1]
      ], 6, 2)).toEqual(4);
  });
});
