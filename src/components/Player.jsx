import { use } from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((edit) => !edit);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let playerContent = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerContent = (
      <input
        type="text"
        required
        onChange={handleChange}
        value={playerName}
        placeholder="Edit name"
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
