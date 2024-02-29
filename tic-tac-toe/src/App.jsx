import { useState } from "react";
import {Square} from "./components/index.js";

function App() {
  const [p1, setP1] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (i) => {
    if (checkWinner(squares[i]) || squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (p1) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setP1(!p1);
  };

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }      
    }
    return null;
  };

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }else {
    status = "Next Player: " + (p1 ? "X" : "O");
  }

  return (
    <div className="w-full min-h-screen bg-gray-600 flex flex-col justify-center items-center gap-y-20 font-mono">
      <div className="text-white font-semibold text-3xl">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
          <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
          <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
        </div>

        <div className="board-row">
          <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
          <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
          <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
        </div>

        <div className="board-row">
          <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
          <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
          <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;