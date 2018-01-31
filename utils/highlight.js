/* eslint-disable no-console */
const { addLanguage, addPlugin, highlight } = require("illuminate-js");
const languages = require("illuminate-js/lib/languages");
const replacePlugin = require("./replace-plugin");

// Alias sass
languages.sass = languages.scss;

Object.keys(languages).forEach(language => {
  addLanguage(language, languages[language]);
});

addPlugin(
  replacePlugin({
    start: "leanpub-start-insert",
    end: "leanpub-end-insert",
    className: "leanpub-insert",
  })
);
addPlugin(
  replacePlugin({
    start: "leanpub-start-delete",
    end: "leanpub-end-delete",
    className: "leanpub-delete",
  })
);

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
