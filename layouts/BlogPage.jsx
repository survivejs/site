import _ from "lodash";
import React from "react";

import {
  Moment,
  Author,
  RelatedPosts,
} from "@survivejs/components";
import { PrevNext, SocialLinks } from "../components";
import getRelatedPosts from "../utils/get-related-posts";
import Page from "./Page";

const BlogPage = ({
  page: {
    file: {
      attributes: {
        author,
        date,
        updateDate,
        headerExtra,
        headerImage,
      },
      body,
      keywords,
      title,
    },
    previous,
    next,
  },
  section,
  config,
}) => {
  let postAuthor =
    author || (config.blog && config.blog.author);
  const relatedPosts = getRelatedPosts(
    keywords,
    section.pages(),
    10
  );
  const relatedHeaders = {
    interview: "Interviews",
    opinion: "Opinions",
    "state-management": "State management",
    publishing: "Publishing thoughts",
  };

  if (_.isFunction(postAuthor)) {
    postAuthor = postAuthor();
  }

  const toc = (
    <div className="toc-nav__wrapper">
      <div className="toc-nav__section" />
      <div className="toc-nav__section">
        <RelatedPosts
          title={title}
          posts={relatedPosts}
          headers={relatedHeaders}
        />
      </div>
    </div>
  );

  const footer = (
    <React.Fragment>
      <SocialLinks type="blog post" />

      <PrevNext
        previous={previous}
        next={next}
        previousText="Previous post"
        nextText="Next post"
        getTitle={(page) => page.file.title}
      />
    </React.Fragment>
  );

  return (
    <Page
      headerImage={headerImage}
      title={title}
      previous={previous}
      next={next}
      sidebar={toc}
      footer={footer}
      page={{ next, previous }}
    >
      <Dates date={date} updateDate={updateDate} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Dates date={date} updateDate={updateDate} />
      {postAuthor && <Author author={postAuthor} />}
    </Page>
  );
};

function Dates({ date, updateDate }) {
  return (
    <div className="post__dates">
      {date && (
        <div className="post__publish-date">
          <span className="post__date-text">
            Published:
          </span>{" "}
          <Moment
            className="post__moment"
            datetime={date}
          />
        </div>
      )}
      {updateDate && (
        <div className="post__update-date">
          <span className="post__date-text">Updated:</span>{" "}
          <Moment
            className="post__moment"
            datetime={updateDate}
          />
        </div>
      )}
    </div>
  );
}

export default BlogPage;
