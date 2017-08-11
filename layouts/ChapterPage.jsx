import React from "react";
import Router from "react-router";

import Disqus from "antwar-helpers/components/Disqus";
import LatestPost from "../components/LatestPost";
import PrevNext from "../components/PrevNext";
import PrevNextMini from "../components/PrevNextMini";
import SocialLinks from "../components/SocialLinks";
import Toc from "../components/Toc";

export default React.createClass({
  displayName: "Chapter",
  render() {
    const section = this.props.section;
    const page = this.props.page;
    const resources = page.resources;

    return (
      <div className="chapter__wrapper">
        {page.headerImage
          ? <div
              className="header-image"
              style={{
                backgroundImage: `url(${page.headerImage})`
              }}
            />
          : null}

        <h1 className="post__heading">
          {page.title}
        </h1>

        {page.headerExtra
          ? <div
              className="header-extra"
              dangerouslySetInnerHTML={{ __html: page.headerExtra }}
            />
          : null}

        <div className="toc-nav__wrapper">
          <h4 className="search-nav--header">Search</h4>

          <input id="search" />

          <h4 className="toc-nav--header">Table of Contents</h4>

          <Toc sectionPages={() => section.pages().reverse()} page={page} />

          {this.renderResources(resources)}
          {this.renderBuy(section.name)}
        </div>

        <div className="chapter">
          <div className="post__content">
            <LatestPost sectionPages={section.pages} />

            {this.renderPostMeta(page)}

            {this.renderPostContent(page)}

            <SocialLinks type={page.type} />

            <PrevNext
              page={page}
              previousText="Previous chapter"
              nextText="Next chapter"
            />

            <blockquote className="tip">
              {section.name === "webpack"
                ? <p>
                    This book is available through{" "}
                    <a href="https://leanpub.com/survivejs-webpack">
                      Leanpub (digital)
                    </a>,{" "}
                    <a href="https://www.amazon.com/dp/9526868803">
                      Amazon (paperback)
                    </a>, and{" "}
                    <a href="https://www.amazon.com/dp/B06XWZZGBS">
                      Kindle (digital)
                    </a>. By purchasing the book you support the development of
                    further content. A part of profit (~30%) goes to Tobias
                    Koppers, the author of webpack.
                  </p>
                : <p>
                    This book is{" "}
                    <a href="https://leanpub.com/survivejs-react">
                      available through Leanpub
                    </a>. By purchasing the book you support the development of
                    further content.
                  </p>}
            </blockquote>

            <div id="disqus_thread" />
          </div>
        </div>
        <PrevNextMini page={page} />

        <Disqus shortname="survivejs" />
      </div>
    );
  },
  renderBuy(sectionName) {
    if (sectionName === "webpack") {
      return (
        <div>
          <BuyWebpack />

          <h3>See also</h3>
          <BuyReact />
        </div>
      );
    }

    return (
      <div>
        <BuyReact />

        <h3>See also</h3>
        <BuyWebpack />
      </div>
    );
  },
  renderResources(resources) {
    if (!resources || !resources.length) {
      return;
    }

    return (
      <div className="resources__wrapper">
        <h4 className="resources--header">Resources</h4>

        <ul className="resources-nav">
          {resources.map((resource, i) => {
            return (
              <li key={`resourceItem${i}`}>
                <a
                  href={`${resource.url}`}
                  className="resource-nav__link"
                  target="_blank"
                >
                  {resource.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
  renderPostMeta(item) {
    if (!(item.endSource || item.demo)) {
      return;
    }

    return (
      <div className="post__meta">
        {item.endSource
          ? <a
              className="post__end_source"
              href={item.endSource}
              target="_blank"
            >
              Finished source code
            </a>
          : null}
        {item.demo
          ? <a className="post__demo" href={item.demo} target="_blank">
              Demo
            </a>
          : null}
      </div>
    );
  },
  renderPostContent(item) {
    return (
      <div
        className="chapter-content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    );
  }
});

const BuyWebpack = () =>
  <div className="buy-container">
    <a href="/webpack/foreword">
      <img
        className="sidebar-cover"
        src="/assets/img/webpack_title_page_small.png"
        width="255"
        height="329"
      />
    </a>

    <p>
      <a
        className="btn btn--normal btn--buy"
        href="https://leanpub.com/survivejs-webpack"
      >
        Buy at Leanpub
      </a>
      <a
        className="btn btn--normal btn--buy"
        href="https://www.amazon.com/dp/9526868803/"
      >
        Buy at Amazon
      </a>
      <a
        className="btn btn--normal btn--buy"
        href="https://www.amazon.com/dp/B06XWZZGBS"
      >
        Buy for Kindle
      </a>
      <a
        className="btn btn--normal btn--buy"
        href="https://survivejs.typeform.com/to/LUQK0T"
      >
        Buy Signed LE
      </a>
    </p>
  </div>;

const BuyReact = () =>
  <div className="buy-container">
    <a href="/react/introduction">
      <img
        className="sidebar-cover"
        src="/assets/img/react_title_page_small.png"
        width="255"
        height="329"
      />
    </a>

    <p>
      <a
        className="btn btn--normal btn--buy"
        href="https://leanpub.com/survivejs-react"
      >
        Buy at Leanpub
      </a>
    </p>
  </div>;
