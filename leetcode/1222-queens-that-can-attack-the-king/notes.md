# Queens That Can Attack the King

https://leetcode.com/problems/Queens-that-can-attack-the-king/

On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates `Queens` that represents the positions of the Black Queens, and a pair of coordinates `king` that represent the position of the White King, return the coordinates of all the Queens (in any order) that can attack the King.

## Solution

I looked at this as a simple search problem, writing a function that can return the first Queen for a given direction. There are 8 directions, so 8 searches in total.

I used a simple `Map` as a cache that can be used to check whether a Queen is present at a given coordinate.

### Complexity

First, let’s assume that this is large, `n * n` chessboard, we then have:
- Time: `O(n)` for search + `O(n^2)` to build the `Map`, so `~O(n^2)`
- Space: `O(n^2)`

Searching in one direction is worst-case `O(n)` so even with 8 searches we have `O(8n)` that boils down to `~O(n)` linear time.

For the memory, my `Map` is constrained by the numbers of Queens in the input so `O(Queens)`. It’s possible for there to be a Queen at every square, thus in the worst case there are `n * n` Queens.

This would mean that the space complexity is `O(n^2)`. Since we need to populate the Map, this is `O(n^2)` added time complexity as well.

If we constrain ourselves to the `8x8` chessboard problem space then none of this really matters which is why most people on LeetCode seem to suggest their solutions is `O(Q) ~= O(N)` linear. (It’s really not!)
