var _ = require("lodash");
var markdown = require("../utils/markdown");
var highlight = require("../utils/highlight");

module.exports = function blog() {
  return {
    title: "Blog posts",
    path: function() {
      return require.context(
        "json!yaml-frontmatter!../posts",
        false,
        /^\.\/.*\.md$/
      );
    },
    /*
    draft: function() {
      return require.context('json!yaml-frontmatter!../drafts', false, /^\.\/.*\.md$/);
    },
    */
    processPage: {
      url: function(o) {
        if (o.file.url) {
          return o.file.url;
        }

        var page = o.fileName.split(".")[0].split("-").slice(1).join("-");

        return o.sectionName + "/" + page;
      },
      content: function(o) {
        var content = o.file.__content.split("\n").slice(1).join("\n");

        return markdown().process(content, highlight);
      }
    },
    layouts: {
      index: function() {
        return require("../layouts/BlogIndex.jsx").default;
      },
      page: function() {
        return require("../layouts/BlogPage.jsx").default;
      }
    },
    sort: function(files) {
      return _.sortBy(files, o => {
        return -parseInt(o.name.split("-")[0], 10);
      });
    },
    redirects: {
      "survivejs-webpack120": "survivejs-webpack-120",
      "mobservable-interview": "mobx-interview",
      "react-router5": "react-router5-interview"
    }
  };
};
