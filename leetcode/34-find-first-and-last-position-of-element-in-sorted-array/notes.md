# 34. Find First and Last Position of Element in Sorted Array

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

If the target is not found in the array, return `[-1, -1]`.

Example 1:
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

Example 2:
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

## Solution

It’s very obvious to make an educated guess that binary search is going to be some sort of solution here. But it’s easy to get lost in the implementation.

The intuition is clear:
- Bisect towards the left and find the first occurrence of `target`
- Bisect towards the right and find the last occurrence of `target`

The difference between the two searches is going to be in the comparison/condition you put in. As to not get lost, use two different arrays:
- `[ 1 1 8 8 1 1 ]` (even elements)
- `[ 1 8 8 1 1 ]` (odd elements)

And just debug your loop until the algorithm is correct for both.
