import React from "react";

// TODO: Push to a component and share with the clinic page
const WorkshopIndex = () =>
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
            <span className="first"> - Workshop</span>
          </div>

          <h1 className="front-header">From apprentice to master</h1>
        </div>
      </div>
    </div>

    <div className="post post--front">
      <section className="post__content">
        <div
          dangerouslySetInnerHTML={{
            __html: require("./workshop.md").body
          }}
        />
      </section>
    </div>
  </div>;

export default WorkshopIndex;
