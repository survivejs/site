import React from 'react';
import Paths from 'antwar-core/PathsMixin';
import Router from 'react-router';
import config from 'config';
import LatestPost from './LatestPost.jsx';

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
            <div id="disqus_thread" />
          </div>
          {this.renderPrevNext(item)}
          {this.renderNext(item)}
          {this.renderPrev(item)}
        </div>

        {this.renderDisqus()}
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
          <div className="post__start_source"
            href={item.startSource}
            target="_blank">Start source code</div> :
          null
        }
        {item.endSource ?
          <div className="post__end_source"
            href={item.endSource}
            target="_blank">Finished source code</div> :
          null
        }
        {item.demo ?
          <div className="post__demo"
            href={item.demo}
            target="_blank">Demo</div> :
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
          <a href="http://eepurl.com/bth1v5">the mailing list</a> or following
          <a href="https://twitter.com/survivejs">@survivejs</a> for occasional updates.
          There is also <a href="/atom.xml">RSS</a> available for old beards (no pun intended).
        </blockquote>
      </div>
    );
  },
  renderPrevNext(item) {
    if(!(item.next || item.prev)) {
      return;
    }

    return (
      <div className="prevnext">
        {item.prev ?
          <div className="prevnext__prev">
            <div className="prevnext__bg" style={{
              backgroundImage: `url(${item.prev.headerImage})`
            }}></div>
            <span className="prevnext__info">Previous chapter</span>
            <a className="prevnext__link" href={`/${item.prev.url}`}>{item.prev.title}</a>
          </div> :
          null
        }
        {item.next ?
          <div className="prevnext__next">
            <div className="prevnext__bg" style={{
              backgroundImage: `url(${item.next.headerImage})`
            }}></div>
            <span className="prevnext__info">Next chapter</span>
            <a className="prevnext__link" href={`/${item.next.url}`}>{item.next.title}</a>
          </div> :
          null
        }
      </div>
    );
  },
  renderNext(item) {
    return item.next ?
      <a className="next-page" href={`/${item.next.url}`}>{item.next.title}</a> :
      null;
  },
  renderPrev(item) {
    return item.prev ?
      <a className="previous-page" href={`/${item.prev.url}`}>{item.prev.title}</a> :
      null;
  },
  renderDisqus() {
    return <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `var disqus_shortname = 'survivejs';(function() {var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);})();`
    }} />;
  }
});
