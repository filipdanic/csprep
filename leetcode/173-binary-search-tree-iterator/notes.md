# 173. Binary Search Tree Iterator

https://leetcode.com/problems/binary-search-tree-iterator/

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling `next()` will return the next smallest number in the BST.

Example:
```
For tree:

     7
    / \
   3  15
      / \
     9   20


BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
```

**Note:**
- `next()` and `hasNext()` should run in average `O(1)` time and uses `O(h)` memory, where `h` is the height of the tree.
- You may assume that `next()` call will always be valid, that is, there will be at least a next smallest number in the BST when `next()` is called.

## Solution and Complexity

Some important notes first:
- It’s important to note that that the operations should run in constant time on _average,_ not always.
- The problem says nothing about the time complexity of the constructors, so we are allowed to do some prep work.

The solution I went with it so use a stack to keep track of all the nodes on the left, and then followup on the node to their right when it’s their time to be popped.

The stack’s maximum size is `O(treeHeight)` and this can only really happen with the root note as this is where we iterate through the whole leftmost branch of the tree. All other iterations after that will be smaller. In other words, our `pop()` will keep up with the growth of the stack.

In terms of time complexity of the `next()` method, consider a Balanced Binary Search, like the one is my test file:


```
             15
            / \
           /   \
          10    20
         / \    / \
        8  12  16  25
```

And let’s follow along:
- When we initialize the stack, we make 2 operations to fill it.
- When return `8`, we make 0 additional operations.
- When we return `10` we make 1 additional operations to add `12`.
- When we return `12` we make 0 additional operations.
- When we return `15` we make 2 additional operations for the left side of right subtree.
- When we return `16` we make 0 additional operations.
- When we return `20` we make 1 additional operation.
- When we return `25` we make 0 additional operations.

So, on average, that’s `4/7 ~= 0.57` operations per `next()` call, which is definitely in `O(1)` territory. Buy, why? And does it scale with a bigger tree?

The complexity at the lowest node is `O(1)`, and climbs up to `O(log(n))` for the next side of the tree.

So the formula seems to go towards something like a total of `O(log(n)) + (1 + 2 + 3 ... log(n))`.

Now, the `next()` methods is called `n` times, so this is amortized.

So it finally ends up something like: `(log(n) + log(n) * log(n))  / n`, with `~O(1)` for a very large `n`.
