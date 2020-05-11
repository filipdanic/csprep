import isValid from './index';

describe('isValid', () => {
  test('Problem examples', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
  });

  test('Some more valid expressions', () => {
    expect(isValid('((()))')).toBe(true);
    expect(isValid('')).toBe(true);
    expect(isValid('[()]{()}({})([])')).toBe(true);
  });

  test('Some more invalid expressions', () => {
    expect(isValid('((]]')).toBe(false);
    expect(isValid('[()]{()}({})([])]')).toBe(false);
    expect(isValid('(((((((((((((((((((')).toBe(false);
  });
});
