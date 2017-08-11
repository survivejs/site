import React from "react";

export default React.createClass({
  displayName: "Author",

  render: function() {
    var author = this.props.author;

    return (
      <div className="post__author">
        {author}
      </div>
    );
  }
});
