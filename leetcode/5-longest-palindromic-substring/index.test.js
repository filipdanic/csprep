import longestPalindrome from './index';

describe('longestPalindrome', () => {
  test('Problem example', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  test('Full string palindrome', () => {
    expect(longestPalindrome('aaabaaa')).toEqual('aaabaaa');
    expect(longestPalindrome('aaabbaaa')).toEqual('aaabbaaa');
    expect(longestPalindrome('racecar')).toEqual('racecar');
  });

  test('Edge cases', () => {
    expect(longestPalindrome('')).toEqual('');
    expect(longestPalindrome('a')).toEqual('a');
  });

  test('Sample palindromes inside string', () => {
    expect(longestPalindrome('abcdefgevfvafgbfedo')).toEqual('vfv');
    expect(longestPalindrome('jaovbasbaojjzjjbafbasouvas ')).toEqual('jjzjj');
  });
});
