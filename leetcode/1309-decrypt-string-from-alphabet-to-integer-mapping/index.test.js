import freqAlphabets from './index';

describe('freqAlphabets', () => {
  test('Example #1', () => {
    expect(freqAlphabets('10#11#12')).toEqual('jkab');
  });

  test('Example #2', () => {
    expect(freqAlphabets('1326#')).toEqual('acz');
  });

  test('Example #3', () => {
    expect(freqAlphabets('25#')).toEqual('y');
  });

  test('Example #4', () => {
    expect(
      freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
    ).toEqual('abcdefghijklmnopqrstuvwxyz');
  });

  test('Simple edge cases', () => {
    expect(freqAlphabets('1')).toEqual('a');
    expect(freqAlphabets('2')).toEqual('b');
    expect(freqAlphabets('12')).toEqual('ab');
  });
});
