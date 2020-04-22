/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttackingTheKing = (queens, king) => {
  const cache = new Map();
  for (const queen of queens) {
    cache.set(`${queen[0]}-${queen[1]}`, true);
  }

  return [
    searchPath(cache, king[0], king[1], 1, 0),
    searchPath(cache, king[0], king[1], -1, 0),
    searchPath(cache, king[0], king[1], 0, 1),
    searchPath(cache, king[0], king[1], 0, -1),
    searchPath(cache, king[0], king[1], 1, 1),
    searchPath(cache, king[0], king[1], -1, -1),
    searchPath(cache, king[0], king[1], 1, -1),
    searchPath(cache, king[0], king[1], -1, 1)
  ].filter(_ => _ !== undefined);

};

const searchPath = (
  cache,
  startColumn,
  startRow,
  columnIncrement,
  rowIncrement,
) => {
  let nextColumn = startColumn + columnIncrement;
  let nextRow = startRow + rowIncrement;

  while(
    nextColumn >= 0 && nextColumn <= 7 &&
    nextRow >= 0 && nextRow <= 7
    ) {
    if (cache.has(`${nextColumn}-${nextRow}`)) {
      return [ nextColumn, nextRow ];
    }
    nextColumn = nextColumn + columnIncrement;
    nextRow = nextRow + rowIncrement;
  }

  return undefined;
};

export default queensAttackingTheKing;
