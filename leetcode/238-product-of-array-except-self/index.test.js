import productExceptSelf from './index';

describe('productExceptSelf', () => {
  test('Initial edge cases', () => {
    expect(productExceptSelf([0, 0])).toEqual(expect.arrayContaining([0, 0]));
    expect(productExceptSelf([1, 1])).toEqual(expect.arrayContaining([1, 1]));
    expect(productExceptSelf([1, 5])).toEqual(expect.arrayContaining([5, 1]));
    expect(productExceptSelf([1, 1, 1, 1, 0])).toEqual(expect.arrayContaining([0, 0, 0, 0, 0]));
  });

  test('Example from problem ', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual(expect.arrayContaining([24, 12, 8, 6]));
  });

  test('More tests ', () => {
    expect(productExceptSelf([5,9,4,3,1,4,5,6,-5,32,-1])).toEqual(expect.arrayContaining(
      [2073600,1152000,2592000,3456000,10368000,2592000,2073600,1728000,-2073600,324000,-10368000]
    ));

    expect(productExceptSelf([1,2,3,4,5,6,5,4,3,2,1])).toEqual(expect.arrayContaining(
      [86400,43200,28800,21600,17280,14400,17280,21600,28800,43200,86400]
    ));
  });
});
