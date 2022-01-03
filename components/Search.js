import React from "react";

// TODO: Inject api keys in a smarter way
const Search = ({ sectionName }) => {
  let appId = null;
  let apiKey = null;
  let indexName = null;

  if (sectionName === "react") {
    apiKey = "7a7d80ba370ebaf7a9afa96ad380a1e1";
    indexName = "survivejs_react";
  } else if (sectionName === "maintenance") {
    apiKey = "4b3ffdbff33831aa87c5b1f39889f2af";
    indexName = "survivejs_maintenance";
  } else if (sectionName === "webpack") {
    appId = "BE4LKLLAJZ";
    apiKey = "c233f26a1e0b4b0c54edbb2f06d85864";
    indexName = "survivejs_webpack";
  } else {
    return null;
  }

  return (
    <Algolia
      appId={appId}
      apiKey={apiKey}
      indexName={indexName}
      inputSelector="#search"
    />
  );
};

const Algolia = ({
  appId,
  apiKey,
  indexName,
  inputSelector,
}) => (
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
          appId: '${appId}',
          apiKey: '${apiKey}',
          indexName: '${indexName}',
          inputSelector: '${inputSelector}',
          debug: false
        });
      `,
      }}
    />
  </div>
);

export default Search;
