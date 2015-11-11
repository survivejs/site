import React from 'react';
import Paths from 'antwar-core/PathsMixin';
import Router from 'react-router';
import config from 'config';

import Disqus from '../components/Disqus.jsx';
import LatestPost from '../components/LatestPost.jsx';
import PrevNext from '../components/PrevNext.jsx';
import Footer from '../components/Footer.jsx';

module.exports = React.createClass({
  displayName: 'Chapter',
  mixins: [Router.State, Paths],
  render() {
    const sectionItems = this.getSectionItems();
    const item = this.getItem();
    const author = item.author || config.author.name;
    const resources = item.resources;

    return (
      <div className="chapter__wrapper">
        {item.headerImage ?
          <div className="header-image" style={{
            backgroundImage: `url(${item.headerImage})`
          }}></div> :
          null
        }

        <h1 className="post__heading">{item.title}</h1>

        <div className="toc-nav__wrapper">
          <h4 className="toc-nav--header">Table of Contents</h4>
          {this.renderTOC(sectionItems, item)}
          {this.renderResources(resources)}
        </div>

        <div className="chapter">
          <div className="post__content">
            <LatestPost />
            {this.renderPostMeta(item)}
            {this.renderPostContent(item)}
            {this.renderSocialLinks(item)}
            <PrevNext item={item} previousText='Previous chapter' nextText='Next chapter' />
            <div id="disqus_thread" />
          </div>
          {this.renderNext(item)}
          {this.renderPrev(item)}
        </div>

        <Disqus shortname='survivejs' />
      </div>
    );
  },
  renderTOC(sectionItems, item) {
    return (
      <div className="toc-nav">
        {sectionItems.map((navItem, i) => {
          return navItem.title === item.title ?
            <span key={`navItem${i}`}
              className={`toc-nav__link toc-nav__link--current ${navItem.type}`}>
              {navItem.title}
            </span> :
            <a key={`navItem${i}`}
              href={`/${navItem.url}`}
              className={`toc-nav__link ${navItem.type}`}>
              {navItem.title}
            </a>
        })}
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
  renderSocialLinks(item) {
    return (
      <div className="social-links">
        <blockquote className="tip">
          {`If you enjoyed this ${item.type} consider subscribing to `}
          <a href="http://eepurl.com/bth1v5">the mailing list</a> or following <a href="https://twitter.com/survivejs">@survivejs</a> for occasional updates.
          There is also <a href="/atom.xml">RSS</a> available for old beards (no pun intended).
        </blockquote>
      </div>
    );
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
