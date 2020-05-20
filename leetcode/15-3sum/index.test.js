import threeSum from './index';

describe('threeSum', () => {
  test('Works for problem example', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  test('Works for expanded example', () => {
    expect(threeSum([-1,0,1,2,-1,-4,0,1,1,1,1,1,-2,44444,111,4423,14])).toEqual([[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]]);
  });

  test('Works when no pair exists', () => {
    expect(threeSum([-10, -3, 0, 9, 20])).toEqual([]);
  });

  test('Doesn’t fall for duplicates', () => {
    expect(threeSum([-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 1, 1])).toEqual([[-1, 0, 1], [0, 0, 0]]);
  });
});
