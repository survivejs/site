const _ = require("lodash");

function cleanChapterName(resourcePath) {
  const parts = resourcePath.split("/");
  const beginning = parts.slice(0, -1);
  const end = _.trimStart(parts.slice(-1)[0], "0123456789-_");

  return beginning
    .concat(end)
    .join("/")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}
exports.chapterName = cleanChapterName;
