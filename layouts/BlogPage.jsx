import _ from 'lodash';
import React from 'react';
import titleCase from 'title-case';

import Disqus from 'antwar-helpers/components/Disqus';
import Moment from 'antwar-helpers/components/Moment';
import Author from '../components/Author';
import PrevNext from '../components/PrevNext';
import PrevNextMini from '../components/PrevNextMini';
import SocialLinks from '../components/SocialLinks';
import Toc from '../components/Toc';

export default React.createClass({
  displayName: 'BlogPage',
  render() {
    const section = this.props.section;
    const page = this.props.page;
    const config = this.props.config;
    let author = page.author || (config.blog && config.blog.author);
    const relatedPosts = getRelatedPosts(page.keywords, section.pages(), 10);
    const relatedHeaders = {
      interview: 'Interviews',
      opinion: 'Opinions',
      publishing: 'Publishing thoughts'
    };

    if(_.isFunction(author)) {
      author = author();
    }

    return (
      <div className="post__wrapper">
        {page.headerImage ?
          <div className="header-image" style={{
            backgroundImage: `url(${page.headerImage})`
          }} /> :
          null
        }

        <h1 className="post__heading">{page.title}</h1>

        <div className="toc-nav__wrapper">
          <RelatedPosts page={page} posts={relatedPosts} headers={relatedHeaders} />
        </div>

        <div className="post">
          <div className="post__content">
            {page.isDraft ?
              <span className="draft-text">Draft</span> :
              null
            }
            <div dangerouslySetInnerHTML={{__html: page.content}} />
            {page.headerExtra ?
              <div className="header-extra"
                dangerouslySetInnerHTML={{__html: page.headerExtra}} /> :
              null
            }
            {page.date ?
              <Moment className="post__moment" datetime={page.date} /> :
              null
            }
            {author ?
              <Author author={author} /> :
              null
            }

            <SocialLinks type="blog post" />

            <PrevNext page={page} previousText="Previous post" nextText="Next post" />

            <div id="disqus_thread" />
          </div>
        </div>

        <PrevNextMini page={page} />

        <Disqus shortname="survivejs" />
      </div>
    );
  }
});

function RelatedPosts({page, posts, headers}) {
  return (
    <div>
      {_.map(posts, (pages, name) => {
        if (pages.length < 2) {
          return <div key={`related-posts-${name}`} />;
        }

        return (
          <div key={`related-posts-${name}`}>
            <h4 className="toc-nav--header">{headers[name] || titleCase(name)}</h4>

            <Toc sectionPages={() => pages} page={page} />
          </div>
        );
      })}
    </div>
  );
}

function getRelatedPosts(keywords, pages, limit) {
  let ret = {}; // keyword -> posts

  keywords.forEach((keyword) => {
    if(!ret[keyword]) {
      ret[keyword] = [];
    }

    pages.forEach((page) => {
      if(page.keywords && page.keywords.indexOf(keyword) >= 0) {
        if(ret[keyword].length > limit) {
          return;
        }

        ret[keyword].push(page);
      }
    });
  });

  return ret;
}
