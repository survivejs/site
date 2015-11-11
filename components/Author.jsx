var React = require('react');

module.exports = React.createClass({
  displayName: 'Author',

  render: function() {
    var author = this.props.author;

    return (
      <div className='post__author'>{author}</div>
    );
  }
});
