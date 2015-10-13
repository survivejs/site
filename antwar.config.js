'use strict';
var path = require('path');

var React = require('react');
var _ = require('lodash');
var removeMd = require('remove-markdown');
var rssPlugin = require('antwar-rss-plugin');
var highlightPlugin = require('antwar-highlight-plugin');
var prevnextPlugin = require('antwar-prevnext-plugin');

var markdown = require('./utils/markdown');

module.exports = {
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
  name: 'SurviveJS',
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
    highlightPlugin(),
    prevnextPlugin(),
  ],
  theme: {
    customStyles: 'custom.scss',
    name: 'antwar-default-theme',
    navigation: function(sectionName) {
      return [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: sectionName === 'blog' ? 'Read the book' : 'Read the blog',
          url: sectionName === 'blog' ? '/webpack_react/introduction/' : '/blog',
        },
        {
          title: 'Buy the ebook',
          url: 'https://leanpub.com/survivejs_webpack',
        },
        {
          title: '',
          url: '',
        },
        {
          title: '@survivejs',
          url: 'https://twitter.com/survivejs',
        },
      ];
    },
  },
  handlers: {
    body: function() {
      return require('./layouts/Body.coffee');
    },
    sectionIndex: function() {
      // TODO: push to section level
      return require('./layouts/SectionIndex.coffee');
    },
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
    path: function() {
      return require.context('./posts', false, /^\.\/.*\.md$/);
    },
    /*
    draft: function() {
      return require.context('./drafts', false, /^\.\/.*\.md$/);
    },
    */
    processItem: {
      layout: function() {
        return require('./layouts/BlogItem.coffee');
      },
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
    layout: 'blog',
    title: 'Blog posts',
  };
}

function webpackReact() {
  return {
    title: 'Table of Contents',
    path: function() {
      return require.context('../webpack_react/manuscript', false, /^\.\/.*\.md$/);
    },
    processItem: {
      layout: function() {
        return require('./layouts/Chapter');
      },
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
      var sourcePrefix = 'https://github.com/survivejs/webpack_react/tree/master/project_source/';
      var headers = require('../webpack_react/manuscript/headers.json');
      var order = require('raw!../webpack_react/manuscript/Book.txt').split('\n').filter(id);
      var ret = [];

      order = order.filter(function(name) {
        return path.extname(name) === '.md';
      });

      order.forEach(function(name, i) {
        var result = _.findWhere(files, {
          name: name,
        });
        var header = headers[i];

        if(!result) {
          return console.error('failed to find', name);
        }

        result.file.headerExtra = '<a href="' + header.source + '">' +
          header.author + ' ('+ header.license + ')</a>';
        result.file.headerImage = '/images/' + header.image;
        result.file.previousInfo = 'Previous chapter';
        result.file.nextInfo = 'Next chapter';
        result.file.bonus = header.bonus;
        result.file.resources = header.resources;

        if(header.demo) {
          var previous = headers[i - 1] || {};
          var sourceSuffix = header.sourceRoot || '/kanban_app';

          if(previous.demo) {
            var previousSourceSuffix = previous.sourceRoot || '/kanban_app';

            result.file.startSource = sourcePrefix + previous.demo + previousSourceSuffix;
          }

          result.file.endSource = sourcePrefix + header.demo + sourceSuffix;

          result.file.demo = header.demo && '/demos/' + header.demo;
        }

        if(result) {
          ret.push(result);
        }
      });

      return ret;
    },
  };
}

function id(a) {return a;}
