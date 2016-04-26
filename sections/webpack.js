var path = require('path');
var _common = require('./_common.js');

module.exports = function webpack(headers) {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('json!yaml-frontmatter!../../webpack/manuscript', true, /^\.\/.*\.md$/);
    },
    processPage: {
      title: _common.title,
      content: _common.content('webpack'),
      preview: _common.preview,
      url: _common.url
    },
    sort: function(files) {
      var order = require('raw!../../webpack/manuscript/Book.txt').split('\n').filter(id);
      var ret = [];

      order = order.filter(function(name) {
        return path.extname(name) === '.md';
      });

      order.forEach(function(name, i) {
        var result = _.findWhere(files, {
          name: name,
        });

        if(!result) {
          return console.error('Failed to find', name);
        }

        ret.push(result);
      });

      ret.reverse();

      return ret;
    },
    inject: function(files) {
      return files.map(function(o, i) {
        var file = o.file;
        var header = headers[files.length - i - 1] || {};

        if(header.source && header.author && header.license) {
          file.headerExtra = '<a href="' + header.source + '">' +
            header.author + ' ('+ header.license + ')</a>';
        }
        else if(header.license) {
          file.headerExtra = header.license;
        }

        file.headerImage = '/assets/img/chapters/' + header.image;
        file.previousInfo = 'Previous chapter';
        file.nextInfo = 'Next chapter';
        file.type = header.type;

        return o;
      });
    },
    layouts: {
      index: function() {
        return require('../layouts/ChapterIndex.jsx').default;
      },
      page: function() {
        return require('../layouts/ChapterPage.jsx').default;
      }
    },
    redirects: {
      'developing-with-webpack/setting-up-npm-install-webpack-plugin': 'introduction',
      'developing-with-webpack/optimizing-development': 'advanced-techniques/configuring-react'
    }
  };
};

function id(a) {return a;}
