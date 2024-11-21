import React, { useState, useEffect, useRef } from "react";
import Dice from "./components/Dice/Dice";
import "./App.css";

function App() {
  const [player1Roll, setPlayer1Roll] = useState(1);
  const [player2Roll, setPlayer2Roll] = useState(2);
  const [message, setMessage] = useState("Roll the Dice!");
  const [isRolling, setIsRolling] = useState(false);
  const [player1Label, setPlayer1Label] = useState("Player 1");
  const [player2Label, setPlayer2Label] = useState("Player 2");
  const timeouts = useRef([]);

  const rollAnimationSteps = 6;
  const rollInterval = 450;
  const messageDelay = 450;

  const randomRoll = () => Math.floor(Math.random() * 6) + 1;

  const roll = (isFinal = false) => {
    const roll1 = randomRoll();
    const roll2 = randomRoll();
    setPlayer1Roll(roll1);
    setPlayer2Roll(roll2);

    if (isFinal) {
      setTimeout(() => {
        if (roll1 > roll2) {
          setMessage(`${player1Label} Wins!`);
        } else if (roll1 < roll2) {
          setMessage(`${player2Label} Wins!`);
        } else {
          setMessage("Draw! 🤝");
        }
        setIsRolling(false);
      }, messageDelay);
    }
  };

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setMessage("Rolling...");

    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    for (let i = 0; i <= rollAnimationSteps; i++) {
      const isFinal = i === rollAnimationSteps;
      const timeout = setTimeout(() => roll(isFinal), rollInterval * i);
      timeouts.current.push(timeout);
    }
  };

  useEffect(() => {
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <div className="players">
        <input
          type="text"
          value={player1Label}
          onChange={(event) => setPlayer1Label(event.target.value)}
          className="player-label"
        />
        <input
          type="text"
          value={player2Label}
          onChange={(event) => setPlayer2Label(event.target.value)}
          className="player-label"
        />
      </div>
      <div className="dice-container">
        <Dice number={player1Roll} />
        <Dice number={player2Roll} />
      </div>
      <button
        className={`roll-button ${isRolling ? "disabled" : ""}`}
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
}

export default App;
