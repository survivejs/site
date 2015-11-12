import React from 'react';

module.exports = React.createClass({
  displayName: 'Toc',
  render() {
    const sectionPages = this.props.sectionPages;
    const page = this.props.page;

    return (
      <div className="toc-nav">
        {sectionPages().map((navPage, i) => {
          return navPage.title === page.title ?
            <span key={`navPage${i}`}
              className={`toc-nav__link toc-nav__link--current ${navPage.type}`}>
              {navPage.title}
            </span> :
            <a key={`navPage${i}`}
              href={`/${navPage.url}`}
              className={`toc-nav__link ${navPage.type}`}>
              {navPage.title}
            </a>
        })}
      </div>
    );
  }
});
