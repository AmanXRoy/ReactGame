import React, { useEffect, useRef } from "react";
import "./PlayArea.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateResult, playAgain } from '../../State/reducer/reducer';
import Confetti from "react-confetti";
function PlayArea() {
  const disPatch = useDispatch();

  const { userChoice, computerChoice, isResult, userWin, isDraw } = useSelector(state => state);

  const winnerRing = {
    boxShadow: '0 0 0px 50px rgba(0,0,0,0.1), 0 0 0 100px rgba(0,0,0,0.1), 0 0 0 150px rgba(0,0,0,0.1)'
  };

  let computerElement = useRef(null);

  // useEffect for calculating Result on each render after setTimout
  useEffect(() => {
    computerElement.current.classList.add('animate-options')
    setTimeout(() => {
      computerElement.current.classList.remove('animate-options')
      disPatch(calculateResult())
    }, 2000)
  }, [disPatch])

  return (
    <div className="play-area">
      <div className="user-card">
        <p className="user-title">You Picked</p>
        <div className={userChoice ? 'user-choice selected ' + userChoice + '-choice' : ' user-choice'} style={userWin ? winnerRing : {}}></div>
      </div>

      {isResult ? (
        <div className="final-msg">
          <p className="final-msg-title">{userWin ? 'You Win' : isDraw ? 'Draw' : 'You Loose'}</p>
          <button
            className="try-again"
            onClick={() => {
              disPatch(playAgain())
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        null
      )}

      <div className="computer-card">
        <p className="computer-title">The House Picked</p>
        <div className={computerChoice ? 'computer-choice selected ' + computerChoice + '-choice' : ' computer-choice'} ref={computerElement}></div>
      </div>
      {userWin ? <Confetti /> : null}
    </div>
  );
}

export default PlayArea;
