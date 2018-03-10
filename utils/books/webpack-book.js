// This parses webpack book manuscript and converts it into a lookup
// useful for linking
const parseChapters = require("./parse-chapters");

const webpackUrl = require("../../antwar.config.js").paths.webpack.url;

let cache = {};

if (Object.keys(cache).length > 0) {
  module.exports = () => cache;
} else {
  module.exports = () => {
    const ret = parseChapters(
      webpackUrl,
      "./books/webpack-book/manuscript",
      "webpack"
    );

    cache = ret;

    return ret;
  };
}
