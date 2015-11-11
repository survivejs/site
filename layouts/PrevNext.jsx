import React from 'react';

module.exports = React.createClass({
  displayName: 'PrevNext',
  render() {
    var item = this.props.item;

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
            <span className="prevnext__info">Previous chapter</span>
            <a className="prevnext__link" href={`/${item.prev.url}`}>{item.prev.title}</a>
          </div> :
          null
        }
        {item.next ?
          <div className="prevnext__next">
            <div className="prevnext__bg" style={{
              backgroundImage: `url(${item.next.headerImage})`
            }}></div>
            <span className="prevnext__info">Next chapter</span>
            <a className="prevnext__link" href={`/${item.next.url}`}>{item.next.title}</a>
          </div> :
          null
        }
      </div>
    );
  },
});
