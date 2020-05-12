/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  let queue = [s];
  while(queue.length > 0) {
    const nextQueue = [];
    while(queue.length > 0) {
      const node = queue.pop();
      if (isSameTree(node, t)) {
        return true;
      }
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
  }
  return false;
};


const isSameTree = (s, t) => {
  if (s === null && t === null) {
    return true;
  }
  if (s === null || t === null) {
    return false;
  }

  return (
    s.val === t.val &&
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right)
  );
};

export default isSubtree;
