import React from "react";
import { LatestPost, SocialLinks } from "@survivejs/components";

const SiteIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-heading-content-wrapper">
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">Survive</span>
            <span className="second">JS</span>
          </div>

          <h1 className="front-header">Learn JavaScript</h1>
          <h3 className="front-motto">
            SurviveJS will take you from apprentice to master
          </h3>
        </div>
      </div>
    </div>

    <div className="post">
      <section className="post__content landing__content">
        <div className="landing__block post__description">
          <LatestPost section={section} />

          <h2>SurviveJS - Maintenance</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./descriptions/maintenance.md").body
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./gets/maintenance.md").body
            }}
          />

          <h2>SurviveJS - React</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./descriptions/react.md").body
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./gets/react.md").body
            }}
          />
        </div>
        <div className="landing__block post__authors">
          <h2>SurviveJS - Webpack</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./descriptions/webpack.md").body
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./gets/webpack.md").body
            }}
          />

          <h2>About the Author</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./authors/juho.md").body
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: require("./descriptions/index.md").body
            }}
          />

          <LatestPost section={section} />
        </div>
      </section>
    </div>
  </div>
);
SiteIndex.description =
  "Want to learn webpack or React? Get started for free and build a Kanban board by following the example project.";

export default SiteIndex;
