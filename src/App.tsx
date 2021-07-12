import React from 'react';

// Components
import Board from './components/Board/board';

function App() {
  return (
      <div
       className="App"
       style={{
         position: 'relative',       
         background: '#191A1C'
       }}
       >
        <Board />
      </div>
  );
}

export default App;
