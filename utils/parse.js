const path = require("path");
const marked = require("marked");
const removeMarkdown = require("remove-markdown");
const clean = require("./clean");
const headers = require("./headers");

function parseQuotes(data) {
  const tokens = marked.lexer(data).map(t => {
    if (t.type === "paragraph") {
      return (
        parseCustomQuote(t, "T>", "tip") ||
        parseCustomQuote(t, "W>", "warning") ||
        t
      );
    }

    return t;
  });
  tokens.links = [];

  return tokens;
}
exports.quotes = parseQuotes;

function parseCustomQuote(token, match, className) {
  if (token.type === "paragraph") {
    const text = token.text;

    if (text.indexOf(match) === 0) {
      const icon =
        className === "tip" ? "icon-attention-circled" : "icon-attention";

      return {
        type: "html",
        text: `<blockquote class="${className}"><i class="${
          icon
        }"></i>${text.slice(2).trim()}</blockquote>`,
      };
    }
  }

  return null;
}
exports.customQuote = parseCustomQuote;

function parseTitle(body) {
  const lines = body.split("\n");

  if (lines[0].indexOf("#") === 0 && lines[0][1] === " ") {
    return {
      title: removeMarkdown(lines[0]),
      body: lines.slice(1).join("\n"),
    };
  }

  if (lines[0].indexOf("-#") === 0) {
    return {
      title: removeMarkdown(lines[0].slice(2).trim()),
      body: lines.slice(1).join("\n"),
    };
  }

  return { body };
}
exports.title = parseTitle;

function parseHeader(resourcePath) {
  const baseName = clean.chapterName(
    path.basename(resourcePath, path.extname(resourcePath))
  );
  const header = headers[baseName];
  const ret = {};

  if (header) {
    if (header.source && header.author && header.license) {
      ret.headerExtra = `<a href="${header.source}">${header.author} (${
        header.license
      })</a>`;
    } else if (header.license) {
      ret.headerExtra = header.license;
    }

    ret.headerImage = `assets/img/headers/${header.image}`;

    ret.type = parseType(resourcePath);
  }

  return ret;
}
exports.header = parseHeader;

function parseType(resourcePath) {
  const chapterPath = resourcePath.split("/manuscript/")[1];

  if (chapterPath.split("/").length > 1) {
    return "chapter";
  }

  if (chapterPath === chapterPath.toLowerCase()) {
    return "intro";
  }

  return "part";
}
