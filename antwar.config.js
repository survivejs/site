const _ = require("lodash");
const path = require("path");
const moment = require("moment");
const React = require("react");
const rssPlugin = require("antwar-rss-plugin");
const generateAdjacent = require("./utils/generate-adjacent");
const clean = require("./utils/clean");

// TODO: generate react demos on build
// TODO: fix page descriptions
// TODO: fix react extras + source links
// TODO: add source links to webpack book
module.exports = {
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  blog: {
    author: React.createElement(
      "a",
      { href: "https://twitter.com/bebraw" },
      "Juho Vepsäläinen"
    ),
  },
  output: "build",
  plugins: [
    rssPlugin({
      baseUrl: "https://survivejs.com/",
      sections: ["blog"],
      get: {
        content: (page) => page.file.body,
        date: (page) =>
          moment(page.file.attributes.date)
            .utcOffset(0)
            .format(),
        title: (page) => page.file.attributes.title,
      },
    }),
  ],
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "/": {
      content: () =>
        require.context("./pages", false, /^\.\/.*\.md$/),
      index: () => {
        const index = require("./layouts/SiteIndex")
          .default;

        index.title = "SurviveJS";
        index.description =
          "Want to learn how to manage your JavaScript projects? Get started for free.";

        return index;
      },
    },
    blog: {
      content: () =>
        require.context(
          "./pages/blog",
          false,
          /^\.\/.*\.md$/
        ),
      index: () => {
        const index = require("./layouts/BlogIndex")
          .default;

        index.title = "Blog";
        index.description = "";

        return index;
      },
      layout: () => require("./layouts/BlogPage").default,
      transform: (pages) =>
        generateAdjacent(
          _.sortBy(pages, "file.attributes.date")
        ).reverse(),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${clean.chapterName(fileName)}/`,
      redirects: require("./redirects/blog"),
    },
    clinic: {
      redirects: require("./redirects/clinic"),
    },
    training: () =>
      require("./layouts/IndexPage").default({
        type: "Training",
        content: require("./content/training.md").body,
      }),
    workshop: () =>
      require("./layouts/IndexPage").default({
        type: "Workshop",
        content: require("./content/workshop.md").body,
      }),
    maintenance: {
      content: () =>
        require.context(
          "./books/maintenance-book/manuscript",
          true,
          /^\.\/.*\.md$/
        ),
      index: () => {
        const index = require("./layouts/MaintenanceIndex")
          .default;

        index.title = "SurviveJS - Maintenance";
        index.description =
          "Want to improve maintainability of your projects? Learn the related techniques for free.";

        return index;
      },
      layout: () => require("./layouts/BookPage").default,
      transform: (pages) =>
        generateAdjacent(
          require("./books/maintenance-book/manuscript/Book.txt")
            .split("\n")
            .filter((name) => path.extname(name) === ".md")
            .map((fileName) => {
              const result = _.find(pages, { fileName });

              if (!result) {
                throw new Error(
                  "Failed to find",
                  fileName,
                  pages
                );
              }

              return result;
            })
        ),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${clean.chapterName(fileName)}/`,
      redirects: require("./redirects/maintenance"),
    },
    react: {
      content: () =>
        require.context(
          "./books/react-book/manuscript",
          true,
          /^\.\/.*\.md$/
        ),
      index: () => {
        const index = require("./layouts/ReactIndex")
          .default;

        index.title = "SurviveJS - React";
        index.description =
          "Want to learn React? Get started for free and build a Kanban board by following the example project.";

        return index;
      },
      layout: () => require("./layouts/BookPage").default,
      transform: (pages) =>
        generateAdjacent(
          require("./books/react-book/manuscript/Book.txt")
            .split("\n")
            .filter((name) => path.extname(name) === ".md")
            .map((fileName) => {
              const result = _.find(pages, { fileName });

              if (!result) {
                throw new Error(
                  "Failed to find",
                  fileName,
                  pages
                );
              }

              return result;
            })
        ),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${clean.chapterName(fileName)}/`,
    },
    webpack: {
      content: () =>
        require.context(
          "./books/webpack-book/manuscript",
          true,
          /^\.\/.*\.md$/
        ),
      index: () => {
        const index = require("./layouts/WebpackIndex")
          .default;

        index.title = "SurviveJS – Webpack";
        index.description =
          "Want to learn webpack? Get started for free and build webpack configuration.";

        return index;
      },
      layout: () => require("./layouts/BookPage").default,
      transform: (pages) =>
        generateAdjacent(
          require("./books/webpack-book/manuscript/Book.txt")
            .split("\n")
            .filter((name) => path.extname(name) === ".md")
            .map((fileName) => {
              const result = _.find(pages, { fileName });

              if (!result) {
                throw new Error(
                  "Failed to find",
                  fileName,
                  pages
                );
              }

              return result;
            })
        ),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${clean.chapterName(fileName)}/`,
      redirects: require("./redirects/webpack"),
    },
    webpack_react: {
      redirects: require("./redirects/webpack_react"),
    },
  },
};
