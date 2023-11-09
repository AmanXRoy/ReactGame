import React from "react";
import "./RulesBox.css";
import rulesSVG from "../../Assets/image-rules.svg";
import closeSvg from "../../Assets/icon-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { showRules } from "../../State/reducer/reducer";

function RulesBox() {

  const isRules = useSelector(state => state.isRules);
  const disPatch = useDispatch()
  return (
    <div
      className="rules-box-overlay"
      style={isRules ? { display: "block" } : { display: "none" }}
    >
      <div className="rules-box">
        <div className="model-header">
          <p className="title">Rules</p>
          <button
            className="close-model"
            onClick={() => {
              disPatch(showRules(false));
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
