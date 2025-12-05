import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(!isEditing);
  }
  let playerContent = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerContent = (
      <input type="text" required value={name} placeholder="Edit name" />
    );
  }
  return (
    <li>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
