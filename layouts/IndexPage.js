import React from "react";
import { PageTitle, PageTitleLogo, PageTitleSub } from "../components/Landing";

const IndexPage = ({ type, content }) => {
  const page = () => (
    <div className="frontpage">
      <div className="front__heading">
        <div className="front-header-wrapper">
          <PageTitle>
            <PageTitleLogo>
              Survive<strong>JS</strong> — {type}
            </PageTitleLogo>
            <PageTitleSub>From apprentice to master</PageTitleSub>
          </PageTitle>
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
