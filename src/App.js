import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";

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

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleGameplay = (clickedSquare) => {
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎";
      setBoard(updateBoard);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌴";
      setBoard(updateBoard);
    }
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
