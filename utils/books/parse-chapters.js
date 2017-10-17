// This parses a manuscript and converts it into a lookup
// useful for linking
const fs = require("fs");
const path = require("path");
const parse = require("../parse");

function parseChapters(urlCb, bookRoot, sectionName) {
  const ret = {}; // title -> { ... }
  const fileNames = fs
    .readFileSync(`${bookRoot}/Book.txt`, {
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
    const url = urlCb({
      fileName: fileName.split(".")[0],
      sectionName
    });

    ret[title] = {
      fileName,
      sectionName,
      url
    };
  });

  return ret;
}

module.exports = parseChapters;
