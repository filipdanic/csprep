import maxProfit from './index';

describe('maxProfit', () => {
  test('Problem example', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  });

  test('Valley to peak', () => {
    expect(maxProfit([1, 3000])).toEqual(2999);
    expect(maxProfit([5, 4, 3, 2, 1, 2, 3, 4, 5])).toEqual(4);
  });
});
