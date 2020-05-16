# 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Visualized:

![](rainwatertrap.png)

>  The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

## Solution

The intuition behind this solution is that we can calculate the amount of water at each index if we know the tallest block on the right and on the left of the index.

If we know that to left there is a block of height 4 and to the left there is a block of height 3, then smaller one – the 3 – is the maximum that can be trapped at the index.

We then also take into account the height of the block itself. The i-th block has the height of 2, then the total water on that index is 3 - 2.

Expressed in code as:

`trapped[i] =  Math.max(0, (Math.min(leftMax[i], rightMax[i]) - height[i]))`

### Complexity

If we had calculated the maximum left/right block for every index naively by looking right and left for every index, we would have ended up with `O(n^2)`.

However, we used some simple dynamic programming techniques to pre-compute the heights into two arrays: `leftMax` and `rightMax`. So the final complexity is:
- `O(n)` for time (three linear loops in total)
- `O(n)` for space (two arrays of size `n`)
