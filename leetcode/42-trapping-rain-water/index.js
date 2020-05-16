/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  if (height.length === 0) {
    return 0;
  }

  const length = height.length;
  const leftMax = Array.from({ length: length });
  const rightMax = Array.from({ length: length });

  leftMax[0] = height[0];
  rightMax[length - 1] = height[length - 1];

  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  let totalTrappedWater = 0;

  for (let i = 0; i < length; i++) {
    totalTrappedWater += Math.max(0, (Math.min(leftMax[i], rightMax[i]) - height[i]));
  }
  return totalTrappedWater;
};

export default trap;
