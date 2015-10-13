var React = require('react');
var Paths = require('antwar-core/PathsMixin');
var _ = require('lodash');

module.exports = React.createClass({
    displayName: 'LatestPost',

    mixins: [Paths],

    render: function() {
        var post = _.reject(this.getSectionItems('blog'), function(post) {
            return post.isDraft;
        })[0];

        if(!post) {
            return;
        }

        return (
            <blockquote className='front__latestpost tip'>
                <div>From the blog:</div>
                <a className='front__latestpost-link' href={post.url}>
                    {post.title}
                </a>
            </blockquote>
        );
    }
});
