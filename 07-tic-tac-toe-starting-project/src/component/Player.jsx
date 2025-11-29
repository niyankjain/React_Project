import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);    

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    if(isEditing) {
        player = <input type="text" required value={playerName} onChange={handleChange}/>;
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className="player">
                {player} 
                <span className="player-symbol">{symbol}</span>
            </span>
            <span><button onClick={handleEditClick}>{btnCaption}</button></span>
        </li>
    );
}