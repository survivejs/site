var React = require('react');
var Teaser = require('./Teaser');

module.exports = React.createClass({
    displayName: 'Footer',

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
                            <a href='/atom.xml' target='_blank'>Blog RSS</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-blog'>
                    <h3>From the Blog</h3>

                    <Teaser section={'blog'} amount={10} />
                </div>
                <div className='footer-contact'>
                    <h3>Contact</h3>

                    <form action='//formspree.io/info@survivejs.com' method='POST'>
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
                            <textarea name='message' rows='8' />
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
    }
});
