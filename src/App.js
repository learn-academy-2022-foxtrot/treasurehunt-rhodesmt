import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";


const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const handleGameplay = (clickedSquare) => {
    let updateBoard = [...board];
    updateBoard[clickedSquare] = "🌴"
    setBoard(updateBoard)
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-game">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              handleGameplay={handleGameplay}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
