import maximum69Number from './index';

describe('maximum69Number', () => {
  test('Example #1', () => {
    expect(maximum69Number(9669)).toEqual(9969);
  });

  test('Example #2', () => {
    expect(maximum69Number(9996)).toEqual(9999);
  });

  test('Example #3', () => {
    expect(maximum69Number(9999)).toEqual(9999);
  });

  test('Additional test cases', () => {
    expect(maximum69Number(66699)).toEqual(96699);
    expect(maximum69Number(999999996)).toEqual(999999999);
  });
});
