import React, {  useState } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import Header from "./Components/Header/Header";
import RulesBox from "./Components/RulesBox/RulesBox";

function App() {
  let [modelState, setModelState] = useState(false);

 
  return (
    <div className="game-wrapper">
      <div className="container">
        <Header />
          <GameBoard/>
      </div>
      <button
        className="rules-cta"
        onClick={() => {
          setModelState(true);
        }}
      >
        Rules
      </button>
      <RulesBox modelState={modelState} stateChange={setModelState} />
    </div>
  );
}

export default App;
