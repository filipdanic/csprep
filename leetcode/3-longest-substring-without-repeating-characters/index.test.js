import lengthOfLongestSubstring from './index';

describe('longestPalindrome', () => {
  test('Problem examples', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  });
});

