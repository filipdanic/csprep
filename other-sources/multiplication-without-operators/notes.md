# Multiply Two

Problem: Multiply two integers without using the multiplication operator, division, bitwise operators, or any loops.

## Solution

A recursive function is the way to go given the conditions mentioned above. Remember to account for:
- One or both params being negative
- One or both params being zero (you know the answer immediately + it’s a good base case)

Notice that in the tests I use `.toBeCloseTo`. Simply because `-0` and `0` in JavaScript are not fully equal:
- `0 === -0 // true`
- `Object.is(0, -0) // false`

Didn’t feel like accounting for this since it doesn’t really have much to do with the problem.
