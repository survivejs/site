import _ from "lodash";
import React from "react";

import { Moment, Author, RelatedPosts } from "@survivejs/components";
import { PrevNext, SocialLinks } from "../components";
import getRelatedPosts from "../utils/get-related-posts";
import Page from "./Page";

const BlogPage = ({
  page: {
    file: {
      attributes: { author, date, headerExtra, headerImage },
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
  let postAuthor = author || (config.blog && config.blog.author);
  const relatedPosts = getRelatedPosts(keywords, section.pages(), 10);
  const relatedHeaders = {
    interview: "Interviews",
    opinion: "Opinions",
    publishing: "Publishing thoughts",
  };

  if (_.isFunction(postAuthor)) {
    postAuthor = postAuthor();
  }

  const toc = (
    <div className="toc-nav__wrapper">
      <RelatedPosts
        title={title}
        posts={relatedPosts}
        headers={relatedHeaders}
      />
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
        getTitle={page => page.file.title}
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
    >
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {date && <Moment className="post__moment" datetime={date} />}
      {postAuthor && <Author author={postAuthor} />}
    </Page>
  );
};

export default BlogPage;
