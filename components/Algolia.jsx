import React from "react";

export default React.createClass({
  displayName: "Algolia",
  render() {
    const { apiKey, indexName, inputSelector } = this.props;

    return (
      <div>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            docsearch({
              apiKey: '${apiKey}',
              indexName: '${indexName}',
              inputSelector: '${inputSelector}',
              debug: false
            });
          `
          }}
        />
      </div>
    );
  }
});
