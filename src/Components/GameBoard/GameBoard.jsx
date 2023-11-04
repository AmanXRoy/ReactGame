import React, { useEffect, useRef, useState } from "react";
import "./GameBoard.css";
import rockSvg from "../../Assets/icon-rock.svg";
import paperSvg from "../../Assets/icon-paper.svg";
import scissorsSvg from "../../Assets/icon-scissors.svg";
import triangleSvg from "../../Assets/bg-triangle.svg";
import PlayArea from "../PlayArea/PlayArea";
function GameBoard({ stateHandler }) {
  let [userOption, setUserOption] = useState("");
  let [initialState, setInitialState] = useState(true);
  let pRef = useRef(null);
  let sRef = useRef(null);
  let rRef = useRef(null);
  useEffect(() => {
    if (userOption) {
      setUserOption(userOption);
      setInitialState(false);
    }
  }, [userOption]);
  return (
    <>
      {initialState ? (
        <div className="gameboard-wrapper">
          <div className="cta-wrapper">
            <button
              className="btn paper-btn"
              data-id={"paper"}
              onClick={() => {
                setUserOption(pRef.current.getAttribute("data-id"));
              }}
              ref={pRef}
            >
              <img src={paperSvg} alt="paper option" />
            </button>
            <button
              className="btn scissors-btn"
              data-id={"scissors"}
              ref={sRef}
              onClick={() => {
                setUserOption(sRef.current.getAttribute("data-id"));
              }}
            >
              <img src={scissorsSvg} alt="scissors option " />
            </button>
            <button
              className="btn rock-btn"
              data-id={"rock"}
              ref={rRef}
              onClick={() => {
                setUserOption(rRef.current.getAttribute("data-id"));
              }}
            >
              <img src={rockSvg} alt="rock option" />
            </button>
            <img src={triangleSvg} alt="back icon" />
          </div>
        </div>
      ) : (
        <PlayArea userOption={userOption} />
      )}
    </>
  );
}

export default GameBoard;