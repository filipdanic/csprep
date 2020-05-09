/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length < 1) {
    return s;
  }

  let maxPalindrome = '';
  for (let i = 0; i < s.length; i++) {
    const expanded1 = getPalindromeExpandFromTheMiddle(s, i, i);
    const expanded2 = getPalindromeExpandFromTheMiddle(s, i, i + 1);

    const localMax = expanded1.length > expanded2.length ? expanded1 : expanded2;
    if (localMax.length > maxPalindrome.length) {
      maxPalindrome = localMax;
    }
  }

  return maxPalindrome;
};

const getPalindromeExpandFromTheMiddle = (str, left, right) => {
  if (left > right) {
    return '';
  }

  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
};

export default longestPalindrome;

