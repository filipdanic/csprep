const findMissingNumber = (arr) => {
  let left = 0, right = arr.length - 1;
  while(left !== right) {
    const mid = Math.round((left + right) / 2);

    if (arr[mid] + 1 !== arr[mid + 1]) {
      return arr[mid] + 1;
    } else if (arr[mid] - 1 !== arr[mid - 1]) {
      return arr[mid] - 1;
    } else {
      if (arr[mid] === mid + 1) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }

  return -1;
};

export default findMissingNumber;
