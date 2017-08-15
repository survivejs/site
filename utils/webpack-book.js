// This parses webpack book manuscript and converts it into a lookup
// useful for linking
const fs = require("fs");
const path = require("path");
const parse = require("./parse");

const webpackUrl = require("../antwar.config.js")().paths.webpack.url;

let cache = {};

if (Object.keys(cache).length > 0) {
  module.exports = () => cache;
} else {
  module.exports = parseChapters;
}

function parseChapters() {
  const ret = {}; // title -> { ... }
  const bookRoot = "./books/webpack-book/manuscript";

  const fileNames = fs
    .readFileSync("./books/webpack-book/manuscript/Book.txt", {
      encoding: "utf8"
    })
    .split("\n")
    .filter(a => a);

  fileNames.forEach(fileName => {
    if (path.extname(fileName) === ".txt") {
      return;
    }

    const filePath = path.join(process.cwd(), bookRoot, fileName);
    const bookContent = fs.readFileSync(filePath, { encoding: "utf8" });

    if (!bookContent) {
      return;
    }

    const title = parse.title(bookContent).title;
    const sectionName = fileName.split("/")[0];
    const url = webpackUrl({
      fileName: path.basename(fileName, ".md"),
      sectionName: "webpack"
    });

    ret[title] = {
      fileName,
      sectionName,
      url
    };
  });

  cache = ret;

  return ret;
}
