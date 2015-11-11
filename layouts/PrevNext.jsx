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

    return (
      <div className="prevnext">
        {item.prev ?
          <div className="prevnext__prev">
            <div className="prevnext__bg" style={{
              backgroundImage: `url(${item.prev.headerImage})`
            }}></div>
            <span className="prevnext__info">{previousText}</span>
            <a className="prevnext__link" href={`/${item.prev.url}`}>{item.prev.title}</a>
          </div> :
          null
        }
        {item.next ?
          <div className="prevnext__next">
            <div className="prevnext__bg" style={{
              backgroundImage: `url(${item.next.headerImage})`
            }}></div>
            <span className="prevnext__info">{nextText}</span>
            <a className="prevnext__link" href={`/${item.next.url}`}>{item.next.title}</a>
          </div> :
          null
        }
      </div>
    );
  },
});
