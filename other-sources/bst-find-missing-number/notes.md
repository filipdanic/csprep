# Find Missing Number in Sorted Array

Assuming a sorted array from `1 to n` that has one number between 1 and `n` missing, find and return the missing number.

## Solution

This is classic usage of binary search. Consider the following two arrays:

**Missing number on right side:**
```
// index:     0  1  2  3  4  5  6  7  8
// elements: [1, 2, 3, 4, 5, 6, 8, 9, 10]
```

**Missing number on left side:**
```
// index:     0  1  2  3  4  5  6  7  8
// elements: [1, 2, 4, 5, 6, 7, 8, 9, 10]
```

The key observation here is that as long as `array[i] === i + 1`, the out of order element hasn’t appeared yet.

So if we start from the middle, and check if `array[middle] === middle + 1`, we can deduct that:
- If it is, then the out of order element has not yet appear and is on the right.
- If it isn’t, then the out of order element has appeared and is somewhere on the left;

Another thing to notice is that if everything is still in order, then these two expressions should be true:
- `array[i] + 1 === array[i + 1]`
- `array[i] - 1 === array[i - 1]`

If one of these is false, then it tells us that we’ve just found the missing element.

### Time Complexity

As a standard binary search problem, the complexity is `O(log N)`, where `N` is the length of the input array.
