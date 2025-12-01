import { useState } from "react";

const initialGameBoard = [
[null, null, null],
[null, null, null],
[null, null, null]
];

export default function GameBoard({onSelectedButton, activePlayerSymbol}) {
    const[gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSeletedButton(rowIndex, columnIndex) {
        setGameBoard ((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArray => [...innerArray]))];
            updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectedButton();
    }

    return (
        <ol id="game-board">
            {gameBoard.map ((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) =>
                            <li key={columnIndex}> 
                                <button onClick={()=>handleSeletedButton(rowIndex, columnIndex)}>{playerSymbol}</button>
                            </li>
                        ) }
                    </ol>
                </li>
        )}
        </ol>
    );
}