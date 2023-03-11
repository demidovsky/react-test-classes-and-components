enum Player {
  X = 'X',
  O = 'O',
}

enum Cell {
  X = 'X',
  O = 'O',
  Empty = '',
}

class TicTacToeEngine {
  private field: Cell[][] = [];
  private player: Player = Player.X;

  constructor() {
    this.restart();
  }

  getField() {
    return this.field;
  }

  turn(x: number, y: number) {
    if (this.field[x][y] !== Cell.Empty) {
      console.log('Already placed in this cell');
      return false;
    }

    this.field[x][y] = this.player === Player.X ? Cell.X : Cell.O;

    if (this.player === Player.X) {
      this.player = Player.O;
    } else {
      this.player = Player.X;
    }
  }

  restart() {
    this.field = [
      (new Array(3)).fill(Cell.Empty),
      (new Array(3)).fill(Cell.Empty),
      (new Array(3)).fill(Cell.Empty),
    ];
    this.player = Player.X;
  }

  checkWinner() {
    for (let i=0; i<3; i++) {
      if (
        // vertical
        this.field[i][0] === this.field[i][1] &&
        this.field[i][1] === this.field[i][2] &&
        this.field[i][0] !== Cell.Empty
        ||
        // horizontal
        this.field[0][i] === this.field[1][i] &&
        this.field[1][i] === this.field[2][i] &&
        this.field[0][i] !== Cell.Empty
      ) {
        return this.field[i][0];
      }
    }

    // diagonal
    if (
        this.field[0][0] === this.field[1][1] &&
        this.field[1][1] === this.field[2][2] &&
        this.field[1][1] !== Cell.Empty
        ||
        this.field[2][0] === this.field[1][1] &&
        this.field[1][1] === this.field[0][2] &&
        this.field[1][1] !== Cell.Empty
    ) {
      return this.field[1][1];
    }

    return null;
  }

}

export { TicTacToeEngine };