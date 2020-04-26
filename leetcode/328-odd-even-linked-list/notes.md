# 852. Peak Index in a Mountain Array

https://leetcode.com/problems/peak-index-in-a-mountain-array/, a binary search problem.

Let's call an array A a mountain if the following properties hold:

- A.length >= 3
- There exists some `0 < i < A.length - 1` such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`

Given an array that is definitely a mountain, return any `i` such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`.

Example 1:
Input: `[0, 1, 0]`
Output: 1

Example 2:
Input: `[0, 2, 1, 0]`
Output: 1

Constraints:
- `3 <= A.length <= 10000`
- `0 <= A[i] <= 10^6`
- `A` is a mountain, as defined above.

## Solutions
Whenever you’re given a sorted array of some sorts and are required to find an element that matches some condition that is guaranteed by the rules of the sort itself, you know that 99% of the time it’s going to be a [Binary Search problem.](https://en.wikipedia.org/wiki/Binary_search_algorithm)

### Complexity
- Time Complexity: `O(log⁡ A)`
- Space Complexity: `O(1)`, no additional memory needed.
