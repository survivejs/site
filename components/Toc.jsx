import React from 'react';

module.exports = React.createClass({
  displayName: 'Toc',
  render() {
    const sectionPages = this.props.sectionPages;
    const page = this.props.page;

    return (
      <ul className="toc-nav">
        {sectionPages().map((navPage, i) => {
          return <li key={`navPage${i}`}>
          {navPage.title === page.title ?
            <span className={`toc-nav__link toc-nav__link--current ${navPage.type}`}>
              {navPage.title}
            </span> :
            <a href={`/${navPage.url}`}
              className={`toc-nav__link ${navPage.type}`}>
              {navPage.title}
            </a>
          }
          </li>
        })}
      </ul>
    );
  }
});
