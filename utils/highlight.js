/* eslint-disable no-console */
const { addLanguage, addPlugin, highlight } = require("illuminate-js");
const { bash } = require("illuminate-js/lib/languages/bash");
const { css } = require("illuminate-js/lib/languages/css");
const { diff } = require("illuminate-js/lib/languages/diff");
const { ini } = require("illuminate-js/lib/languages/ini");
const { javascript } = require("illuminate-js/lib/languages/javascript");
const { json } = require("illuminate-js/lib/languages/json");
const { jsx } = require("illuminate-js/lib/languages/jsx");
const { less } = require("illuminate-js/lib/languages/less");
const { makefile } = require("illuminate-js/lib/languages/makefile");
const { markup } = require("illuminate-js/lib/languages/markup");
const { scss } = require("illuminate-js/lib/languages/scss");
const { typescript } = require("illuminate-js/lib/languages/typescript");
const { yaml } = require("illuminate-js/lib/languages/yaml");

const languages = {
  bash,
  css,
  diff,
  ini,
  javascript,
  js: javascript,
  json,
  json5: json,
  jsx,
  less,
  makefile,
  haskell: markup, // XXX
  markdown: markup, // XXX
  html: markup,
  xml: markup,
  sass: scss, // XXX
  scss,
  typescript,
  ts: typescript,
  yaml,
};

Object.keys(languages).forEach(language => {
  addLanguage(language, languages[language]);
});

addPlugin(addHook => {
  addHook("before-highlight", env => {
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

  addHook("after-highlight", env => {
    env.highlightedCode = env.highlightedCode
      .replace(/_LEANPUB_START_INSERT/g, '<div class="leanpub-insert">')
      .replace(/_LEANPUB_START_DELETE/g, '<div class="leanpub-delete">')
      .replace(/_LEANPUB_END/g, "</div>");
  });
});

// XXX: Note naming to avoid recursion
module.exports = function highlightIlluminate(code, language = "bash") {
  try {
    return highlight(code, language);
  } catch (error) {
    if (!languages[language]) {
      console.warn("Illuminate does not support this language: ", language);
    } else {
      console.warn("Failed to highlight: ", error);
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
