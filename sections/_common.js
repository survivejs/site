var removeMd = require("remove-markdown");
var markdown = require("../utils/markdown");
var highlight = require("../utils/highlight");

exports.title = function(o) {
  var ret = removeMd(o.file.__content.split("\n")[0]);

  // part
  if (ret.indexOf("-#") === 0) {
    ret = ret.slice(2).trim();
  }

  if (o.file.bonus) {
    ret += "*";
  }

  return ret;
};

exports.content = function(section) {
  return function(o) {
    var content = o.file.__content
      .split("\n")
      .slice(1)
      .join("\n");

    return markdown(section).process(content, highlight);
  };
};

exports.preview = function(o) {
  var previewLimit = 300;
  var content = o.file.__content
    .split("##")[0]
    .split("\n")
    .slice(1)
    .join("\n");
  var stripped = removeMd(content);

  if (stripped.length > previewLimit) {
    return stripped.substr(0, previewLimit) + "…";
  }

  return stripped;
};

exports.url = function(o) {
  var fileName = o.fileName
    .split(".")[0]
    .toLowerCase()
    .replace(/_/g, "-");
  var parts = fileName.split("/");
  var partName = parts[0];

  if (parts.length > 1) {
    var chapterName = parts[1]
      .split("-")
      .slice(1)
      .join("-");

    return o.sectionName + "/" + partName + "/" + chapterName;
  } else {
    partName = parts[0]
      .split("-")
      .slice(1)
      .join("-");
  }

  return o.sectionName + "/" + partName;
};
