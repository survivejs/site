import React from 'react';

export default React.createClass({
  displayName: 'Testimonial',
  render: function() {
    return (
      <div className='testimonial'>
        <div className='text-wrapper'>
          <span className='text'>{this.props.text}</span>
        </div>
        <div className='photo-wrapper'>
          <a href={this.props.url} target='_blank'>
            <img className='photo' src={this.props.image} alt={this.props.name} />
          </a>
        </div>
        <div className='name-wrapper'>
          <span className='name'>{this.props.name}</span>
        </div>
        <div className='title-wrapper'>
          <span className='title'>{this.props.title || '\u00a0'}</span>
        </div>
      </div>
    );
  }
});
