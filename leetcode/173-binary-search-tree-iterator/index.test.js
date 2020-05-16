import TreeNode from '../sharedPrimitives/TreeNode';
import BSTIterator from './index';

describe('BSTIterator', () => {
  test('Example problem', () => {
    const root = TreeNode(7);
    root.left = TreeNode(3);
    root.right = TreeNode(15);
    root.right.left = TreeNode(9);
    root.right.right = TreeNode(20);
    const iterator = new BSTIterator(root);

    expect(iterator.next()).toEqual(3);
    expect(iterator.next()).toEqual(7);
    expect(iterator.hasNext()).toEqual(true);
    expect(iterator.next()).toEqual(9);
    expect(iterator.hasNext()).toEqual(true);
    expect(iterator.next()).toEqual(15);
    expect(iterator.hasNext()).toEqual(true);
    expect(iterator.next()).toEqual(20);
    expect(iterator.hasNext()).toEqual(false);
  });

  test('Balanced BST', () => {
    const root = TreeNode(15);
    root.left = TreeNode(10);
    root.left.left = TreeNode(8);
    root.left.right = TreeNode(12);
    root.right = TreeNode(20);
    root.right.left = TreeNode(16);
    root.right.right = TreeNode(25);
    const iterator = new BSTIterator(root);

    expect(iterator.next()).toEqual(8);
    expect(iterator.next()).toEqual(10);
    expect(iterator.next()).toEqual(12);
    expect(iterator.next()).toEqual(15);
    expect(iterator.next()).toEqual(16);
    expect(iterator.next()).toEqual(20);
    expect(iterator.next()).toEqual(25);
    expect(iterator.hasNext()).toEqual(false);
  });
});
