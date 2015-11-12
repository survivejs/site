import React from 'react';
import Router from 'react-router';
import MomentDisplay from 'antwar-default-theme/MomentDisplay';
import SectionLink from 'antwar-core/SectionLink';
import config from 'config';

import _ from 'lodash';

module.exports = React.createClass({
  displayName: 'SectionIndex',
  mixins: [Router.State],
  render() {
    const section = this.props.section;

    return (
      <div className="grid">
        <h1>{section.title}</h1>
        <ul className='post-list'>
          {section.pages().map((page) =>
            <li key={page.url}>
              <h3 className="post-list__heading">
                <SectionLink page={page}>{page.title}</SectionLink>
                {page.isDraft ? <span className="draft-text">Draft</span> : null}
              </h3>
              {page.showDemo ?
                <div className="post-list__demo">
                  <a href={page.demo} target="_blank">Demo</a>
                </div> :
                null
              }
              {page.date ?
                <MomentDisplay datetime={page.date} /> :
                null
              }
              <p className="post-list__preview">{page.preview}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
});
