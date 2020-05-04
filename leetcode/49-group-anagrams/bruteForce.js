import isAnagram from '../242-valid-anagram';

/**
 * Uses our solution from isAnagram to compare between strings.
 * Ultimately very slow, explained in notes.md
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = [];
  const grouped = Array.from({ length: strs.length });
  for (let i = 0; i < strs.length; i++) {
    if (!grouped[i]) {
      const group = [strs[i]];
      grouped[i] = true;

      for (let j = i + 1; j < strs.length; j++) {
        if (isAnagram(strs[i], strs[j])) {
          group.push(strs[j]);
          grouped[j] = true;
        }
      }

      groups.push(group);
    }
  }

  return groups;
};

export default groupAnagrams;
