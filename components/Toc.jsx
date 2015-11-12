import React from 'react';

module.exports = React.createClass({
  displayName: 'Toc',
  render() {
    const sectionItems = this.props.sectionItems;
    const page = this.props.page;

    return (
      <div className="toc-nav">
        {sectionItems().map((navItem, i) => {
          return navItem.title === page.title ?
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
  }
});
