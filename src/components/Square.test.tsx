/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Square } from './Square';

test('handles click', () => {
  const mockOnClick = jest.fn();
  render(<Square onClick={mockOnClick} x={0} y={0} field={[[]]} />);
  const buttonElement = screen.getByTitle('square-0-0');
  buttonElement.click();
  expect(mockOnClick).toBeCalledTimes(1);
});
