/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, X) => {
  let maxIncrease = 0;
  let windowStart = 0;

  for (let i = 0; i <= customers.length - X; i++) {
    const maxForCurrent = getWindowMaximumIncrease(i, i + X, customers, grumpy);
    if (maxForCurrent > maxIncrease) {
      maxIncrease = maxForCurrent;
      windowStart = i;
    }
  }

  let finalSum = 0;
  for (let i = 0; i < customers.length; i++) {
    if (i >= windowStart && i < windowStart + X) {
      finalSum += customers[i];
    } else {
      finalSum += grumpy[i] === 0 ? customers[i] : 0;
    }
  }

  return finalSum;
};

/**
 * @param {number} start
 * @param {number} end
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @return {number}
 */
const getWindowMaximumIncrease = (start, end, customers, grumpy) => {
  let increase = 0;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += grumpy[i] === 0 ? customers[i] : 0;
    increase += customers[i];
  }
  return increase - sum;
};

export default maxSatisfied;
