# 238. Product of Array Except Self

https://leetcode.com/problems/product-of-array-except-self/

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  `[1,2,3,4]`
Output: `[24,12,8,6]`

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

## Solution

I solved the problem with the additional constraints right away, which is probably not the right way to practice or tackle problems in the real world. Honestly, the _division_ approach, which is supposed to be the intuitive solution, is something I wouldn’t have thought of so fast.

For the problem itself with these constraints, it requires a certain type of intuition which can be developed as if playing with legos. You know that you can’t pass through the array more than a couple of times, and you know that your output array is the only structure you can work with.

What eventually develops is the idea of keeping the product stored in the array as you go:

```
// for input:      1 , 2 , 3 , 4
// needed output:  24, 12, 8 , 6

Going from the right

[step #1] 1, x , x , x  [acc = 1]
[step #2] 1, 1 , x , x  [acc = 2]
[step #3] 1, 1 , 2 , x  [acc = 6]
[step #3] 1, 1 , 2 , 6  [acc = 24]
```

Now this doesn’t seem like much, other than the last index being solved (the `6`.) But let’s observe the multiplication accumulator.

Doesn’t it seem like if we could’ve applied it in reverse, it would’ve added up to the solution. Let’s see:


```
// for input:      1 , 2 , 3 , 4
// needed output:  24, 12, 8 , 6

Going from the left

[step #1] x ,  x ,  x ,  1  [acc = 4]
[step #2] x ,  x ,  4 ,  1  [acc = 12]
[step #3] x ,  12,  4 ,  1  [acc = 24]
[step #4] 24,  12,  4 ,  1  [acc = 24]
```

So if we look at the output from our first and second passes:

```
[1st pass] 1,  1 ,  2 , 6
[2nd pass] 24, 12,  4 , 1

[product ] 24, 12,  8,  6
```

Aha, that’s it. Without this intuition, I don’t see how one could solve this problem given all the constraints.
