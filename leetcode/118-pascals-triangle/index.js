/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = [
    [1],
    [1, 1]
  ];

  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [ [1] ];
  }

  if (numRows === 2) {
    return triangle;
  }

  for (let i = 2; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle;
};

export default generate;
