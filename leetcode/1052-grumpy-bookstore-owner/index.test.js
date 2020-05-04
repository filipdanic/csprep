import maxSatisfied from './index';
import maxSatisfiedBruteForce from './bruteForce';

describe('maxSatisfied', () => {
  test('Example problem', () => {
    expect(maxSatisfiedBruteForce(
      [1,0,1,2,1,1,7,5],
      [0,1,0,1,0,1,0,1],
      3
    )).toBe(16);

    expect(maxSatisfiedBruteForce(
      [4,10,10],
      [1,1,0],
      2
    )).toBe(24);

    expect(maxSatisfied(
      [1,0,1,2,1,1,7,5],
      [0,1,0,1,0,1,0,1],
      3
    )).toBe(16);

    expect(maxSatisfied(
      [4,10,10],
      [1,1,0],
      2
    )).toBe(24);
  });

  test('Input edge case', () => {
    expect(maxSatisfiedBruteForce(
      [],
      [],
      0
    )).toBe(0);

    expect(maxSatisfied(
      [],
      [],
      0
    )).toBe(0);
  });

  test('X = 1', () => {
    expect(maxSatisfiedBruteForce(
      [1,1,1,1,2,1,1,1],
      [1,1,1,1,1,1,1,1],
      1
    )).toBe(2);

    expect(maxSatisfied(
      [1,1,1,1,2,1,1,1],
      [1,1,1,1,1,1,1,1],
      1
    )).toBe(2);
  });

  test('X = 2', () => {
    expect(maxSatisfiedBruteForce(
      [1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1],
      2
    )).toBe(2);

    expect(maxSatisfied(
      [1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1],
      2
    )).toBe(2);

    expect(maxSatisfiedBruteForce(
      [1,1,1,1,1,1,0,3],
      [1,1,1,1,1,1,1,1],
      2
    )).toBe(3);

    expect(maxSatisfied(
      [1,1,1,1,1,1,0,3],
      [1,1,1,1,1,1,1,1],
      2
    )).toBe(3);
  });

  test('X = length', () => {
    expect(maxSatisfiedBruteForce(
      [1,1,1,1],
      [1,1,1,1],
      4
    )).toBe(4);

    expect(maxSatisfied(
      [1,1,1,1],
      [1,1,1,1],
      4
    )).toBe(4);
  });
});
