/**
 * @jest-environment jsdom
 */

import React from 'react';
import { act, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Board } from './Board';
import { TicTacToeEngine, Cell } from '../classes/TicTacToeEngine';

test('restarts', () => {
  const engine = new TicTacToeEngine();
//   const mockOnClick = jest.fn();
  render(<Board engine={engine}/>);

  const buttonElement = screen.getByTitle('square-0-0');
  act(() => {
    buttonElement.click();
  });
  expect(engine.field[0][0]).toBe(Cell.X);
  

  const resetElement = screen.getByText('Reset');
  act(() => {
    resetElement.click();
  });
  expect(engine.field[0][0]).toBe(Cell.Empty);
});
