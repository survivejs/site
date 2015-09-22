var React = require('react');
var Paths = require('antwar-core/PathsMixin');

module.exports = React.createClass({
    displayName: 'BlogTeaser',

    mixins: [Paths],

    render: function() {
        var section = this.props.section;
        var amount = this.props.amount;
        var posts = this.getSectionItems(section).slice(0, amount);

        return (
            <ul className='blog-teasers'>
                {posts.map((post, i) => {
                    return (<li key={'post' + i}>
                        <a className='blog-teaser' href={post.url}>
                            {post.title}
                        </a>
                    </li>);
                })}
            </ul>
        );
    }
});
