import floodFill from './index';

describe('floodFill', () => {
  test('Example problem', () => {
    expect(floodFill(
      [[1, 1, 1],[1 ,1 ,0],[1, 0, 1]],
      1,
      1,
      2
    )).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
  });

  test('Pixel color === target pixel color', () => {
    expect(floodFill(
      [[0, 0, 0],[0, 1, 1]],
      1,
      1,
      1
    )).toEqual([[0, 0, 0],[0, 1, 1]]);
  });

  test('No flood fill beyond first pixel', () => {
    expect(floodFill(
      [[3, 3, 3],[3, 1, 3],[3, 3, 3]],
      1,
      1,
      2
    )).toEqual([[3, 3, 3],[3, 2, 3],[3, 3, 3]]);
  });

  test('Single row', () => {
    expect(floodFill(
      [[1, 1, 1],[2, 2, 2],[3, 3, 3]],
      0,
      0,
      3
    )).toEqual([[3, 3, 3],[2, 2, 2],[3, 3, 3]]);
  });

  test('Single column', () => {
    expect(floodFill(
      [[9, 1, 1],[9, 2, 2],[9, 3, 3]],
      0,
      0,
      5
    )).toEqual([[5, 1, 1],[5, 2, 2],[5, 3, 3]]);
  });
});
