import { useState } from "react";
const initialGameBoard = new Array(3).fill(new Array(3).fill(null));

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handlePlayerClick = (rowInd, colInd) => {
    console.log(`user clicking on ${rowInd} and ${colInd}`);
    setGameBoard((previousGameBoard) => {
      const updatedGameBoard = [...previousGameBoard].map((row) => [...row]);
      updatedGameBoard[rowInd][colInd] = activePlayerSymbol;
      return updatedGameBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowInd) => {
        return (
          <li key={rowInd}>
            <ol>
              {row.map((col, colInd) => {
                return (
                  <li key={colInd}>
                    <button onClick={() => handlePlayerClick(rowInd, colInd)}>
                      {gameBoard[rowInd][colInd]}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
