import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board';
import { TicTacToeEngine } from './classes/TicTacToeEngine';

function App() {
  const engine = new TicTacToeEngine();

  return (
    <div className="App">
      <Board engine={engine} />
    </div>
  );
}

export default App;
