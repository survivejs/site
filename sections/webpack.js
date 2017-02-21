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
      'webpack-compared': 'compared/',
      'developing-with-webpack': 'developing/',
      'developing-with-webpack/setting-up-npm-install-webpack-plugin': 'introduction/',
      'developing-with-webpack/optimizing-development': 'optimizing-build/',
      'developing-with-webpack/getting-started': 'developing/getting-started/',
      'developing-with-webpack/automatic-browser-refresh': 'developing/automatic-browser-refresh/',
      'developing-with-webpack/configuring-hmr': 'developing/configuring-hmr/',
      'developing-with-webpack/linting': 'developing/linting/',
      'developing-with-webpack/composing-configuration': 'developing/composing-configuration/',
      'developing-with-webpack/refreshing-css': 'developing/automatic-browser-refresh/',
      'developing-with-webpack/enabling-sourcemaps': 'building/source-maps/',
      'developing-with-webpack/splitting-configuration': 'developing/composing-configuration/',
      'building-with-webpack': 'building/',
      'building-with-webpack/minifying-build': 'optimizing/minifying/',
      'building-with-webpack/processing-with-babel': 'loading/javascript/',
      'building-with-webpack/cleaning-build': 'building/tidying-up/',
      'building-with-webpack/attaching-revision': 'building/tidying-up/',
      'building-with-webpack/source-maps': 'building/source-maps/',
      'building-with-webpack/splitting-bundles': 'building/splitting-bundles/',
      'building-with-webpack/code-splitting': 'building/code-splitting/',
      'building-with-webpack/setting-environment-variables': 'optimizing/setting-environment-variables/',
      'building-with-webpack/adding-hashes-to-filenames': 'optimizing/adding-hashes-to-filenames/',
      'building-with-webpack/separating-css': 'styling/separating-css/',
      'building-with-webpack/eliminating-unused-css': 'styling/eliminating-unused-css/',
      'building-with-webpack/analyzing-build-statistics': 'optimizing/analyzing-build-statistics/',
      'building-with-webpack/hosting-on-github-pages/': 'appendices/deploying/',
      'building-with-webpack/enabling-sourcemaps': 'building/source-maps/',
      'optimizing-build': 'optimizing/',
      'optimizing-build/minifying': 'optimizing/minifying/',
      'optimizing-build/tree-shaking': 'optimizing/tree-shaking/',
      'optimizing-build/setting-environment-variables': 'optimizing/setting-environment-variables/',
      'optimizing-build/adding-hashes-to-filenames': 'optimizing/adding-hashes-to-filenames/',
      'optimizing-build/separating-manifest': 'optimizing/separating-manifest/',
      'optimizing-build/analyzing-build-statistics': 'optimizing/analyzing-build-statistics/',
      'handling-styles': 'styling/',
      'handling-styles/loading': 'styling/loading/',
      'handling-styles/separating-css': 'styling/separating-css/',
      'handling-styles/autoprefixing': 'styling/autoprefixing/',
      'handling-styles/eliminating-unused-css': 'styling/eliminating-unused-css/',
      'handling-styles/linting': 'styling/linting/',
      'loading-assets': 'loading/',
      'loading-assets/formats-supported': 'loading/loader-definitions/',
      'loading-assets/loader-definitions': 'loading/loader-definitions/',
      'loading-assets/loading-styles': 'styling/loading/',
      'loading-assets/loading-images': 'loading/images/',
      'loading-assets/loading-fonts': 'loading/fonts/',
      'understanding-loaders': 'loading/',
      'understanding-loaders/loader-definitions': 'loading/loader-definitions/',
      'understanding-loaders/images': 'loading/images/',
      'understanding-loaders/fonts': 'loading/fonts/',
      'understanding-loaders/writing-loaders': 'extending/loaders/',
      'extending-webpack/': 'extending/',
      'extending-webpack/loaders': 'extending/loaders/',
      'extending-webpack/plugins': 'extending/plugins/',
      'advanced-techniques': 'packages/',
      'advanced-techniques/consuming-packages': 'packages/consuming/',
      'advanced-techniques/authoring-packages': 'packages/authoring/',
      'advanced-techniques/understanding-chunks': 'building/splitting-bundles/',
      'advanced-techniques/linting-in-webpack': 'developing/linting/',
      'advanced-techniques/writing-loaders': 'extending/loaders/',
      'advanced-techniques/configuring-react': 'output/server-side-rendering/',
      'appendices/configuring-hmr-with-react/': 'appendices/hmr-with-react/',
      'appendices/writing-eslint-plugins/': 'appendices/customizing-eslint/',
      'why-webpack': 'what-is-webpack/',
    }
  };
};

function id(a) {return a;}
