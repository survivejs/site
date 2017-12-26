/* eslint-disable no-console */
const { addLanguage, addPlugin, highlight } = require("illuminate-js");
const languages = require("illuminate-js/lib/languages");

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
