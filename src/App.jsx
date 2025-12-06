import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./utils/contants";
import computeActivePlayer from "./utils/computeActivePlayer";
import { initialGameBoard } from "./utils/contants";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = computeActivePlayer(gameTurns);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  let gameBoard = [...initialGameBoard].map((row) => [...row]);
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }

  const isDraw = !winner && gameTurns.length === 9;
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevGameTurns) => {
      const activePlayer = computeActivePlayer(prevGameTurns);
      const latestGameTurns = [
        { square: { col: colIndex, row: rowIndex }, player: activePlayer },
        ...prevGameTurns,
      ];
      return latestGameTurns;
    });
  };
  const handleRematch = () => {
    setGameTurns([]);
  };
  const handlePlayerNameChange = (symbol, playerName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: playerName };
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName={players.X}
            symbol="X"
            onChangePlayerName={handlePlayerNameChange}
          />
          <Player
            isActive={activePlayer === "O"}
            initialName={players.O}
            symbol="O"
            onChangePlayerName={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
