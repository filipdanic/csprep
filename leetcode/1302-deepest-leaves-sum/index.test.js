import deepestLeavesSum from './index';
import TreeNode from '../sharedPrimitives/TreeNode';

describe('deepestLeavesSum', () => {
  test('Single element', () => {
    expect(deepestLeavesSum(TreeNode(2))).toEqual(2);
  });

  test('From notes.md example', () => {
    const root = TreeNode(1);
    root.left = TreeNode(2);
    root.right = TreeNode(3);
    root.left.left = TreeNode(4);
    root.right.right = TreeNode(5);
    expect(deepestLeavesSum(root)).toEqual(9);
  });

  test('Non-balanced depth example', () => {
    const root = TreeNode(1);
    root.left = TreeNode(2);
    root.right = TreeNode(3);
    root.left.left = TreeNode(4);
    expect(deepestLeavesSum(root)).toEqual(4);
  });
});
