import React from "react";
import SubscribeForm from "./SubscribeForm";

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

      <SubscribeForm />
    </div>
  );
};

export default SocialLinks;
