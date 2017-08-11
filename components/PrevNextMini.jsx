import React from "react";
import { Link } from "react-router";

export default React.createClass({
  displayName: "PrevNextMini",
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
    return next
      ? <Link className="next-page" to={`/${next.url}`} title={next.title}>
          <i className="icon-right-open" />
        </Link>
      : null;
  },
  renderPrev(prev) {
    return prev
      ? <Link className="previous-page" to={`/${prev.url}`} title={prev.title}>
          <i className="icon-left-open" />
        </Link>
      : null;
  }
});
