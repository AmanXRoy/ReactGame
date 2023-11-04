import React, { useEffect } from "react";
import "./RulesBox.css";
import rulesSVG from "../../Assets/image-rules.svg";
import closeSvg from "../../Assets/icon-close.svg";

function RulesBox({ modelState, stateChange }) {
  return (
    <div
      className="rules-box-overlay"
      style={modelState ? { display: "block" } : { display: "none" }}
    >
      <div className="rules-box">
        <div className="model-header">
          <p className="title">Rules</p>
          <button
            className="close-model"
            onClick={() => {
              stateChange(false);
            }}
          >
            <img src={closeSvg} alt="close" />
          </button>
        </div>
        <img src={rulesSVG} alt="rules" />
      </div>
    </div>
  );
}

export default RulesBox;
