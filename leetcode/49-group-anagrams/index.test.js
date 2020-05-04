import groupAnagramsBruteForce from './bruteForce';
import groupAnagrams from './index';

describe('groupAnagrams', () => {

  test('Problem example', () => {
    expect(groupAnagramsBruteForce(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(expect.arrayContaining(
      [
        ['eat','tea','ate'],
        ['tan','nat'],
        ['bat']
      ]
    ));

    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(expect.arrayContaining(
      [
        ['eat','tea','ate'],
        ['tan','nat'],
        ['bat']
      ]
    ));
  });

  test('Single pass', () => {
    expect(groupAnagramsBruteForce(['aaab', 'baaa', 'aaab', 'aaab'])).toEqual(expect.arrayContaining(
      [['aaab', 'baaa', 'aaab', 'aaab']]
    ));
    expect(groupAnagrams(['aaab', 'baaa', 'aaab', 'aaab'])).toEqual(expect.arrayContaining(
      [['aaab', 'baaa', 'aaab', 'aaab']]
    ));
  });

  test('No anagrams', () => {
    expect(groupAnagramsBruteForce(['a', 'b', 'c', 'd', 'e'])).toEqual(expect.arrayContaining(
      [['a'], ['b'], ['c'], ['d'], ['e']]
    ));
    expect(groupAnagrams(['a', 'b', 'c', 'd', 'e'])).toEqual(expect.arrayContaining(
      [['a'], ['b'], ['c'], ['d'], ['e']]
    ));
  });
});
