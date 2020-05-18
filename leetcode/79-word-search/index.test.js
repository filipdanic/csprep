import exists from './index';

describe('Word search', () => {
  it('Passes all all tests on example board,', () => {
    const board = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ];
    expect(exists(board, 'ABCCED')).toEqual(true);
    expect(exists(board, 'SEE')).toEqual(true);
    expect(exists(board, 'ABCESEE')).toEqual(true);
    expect(exists(board, 'ASADEESECBFC')).toEqual(true); // spiral :)
    expect(exists(board, 'FCF')).toEqual(false);
    expect(exists(board, 'EEE')).toEqual(false);
    expect(exists(board, 'CCC')).toEqual(false);
    expect(exists(board, 'SFCEC')).toEqual(false);
  });
});
