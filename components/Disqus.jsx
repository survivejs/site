import React from "react";

export default React.createClass({
  displayName: "Disqus",
  render() {
    const shortname = this.props.shortname;

    return (
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `var disqus_shortname = '${shortname}';(function() {var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);})();`
        }}
      />
    );
  }
});
