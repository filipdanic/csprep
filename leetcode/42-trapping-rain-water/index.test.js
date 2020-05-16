import trap from './index';

describe('trap', () => {
  test('Problem example', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('Large collector', () => {
    expect(trap([10, 0, 0, 0, 10])).toBe(30);
  });

  test('Decreasing steps', () => {
    expect(trap([4, 3, 2, 1, 0, 1, 2, 3, 4])).toBe(16);
  });

  test('No collection possible', () => {
    expect(trap([10, 11, 12, 11, 10])).toBe(0);
    expect(trap([0, 0, 0, 0, 0])).toBe(0);
    expect(trap([0, 0, 0, 0, 10])).toBe(0);
    expect(trap([10, 0, 0, 0, 0])).toBe(0);
  });
});
