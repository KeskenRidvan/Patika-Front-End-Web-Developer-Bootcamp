import React from "react";
import "./trainers.css";

import Trainer1 from "../../assets/images/trainers/trainer1.jpg";
import Trainer2 from "../../assets/images/trainers/trainer2.jpg";
import Trainer3 from "../../assets/images/trainers/trainer3.jpg";

function Trainers() {
  return (
    <section id="trainers">
      <div className="trainers-container container">
        <div className="header">
          <h2>OUR BEST TRAINERS</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto itaque, sapiente! <br /> illum temporibus nihil.
          </p>
        </div>

        <div className="trainers-wrapper">
          {/*  trainer Marry  */}
          <div className="trainer-portfolio">
            <div className="border"></div>
            <img src={Trainer1} alt="" />
            <div className="border-bottom"></div>
            <div className="trainer-layer">
              <h4>Marry Doe</h4>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          {/*  trainer Marry end  */}

          {/*  trainer Jone  */}
          <div className="trainer-portfolio">
            <div className="border"></div>
            <img src={Trainer2} alt="" />
            <div className="border-bottom"></div>
            <div className="trainer-layer">
              <h4>Jone Doe</h4>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          {/*  trainer Jone end */}

          {/*  trainer Jane  */}
          <div className="trainer-portfolio">
            <div className="border"></div>
            <img src={Trainer3} alt="" />
            <div className="border-bottom"></div>
            <div className="trainer-layer">
              <h4>Jane Doe</h4>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          {/*  trainer Jane end  */}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
