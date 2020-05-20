# 15. 3Sum

https://leetcode.com/problems/3sum/

Given an array nums of `n` integers, are there elements `a`, `b`, `c` in `nums` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.

**Note:** The solution set must not contain duplicate triplets.

Example:
```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Solution

Very similar to the 2sum problem, but an order of magnitude more complex in terms of time. The intuition is as follows:
- For every number at index i, our target sum becomes = `0 - nums[i]`.
- Now we have a 2-sum problem, is there as a pair of numbers `(l, k)` between `i + 1 and nums.length` such that `nums[l] + nums[k] === sum`

### Two Pointer 2-sum Solution

My 2-sum solution was based on using a hash map and had a `O(n)` space and time complexity.

There was another interesting solution there based on using two pointers to narrow in on the target. It had constant space, but required the array to be sorted, which means bigger time complexity. (Specifically, `O(n log n)`.)

However, this solution is going to be `O(n^2)` regardless, so we might as well use the two pointer solution so that we can avoid the additional `O(n)` space complexity caused by the hash map.

