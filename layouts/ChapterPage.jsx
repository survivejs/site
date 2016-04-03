import React from 'react';
import Router from 'react-router';

import {Disqus} from 'antwar-helpers/components';
import LatestPost from '../components/LatestPost.jsx';
import PrevNext from '../components/PrevNext.jsx';
import PrevNextMini from '../components/PrevNextMini.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import Toc from '../components/Toc.jsx';

module.exports = React.createClass({
  displayName: 'Chapter',
  render() {
    const section = this.props.section;
    const page = this.props.page;
    const resources = page.resources;

    return (
      <div className="chapter__wrapper">
        {page.headerImage ?
          <div className="header-image" style={{
            backgroundImage: `url(${page.headerImage})`
          }}></div> :
          null
        }

        <h1 className="post__heading">{page.title}</h1>

        {page.headerExtra ?
          <div className="header-extra"
            dangerouslySetInnerHTML={{__html: page.headerExtra}} /> :
          null
        }

        <div className="toc-nav__wrapper">
          <h4 className="toc-nav--header">Table of Contents</h4>
          <Toc sectionPages={() => section.pages().reverse()} page={page} />
          {this.renderResources(resources)}
        </div>

        <div className="chapter">
          <div className="post__content">
            <LatestPost sectionPages={section.pages} />

            {this.renderPostMeta(page)}

            {this.renderPostContent(page)}

            <SocialLinks type={page.type} />

            <PrevNext page={page} previousText='Previous chapter' nextText='Next chapter' />

            <blockquote className="tip">
              {section.name === 'webpack' ?
              <p>This book is <a href="https://leanpub.com/survivejs-webpack">available through Leanpub</a>. By purchasing the book you support the development of further content. A part of profit (~30%) goes to Tobias Koppers, the author of Webpack.</p> :
              <p>This book is <a href="https://leanpub.com/survivejs_webpack_react">available through Leanpub</a>. By purchasing the book you support the development of further content.</p>
              }
            </blockquote>

            <div id="disqus_thread" />
          </div>
        </div>
        <PrevNextMini page={page} />

        <Disqus shortname='survivejs' />
      </div>
    );
  },
  renderResources(resources) {
    if(!resources || !resources.length) {
      return;
    }

    return (
      <div className="resources__wrapper">
        <h4 className="resources--header">Resources</h4>

        <ul className="resources-nav">
          {resources.map((resource, i) => {
            return <li key={`resourceItem${i}`}><a
              href={`${resource.url}`}
              className="resource-nav__link"
              target="_blank">
              {resource.name}
            </a></li>
          })}
        </ul>
      </div>
    );
  },
  renderPostMeta(item) {
    if(!(item.endSource || item.demo)) {
      return;
    }

    return (
      <div className="post__meta">
        {item.endSource ?
          <a className="post__end_source"
            href={item.endSource}
            target="_blank">Finished source code</a> :
          null
        }
        {item.demo ?
          <a className="post__demo"
            href={item.demo}
            target="_blank">Demo</a> :
          null
        }
      </div>
    );
  },
  renderPostContent(item) {
    return <div className="chapter-content"
      dangerouslySetInnerHTML={{__html: item.content}}></div>;
  }
});
