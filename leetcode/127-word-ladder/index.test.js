import ladderLength from './index';

describe('ladderLength', () => {
  test('Problem example', () => {
    expect(ladderLength(
      'hit', 'cog',
      ["hot", "dot", "dog", "lot", "log", "cog"]
    )).toEqual(5);

    expect(ladderLength(
      'hit', 'cog',
      ["hot","dot","dog","lot","log"]
    )).toEqual(0);
  });

  test('Additional test cases based on LC judge ', () => {
    expect(ladderLength(
      'a', 'c',
      ['a', 'b', 'c']
    )).toEqual(2);

    expect(ladderLength(
      'hog', 'cog',
      ['cog']
    )).toEqual(2);
  });


  test('aa -> ab -> bb ', () => {
    expect(ladderLength(
      'aa', 'bb',
      ['ab', 'bb', 'cc']
    )).toEqual(3);
  });

  test('aaa -> aba -> abb -> bbb ', () => {
    expect(ladderLength(
      'aaa', 'bbb',
      ['aba', 'abb', 'bbb', 'aca', 'acc', 'ccc']
    )).toEqual(4);
  });

  test('Impossible transformations', () => {
    expect(ladderLength(
      'hot', 'dog',
      ['hot', 'dog']
    )).toEqual(0);

    expect(ladderLength(
      'aaa', 'bbb',
      ['aaa', 'aba', 'baa', 'aab', 'bb']
    )).toEqual(0);
  });
});
