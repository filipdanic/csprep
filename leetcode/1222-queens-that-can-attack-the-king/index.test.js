import queensAttackingTheKing from './index';


describe('deepestLeavesSum', () => {
  test('Example 1', () => {
    expect(
      queensAttackingTheKing(
        [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]],
        [0,0]
      )
    ).toEqual(expect.arrayContaining([[0,1],[1,0],[3,3]]));
  });

  test('Example 2', () => {
    expect(
      queensAttackingTheKing(
        [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]],
        [3,3]
      )
    ).toEqual(expect.arrayContaining([[2,2],[3,4],[4,4]]));
  });

  test('Example 3', () => {
    expect(
      queensAttackingTheKing(
        [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]],
        [3,4]
      )
    ).toEqual(expect.arrayContaining([[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]));
  });

});
