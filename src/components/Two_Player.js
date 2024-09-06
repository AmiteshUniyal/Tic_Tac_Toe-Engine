import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TwoPlayer() {
  const [board, setboard] = useState(Array(9).fill(""));
  const [move, setmove] = useState(true);
  const [result, setresult] = useState("");
  const [gameover, setGameover] = useState(false);

  const handleClick = (index) => {
    if (board[index] !== "" || gameover) return;

    const newBoard = [...board];
    newBoard[index] = move ? "O" : "X";
    setboard(newBoard);
    setmove(!move);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] !== "" &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        setresult(`🎊 ${newBoard[a]} is the winner 🎊`);
        setGameover(true);
        return;
      }
    }
    if (newBoard.every((cell) => cell !== "")) {
      setresult("It's a Draw");
      setGameover(true);
    }
  };

  return (
    <div
      className="h-screen"
      style={{ background: "linear-gradient(to right, brown, black )" }}
    >
      <div>
        <Link to={"/"}>
          <button className="text-white m-4">
            <img
              src="https://www.svgviewer.dev/static-svgs/23264/leftarrowl-left-arrow-direction-arrows-pointer-move.svg"
              className="h-12"
              alt="back"
            />
          </button>
        </Link>
      </div>
      <div className="text-center text-white text-3xl sm:text-4xl">
        Two-Player Mode
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="h-[30vh] w-[30vh] sm:h-[50vh] sm:w-[50vh] mt-10 grid grid-cols-3 gap-4 sm:gap-8">
          {board.map((value, index) => (
            <div
              key={index}
              className="h-12 w-12 sm:h-20 sm:w-20 bg-yellow-100 rounded sm:rounded-2xl text-4xl sm:text-6xl text-center pt-0 sm:pt-1 font-bold text-green-800 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-6">
          <div className="w-full text-center text-white text-2xl sm:font-bold">
            <h1>{result}</h1>
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-gray-700 text-white p-2 border rounded-2xl"
              onClick={() => {
                setboard(Array(9).fill(""));
                setresult("");
                setGameover(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
