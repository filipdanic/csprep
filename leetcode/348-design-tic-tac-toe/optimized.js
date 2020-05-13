/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.winLength = n;
  this.columns = Array.from({ length: n }).fill(0);
  this.rows = Array.from({ length: n }).fill(0);
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  var val = player === 1 ? 1 : -1;
  this.rows[row] += val;
  this.columns[col] += val;

  if (this.winLength % 2 === 1 && row === col && row === Math.floor(this.winLength / 2)) {
    this.diagonal += val;
    this.antiDiagonal += val;
  } else if (row === col) {
    this.diagonal += val;
  } else if (row + col === this.winLength - 1) {
    this.antiDiagonal += val;
  }

  return (
    (
      Math.abs(this.rows[row]) === this.winLength ||
      Math.abs(this.columns[col]) === this.winLength ||
      Math.abs(this.diagonal) === this.winLength ||
      Math.abs(this.antiDiagonal) === this.winLength
    ) ? player : 0
  );
};

export default TicTacToe;
