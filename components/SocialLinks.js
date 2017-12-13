import React from "react";

const SocialLinks = ({ type }) => {
  const start = type ? `If you enjoyed this ${type}, consider` : "Consider";

  return (
    <div className="social-links">
      <h2 className="social-links__header">Subscribe to the blog updates</h2>

      <blockquote className="tip social-links__tip">
        {`${start} subscribing to the mailing list below or following `}
        <a href="https://twitter.com/survivejs">@survivejs</a> for occasional
        updates. There is also <a href="/atom.xml">RSS</a> available for old
        beards (no pun intended).
      </blockquote>

      <form
        action={
          "//jster.us7.list-manage.com/subscribe/post" +
          "?u=ed40c0084a0c5ba31b3365d65&amp;id=b853b8e786"
        }
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate social-form"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll" className="social-form__wrapper">
          <div className="mc-field-group social-form__input-container">
            <input
              type="email"
              placeholder="Email"
              value=""
              name="EMAIL"
              className="required email social-form__input"
              id="mce-EMAIL"
            />
          </div>
          <div
            style={{
              display: "none",
              position: "absolute",
              left: "-5000px",
            }}
          >
            <input
              type="text"
              name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="social-form__subscribe-container">
            <input
              type="submit"
              className="btn button social-form__subscribe"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialLinks;
