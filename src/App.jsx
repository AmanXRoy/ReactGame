import React from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import RulesBox from "./Components/RulesBox/RulesBox";
import { useDispatch } from "react-redux";
import {showRules} from './State/reducer/reducer'

function App() {
  const disPatch = useDispatch()

  return (
    <div className="game-wrapper">
      <div className="container">
        <GameBoard />
      </div>
      <button
        className="rules-cta"
        onClick={() => {
          disPatch(showRules(true));
        }}
      >
        Rules
      </button>
      <RulesBox/>
    </div>
  );
}

export default App;
