# 572. Subtree of Another Tree
https://leetcode.com/problems/subtree-of-another-tree/submissions/

Given two non-empty binary trees `s` and `t`, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. A subtree of `s` is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:
```
     3
    / \
   4   5
  / \
 1   2
```
Given tree t:
```
   4
  / \
 1   2
```
Return `true`, because `t` has the same structure and node values with a subtree of `s`.

Example 2:
Given tree `s`:
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
Given tree `t`:
```
   4
  / \
 1   2
```
Return `false`.

## Solution

The first step was to write a function `isSameTree` that will, for two given nodes, determine if they are the same tree.

Then it’s just a matter of going through the main tree and checking if any of its node form a subtree that is the same tree and the one provided in the input.

I used BFS, though it seems like DFS would have been a much better choice. I might refactor at some point.

### Time & Space Complexity

BFS runs at `O(|s| * |t|)`, which is realistically what refer to as `~O(n^2)` since worst case `s == t`. The BFS stack introduces some additional memory, equal to `O(maxWidth)` where `O(mW) < O(n)`.

## Better Solution, But…

A better solution could be do do a traversal of both trees and generate it as a string. Then compare the two strings with the `includes` method.

Traversing the trees will be `O(|s|) + O(|t|) ~ O(n)` time with `~O(n)` additional memory for the strings.

Now for the hard part, we don’t really know the implementation of `String.includes` in JS and it might depend on the environment.

It could be `~O(n^2)`, which isn’t better than our initial solution.

But if it were really important to optimize this method for production code, we would implement [the Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) and use it instead of the native method.

KMP has a time complexity of `O(w) + O(k)`, so  `~ O(n)` for our case. This keeps us in linear time and is thus the optimal solution.
