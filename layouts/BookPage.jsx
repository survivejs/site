import React from "react";

import {
  Disqus,
  LatestPost,
  Meta,
  PrevNext,
  PrevNextMini,
  Resources,
  Toc,
} from "@survivejs/components";
import { SocialLinks } from "../components";
import Page from "./Page";

const BookPage = ({
  page: {
    file: {
      attributes: { endSource, demo, headerExtra, headerImage, resources },
      body,
      title,
    },
    previous,
    next,
    type,
  },
  section,
}) => {
  const toc = (
    <div className="toc-nav__wrapper">
      <div className="toc-nav__section">
        <input id="search" className="toc-nav__search" placeholder="Search" />
      </div>

      <div className="toc-nav__section">
        <h4 className="toc-nav--header">Table of Contents</h4>
        <Toc sectionPages={section.pages} title={title} />
      </div>

      <div className="toc-nav__section">
        <Resources resources={resources} />
      </div>
    </div>
  );

  const footer = (
    <React.Fragment>
      <SocialLinks type={type} />

      <PrevNext
        previous={previous}
        next={next}
        previousText="Previous chapter"
        nextText="Next chapter"
        getTitle={page => page.file.title}
      />

      <blockquote className="tip">
        {section.name === "webpack" ? (
          <p>
            This book is available through{" "}
            <a href="https://leanpub.com/survivejs-webpack">
              Leanpub (digital)
            </a>,{" "}
            <a href="https://www.amazon.com/dp/9526868803">
              Amazon (paperback)
            </a>, and{" "}
            <a href="https://www.amazon.com/dp/B06XWZZGBS">Kindle (digital)</a>.
            By purchasing the book you support the development of further
            content. A part of profit (~30%) goes to Tobias Koppers, the author
            of webpack.
          </p>
        ) : (
          <p>
            This book is{" "}
            <a href="https://leanpub.com/survivejs-react">
              available through Leanpub
            </a>. By purchasing the book you support the development of further
            content.
          </p>
        )}
      </blockquote>
    </React.Fragment>
  );

  return (
    <Page
      headerImage={headerImage}
      headerExtra={headerExtra}
      title={title}
      sidebar={toc}
      footer={footer}
    >
      <LatestPost section={section} />

      <Meta demo={demo} endSource={endSource} />

      <div
        className="chapter-content"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Page>
  );
};

export default BookPage;
