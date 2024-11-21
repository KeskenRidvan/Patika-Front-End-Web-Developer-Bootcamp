import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-container container">
        {/* course */}
        <div className="box">
          <span className="box-title">325</span>
          <span className="box-content">Course</span>
        </div>
        {/*  course end */}

        {/*  work out */}
        <div className="box">
          <span className="box-title">405</span>
          <span className="box-content">Work Out</span>
        </div>
        {/*  work out end */}

        {/*  working hour */}
        <div className="box">
          <span className="box-title">305</span>
          <span className="box-content">Working Hour</span>
        </div>
        {/*  working hour end */}

        {/*  happy client */}
        <div className="box">
          <span className="box-title">705</span>
          <span className="box-content">Happy Client</span>
        </div>
        {/*  happy client end */}
      </div>
    </section>
  );
}

export default Dashboard;
