// Ported from webpack.js.org
const Prism = require("prismjs");
const languages = require("prism-languages");

attachPrismHooks(Prism);

const highlight = Prism.highlight;

if (typeof document !== "undefined") {
  // disable automatic highlight on content loaded
  const script =
    document.currentScript ||
    [].slice.call(document.getElementsByTagName("script")).pop();
  script.setAttribute("data-manual", "");
}

module.exports = function highlightPrism(code, language = "bash") {
  try {
    return leanpubify(highlight(code, languages[language]));
  } catch (error) {
    if (!languages[language]) {
      console.warn("Prism does not support this language: ", language);
    } else {
      console.warn("Prism failed to highlight: ", error);
    }
  }

  return code;
};

function attachPrismHooks(Prism) {
  // detect leanpub specific syntax
  Prism.hooks.add("before-highlight", function(env) {
    env.code = env.code.replace(/leanpub-start-insert/gi, function(match) {
      return "_LEANPUB_START_INSERT";
    });

    env.code = env.code.replace(/leanpub-end-insert/gi, function(match) {
      return "_LEANPUB_END";
    });

    env.code = env.code.replace(/leanpub-start-delete/gi, function(match) {
      return "_LEANPUB_START_DELETE";
    });

    env.code = env.code.replace(/leanpub-end-delete/gi, function(match) {
      return "_LEANPUB_END";
    });
  });
}

function leanpubify(code) {
  return code
    .replace(/_LEANPUB_START_INSERT/g, '<div class="leanpub-insert">')
    .replace(/_LEANPUB_START_DELETE/g, '<div class="leanpub-delete">')
    .replace(/_LEANPUB_END/g, "</div>");
}

module.exports.leanpubify = leanpubify;
