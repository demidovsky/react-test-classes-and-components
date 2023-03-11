import { expect } from '@jest/globals';

import { TicTacToeEngine } from './TicTacToeEngine';

test('creates instance', () => {
    const engine = new TicTacToeEngine();
    expect(engine).toBeTruthy();
});