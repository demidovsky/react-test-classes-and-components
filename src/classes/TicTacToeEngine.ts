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
  private _field: Cell[][] = [];
  private _player: Player = Player.X;

  constructor() {
    this.restart();
  }

  get field(): Cell[][] {
    return this._field;
  }

  get player(): Player {
    return this._player;
  }

  get winner(): Player | null {
    return this.checkWinner();
  }

  turn(x: number, y: number): boolean {
    if (this.field[x][y] !== Cell.Empty) {
      console.log('Already placed in this cell');
      return false;
    }

    if (this.winner !== null) {
      console.log('Game is over');
      return false;
    }

    this.field[x][y] = this.player === Player.X ? Cell.X : Cell.O;

    if (this.player === Player.X) {
      this._player = Player.O;
    } else {
      this._player = Player.X;
    }

    return true;
  }

  restart(): void {
    this._field = [
      (new Array(3)).fill(Cell.Empty),
      (new Array(3)).fill(Cell.Empty),
      (new Array(3)).fill(Cell.Empty),
    ];
    this._player = Player.X;
  }

  checkWinner(): Player | null {
    for (let i=0; i<3; i++) {
      if (
        // vertical
        this.field[i][0] === this.field[i][1] &&
        this.field[i][1] === this.field[i][2] &&
        this.field[i][0] !== Cell.Empty
      ) {
        return this.field[i][0] === Cell.X ? Player.X : Player.O;
      }

      if (
        // horizontal
        this.field[0][i] === this.field[1][i] &&
        this.field[1][i] === this.field[2][i] &&
        this.field[0][i] !== Cell.Empty
      ) {
        return this.field[0][i] === Cell.X ? Player.X : Player.O;
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
      return this.field[1][1] === Cell.X ? Player.X : Player.O;
    }

    return null;
  }

}

export { TicTacToeEngine, Cell, Player };