import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  displayName: 'PrevNext',
  render() {
    var page = this.props.page;
    var previousText = this.props.previousText;
    var nextText = this.props.nextText;

    if(!(page.next || page.prev)) {
      return;
    }

    // XXX: make sure page spans whole container if it's the only one
    var style = {width: '100%'};
    if(page.next && page.prev) {
      style = {};
    }

    // TODO: remove prevnext rules from the base theme
    return (
      <div className="new-prevnext">
        {page.prev ?
          <div className="new-prevnext__prev" style={style}>
            <div className="new-prevnext__bg" style={{
              backgroundImage: `url(${page.prev.headerImage})`
            }}></div>
            <span className="new-prevnext__info">{previousText}</span>
            <Link className="new-prevnext__link" to={`/${page.prev.url}`}>
              {page.prev.title}
            </Link>
          </div> :
          null
        }
        {page.next ?
          <div className="new-prevnext__next" style={style}>
            <div className="new-prevnext__bg" style={{
              backgroundImage: `url(${page.next.headerImage})`
            }}></div>
            <span className="new-prevnext__info">{nextText}</span>
            <Link className="new-prevnext__link" to={`/${page.next.url}`}>
              {page.next.title}
            </Link>
          </div> :
          null
        }
      </div>
    );
  },
});
