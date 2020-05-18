/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let low = 0, high = nums.length - 1;
  let leftIndex = -1, rightIndex = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) { leftIndex = mid; }
    if (nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  low = 0;
  high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) { rightIndex = mid; }
    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return [leftIndex, rightIndex];
};

export default searchRange;
