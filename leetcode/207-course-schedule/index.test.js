import canFinish from './index';

describe('canFinish', () => {
  test('Problem examples', () => {
    expect(canFinish(2, [[ 1, 0 ]])).toBe(true);
    expect(canFinish(2, [[ 1, 0 ], [ 0, 1 ]])).toBe(false);
  });

  test('Example #1 from notes.md', () => {
    expect(canFinish(6, [ [1, 0], [2, 1], [3, 1], [4, 3], [5, 3] ])).toBe(true);
  });

  test('Example #2 from notes.md', () => {
    expect(canFinish(6, [ [1, 0], [2, 1], [3, 1], [4, 3], [5, 3], [0, 5] ])).toBe(false);
  });
});
