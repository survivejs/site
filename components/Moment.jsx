import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
  displayName: 'Moment',
  getDefaultProps() {
    return {
      format: 'D MMM YYYY',
      style: {}
    };
  },
  propTypes: {
    datetime: React.PropTypes.string.isRequired,
    format: React.PropTypes.string
  },
  render() {
    const datetime = this.props.datetime;

    return (
      <time dateTime={datetime} className={this.props.className}>
        {moment(datetime).format(this.props.format)}
      </time>
    );
  }
});
