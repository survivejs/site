var path = require('path');
var removeMd = require('remove-markdown');
var markdown = require('../utils/markdown');
var highlight = require('../utils/highlight');

module.exports = function webpack(headers) {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('json!yaml-frontmatter!../../webpack/manuscript', true, /^\.\/.*\.md$/);
    },
    processPage: {
      title: function(o) {
        var ret = removeMd(o.file.__content.split('\n')[0]);

        // part
        if(ret.indexOf('-#') === 0) {
          ret = ret.slice(2).trim();
        }

        if(o.file.bonus) {
          ret += '*';
        }

        return ret;
      },
      content: function(o) {
        var content = o.file.__content.split('\n').slice(1).join('\n');

        return markdown('webpack').process(content, highlight);
      },
      preview: function(o) {
        var previewLimit = 300;
        var content = o.file.__content.split('##')[0].split('\n').slice(1).join('\n');
        var stripped = removeMd(content);

        if(stripped.length > previewLimit) {
          return stripped.substr(0, previewLimit) + '…';
        }

        return stripped;
      },
      url: function(o) {
        var fileName = o.fileName.split('.')[0].toLowerCase().replace(/_/g, '-');
        var parts = fileName.split('/');
        var partName = parts[0];

        if(parts.length > 1) {
          var chapterName = parts[1].split('-').slice(1).join('-');

          return o.sectionName + '/' + partName + '/' + chapterName;
        }
        else {
          partName = parts[0].split('-').slice(1).join('-');
        }

        return o.sectionName + '/' + partName;
      },
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
