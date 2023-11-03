import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import Header from "./Components/Header/Header";

function App() {
  return (
      <div className="game-wrapper">
        <div className="container">
          <Header />
          <GameBoard />
        </div>
        <button className="rules-cta">Rules</button>
      </div>
  );
}

export default App;
