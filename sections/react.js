var path = require('path');
var _common = require('./_common');

module.exports = function react(headers) {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('json!yaml-frontmatter!../../webpack_react/manuscript', true, /^\.\/.*\.md$/);
    },
    processPage: {
      title: _common.title,
      content: _common.content('webpack_react'),
      preview: _common.preview,
      url: _common.url
    },
    sort: function(files) {
      var order = require('raw!../../webpack_react/manuscript/Book.txt').split('\n').filter(id);
      var ret = [];

      order = order.filter(function(name) {
        return path.extname(name) === '.md';
      });

      order.forEach(function(name, i) {
        var result = _.findWhere(files, {
          name: name,
        });

        if(!result) {
          return console.error('Failed to find', name, files);
        }

        ret.push(result);
      });

      ret.reverse();

      return ret;
    },
    inject: function(files) {
      var sourcePrefix = 'https://github.com/survivejs/webpack_react/tree/master/project_source/';
      var reqResource = require.context('json!../../webpack_react_resources/', true, /^\.\/.*\.json$/);

      return files.map(function(o, i) {
        var file = o.file;
        var header = headers[files.length - i - 1];
        var resourceName = './' + o.name.split('.')[0] + '.json';
        var resources = reqResource(resourceName);

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
        file.bonus = header.bonus;
        file.resources = resources;
        file.type = header.type;

        if(header.endSource) {
          file.endSource = sourcePrefix + header.endSource;
        }
        if(header.demo) {
          file.demo = '/demos/' + header.demo;
        }

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
    }
  };
};

function id(a) {return a;}
