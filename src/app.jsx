// Among Us Themed Tic Tac Toe
import React, { useState } from "react";

export function App() {
  const [board, setBoard] = useState([
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
    "NOT PLaYED",
  ]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const handleTurn = (id, turn) => {
    if (winner === "X" || winner === "O") return;
    if (board[id] === "X" || board[id] === "O") return;

    const newBoard = [...board];
    newBoard[id] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };

  const Paragraph = (id, { children }) => {
    const [thisId, setThisId] = useState();
    return (
      <p
        onClick={() => {
          alert("You clicked " + thisId);
        }}
      >
        {children}
      </p>
    );
  };
  return (
    <>
      <div>
        <p id="title" style={styles.centerAllChildren}>
          AMONG Tac Toe
        </p>
      </div>
      <div style={styles.centerAllChildren}>
        <div>
          <p onClick={() => handleTurn(0, turn)}>{board[0]}</p>
          <p onClick={() => handleTurn(1, turn)}>{board[1]}</p>
          <p onClick={() => handleTurn(2, turn)}>{board[2]}</p>
        </div>
        <div>
          <p onClick={() => handleTurn(3, turn)}>{board[3]}</p>
          <p onClick={() => handleTurn(4, turn)}>{board[4]}</p>
          <p onClick={() => handleTurn(5, turn)}>{board[5]}</p>
        </div>
        <div>
          <p onClick={() => handleTurn(6, turn)}>{board[6]}</p>
          <p onClick={() => handleTurn(7, turn)}>{board[7]}</p>
          <p onClick={() => handleTurn(8, turn)}>{board[8]}</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  centerAllChildren: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
  },
};
