import React from 'react';

export default React.createClass({
  displayName: 'Testimonial',
  render: function() {
    return (
      <div className='testimonial'>
        <div className='text-wrapper'>
          <div className='text'>{this.props.text}</div>
        </div>

        {this.props.image && <div className='photo-wrapper'>
          {this.props.url ? <a href={this.props.url} target='_blank'>
            <img className='photo' src={this.props.image} alt={this.props.name} />
          </a> :
            <img className='photo' src={this.props.image} alt={this.props.name} />
          }
        </div>}

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
