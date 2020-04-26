/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = (A) => {
  let low = 0;
  let high = A.length;
  while (low !== high) {
    const mid = Math.floor((low + high) / 2);
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return mid;
    } else if (A[mid] < A[mid + 1]) {
      low = mid;
    } else {
      high = mid;
    }
  }
};

export default peakIndexInMountainArray;
