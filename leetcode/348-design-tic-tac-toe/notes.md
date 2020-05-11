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

## (Rant) O(1) Solution

This is supposed to be an object-oriented design question, but on LeetCode it ends up being just another algorithm problem that prioritizes optimal time complexity, rather than good design.

There is an `O(1)` solution, and it is very counter-intuitive in my opinion – assuming this is a design question. Here’s a good explanation of how it works:

https://leetcode.com/problems/design-tic-tac-toe/discuss/81898/Java-O(1)-solution-easy-to-understand

For extra credit, it’s great practice to add additional constraints to the problem. For example:
- Keep track of whose turn it is.
- Check move validity.

## O(n) Solution

The solution I came up with runs in `O(n)` and is very straightforward. We keep a copy of the matrix (so `O(n^2)` space), and when a `move` is placed, we look in all directions from the position of that move.

The time complexity ends up being `~O(n)` as there 8 such searches every time, with a worst case time of `O(n)`.

Though on a real board, in a real game, the algorithm will perform much better on average and get slower as the game goes on – but never worse than `O(n)`.
