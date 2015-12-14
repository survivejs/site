'use strict';
var path = require('path');

var React = require('react');
var _ = require('lodash');
var removeMd = require('remove-markdown');
var themeConfig = require('antwar-default-theme');
var rssPlugin = require('antwar-rss-plugin');
var prevnextPlugin = require('antwar-prevnext-plugin');

var markdown = require('./utils/markdown');

var cwd = process.cwd();

module.exports = {
  webpack: themeConfig.webpack, // SCSS bits
  assets: [
    {
      from: '../webpack_react/manuscript/images',
      to: 'images',
    },
    {
      from: '../webpack_react/project_source/builds',
      to: 'demos',
    },
    {
      from: './extra',
      to: '.'
    }
  ],
  output: 'build',
  title: 'SurviveJS',
  author: 'Juho Vepsäläinen',
  blog: {
    author: function() {
      return React.createElement(
        "span",
        null,
        "Published by Juho ",
        React.createElement(
          "a",
          { href: "https://twitter.com/bebraw", className: "twitter" },
          "@bebraw"
        ),
        " Vepsäläinen"
      );
    }
  },
  keywords: ['webpack', 'react', 'javascript', 'programming', 'web development'],
  deploy: {
    branch: 'gh-pages',
  },
  pageTitle: function(config, pageTitle) {
    var siteName = config.name;

    if(pageTitle === 'index') {
      return siteName;
    }

    return siteName + ' - ' + pageTitle;
  },
  plugins: [
    rssPlugin({
      baseUrl: 'http://survivejs.com/',
      sections: ['blog'],
    }),
    prevnextPlugin()
  ],
  layout: function() {
    return require('./layouts/Body.jsx');
  },
  style: function() {
    require('antwar-default-theme/scss/main.scss');
    require('./styles/custom.scss');
    require('./styles/prism.css');
    require('react-ghfork/gh-fork-ribbon.css');
  },
  paths: {
    '/': {
      path: function() {
        return require.context('./pages');
      },
    },
    blog: blog(),
    webpack_react: webpackReact()
  }
};

function blog() {
  return {
    title: 'Blog posts',
    path: function() {
      return require.context('./posts', false, /^\.\/.*\.md$/);
    },
    /*
    draft: function() {
      return require.context('./drafts', false, /^\.\/.*\.md$/);
    },
    */
    processPage: {
      url: function(o) {
        if(o.file.url) {
          return o.file.url;
        }

        var page = o.fileName.split('.')[0].split('-').slice(1).join('-');

        return o.sectionName + '/' + page;
      },
      content: function(o) {
        var content = o.file.__content.split('\n').slice(1).join('\n');

        return markdown.process(content);
      }
    },
    layouts: {
      index: function() {
        return themeConfig.layouts().SectionIndex;
      },
      page: function() {
        return require('./layouts/BlogPage.jsx');
      }
    }
  };
}

function webpackReact() {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('../webpack_react/manuscript', false, /^\.\/.*\.md$/);
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
      extra: function(o) {
        var fileName = o.fileName;

        if(parseInt(fileName.split('_')[0], 10) >= 0) {
          return {
            type: 'chapter'
          };
        }

        return {
          type: 'part'
        };
      },
      content: function(o) {
        var content = o.file.__content.split('\n').slice(1).join('\n');

        return markdown.process(content);
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
      var order = require('raw!../webpack_react/manuscript/Book.txt').split('\n').filter(id);
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

      return ret;
    },
    inject: function(files) {
      var sourcePrefix = 'https://github.com/survivejs/webpack_react/tree/master/project_source/';
      var headers = require('./headers.json');

      var reqResource = require.context('../webpack_react_resources/', false, /^\.\/.*\.json$/)

      return files.map(function(o, i) {
        var file = o.file;
        var header = headers[i];
        var resourceName = './' + o.name.split('.')[0] + '.json';
        var resources = reqResource(resourceName);

        file.headerExtra = '<a href="' + header.source + '">' +
          header.author + ' ('+ header.license + ')</a>';
        file.headerImage = '/images/' + header.image;
        file.previousInfo = 'Previous chapter';
        file.nextInfo = 'Next chapter';
        file.bonus = header.bonus;
        file.resources = resources;

        if(header.demo) {
          var previous = headers[i - 1] || {};
          var sourceSuffix = header.sourceRoot || '/kanban_app';

          file.showDemo = !header.sourceRoot;

          if(previous.demo) {
            var previousSourceSuffix = previous.sourceRoot || '/kanban_app';

            file.startSource = sourcePrefix + previous.demo + previousSourceSuffix;
          }

          file.endSource = sourcePrefix + header.demo + sourceSuffix;
          file.demo = '/demos/' + header.demo;
        }

        return o;
      });
    },
    layouts: {
      index: function() {
        return require('./layouts/ChapterIndex.jsx');
      },
      page: function() {
        return require('./layouts/ChapterPage.jsx');
      }
    }
  };
}

function id(a) {return a;}
