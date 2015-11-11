import React from 'react';
import Router from 'react-router';
import MomentDisplay from 'antwar-default-theme/MomentDisplay';
import Paths from 'antwar-core/PathsMixin';
import SectionLink from 'antwar-core/SectionLink';
import config from 'config';

import _ from 'lodash';

module.exports = React.createClass({
  displayName: 'SectionIndex',
  mixins: [Router.State, Paths],
  render() {
    return (
      <div className="grid">
        <h1>{this.getSectionTitle() || 'Blog posts'}</h1>
        <ul className='post-list'>
          {this.getSectionItems().map((item) =>
            <li key={item.url}>
              <h3 className="post-list__heading">
                <SectionLink item={item}>{item.title}</SectionLink>
                {item.isDraft ? <span className="draft-text">Draft</span> : null}
              </h3>
              {item.showDemo ?
                <div className="post-list__demo">
                  <a href={item.demo} target="_blank">Demo</a>
                </div> :
                null
              }
              {item.date ?
                <MomentDisplay datetime={item.date} /> :
                null
              }
              <p className="post-list__preview">{item.preview}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
});
