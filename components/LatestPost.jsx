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
                    <div>From the blog:</div>
                    <a className='latestpost-link' href={`/${post.url}`}>
                        {post.title}
                    </a>
                    <hr />
                    <a className='latestpost-link' href='https://ti.to/peerigon/webpack-workshop'>
                        Register for Augsburg workshop (early July)
                    </a>
                    <br/>
                    <a className='latestpost-link' href='/clinic/'>
                        Register for Vienna clinics (late July)
                    </a>
                </blockquote>
            </div>
        );
    }
});

