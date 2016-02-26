import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
  displayName: 'Toc',
  render() {
    const sectionPages = this.props.sectionPages;
    const page = this.props.page;

    return (
      <ul className="toc-nav">
        {sectionPages().map((navPage, i) => {
          return <li key={`navPage${i}`} className={'toc-' + navPage.type}>
          {navPage.title === page.title ?
            <span className={`toc-nav__link toc-nav__link--current ${navPage.type}`}>
              {navPage.title}
            </span> :
            <Link to={`/${navPage.url}`} className={`toc-nav__link ${navPage.type}`}>
              {navPage.title}
            </Link>
          }
          </li>
        })}
      </ul>
    );
  }
});
