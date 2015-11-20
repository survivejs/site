import React from 'react';

export default React.createClass({
  displayName: 'Teaser',
  render: function() {
    var pages = this.props.pages;

    return pages.length > 1 ?
        this.renderMultiple(pages) :
        this.renderSingle(pages[0]);
  },
  renderMultiple(pages) {
    return (
        <ul className='blog-teasers'>
            {pages.map((page, i) => {
                return <li key={'post' + i}>{this.renderSingle(page)}</li>;
            })}
        </ul>
    );
  },
  renderSingle(page) {
    return page ? <a className='blog-teaser' href={'/' + page.url}>
        {page.title}
    </a> : null;
  }
});
