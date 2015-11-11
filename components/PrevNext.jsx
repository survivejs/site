import React from 'react';

module.exports = React.createClass({
  displayName: 'PrevNext',
  render() {
    var item = this.props.item;
    var previousText = this.props.previousText;
    var nextText = this.props.nextText;

    if(!(item.next || item.prev)) {
      return;
    }

    // XXX: make sure item spans whole container if it's the only one
    var style = {width: '100%'};
    if(item.next && item.prev) {
      style = {};
    }

    // TODO: remove prevnext rules from the base theme
    return (
      <div className="new-prevnext">
        {item.prev ?
          <div className="new-prevnext__prev" style={style}>
            <div className="new-prevnext__bg" style={{
              backgroundImage: `url(${item.prev.headerImage})`
            }}></div>
            <span className="new-prevnext__info">{previousText}</span>
            <a className="new-prevnext__link" href={`/${item.prev.url}`}>{item.prev.title}</a>
          </div> :
          null
        }
        {item.next ?
          <div className="new-prevnext__next" style={style}>
            <div className="new-prevnext__bg" style={{
              backgroundImage: `url(${item.next.headerImage})`
            }}></div>
            <span className="new-prevnext__info">{nextText}</span>
            <a className="new-prevnext__link" href={`/${item.next.url}`}>{item.next.title}</a>
          </div> :
          null
        }
      </div>
    );
  },
});
