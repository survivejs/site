import React from "react";

const ReactIndex = () => (
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
            <span className="first"> - React</span>
          </div>

          <h1 className="front-header">From apprentice to master</h1>

          <div className="front-button-wrapper">
            <span className="read-free">
              <a href="/react/introduction/">Read the free version</a>
            </span>

            <span className="buy-or">or</span>

            <a
              className="btn btn--buy-main"
              href="https://leanpub.com/survivejs-react"
            >
              Become a React master
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="post">
      <section className="post__content landing__content">
        <div className="landing__block post__description">
          <h2>SurviveJS - React</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./descriptions/react.md").body,
            }}
          />
        </div>
        <div className="landing__block post__authors">
          <h2>About the Author</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./authors/juho.md").body,
            }}
          />
          <h2>Getting the Book</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("./gets/react.md").body,
            }}
          />
        </div>
      </section>
    </div>
  </div>
);

export default ReactIndex;
