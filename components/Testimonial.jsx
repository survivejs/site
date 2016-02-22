var React = require('react');

module.exports = React.createClass({
  displayName: 'Testimonial',
  render: function() {
    return (
      <div className='testimonial'>
        <div className='text-wrapper'>
          <div className='text'>{this.props.text}</div>
        </div>
        <div className='photo-wrapper'>
          <a href={this.props.url} target='_blank'>
            <img className='photo' src={this.props.image} alt={this.props.name} />
          </a>
        </div>
      </div>
    );
  }
});
