import React, { useState } from "react";
import Yoga from "../../assets/images/our-classes/yoga.jpg";
import Group from "../../assets/images/our-classes/group.webp";
import Solo from "../../assets/images/our-classes/solo.jpg";
import Stretching from "../../assets/images/our-classes/stret.webp";

import "./classes.css";

function Classes() {
  const [activeFilter, setActiveFilter] = useState("Yoga");

  const classesData = [
    {
      name: "Yoga",
      title1: "Why are your Yoga?",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vitae quo? Atque, quasi nostrum? Iusto repellat quisquam quaerat perferendis quos.",
      title2: "When comes Yoga Your Time.",
      timings: [
        "Saturday-Sunday: 08:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00am",
        "Saturday-Sunday: 08:00pm - 06:00pm",
      ],
      image: Yoga,
    },
    {
      name: "Group",
      title1: "Why are your Group?",
      desc1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias voluptate nam neque quis vero natus, repudiandae atque veritatis voluptatum.",
      title2: "When comes Group Your Time.",
      timings: [
        "Saturday-Sunday: 08:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00am",
        "Saturday-Sunday: 08:00pm - 06:00pm",
      ],
      image: Group,
    },
    {
      name: "Solo",
      title1: "Why are your Solo?",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio voluptatibus animi rem mollitia eius temporibus esse? Id, veniam dolore?",
      title2: "When comes Solo Your Time.",
      timings: [
        "Saturday-Sunday: 08:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00am",
        "Saturday-Sunday: 08:00pm - 06:00pm",
      ],
      image: Solo,
    },
    {
      name: "Stretching",
      title1: "Why are your Stretching?",
      desc1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde temporibus mollitia numquam consequuntur, totam asperiores molestiae aut nobis reiciendis ullam.",
      title2: "When comes Stretching Your Time.",
      timings: [
        "Saturday-Sunday: 08:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00am",
        "Saturday-Sunday: 08:00pm - 06:00pm",
      ],
      image: Stretching,
    },
  ];

  const activeClass = classesData.find((cls) => cls.name === activeFilter);

  return (
    <section id="classes">
      <div className="bg-shape"></div>
      <div className="container classes-container">
        <div className="header">
          <h2>OUR CLASSES</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto itaque, sapiente! <br /> illum temporibus nihil.
          </p>
        </div>

        {/* filter buttons */}
        <div className="tab-box">
          {classesData.map((cls) => (
            <button
              key={cls.name}
              className={`btn btn-large btn-primary tab-button ${
                activeFilter === cls.name ? "active" : ""
              }`}
              onClick={() => setActiveFilter(cls.name)}
            >
              {cls.name}
            </button>
          ))}
        </div>
        {/* filter buttons end */}

        {/* content */}
        <div className="content-box">
          <div className="content active">
            <h4>{activeClass.title1}</h4>
            <p>{activeClass.desc1}</p>

            <h4>{activeClass.title2}</h4>
            {activeClass.timings.map((time, index) => (
              <p key={index}>{time}</p>
            ))}
          </div>

          {/* content image */}
          <div className="content-image active">
            <img src={activeClass.image} alt={`${activeClass.name} Picture`} />
          </div>
          {/* content image end */}
        </div>
        {/* content end */}
      </div>
    </section>
  );
}

export default Classes;
