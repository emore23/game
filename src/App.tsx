import React from 'react';

// Components
import Board from './components/Board/board';
import { GAME_SIZE } from './settings/constants';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <div
       style={{
         position: 'relative',
         width: GAME_SIZE,
         height: GAME_SIZE,
         background: '#191A1C'
       }}
       >
        <Board />
      </div>
    </div>
  );
}

export default App;
