/**
 * @param {number[]} nums
 */
const FirstUnique = function(nums) {
  this.uniques = new Set();
  this.duplicates = new Set();
  for (let num of nums) {
    this.add(num);
  }
};

export default FirstUnique;

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  if (this.uniques.size === 0) {
    return -1;
  }
  return this.uniques.values().next().value;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.duplicates.has(value)) {
    return;
  }
  if (!this.uniques.has(value)) {
    this.uniques.add(value);
    return;
  }
  this.uniques.delete(value);
  this.duplicates.add(value);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
