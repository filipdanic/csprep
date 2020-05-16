/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.pushLeftNodesToStack(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.pushLeftNodesToStack = function(root) {
  while(root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const next = this.stack.pop();
  this.pushLeftNodesToStack(next.right);
  return next.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

export default BSTIterator;
