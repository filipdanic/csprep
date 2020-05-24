/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const len = s.length;
  const charMap = new Map();
  let left = 0, right = 0, max = 0;

  while (left < len && right < len) {
    if (!charMap.has(s[right])) {
      charMap.set(s[right], true);
      right += 1;
      max = Math.max(max, right - left);
    } else {
      charMap.delete(s[left]);
      left += 1;
    }
  }

  return max;
};

export default lengthOfLongestSubstring;
