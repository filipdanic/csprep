/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.winLength = n;
  this.directions = [
    [[1, 0], [-1, 0]],
    [[0, 1], [0, -1]],
    [[1, 1], [-1, -1]],
    [[1,-1], [-1, 1]]
  ];
  this.matrix = Array.from({ length: n });
  for (let i = 0; i < n; i++) {
    this.matrix[i] = Array.from({ length: n });
    for(let j = 0; j < n; j++) {
      this.matrix[i][j] = '';
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  this.matrix[row][col] = player;
  for (let dir of this.directions) {
    const left = this.checkStreak(row, col, dir[0][0], dir[0][1], player);
    const right = this.checkStreak(row, col, dir[1][0], dir[1][1], player);
    if ((1 + left + right) === this.winLength) {
      return player;
    }
  }

  return 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} i
 * @param {number} j
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.checkStreak = function(row, col, i, j, player) {
  let playerWinningStreak = true;
  let length = 0;
  while (
    row >= 0 && row <= (this.winLength - 1) &&
    col >= 0 && col <= (this.winLength - 1)
  ) {
    playerWinningStreak = playerWinningStreak && (this.matrix[row][col] === player);
    if (!playerWinningStreak) {
      break;
    } else {
      row += i;
      col += j;
      length++;
    }
  }

  return length - 1;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
export default TicTacToe;
