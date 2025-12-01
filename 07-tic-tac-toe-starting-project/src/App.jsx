import { useState } from "react";
import GameBoard from "./component/GameBoard.jsx";
import Player from "./component/Player.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  // const [log, setLog] = useState('')

  function handleSelectButton() {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? '0': 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive = {activePlayer === 'X'}/>          
          <Player initialName="Player 2" symbol="0" isActive = {activePlayer === '0'}/>
        </ol>
        <GameBoard onSelectedButton={handleSelectButton} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
      
    </main>
  );
}

export default App
