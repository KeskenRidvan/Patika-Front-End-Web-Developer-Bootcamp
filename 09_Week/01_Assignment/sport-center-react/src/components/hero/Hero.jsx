import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="badged">
          <span>POWERFULL</span>
        </div>
        <div className="content">
          <h1>
            Group <br />
            Practice <br />
            With Trainer
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
            voluptas autem minima reiciendis qui dolorem quasi sequi suscipit
            similique. Voluptas laudantium quam earum iure numquam nulla
            corrupti eum, dolorem, reprehenderit repudiandae blanditiis quod et
            numquam inventore?
          </p>
        </div>
        <div className="button-group">
          <a className="btn btn-primary btn-large" href="#">
            Sign Up
          </a>
          <a className="btn btn-outline btn-large" href="#">
            Details
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
