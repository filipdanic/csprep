/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const res = new Array(2 * n);
  let j = n, x = 0, y = 1;
  for (let i = 0; i < n; i++) {
    res[x] = nums[i];
    res[y] = nums[j];
    x += 2;
    y += 2;
    j++;
  }
  return res;
};

export default shuffle;
