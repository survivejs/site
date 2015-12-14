'use strict';
var Prism = require('prismjs');
var languages = require('prism-languages');

attachPrismHooks(Prism);

var highlight = Prism.highlight;

module.exports = function(code, language) {
  try {
    language = language || 'bash';

    return highlight(code, languages[language]);
  }
  catch(err) {
    console.warn('Failed to highlight', language, code, err);
  }

  return code;
};

function attachPrismHooks(Prism) {
  // detect leanpub specific syntax
  Prism.hooks.add('before-highlight', function(env) {
    env.tokenStack = {
      startInsert: 0,
      endInsert: 0,
      startDelete: 0,
      endDelete: 0
    };

    env.code = env.code.replace(/leanpub-start-insert/ig, function(match) {
      env.tokenStack.startInsert++;

      return '_LEANPUB_START_INSERT' + env.tokenStack.startInsert;
    });

    env.code = env.code.replace(/leanpub-end-insert/ig, function(match) {
      env.tokenStack.endInsert++;

      return '_LEANPUB_END_INSERT' + env.tokenStack.endInsert;
    });

    env.code = env.code.replace(/leanpub-start-delete/ig, function(match) {
      env.tokenStack.startDelete++;

      return '_LEANPUB_START_DELETE' + env.tokenStack.startDelete;
    });

    env.code = env.code.replace(/leanpub-end-delete/ig, function(match) {
      env.tokenStack.endDelete++;

      return '_LEANPUB_END_DELETE' + env.tokenStack.endDelete;
    });
  });
  Prism.hooks.add('after-highlight', function(env) {
    for(var i = 0, t = env.tokenStack.startInsert; i < t; i++) {
      env.highlightedCode = env.highlightedCode.replace(
        '_LEANPUB_START_INSERT' + (i + 1),
        '<div class="leanpub-insert">'
      );
    }

    for(var i = 0, t = env.tokenStack.endInsert; i < t; i++) {
      env.highlightedCode = env.highlightedCode.replace(
        '_LEANPUB_END_INSERT' + (i + 1),
        '</div>'
      );
    }

    for(var i = 0, t = env.tokenStack.startDelete; i < t; i++) {
      env.highlightedCode = env.highlightedCode.replace(
        '_LEANPUB_START_DELETE' + (i + 1),
        '<div class="leanpub-delete">'
      );
    }

    for(var i = 0, t = env.tokenStack.endDelete; i < t; i++) {
      env.highlightedCode = env.highlightedCode.replace(
        '_LEANPUB_END_DELETE' + (i + 1),
        '</div>'
      );
    }

    env.element.innerHTML = env.highlightedCode;
  });
}
