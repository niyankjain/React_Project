export default function GameBoard({onSelectedButton, boards}) {
   
    return (
        <ol id="game-board">
            {boards.map ((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) =>
                            <li key={columnIndex}> 
                               <button onClick={()=>onSelectedButton(rowIndex, columnIndex)} disabled= {playerSymbol !== null}>{playerSymbol}</button> 
                            </li>
                        ) }
                    </ol>
                </li>
        )}
        </ol>
    );
}