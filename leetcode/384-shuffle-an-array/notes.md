# 384. Shuffle an Array

https://leetcode.com/problems/shuffle-an-array/

Shuffle a set of numbers without duplicates.

Example:
```
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
```

## (Non)-Solution

It is said that humans have a hard time dealing with actual randomness and understanding probability. If given an array such as `[1, 2, 3, 4, 5]` and asked to shuffle it an random pattern, we are likely to provide some of the following permutations:
- `[4, 1, 2, 5, 3]`
- `[2, 5, 1, 3, 4]`
- `[3, 5, 1, 2, 4]`

What do these 3 have in common? We _really_ tried to over-shuffle them by making sure none of the items is on their original index.

However, these are just as equally random, though we won’t feel like that’s true:
- `[1, 2, 4, 3, 5]`
- `[2, 1, 3, 4, 5]`

For the solution to this problem to be accepted, the distribution of all possible shuffles must be close to uniform. A lot of people will write a fairly decent shuffling algorithm without putting in much though. Even something simple like:

```
    nums.sort(() => Math.random() - Math.random());
```

…will produce a solid shuffling algorithm for human perception, but it’ll hardly be uniform.

The accepted solution on LeetCode nudges you to go with the Fisher-Yates Algorithm. I tried implementing a supposedly better version, Durstenfeld’s algorithm:

```
Solution.prototype.shuffle = function() {
  let shuffled = [ ...this.original ];
  let len = this.original.length;

  for (let i = len - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
  }
  return shuffled;
};
```

But the answer was not accepted. Perhaps JavaScript’s biased `Math.random` is part of the issue, but I did not bother digging deeper.

If you have a better solution, do send a PR or tweet me at @DanicFilip.
