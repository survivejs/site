var path = require('path');
var _common = require('./_common');

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
      'developing-with-webpack/optimizing-development': 'optimizing-build',
      'developing-with-webpack/refreshing-css': 'developing-with-webpack/automatic-browser-refresh',
      'developing-with-webpack/enabling-sourcemaps': 'building-with-webpack/enabling-sourcemaps',
      'developing-with-webpack/splitting-configuration': 'developing-with-webpack/composing-configuration',
      'building-with-webpack/minifying-build': 'optimizing-build/minifying',
      'building-with-webpack/setting-environment-variables': 'optimizing-build/setting-environment-variables',
      'building-with-webpack/adding-hashes-to-filenames': 'optimizing-build/adding-hashes-to-filenames',
      'building-with-webpack/separating-css': 'handling-styles/separating-css',
      'building-with-webpack/eliminating-unused-css': 'handling-styles/eliminating-unused-css',
      'building-with-webpack/analyzing-build-statistics': 'optimizing-build/analyzing-build-statistics',
      'building-with-webpack/hosting-on-github-pages/': 'appendices/deploying',
      'loading-assets': 'understanding-loaders',
      'loading-assets/formats-supported': 'understanding-loaders/loader-definitions',
      'loading-assets/loader-definitions': 'understanding-loaders/loader-definitions',
      'loading-assets/loading-styles': 'handling-styles/loading',
      'loading-assets/loading-images': 'understanding-loaders/loading-images',
      'loading-assets/loading-fonts': 'understanding-loaders/loading-fonts',
      'advanced-techniques/understanding-chunks': 'building-with-webpack/splitting-bundles',
      'advanced-techniques/linting-in-webpack': 'developing-with-webpack/linting',
      'advanced-techniques/writing-loaders': 'understanding-loaders/writing-loaders',
    }
  };
};

function id(a) {return a;}
