/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  return dfs(root, 0, sum);
};

const dfs = (root, currentSum, targetSum) => {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return currentSum + root.val === targetSum;
  }

  return (
    dfs(root.left, currentSum + root.val, targetSum) ||
    dfs(root.right, currentSum + root.val, targetSum)
  );
};

export default hasPathSum;
