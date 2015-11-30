import React from 'react';
import Router from 'react-router';

import {Disqus, Toc} from 'antwar-helpers/components';
import LatestPost from '../components/LatestPost.jsx';
import PrevNext from '../components/PrevNext.jsx';
import SocialLinks from '../components/SocialLinks';

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
          <Toc sectionPages={section.pages} page={page} />
          {this.renderResources(resources)}
        </div>

        <div className="chapter">
          <div className="post__content">
            <LatestPost sectionPages={section.pages} />
            {this.renderPostMeta(page)}
            {this.renderPostContent(page)}
            <SocialLinks type={page.type} />
            <PrevNext page={page} previousText='Previous chapter' nextText='Next chapter' />
            <div id="disqus_thread" />
          </div>
          {this.renderNext(page)}
          {this.renderPrev(page)}
        </div>

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

        <div className="resources-nav">
          {resources.map((resource, i) => {
            return <a key={`resourceItem${i}`}
              href={`${resource.url}`}
              className="resource-nav__link"
              target="_blank">
              {resource.name}
            </a>
          })}
        </div>
      </div>
    );
  },
  renderPostMeta(item) {
    if(!(item.startSource || item.endSource || item.demo)) {
      return;
    }

    return (
      <div className="post__meta">
        {item.startSource ?
          <a className="post__start_source"
            href={item.startSource}
            target="_blank">Start source code</a> :
          null
        }
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
  },
  renderNext(item) {
    return item.next ?
      <a className="next-page" href={`/${item.next.url}`} title={item.next.title} /> :
      null;
  },
  renderPrev(item) {
    return item.prev ?
      <a className="previous-page" href={`/${item.prev.url}`} title={item.prev.title} /> :
      null;
  }
});
