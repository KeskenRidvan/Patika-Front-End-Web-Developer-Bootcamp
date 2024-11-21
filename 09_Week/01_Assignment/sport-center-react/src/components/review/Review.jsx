import React from "react";
import "./review.css";
import Client1 from "../../assets/images/review-clients/client1.jpg";
import Client2 from "../../assets/images/review-clients/client2.jpg";

function Review() {
  return (
    <section id="review">
      <div className="review-container container">
        <div className="header">
          <h2>REVIEW CLIENT</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto itaque, sapiente! <br /> illum temporibus nihil.
          </p>
        </div>

        {/* client-container */}
        <div className="client-container">
          {/* client-review-1 */}
          <div className="client-review">
            <div className="client">
              <img src={Client1} />
              <p>
                <span>Diet Expert</span>
                <br />
                CFO
              </p>
            </div>

            <div className="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                nihil recusandae. Atque, illum corporisodio pariatur ad harum
                non, molestias maiores molestiae sapiente perferendis veniam
                earum!
              </p>
            </div>
          </div>
          {/* client-review-1 end */}

          {/* client-review-2 */}
          <div className="client-review">
            <div className="client">
              <img src={Client2} />
              <p>
                <span>Cardio Trainer</span>
                <br />
                CEO
              </p>
            </div>
            <div className="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                nihil recusandae. Atque, illum corporisodio pariatur ad harum
                non, molestias maiores molestiae sapiente perferendis veniam
                earum!
              </p>
            </div>
          </div>
          {/* client-review-2 end */}
        </div>
      </div>
      {/* client-container end */}
    </section>
  );
}

export default Review;
