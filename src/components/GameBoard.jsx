const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ gameBoard, onSelectSquare }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handlePlayerClick = (rowInd, colInd) => {
  //     console.log(`user clicking on ${rowInd} and ${colInd}`);
  //     setGameBoard((previousGameBoard) => {
  //       const updatedGameBoard = [...previousGameBoard].map((row) => [...row]);
  //       updatedGameBoard[rowInd][colInd] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowInd) => {
        return (
          <li key={rowInd}>
            <ol>
              {row.map((col, colInd) => {
                return (
                  <li key={colInd}>
                    <button
                      onClick={() => {
                        console.log(rowInd, colInd);
                        onSelectSquare(rowInd, colInd);
                      }}
                      disabled={!!col}
                    >
                      {col}
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
