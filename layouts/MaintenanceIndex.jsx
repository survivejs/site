import React from "react";
import { Testimonial } from "@survivejs/components";

const MaintenanceIndex = () => (
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
            <span className="first"> - Maintenance</span>
          </div>

          <h1 className="front-header">From apprentice to master</h1>

          <div className="front-button-wrapper">
            <span className="read-free">
              <a href="/maintenance/preface/">Read the free version</a>
            </span>

            <span className="buy-or">or</span>

            <a
              className="btn btn--buy-main"
              href="https://leanpub.com/survivejs-maintenance"
            >
              Become a maintenance master
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="post post--front">
      <section className="post__content">
        <div
          dangerouslySetInnerHTML={{ __html: require("./maintenance.md").body }}
        />
      </section>
    </div>
  </div>
);

export default MaintenanceIndex;
