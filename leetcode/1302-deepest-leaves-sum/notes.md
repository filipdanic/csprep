# Deepest Leaves Sum

https://leetcode.com/problems/deepest-leaves-sum/

Given a binary tree, return the sum of values of its deepest leaves.

Example:

```
      1
     / \
    2   3
   /     \
  4       5
```

Solution: 4 + 6 = 10


Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

## Solution

This is a simple breadth search problem. The idea is to collect “levels” and once the final level has been reached, sum up all the elements inside of it.

### Complexity

Time: `O(n)`

Space: `O(n/2)`

As with BFS, the time complexity of the solution is O(V+E). This means that depending on the graph type, this can be up to O(V^2), but for a Binary Tree it’s linear time.

Since we keep a Queue, we also have some space complexity to worry about and since we always go to the last level of the tree, our worse case is equal to maximum width of the tree. The worst case here is a balanced Binary Tree that would bring our space complexity to `O(n/2)`.
