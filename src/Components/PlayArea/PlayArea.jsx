import React, { useEffect, useState } from "react";
import "./PlayArea.css";

let computerOption = ["rock", "paper", "scissors"];

function PlayArea({ userOption }) {
  let [userClass, setClassName] = useState("user-choice");
  let [userWin, setUserWin] = useState("");

  const generateComputerOption = () => {
    let randomIndex = Math.round(Math.random() * (computerOption.length - 1));
    return computerOption[randomIndex];
  };

  const calculateResult = (userOption, computerOption) => {
    if (userOption === "rock" && computerOption === "scissors") {
      setUserWin(true);
    } else if (userOption === "paper" && computerOption === "rock") {
      setUserWin(true);
    } else if (userOption === "scissors" && computerOption === "paper") {
      setUserWin(true);
    }
  };

  useEffect(() => {
    if (userOption === "paper") {
      setClassName("user-choice selected paper-choice");
    } else if (userOption === "rock") {
      setClassName("user-choice selected rock-choice");
    } else if (userOption === "scissors") {
      setClassName("user-choice selected scissors-choice");
    }

    setTimeout(() => {
      calculateResult(userOption, generateComputerOption());
    }, 2000);
  }, [userOption]);

  return (
    <div className="play-area">
      <div className="user-card">
        <p className="user-title">You Picked</p>
        <div className={userClass}></div>
      </div>

      {userWin ? (
        <div className="final-msg">
          <p className="final-msg-title">{userWin ? "You Win" : "You Lose"}</p>
          <button
            className="try-again"
            style={userWin ? { color: "#000" } : { color: "red" }}
          >
            {generateComputerOption()}
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="computer-card">
        <p className="computer-title">Computer Picked</p>
        <div className="computer-choice"></div>
      </div>
    </div>
  );
}

export default PlayArea;
