/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = function(root) {
  let queue = [root];

  while (queue.length > 0) {
    const nextQueue = [];
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right)
      }
    }

    if (nextQueue.length > 0) {
      queue = nextQueue;
    } else {
      return queue.reduce((acc, _) => acc + _.val, 0);
    }
  }
};

export default deepestLeavesSum;
