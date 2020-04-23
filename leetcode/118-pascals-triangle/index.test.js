import generate from './index';

describe('deepestLeavesSum', () => {
  test('Initial edge cases', () => {
    expect(
      generate(0)
    ).toEqual(expect.arrayContaining([]));

    expect(
      generate(1)
    ).toEqual(expect.arrayContaining([[1]]));

    expect(
      generate(2)
    ).toEqual(expect.arrayContaining([[1], [1, 1]]));
  });

  test('Example from problem n=5', () => {
    expect(
      generate(5)
    ).toEqual(expect.arrayContaining(
      [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
      ]
    ));
  });

  test('For n=12', () => {
    expect(
      generate(12)
    ).toEqual(expect.arrayContaining(
      [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],[1,9,36,84,126,126,84,36,9,1],[1,10,45,120,210,252,210,120,45,10,1],[1,11,55,165,330,462,462,330,165,55,11,1]]
    ));
  });
});
