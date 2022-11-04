import React from 'react'
import '../styles/App.css';
import Board from './Board'
import Keyboard from './Keyboard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
