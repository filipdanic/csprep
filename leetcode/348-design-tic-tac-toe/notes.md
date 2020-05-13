# 348. Design Tic-Tac-Toe

https://leetcode.com/problems/design-tic-tac-toe/

Design a Tic-tac-toe game that is played between two players on a n x n grid.

You may assume the following rules:
- A move is guaranteed to be valid and is placed on an empty block.
- Once a winning condition is reached, no more moves is allowed.
- A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Example:
```
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
```

## O(n) Time Solution

The `O(n)` solution is contained within `bruteForce.js` and should be very straightforward. We keep a copy of the matrix (so `O(n^2)` space), and when a `move` is placed, we look in all directions from the position of that move.

The time complexity ends up being `~O(n)` as there 8 such searches every time, with a worst case time of `O(n)`.

On a real board, in a real game, the algorithm will perform much better on average and get slower as the game goes on – but never worse than `O(n)`.

## O(1) Time Solution

I wouldn’t really expect anyone to come up with this on the spot, but after leaving the problem to sit in the back of my head for a couple of days, it clicked.

Let’s take our board from the problem example, but replace `X` with `1` and `O` with `-1`
```
| 1  |    | -1 |
| -1 | -1 |    |
| 1  |  1 |  1 |
```

There is a rather intuitive way to compress this information:
- If we look at the rows from top to bottom, their sum is: `[0, -2, 3]`
- If we look at the columns from left to right, their sum is: `[1, 0, 0]`
- The sum of the diagonal is `1`
- The sum of the ant-diagonal is `-1`

So if we update these 4 values based on the `move(i, j)` that was just made, all we have to ask is:
- Is the sum of `i-th` row now equal to the win condition?
- Is the sum of `j-th` column now equal to the win condition?
- Is the sum of diagonal now equal to the win condition?
- Is the sum of anti-diagonal now equal to the win condition?

If any of them is true, then the player has just placed a winning move!

Aside from being a much faster solution, it also eliminates any need for keeping the whole matrix, so our space complexity has dropped to just `O(n)` for the two arrays.

### Performance Comparison via LeetCode Judge
- `O(n) time`: 220ms runtime
- `O(1) time`: 96ms runtime
