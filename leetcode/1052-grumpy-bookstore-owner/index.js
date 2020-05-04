/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, X) => {
  let alwaysSatisfied = 0;
  let unsatisfied = 0;
  let maxIncrease = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      alwaysSatisfied += customers[i];
    } else {
      unsatisfied += customers[i];
    }
    if (i >= X) {
      unsatisfied -= grumpy[i - X] === 1 ? customers[i - X] : 0;
    }
    maxIncrease = Math.max(maxIncrease, unsatisfied);
  }


  return alwaysSatisfied + maxIncrease;
};

export default maxSatisfied;

//  0 1 2 3 4 5 6 7
// [1,0,1,2,1,1,7,5]
// [0,1,0,1,0,1,0,1]
// X = 3
// alwaysSatisfied = 10
// unsatisfied = 6
// maxIncrease = 3
