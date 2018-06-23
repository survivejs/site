import React from "react";

const MaintenanceIndex = () => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <div className="front-name">
          <span className="first">Survive</span>
          <span className="second">JS</span>
          <span className="first"> — Maintenance</span>
        </div>

        <h1 className="front-header">Streamline JavaScript Workflow</h1>

        <div className="front-button-wrapper">
          <span className="read-free">
            <a href="/maintenance/preface/">Read for free</a>
          </span>

          <span className="buy-or">or</span>

          <a
            className="btn btn--buy-main"
            href="https://leanpub.com/survivejs-maintenance"
          >
            Improve Your JavaScript Projects
          </a>
        </div>
      </div>
    </div>

    <div className="post">
      <section className="post__content landing__content">
        <div className="landing__block post__description">
          <h2>SurviveJS - Maintenance</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance.md").body,
            }}
          />
        </div>
        <div className="landing__block post__authors">
          <h2>About the Authors</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
            }}
          />
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/artem.md").body,
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/maintenance.md").body,
            }}
          />
        </div>
      </section>
    </div>
  </div>
);

export default MaintenanceIndex;
