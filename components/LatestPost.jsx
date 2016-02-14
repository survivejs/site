var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    displayName: 'LatestPost',
    render: function() {
        var post = _.reject(this.props.sectionPages('blog'), function(post) {
            return post.isDraft;
        })[0];

        if(!post) {
            return;
        }

        return (
            <blockquote className='latestpost tip'>
                <div>From the blog:</div>
                <a className='latestpost-link' href={`/${post.url}`}>
                    {post.title}
                </a>
            </blockquote>
        );
    }
});
