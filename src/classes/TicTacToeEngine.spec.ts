import { expect } from '@jest/globals';
import { TicTacToeEngine, Cell, Player } from './TicTacToeEngine';

test('creates instance', () => {
    const engine = new TicTacToeEngine();
    expect(engine).toBeTruthy();
});


test('makes turn', () => {
    const engine = new TicTacToeEngine();
    engine.turn(0, 0);
    expect(engine.field[0][0]).toBe(Cell.X);
    expect(engine.player).toBe(Player.O);
});


test('allows changing cell only once', () => {
    const engine = new TicTacToeEngine();
    expect(engine.turn(0, 0)).toBe(true);
    expect(engine.player).toBe(Player.O);
    expect(engine.turn(0, 0)).toBe(false);
    expect(engine.field[0][0]).toBe(Cell.X);
});


test('checks winner diagonal', () => {
    const engine = new TicTacToeEngine();
    engine.turn(0, 0);
    engine.turn(0, 1);
    engine.turn(1, 1);
    engine.turn(0, 2);
    expect(engine.checkWinner()).toBe(null);
    engine.turn(2, 2);
    expect(engine.checkWinner()).toBe(Player.X);
});


test('checks winner horizontal', () => {
    const engine = new TicTacToeEngine();

    engine.turn(0, 0);
    engine.turn(1, 0);
    engine.turn(0, 1);
    engine.turn(1, 1);
    engine.turn(2, 2);
    engine.turn(1, 2);
    expect(engine.checkWinner()).toBe(Player.O);
});


test('restarts', () => {
    const engine = new TicTacToeEngine();
    engine.turn(0, 0);
    expect(engine.player).toBe(Player.O);
    expect(engine.field[0][0]).toBe(Cell.X);
    engine.restart();
    expect(engine.player).toBe(Player.X);
    expect(engine.field[0][0]).toBe(Cell.Empty);
});
