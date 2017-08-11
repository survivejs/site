import _ from "lodash";
import React from "react";

import {
  Disqus,
  Moment,
  Author,
  PrevNext,
  PrevNextMini,
  RelatedPosts,
  SocialLinks
} from "@survivejs/components";

import getRelatedPosts from "../utils/get-related-posts";

const BlogPage = ({
  page: {
    file: {
      attributes: { author, date, headerExtra, headerImage, title },
      body
    },
    keywords,
    previous,
    next
  },
  section,
  config
}) => {
  let postAuthor = author || (config.blog && config.blog.author);
  const relatedPosts = getRelatedPosts(keywords, section.pages(), 10);
  const relatedHeaders = {
    interview: "Interviews",
    opinion: "Opinions",
    publishing: "Publishing thoughts"
  };

  if (_.isFunction(postAuthor)) {
    postAuthor = postAuthor();
  }

  return (
    <div className="post__wrapper">
      {headerImage &&
        <div
          className="header-image"
          style={{
            backgroundImage: `url(${headerImage})`
          }}
        />}

      <h1 className="post__heading">
        {title}
      </h1>

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
          {headerExtra &&
            <div
              className="header-extra"
              dangerouslySetInnerHTML={{ __html: headerExtra }}
            />}
          {date && <Moment className="post__moment" datetime={date} />}
          {postAuthor && <Author author={postAuthor} />}

          <SocialLinks type="blog post" />

          <PrevNext
            previous={previous}
            next={next}
            previousText="Previous post"
            nextText="Next post"
            getTitle={page => page.file.attributes.title}
          />

          <div id="disqus_thread" />
        </div>
      </div>

      <PrevNextMini
        previous={previous}
        next={next}
        getTitle={page => page.file.attributes.title}
      />

      <Disqus shortname="survivejs" />
    </div>
  );
};

export default BlogPage;
