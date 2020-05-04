/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  let max = 0;
  let windowStart = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      windowStart = i;
    }
    max = Math.max(max, i - windowStart + 1);
  }

  return max;
};

export default findLengthOfLCIS;
