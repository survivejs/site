import React from "react";

// TODO: Inject api keys in a smarter way
const Search = ({ sectionName }) => {
  let appId = null;
  let apiKey = null;
  let indexName = null;

  if (sectionName === "react") {
    appId = "1A2L5TW6MQ";
    apiKey = "90734373e2b9273836fb9054fac308cf";
    indexName = "survivejs_react";
  } else if (sectionName === "maintenance") {
    appId = "QD8ZTJ41U9";
    apiKey = "f420895920e526e0cb84df1ce0a27f90";
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
