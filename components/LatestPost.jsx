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
                    <a className='latestpost-link' href={`/${post.url}`}>
                        {post.title}
                    </a>
                    <hr />
                    <a className='latestpost-link' href='/clinic/'>
                        <b>Register</b> for Vienna clinics (August)
                    </a>
                </blockquote>
            </div>
        );
    }
});

