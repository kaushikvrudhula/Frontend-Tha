import Square from "./Square";

function Chessboard() {
  let blocks = [];
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      blocks.push(
        <Square
          key={(i - 1) * 8 + j}
          bgcolor={(i + j) % 2 === 0 ? "white" : "black"}
        />
      );
    }
  }
  return <div className="board">{blocks}</div>;
}

export default Chessboard;
