import findLengthOfLCIS from './index';

describe(('findLengthOfLCIS'), () => {
  test('Edge cases', () => {
    expect(findLengthOfLCIS([])).toEqual(0);
    expect(findLengthOfLCIS([1])).toEqual(1);
    expect(findLengthOfLCIS([1, 1])).toEqual(1);
    expect(findLengthOfLCIS([1, 2])).toEqual(2);
  });

  test('Problem examples', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toEqual(3);
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toEqual(1);
  });

  test('Additional examples', () => {
    expect(findLengthOfLCIS([1, 2, 3, 4, 1, 4, 7, 1, 2, 3, 4, 5, 6])).toEqual(6);
    expect(findLengthOfLCIS([-9, -8, -6, 0, 1, -4, -1])).toEqual(5);
  });
});
