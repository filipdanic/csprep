import findMissingNumber from './index';

describe('findMissingNumber', () => {
  test('Missing number on left', () => {
    expect(findMissingNumber(
      [1, 2, 3, 4, 5, 6, 8, 9, 10]
    )).toEqual(7);

    expect(findMissingNumber(
      [1, 2, 3, 4, 5, 6, 7, 9]
    )).toEqual(8);
  });

  test('Missing number on right', () => {
    expect(findMissingNumber(
      [1, 3, 4, 5, 6, 7, 8, 9, 10]
    )).toEqual(2);

    expect(findMissingNumber(
      [1, 2, 4, 5, 6, 7, 8, 9]
    )).toEqual(3);
  });

  test('Missing number in middle', () => {
    expect(findMissingNumber(
      [1, 2, 3, 4, 6, 7, 8, 9, 10]
    )).toEqual(5);

    expect(findMissingNumber(
      [1, 2, 3, 4, 6, 7, 8, 9]
    )).toEqual(5);
  });
});
