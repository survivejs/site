var path = require('path');
var removeMd = require('remove-markdown');
var markdown = require('../utils/markdown');
var highlight = require('../utils/highlight');

module.exports = function webpackReact(headers) {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('json!yaml-frontmatter!../../webpack_react/manuscript', true, /^\.\/.*\.md$/);
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

        return markdown('webpack_react').process(content, highlight);
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
        var fileName = o.fileName.split('.')[0].toLowerCase();

        // normal chapter
        if(parseInt(fileName.split('_')[0], 10) >= 0) {
          return o.sectionName + '/' + fileName.split('_').slice(1).join('_');
        }

        // part
        return o.sectionName + '/' + fileName;
      },
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
          file.showDemo = false;
          file.endSource = sourcePrefix + header.endSource;
        }
        else if(header.demo) {
          var sourceSuffix = header.sourceRoot || '/kanban_app';

          file.demo = '/demos/' + header.demo;

          file.showDemo = !header.sourceRoot;
          file.endSource = sourcePrefix + header.demo + sourceSuffix;
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
    },
    redirects: {
      'introduction': '/react/introduction',
      'webpack': '/webpack/introduction',
      'webpack_compared': '/webpack/webpack-compared',
      'developing_with_webpack': '/webpack/developing-with-webpack',
      'webpack_and_react': '/webpack/advanced-techniques/configuring-react',
      'react': '/react/implementing-kanban',
      'implementing_notes': '/react/implementing-kanban/implementing-notes',
      'react_and_flux': '/react/implementing-kanban/react-and-flux',
      'from_notes_to_kanban': '/react/implementing-kanban/from-notes-to-kanban',
      'implementing_dnd': '/react/implementing-kanban/drag-and-drop',
      'building_kanban': '/webpack/building-with-kanban',
      'advanced': '/react/advanced-techniques',
      'testing_react': '/react/advanced-techniques/testing-react',
      'typing_with_react': '/react/advanced-techniques/typing-with-react',
      'linting_in_webpack': '/webpack/advanced-techniques/linting',
      'authoring_libraries': '/webpack/advanced-techniques/authoring-packages',
      'styling_react': '/react/advanced-techniques/styling-react',
      'appendices': '/react/appendices',
      'structuring_react_projects': '/react/advanced-techniques/structuring-react-projects',
      'language_features': '/react/appendices/language-features',
      'understanding_decorators': '/react/appendices/understanding-decorators',
      'troubleshooting': '/react/appendices/troubleshooting'
    }
  };
};

function id(a) {return a;}
