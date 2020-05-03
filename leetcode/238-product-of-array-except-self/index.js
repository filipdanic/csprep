/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const output = [];
  let left = 1, right = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * right;
    right = right * nums[i];
  }

  return output;
};

export default productExceptSelf;
