# 79. Word Search

https://leetcode.com/problems/word-search/

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

Constraints:
- board and word consists only of lowercase and uppercase English letters.
- `1 <= board.length <= 200`
- `1 <= board[i].length <= 200`
- `1 <= word.length <= 10^3`

## Solution

The resulting algorithm is a straightforward backtracking technique that will look similar to depth-first-search in nature.

Key thing to keep in mind while you’re coding this is that this is not `n ⨉ m` grid. I lost a lot of time debugging bugs caused by me forgetting this. :)

### Time and Space Complexity

Time complexity for this algorithm is `O(n * m * 3^L)` where `L` is the length of the word. The reason why it’s four to power of L, is because our backtracking algorithm will have 4 paths to follow – spawning 4 recursions for each cell visited.

As for space complexity, it is bound by `O(L)` for the recursion stack, other than that we aren’t using additional memory.

But there is an important caveat: the algorithm changes some of the data in-place, though it does revert it back. Nevertheless, if we wanted to respect the input parameter, we would have to clone the board, causing space complexity to jump to `O(n * m) + O(L)`.
