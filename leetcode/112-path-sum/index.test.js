import hasPathSum from './index';
import TreeNode from '../sharedPrimitives/TreeNode';

describe('hasPathSum', () => {
  test('Single node', () => {
    const root = TreeNode(2);
    expect(hasPathSum(root, 2)).toEqual(true);
    expect(hasPathSum(root, 3)).toEqual(false);
  });

  test('Problem example', () => {
    const root = TreeNode(5);
    root.left = TreeNode(4);
    root.left.left = TreeNode(11);
    root.left.left.left = TreeNode(7);
    root.left.left.right = TreeNode(2);
    root.right = TreeNode(8);
    root.right.left = TreeNode(13);
    root.right.right = TreeNode(4);
    root.right.right.right = TreeNode(1);
    expect(hasPathSum(root, 22)).toEqual(true);
  });
});
