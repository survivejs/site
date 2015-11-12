import _ from 'lodash';
import React from 'react';
import MomentDisplay from 'antwar-default-theme/MomentDisplay';
import Router from 'react-router';
import config from 'config';

import Disqus from '../components/Disqus';
import Author from '../components/Author';
import PrevNext from '../components/PrevNext';
import SocialLinks from '../components/SocialLinks';

module.exports = React.createClass({
  displayName: 'BlogItem',
  mixins: [Router.State],
  render() {
    const page = this.props.page;
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
          </div>
          {page.headerExtra ?
            <div className="header-extra"
              dangerouslySetInnerHTML={{__html: page.headerExtra}} /> :
            null
          }
          {page.date ?
            <MomentDisplay className="post__moment" datetime={page.date} /> :
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
        <Disqus shortname="survivejs" />
      </div>
    );
  }
});
