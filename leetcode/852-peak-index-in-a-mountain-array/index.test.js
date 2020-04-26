import peakIndexInMountainArray from './index';

describe('peakIndexInMountainArray', () => {

  test('Examples from problem description', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toEqual(1);
    expect(peakIndexInMountainArray([0, 1, 2, 0])).toEqual(2);
  });

  test('Even lengths of input', () => {
    expect(peakIndexInMountainArray([0, 1, 5, 3, 2, 1])).toEqual(2);
    expect(peakIndexInMountainArray([0, 1, 4, 3, 2, 1])).toEqual(2);
  });

  test('Odd lengths of input', () => {
    expect(peakIndexInMountainArray([0, 1, 5, 11, 2])).toEqual(3);
    expect(peakIndexInMountainArray([0, 11, 4, 3, 2])).toEqual(1);
  });
});
