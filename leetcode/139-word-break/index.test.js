import wordBreak from './index';

describe('wordBreak', () => {
  test('Problem example', () => {
    expect(wordBreak(
      'leetcode',
      ['leet', 'code']
    )).toEqual(true);

    expect(wordBreak(
      'applepenapple',
      ['apple', 'pen']
    )).toEqual(true);

    expect(wordBreak(
      'catsandog',
      ['cats', 'dog', 'sand', 'and', 'cat']
    )).toEqual(false);
  });

  test('Additional test cases based on LC judge ', () => {
    expect(wordBreak(
      'aaaaaaa',
      ['aaaa', 'aaa']
    )).toEqual(true);

    expect(wordBreak(
      'aaaaaaa',
      ['aaaa']
    )).toEqual(false);
  });
});
