import React from 'react';

module.exports = React.createClass({
  displayName: 'PrevNextMini',
  render() {
    var page = this.props.page;

    return (
      <div>
        {this.renderNext(page.next)}
        {this.renderPrev(page.prev)}
      </div>
    );
  },
  renderNext(next) {
    return next ?
      <a className="next-page" href={`/${next.url}`} title={next.title}>
        <i className="icon-right-open" />
      </a> :
      null;
  },
  renderPrev(prev) {
    return prev ?
      <a className="previous-page" href={`/${prev.url}`} title={prev.title}>
        <i className="icon-left-open" />
      </a> :
      null;
  }
});
