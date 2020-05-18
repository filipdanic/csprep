/**
 * initialize your data structure here.
 */
const MedianFinder = function() {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.arr.length === 0) {
    return this.arr.push(num);
  }

  let low = 0, heigh = this.arr.length - 1;
  while(low <= heigh) {
    const mid = low + Math.round((heigh - low) / 2);
    if (num > this.arr[mid]) {
      low = mid + 1;
    } else {
      heigh = mid - 1;
    }
  }
  this.arr.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const mid = Math.round((this.arr.length - 1) / 2);
  if (this.arr.length % 2 === 0) {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  } else {
    return this.arr[mid];
  }
};

export default MedianFinder;
