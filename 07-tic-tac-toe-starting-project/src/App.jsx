import { useState } from "react";
import GameBoard from "./component/GameBoard.jsx";
import Player from "./component/Player.jsx";
import Log from "./component/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

function deriveActivePlayer(gameTurn) {
  let currentPlayer ='X';
  if(gameTurn && gameTurn.length>0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initialGameBoard = [
[null, null, null],
[null, null, null],
[null, null, null]
];

export default function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const currentActivePlayer =deriveActivePlayer(gameTurn);


  let gameBoard = initialGameBoard;
    for(const turn of gameTurn) {
        const{square, player} = turn;
        const {rowIndex, colIndex} = square;
        gameBoard[rowIndex][colIndex] = player;
    }

  
  function handleSelectButton(rowIndex, colIndex) {

    // for(const combinations of WINNING_COMBINATIONS) {
    //   const firstRowPlayer = gameBoard[combinations[0].row]
    // }


    setGameTurn(prevTurn => {
      
      const currentPlayer = deriveActivePlayer(prevTurn);
      let newTurn = {
            "square": {
              "rowIndex": rowIndex, 
              "colIndex": colIndex 
            },
            "player": currentPlayer
      };
      const updatedTurns = [newTurn, ...prevTurn];
      return updatedTurns;
    })
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive = {currentActivePlayer === 'X'}/>          
          <Player initialName="Player 2" symbol="0" isActive = {currentActivePlayer === '0'}/>
        </ol>
        <GameBoard onSelectedButton={handleSelectButton} boards={gameBoard}/>
      </div>
      
        <Log turns={gameTurn }/>
      
    </main>
  );
}
