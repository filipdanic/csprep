/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (pairs[stack.pop()] !== s[i]) {
        return false; // early return
      }
    }
  }

  return stack.length === 0;
};

export default isValid;
