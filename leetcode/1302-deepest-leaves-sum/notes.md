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
