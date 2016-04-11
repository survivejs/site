import React from 'react';

export default React.createClass({
  displayName: 'SocialLinks',
  render() {
    const type = this.props.type;
    const start = type ? `If you enjoyed this ${type}, consider` : 'Consider';

    return (
      <div className="social-links">
        <blockquote className="tip">
          {`${start} subscribing to the mailing list below or following `}
          <a href="https://twitter.com/survivejs">@survivejs</a> for occasional updates. There is also <a href="/atom.xml">RSS</a> available for old beards (no pun intended).
        </blockquote>

        <h2 className="subscribe-header">Subscribe to the mailing list</h2>

        <form action="//jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&amp;id=b853b8e786"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate social-form"
          target="_blank"
          noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group social-input-container">
              <input type="email"
                placeholder="Email"
                value="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{
              display: 'none',
              position: 'absolute',
              left: '-5000px'
            }}>
              <input type="text"
                name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
                tabIndex="-1" value="" />
            </div>
            <div className="social-subscribe-container">
              <input type="submit"
                className="btn button social-subscribe"
                style={{marginTop: '1em', marginBottom: '1em', lineHeight: '2em'}}
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});
