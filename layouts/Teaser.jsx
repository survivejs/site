var React = require('react');
var Paths = require('antwar-core/PathsMixin');

module.exports = React.createClass({
    displayName: 'BlogTeaser',

    mixins: [Paths],

    render: function() {
        var section = this.props.section;
        var amount = this.props.amount;
        var posts = this.getSectionItems(section).slice(0, amount);

        return posts.length > 1 ?
            this.renderMultiple(posts) :
            this.renderSingle(posts[0]);
    },
    renderMultiple(posts) {
        return (
            <ul className='blog-teasers'>
                {posts.map((post, i) => {
                    return <li key={'post' + i}>{this.renderSingle(post)}</li>;
                })}
            </ul>
        );
    },
    renderSingle(post) {
        return <a className='blog-teaser' href={post.url}>
            {post.title}
        </a>;
    }
});
