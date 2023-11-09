import React, { useRef } from "react";
import "./GameBoard.css";
import rockSvg from "../../Assets/icon-rock.svg";
import paperSvg from "../../Assets/icon-paper.svg";
import scissorsSvg from "../../Assets/icon-scissors.svg";
import PlayArea from "../PlayArea/PlayArea";
import Header from "../../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUserChoice } from '../../State/reducer/reducer';

function GameBoard() {
  const dispatch = useDispatch();
  let isPlaying = useSelector(state => state.isPlaying)
  let pRef = useRef(null);
  let sRef = useRef(null);
  let rRef = useRef(null);
  return (
    <>
      <Header />
      {!isPlaying ? (
        <div className="gameboard-wrapper">
          <div className="cta-wrapper">
            <button
              className="btn paper-btn"
              data-id={"paper"}
              onClick={() => {
                dispatch(setUserChoice(pRef.current.getAttribute("data-id")))
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
                dispatch(setUserChoice(sRef.current.getAttribute("data-id")))
              }}
            >
              <img src={scissorsSvg} alt="scissors option " />
            </button>
            <button
              className="btn rock-btn"
              data-id={"rock"}
              ref={rRef}
              onClick={() => {
                dispatch(setUserChoice(rRef.current.getAttribute("data-id")))
              }}
            >
              <img src={rockSvg} alt="rock option" />
            </button>
          </div>
        </div>
      ) : (
        <PlayArea />
      )}
    </>
  );
}

export default GameBoard;
