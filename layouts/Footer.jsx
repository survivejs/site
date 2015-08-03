var React = require('react');
var Paths = require('antwar-core/PathsMixin');
var _ = require('lodash');

module.exports = React.createClass({
    displayName: 'Footer',

    mixins: [Paths],

    render: function() {
        return (
            <div className='footer-wrapper'>
                <div className='footer-social'>
                    <h3>Social</h3>
                    <ul>
                        <li>
                            <a href='https://twitter.com/survivejs' target='_blank'>@survivejs</a>
                        </li>
                        <li>
                            <a href='http://eepurl.com/bth1v5' target='_blank'>Mailing List</a>
                        </li>
                        <li>
                            <a href='https://gitter.im/survivejs/webpack_react' target='_blank'>Gitter Chat</a>
                        </li>
                        <li>
                            <a href='https://github.com/survivejs/webpack_react' target='_blank'>GitHub</a>
                        </li>
                        <li>
                            <a href='http://localhost:8000/atom.xml' target='_blank'>Blog RSS</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-blog'>
                    <h3>From the Blog</h3>

                    {this.renderBlogTeaser(5)}
                </div>
                <div className='footer-contact'>
                    <h3>Contact</h3>

                    <form action='//formspree.io/bebraw@gmail.com' method='POST'>
                        <label>
                            <span>Name:</span>
                            <input type='text' name='name' />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input type='email' name='_replyto' />
                        </label>
                        <label>
                            <span>Message:</span>
                            <textarea name='message' rows='4' />
                        </label>
                        <input type='hidden' name='_subject' value='SurviveJS' />
                        <input type='hidden' name="_next" value='//survivejs.com/thanks' />
                        <input type='text' name='_gotcha' style={{display: 'none'}} />
                        <label className='submit-container'>
                            <input type='submit' value='Send' />
                        </label>
                    </form>
                </div>
            </div>
        );
    },
    renderBlogTeaser: function(amount) {
        var posts = _.reject(this.getSectionItems('blog'), function(post) {
            return post.isDraft;
        }).slice(0, amount);

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
