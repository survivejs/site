import React from 'react';
import _ from 'lodash';

export default React.createClass({
    displayName: 'LatestPost',
    render: function() {
        var post = _.reject(this.props.sectionPages('blog'), function(post) {
            return post.isDraft;
        })[0];

        if(!post) {
            return;
        }

        return (
            <div>
                <blockquote className='latestpost tip'>
                    <div>Register for workshops:</div>
                    <a className='latestpost-link' href='https://survivejs.typeform.com/to/BlI8bR'>
                        Vienna workshop (June/July)
                    </a>
                    <br/>
                    <a className='latestpost-link' href='https://ti.to/peerigon/webpack-workshop'>
                        Augsburg workshop (early July)
                    </a>
                </blockquote>
                <blockquote className='latestpost tip'>
                    <div>From the blog:</div>
                    <a className='latestpost-link' href={`/${post.url}`}>
                        {post.title}
                    </a>
                </blockquote>
            </div>
        );
    }
});

