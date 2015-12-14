'use strict';
var marked = require('marked');
var Prism = require('prismjs');
var languages = require('prism-languages');

var highlight = Prism.highlight;
var renderer = new marked.Renderer();

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

// alter marked renderer to add slashes to beginning so images point at root
// leanpub expects images without slash...
renderer.image = function(href, title, text) {
  return '<img src="/' + href + '" alt="' + text + '">';
};

// patch ids (this.options.headerPrefix can be undefined!)
renderer.heading = function(text, level, raw) {
  var id = raw.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h'
    + level
    + ' class="header">'
    + '<a class="header-anchor" href="#' + id + '" id="' + id + '"></a>'
    + '<span class="text">'
    + text
    + '</span><a class="header-anchor-select" href="#' + id + '">#</a>'
    + '</h'
    + level
    + '>\n';
};

var markedDefaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: function(code, language) {
    try {
      language = language || 'bash';

      return highlight(code, languages[language]);
    }
    catch(err) {
      console.warn('Failed to highlight', language, code, err);
    }

    return code;
  },
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: renderer,
  xhtml: false
};

exports.process = function(content) {
  var tokens = parseQuotes(content);

  return marked.parser(tokens, markedDefaults);
};

function parseQuotes(data) {
  var tokens = marked.lexer(data).map(function(t) {
    if(t.type === 'paragraph') {
      return parseCustomQuote(t, 'T>', 'tip') ||
        parseCustomQuote(t, 'W>', 'warning') ||
        t;
    }

    return t;
  });
  tokens.links = [];

  return tokens;
}

function parseCustomQuote(token, match, className) {
  if(token.type === 'paragraph') {
    var text = token.text;

    if(text.indexOf(match) === 0) {
      return {
        type: 'html',
        text: '<blockquote class="' + className + '">' + text.slice(2).trim() + '</blockquote>',
      };
    }
  }
}
