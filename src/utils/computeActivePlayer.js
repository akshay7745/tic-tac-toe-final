export default function computeActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length && turns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}
