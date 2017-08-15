import React from "react";

const ClinicIndex = () =>
  <div className="frontpage">
    <div
      className="front__heading"
      style={{ height: "20%", minHeight: "20em" }}
    >
      <div className="front-heading-content-wrapper">
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">Survive</span>
            <span className="second">JS</span>
            <span className="first"> - Clinic</span>
          </div>

          <h1 className="front-header">From apprentice to master</h1>
        </div>
      </div>
    </div>

    <div className="post post--front">
      <section className="post__content">
        <div
          dangerouslySetInnerHTML={{
            __html: require("./clinic.md").body
          }}
        />
      </section>
    </div>
  </div>;

export default ClinicIndex;
