import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ComputerMovesFirst() {
  const [board, setboard] = useState(Array(9).fill(""));
  const [move, setmove] = useState(false);
  const [result, setresult] = useState("");
  const [gameover, setgameover] = useState(false);
  const [computerMove, setComputerMove] = useState(true);

  useEffect(() => {
    if (computerMove) {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * 9);
        const Newboard = [...board];
        Newboard[randomIndex] = "X";
        setboard(Newboard);
        setmove(true);
      }, 700);
        setComputerMove(false);
    }    
  }, []);

  const handleClick = (index) => {
    if (board[index] !== "" || gameover) return;

    const newBoard = [...board];
    if (move) {
      newBoard[index] = "O";
      setmove(!move);
      setboard(newBoard);
      checkWinner(newBoard);
      setTimeout(() => {
        computerTurn(newBoard);
      }, 700);
    }
  };

  const computerTurn = (newBoard) => {
    let bestScore = -Infinity;
    let bestMove = null;
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        let score = Minimax(newBoard, 0, false);
        newBoard[i] = "";

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    newBoard[bestMove] = "X";
    setboard(newBoard);
    setmove(true);
    checkWinner(newBoard, true);
  };

  const Minimax = (newBoard, depth, maximizing) => {
    let winner = checkWinner(newBoard, false);
    if (winner !== "continue") {
      if (winner === "X") return 10 - depth;
      else if (winner === "O") return depth - 10;
      return 0;
    }

    if (maximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === "") {
          newBoard[i] = "X";
          let score = Minimax(newBoard, depth + 1, false);
          newBoard[i] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === "") {
          newBoard[i] = "O";
          let score = Minimax(newBoard, depth + 1, true);
          newBoard[i] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const checkWinner = (newBoard, isGameOver) => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningCombination) {
      const [a, b, c] = combination;
      if (
        newBoard[a] !== "" &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        if (isGameOver) {
          if (newBoard[a] === "O") setresult(`🎊 You Win 🎊`);
          else setresult(`💀You Lose💀`);
          setgameover(true);
        }
        return newBoard[a];
      }
    }
    if (newBoard.every((cell) => cell !== "")) {
      if (isGameOver) {
        setresult("It's a Draw");
        setgameover(true);
      }
      return "Draw";
    }
    return "continue";
  };

  function updateFirstMove(BOARD){
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      const Newboard = [...BOARD];
      Newboard[randomIndex] = "X";
      setboard(Newboard);
      setmove(true);
    }, 700);
  }

  return (
    <div
      className="h-screen"
      style={{ background: "linear-gradient(to right, brown, black )" }}
    >
      <div>
        <Link to={"/SelectFirstMove"}>
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
        Single-Player Mode
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
                setgameover(false);
                setmove(false); 
                setComputerMove(true);
                updateFirstMove(Array(9).fill(""));
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
