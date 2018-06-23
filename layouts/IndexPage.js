import React from "react";

const IndexPage = ({ type, content }) => {
  const page = () => (
    <div className="frontpage">
      <div className="front__heading">
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">Survive</span>
            <span className="second">JS</span>
            <span className="first"> — {type}</span>
          </div>
          <h1 className="front-header">From apprentice to master</h1>
        </div>
      </div>

      <div className="post post--front">
        <section className="post__content">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <h2>About the Trainer</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: require("../content/authors/juho.md").body,
            }}
          />
        </section>
      </div>
    </div>
  );

  page.title = type;

  return page;
};

export default IndexPage;
