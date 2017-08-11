// This parses webpack book manuscript and converts it into a lookup
// useful for linking
var path = require("path");

var _common = require("../sections/_common");

var ret = {};

if (Object.keys(ret).length > 0) {
  module.exports = ret;
} else {
  module.exports = parseChapters();
}

function parseChapters() {
  var ret = {}; // title -> { ... }
  const req = require.context(
    "json!yaml-frontmatter!../../webpack/manuscript",
    true,
    /^\.\/.*\.md$/
  );

  require("raw!../../webpack/manuscript/Book.txt")
    .split("\n")
    .filter(a => a)
    .forEach(fileName => {
      if (path.extname(fileName) === ".txt") {
        return;
      }

      const title = req("./" + fileName).__content
        .split("\n")[0]
        .split(" ")
        .slice(1)
        .join(" ");
      const sectionName = fileName.split("/")[0];
      var url =
        "/webpack" +
        _common.url({
          fileName,
          sectionName: ""
        });

      ret[title] = {
        fileName,
        sectionName,
        url
      };
    });

  return ret;
}
