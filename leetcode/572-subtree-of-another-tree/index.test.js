import isSubtree from './index';
import TreeNode from '../sharedPrimitives/TreeNode';

describe('isSubtree', () => {
  it('Passes a basic test case of the same tree', () => {
    const a = TreeNode(0);
    const b = TreeNode(0);
    expect(isSubtree(a, b)).toBe(true);
  });

  it('Passes a basic test case of different trees', () => {
    const a = TreeNode(0);
    const b = TreeNode(1);
    expect(isSubtree(a, b)).toBe(false);
  });

  it('Passes a basic binary tree test', () => {
    const a = TreeNode(1);
    a.left = TreeNode(2);
    a.right = TreeNode(3);

    const b = TreeNode(1);
    b.left = TreeNode(2);
    b.right = TreeNode(3);
    expect(isSubtree(a, b)).toBe(true);
  });

  it('Passes a basic unbalanced binary tree test', () => {
    const a = TreeNode(1);
    a.left = TreeNode(2);
    a.right = TreeNode(3);

    const b = TreeNode(1);
    b.left = TreeNode(2);
    b.right = TreeNode(3);
    b.right.left = TreeNode(4);
    expect(isSubtree(a, b)).toBe(false);
  });

  it('Problem Example #1', () => {
    const a = TreeNode(3);
    a.right = TreeNode(5);
    a.left = TreeNode(4);
    a.left.left = TreeNode(1);
    a.left.right = TreeNode(2);

    const b = TreeNode(4);
    b.left = TreeNode(1);
    b.right = TreeNode(2);
    expect(isSubtree(a, b)).toBe(true);
  });

  it('Problem Example #2', () => {
    const a = TreeNode(3);
    a.right = TreeNode(5);
    a.left = TreeNode(4);
    a.left.left = TreeNode(1);
    a.left.right = TreeNode(2);
    a.left.right.left = TreeNode(0);

    const b = TreeNode(4);
    b.left = TreeNode(1);
    b.right = TreeNode(2);
    expect(isSubtree(a, b)).toBe(false);
  });
});
