import isAnagram from './index';

describe('isAnagram', () => {

  test('Example anagrams', () => {
    expect(isAnagram('eat', 'ate')).toEqual(true);
    expect(isAnagram('aba', 'aab')).toEqual(true);
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
  });

  test('False examples random generator', () => {
    for (let i = 0; i < 100; i++) {
      expect(isAnagram(
        Math.round(Math.random() * 100000000000).toString(36).replace(/[0-9]/g, ''),
        Math.round(Math.random() * 100000000000).toString(36).replace(/[0-9]/g, '')
      )).toEqual(false);
    }
  });
});
