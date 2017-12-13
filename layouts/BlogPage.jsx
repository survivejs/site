import _ from "lodash";
import React from "react";

import {
  Disqus,
  Moment,
  Author,
  PrevNext,
  PrevNextMini,
  RelatedPosts,
} from "@survivejs/components";
import { SocialLinks } from "../components";
import getRelatedPosts from "../utils/get-related-posts";

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

  return (
    <div className="post__wrapper">
      {headerImage && (
        <div
          className="header-image"
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        />
      )}

      <h1 className="post__heading">{title}</h1>

      <div className="toc-nav__wrapper">
        <RelatedPosts
          title={title}
          posts={relatedPosts}
          headers={relatedHeaders}
        />
      </div>

      <div className="post">
        <div className="post__content">
          <div dangerouslySetInnerHTML={{ __html: body }} />
          {headerExtra && (
            <div
              className="header-extra"
              dangerouslySetInnerHTML={{ __html: headerExtra }}
            />
          )}
          {date && <Moment className="post__moment" datetime={date} />}
          {postAuthor && <Author author={postAuthor} />}
        </div>

        <div className="post__content">
          <SocialLinks type="blog post" />

          <PrevNext
            previous={previous}
            next={next}
            previousText="Previous post"
            nextText="Next post"
            getTitle={page => page.file.title}
          />

          <div id="disqus_thread" />
        </div>
      </div>

      <PrevNextMini
        previous={previous}
        next={next}
        getTitle={page => page.file.title}
      />

      <Disqus shortname="survivejs" />
    </div>
  );
};

export default BlogPage;
