import React from "react";
import "./Dice.css";

function Dice({ number }) {
  const faceClass = numberToFaceClass(number);

  return (
    <div className="scene">
      <div className={`cube ${faceClass}`}>
        <div className="cubeFace cubeFace-front"></div>
        <div className="cubeFace cubeFace-back"></div>
        <div className="cubeFace cubeFace-right"></div>
        <div className="cubeFace cubeFace-left"></div>
        <div className="cubeFace cubeFace-top"></div>
        <div className="cubeFace cubeFace-bottom"></div>
      </div>
    </div>
  );
}

function numberToFaceClass(number) {
  switch (number) {
    case 1:
      return "show-front";
    case 2:
      return "show-bottom";
    case 3:
      return "show-right";
    case 4:
      return "show-left";
    case 5:
      return "show-top";
    case 6:
      return "show-back";
    default:
      return "";
  }
}

export default Dice;
