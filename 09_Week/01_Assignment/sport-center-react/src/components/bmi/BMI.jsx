import React, { useState, useRef } from "react";
import "./bmi.css";

import bmiImage from "../../assets/images/bmi-index.jpg";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const gaugeRef = useRef(null);

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (heightValue > 0 && weightValue > 0) {
      const bmi = weightValue / (heightValue / 100) ** 2;
      const gaugePosition = getGaugePosition(bmi);

      if (gaugePosition !== null && gaugeRef.current) {
        gaugeRef.current.style.left = `${gaugePosition}%`;
      }
    } else if (gaugeRef.current) {
      gaugeRef.current.style.left = `0%`;
    }
  };

  const getGaugePosition = (bmi) => {
    if (bmi > 13.5 && bmi < 18.5) {
      return 7 + ((bmi - 13.5) * 16) / 5;
    } else if (bmi >= 18.5 && bmi < 25) {
      return 23 + ((bmi - 18.5) * 16) / 7;
    } else if (bmi >= 25 && bmi < 30) {
      return 40 + ((bmi - 24.5) * 16) / 5;
    } else if (bmi >= 30 && bmi < 35) {
      return 40 + ((bmi - 24.5) * 16) / 5;
    } else if (bmi >= 35 && bmi < 40) {
      return 40 + ((bmi - 24.5) * 16) / 5;
    }

    return null;
  };

  return (
    <section id="bmi">
      <div className="bmi-container container">
        <div className="left">
          <div className="content">
            <h2>BMI Calculator</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque deleniti impedit fuga tenetur nisi blanditiis optio
              ducimus sunt nesciunt minus.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="wrapper">
              <input
                type="number"
                placeholder="Your Height"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  calculateBMI();
                }}
              />
              <label>cm</label>
            </div>
            <div className="wrapper">
              <input
                type="number"
                placeholder="Your Weight"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  calculateBMI();
                }}
              />
              <label>kg</label>
            </div>
          </form>
        </div>

        <div className="right">
          <h4>Your BMI</h4>
          <div className="image-container">
            <img src={bmiImage} alt="BMI Index" />
            <div className="gauge" ref={gaugeRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BMI;
