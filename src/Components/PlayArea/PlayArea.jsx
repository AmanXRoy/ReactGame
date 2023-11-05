import React, { useEffect, useRef, useState } from "react";
import "./PlayArea.css";

let computerOption = ["rock", "paper", "scissors"];
let resultMsg = "";

function PlayArea({
  userOption,
  setScore,
  setInitialState,
  setUserOption,
  score,
}) {
  let computerChoice = useRef(null);
  let [userClass, setClassName] = useState("user-choice");
  let [computerClass, setComputerChoiceClassName] = useState("computer-choice");
  let [showResult, setShowResult] = useState(false);

  const generateComputerOption = () => {
    let randomIndex = Math.round(Math.random() * (computerOption.length - 1));
    return computerOption[randomIndex];
  };

  const calculateResult = (userOption, computerOption) => {
    if (userOption === "rock") {
      if (computerOption === "scissors") {
        setComputerChoiceClassName("computer-choice selected scissors-choice");
        resultMsg = "You Win";
        setShowResult(true);
      } else if (computerOption === "rock") {
        setComputerChoiceClassName("computer-choice selected rock-choice");
        resultMsg = "Draw";
        setShowResult(true);
      } else {
        setComputerChoiceClassName("computer-choice selected paper-choice");
        resultMsg = "You Lose";
        setShowResult(true);
      }
    } else if (userOption === "paper") {
      if (computerOption === "rock") {
        setComputerChoiceClassName("computer-choice selected rock-choice");
        resultMsg = "You Win";
        setShowResult(true);
      } else if (computerOption === "paper") {
        setComputerChoiceClassName("computer-choice selected paper-choice");
        resultMsg = "Draw";
        setShowResult(true);
      } else {
        setComputerChoiceClassName("computer-choice selected scissors-choice");
        resultMsg = "You Lose";
        setShowResult(true);
      }
    } else if (userOption === "scissors") {
      if (computerOption === "paper") {
        setComputerChoiceClassName("computer-choice selected paper-choice");
        resultMsg = "You Win";
        setShowResult(true);
      } else if (computerOption === "scissors") {
        setComputerChoiceClassName("computer-choice selected scissors-choice");
        resultMsg = "Draw";
        setShowResult(true);
      } else {
        setComputerChoiceClassName("computer-choice selected rock-choice");
        resultMsg = "You Loose";
        setShowResult(true);
      }
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
    computerChoice.current.classList.add("animate-options");
    setTimeout(() => {
      computerChoice.current.classList.remove("animate-options");
      calculateResult(userOption, generateComputerOption());
    }, 2000);
  }, [userOption]);

  return (
    <div className="play-area">
      <div className="user-card">
        <p className="user-title">You Picked</p>
        <div className={userClass}></div>
      </div>

      {showResult ? (
        <div className="final-msg">
          <p className="final-msg-title">{resultMsg}</p>
          <button
            className="try-again"
            onClick={() => {
              setInitialState(true);
              setUserOption("");
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        null
      )}

      <div className="computer-card">
        <p className="computer-title">Computer Picked</p>
        <div className={computerClass} ref={computerChoice}></div>
      </div>
    </div>
  );
}

export default PlayArea;
