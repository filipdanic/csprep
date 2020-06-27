/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
  let container = String(num);

  for (let i = 0; i < container.length; i++) {
    if (container.charAt(i) === '6') {
      return parseInt(container.substr(0, i) + '9' + container.substr(i + 1), 10);
    }
  }

  return num;
};

export default maximum69Number;
