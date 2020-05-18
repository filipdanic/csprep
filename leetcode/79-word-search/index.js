/**
 * @param {Array<Array<string>>} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (board.length === 0 || word.length === 0) {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(board, i, j, word)) {
        return true;
      }
    }
  }

  return false;
};

const backtrack = (board, i, j, word) => {
  if (word.length === 0) {
    return true;
  }

  if (
    i < 0 || j < 0 ||
    i > board.length - 1 ||
    j > board[0].length - 1 ||
    board[i][j] !== word[0]
  ) {
    return false;
  }

  const currentChar = board[i][j];
  const reducedWord = word.substring(1);
  board[i][j] = '/';
  let result = (
    backtrack(board, i - 1, j, reducedWord) ||
    backtrack(board, i + 1, j, reducedWord) ||
    backtrack(board, i, j - 1, reducedWord) ||
    backtrack(board, i, j + 1, reducedWord)
  );
  board[i][j] = currentChar;
  return result;
};

export default exist;
