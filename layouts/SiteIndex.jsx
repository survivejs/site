import React from "react";
import { LatestPost } from "@survivejs/components";

const SiteIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-header-wrapper">
        <div className="front-name">
          <span className="first">Survive</span>
          <span className="second">JS</span>
        </div>
        <h1 className="front-header">
          Learn JavaScript
          <div className="front-motto">
            SurviveJS will take you from apprentice to master
          </div>
        </h1>
      </div>
    </div>

    <div className="post">
      <section className="post__content landing__content">
        <div className="landing__block post__description">
          <LatestPost section={section} />

          <h2>SurviveJS - Maintenance</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/maintenance.md").body,
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/maintenance.md").body,
            }}
          />

          <h2>SurviveJS - React</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/react.md").body,
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/react.md").body,
            }}
          />
        </div>
        <div className="landing__block post__authors">
          <h2>SurviveJS - Webpack</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/webpack.md").body,
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/gets/webpack.md").body,
            }}
          />

          <h2>About the Author</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/descriptions/index.md").body,
            }}
          />

          <LatestPost section={section} />
        </div>
      </section>
    </div>
  </div>
);

export default SiteIndex;
