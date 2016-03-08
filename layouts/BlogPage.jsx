import _ from 'lodash';
import React from 'react';

import {Disqus, Moment} from 'antwar-helpers/components';
import Author from '../components/Author';
import PrevNext from '../components/PrevNext';
import PrevNextMini from '../components/PrevNextMini.jsx';
import SocialLinks from '../components/SocialLinks';

module.exports = React.createClass({
  displayName: 'BlogPage',
  render() {
    const page = this.props.page;
    const config = this.props.config;
    let author = page.author || (config.blog && config.blog.author);

    if(_.isFunction(author)) {
      author = author();
    }

    return (
      <div>
        <div className="post">
          {page.headerImage ?
            <div className="header-image" style={{
              backgroundImage: `url(${page.headerImage})`
            }} /> :
            null
          }

          <h1 className="post__heading">{page.title}</h1>

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
          </div>

          <PrevNext page={page} previousText="Previous post" nextText="Next post" />

          <div id="disqus_thread" />
        </div>
        <PrevNextMini page={page} />

        <Disqus shortname="survivejs" />
      </div>
    );
  }
});
