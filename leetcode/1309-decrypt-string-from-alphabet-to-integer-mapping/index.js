/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  const alphabet = Array
    .from({ length: 26 })
    .map((_, index) => String.fromCharCode(97 + index));

  let stack = '';
  let output = '';

  const handleSimpleStack = (queue) => {
    while (queue.length > 0) {
      output = output + alphabet[Number(queue.shift()) - 1];
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      stack = stack + s[i];
    } else {
      if (stack.length > 2) {
        handleSimpleStack(stack.substr(0, stack.length - 2).split(''));
        stack = `${stack[stack.length - 2]}${stack[stack.length - 1]}`;
      }
      output = output + alphabet[Number(stack) - 1];
      stack = '';
    }
  }


  handleSimpleStack(stack.split(''));

  return output;
};

export default freqAlphabets;
