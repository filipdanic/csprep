import TicTacToe from './optimized';

describe(('TicTacToe'), () => {
  test('n=3, easy victory via columns', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toEqual(0);
    expect(game.move(0, 1, 1)).toEqual(0);
    expect(game.move(0, 2, 1)).toEqual(1);
  });

  test('n=3, easy victory via rows', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toEqual(0);
    expect(game.move(1, 0, 1)).toEqual(0);
    expect(game.move(2, 0, 1)).toEqual(1);
  });

  test('n=3, easy victory via diagonal', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toEqual(0);
    expect(game.move(1, 1, 1)).toEqual(0);
    expect(game.move(2, 2, 1)).toEqual(1);
  });

  test('n=3, problem example', () => {
    const game = new TicTacToe(3);
    expect(game.move(0, 0, 1)).toEqual(0);
    expect(game.move(0, 2, 2)).toEqual(0);
    expect(game.move(2, 2, 1)).toEqual(0);
    expect(game.move(1, 1, 2)).toEqual(0);
    expect(game.move(2, 0, 1)).toEqual(0);
    expect(game.move(1, 0, 2)).toEqual(0);
    expect(game.move(2, 1, 1)).toEqual(1);
  });
});
