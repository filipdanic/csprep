import multiply from './index';

describe('multiply', () => {
  test('Both are positive', () => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        expect(multiply(i, j)).toBeCloseTo(i * j, 10);
      }
    }
  });

  test('a is negative', () => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        expect(multiply(-i, j)).toBeCloseTo((-i) * j, 10);
      }
    }
  });

  test('b is negative', () => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        expect(multiply(i, -j)).toBeCloseTo(i * (-j), 10);
      }
    }
  });

  test('Both are negative', () => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        expect(multiply(-i, -j)).toBeCloseTo((-i) * (-j), 10);
      }
    }
  });
});
