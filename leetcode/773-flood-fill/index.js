const directions = [
  [1, 0],
  [-1,0],
  [0, 1],
  [0, -1]
];

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  const targetPixel = image[sr][sc];
  if (targetPixel === newColor) {
    return image;
  }

  let queue = [[sr, sc]];

  while(queue.length > 0) {
    const pair = queue.shift();
    image[pair[0]] [pair[1]] = newColor;
    directions.forEach(direction => {
      if (
        image[pair[0] + direction[0]] !== undefined &&
        image[pair[0] + direction[0]][pair[1] + direction[1]] !== undefined &&
        image[pair[0] + direction[0]][pair[1] + direction[1]] === targetPixel
      ) {
        queue.push([pair[0] + direction[0], pair[1] + direction[1]]);
      }
    });
  }
  return image;
};

export default floodFill;
