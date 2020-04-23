# Pascal's Triangle

https://leetcode.com/problems/pascals-triangle/

Input: 5
Output:
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```
## Solution

Simple iteration and build-up according to the rules of Pascal’s triangle.

### Complexity

Understanding the time and space complexity of this one – and finding something significantly faster – is tough for me. My gut is telling me that it’s `O(n^2)` where `n` is the number of rows. (For both time and space.)

This is hard to beat because it is the number of elements that have to be created and returned in the output.
