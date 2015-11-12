import React from 'react';
import NavigationLink from 'antwar-core/NavigationLink';
import _ from  'lodash';
import config from 'config';

module.exports = React.createClass({
  displayName: 'Nav',
  render() {
    const pages = this.props.pages || config.theme.navigation;

    return (
      <div className="nav__wrapper">
        <input type="checkbox" className="nav__toggle" id="nav__toggle" />
        <label className="nav__toggle-label" htmlFor="nav__toggle" />
        <nav className="nav">{_.map(pages, (link, i) => {
          return (
            <div key={`link-${i}`} className="nav__link">
              <NavigationLink page={link} />
            </div>
          );
        })}</nav>
      </div>
    );
  }
});
