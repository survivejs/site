import React from "react";

import { Algolia } from "@survivejs/components";

// TODO: Inject api keys in a smarter way
const Search = ({ sectionName }) => {
  let apiKey = null;
  let indexName = null;

  if (sectionName === "react") {
    apiKey = "7a7d80ba370ebaf7a9afa96ad380a1e1";
    indexName = "survivejs_react";
  } else if (sectionName === "maintenance") {
    apiKey = "4b3ffdbff33831aa87c5b1f39889f2af";
    indexName = "survivejs_maintenance";
  } else if (sectionName === "webpack") {
    apiKey = "c233f26a1e0b4b0c54edbb2f06d85864";
    indexName = "survivejs_webpack";
  } else {
    return null;
  }

  return (
    <Algolia
      apiKey={apiKey}
      indexName={indexName}
      inputSelector="#search"
    />
  );
};

export default Search;
