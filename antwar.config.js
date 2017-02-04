'use strict';
var path = require('path');

var React = require('react');
var _ = require('lodash');
var themeConfig = require('antwar-default-theme');
var rssPlugin = require('antwar-rss-plugin');
var prevnextPlugin = require('antwar-prevnext-plugin');

var reactHeaders = require('./headers/react');
var webpackHeaders = require('./headers/webpack');

var sections = require('./sections');

var cwd = process.cwd();

// XXX: add custom loader to common config
themeConfig.webpack.common = {
  resolveLoader: {
    alias: {
      markdown: path.join(cwd, 'loaders/markdown')
    }
  }
};

module.exports = {
  webpack: themeConfig.webpack, // SCSS bits
  assets: [
    {
      from: '../react/manuscript/images',
      to: 'react/images',
    },
    {
      from: '../webpack/manuscript/images',
      to: 'webpack/images',
    },
    {
      from: '../react/project_source/builds',
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

    // No need for site title at page titles
    return pageTitle || siteName;
    //return siteName + ' - ' + pageTitle;
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
    require('./styles/custom.scss');
    require('./styles/prism.css');
    require('./styles/fontello-codes.css');
    require('./styles/fontello-embedded.css');
  },
  paths: {
    '/': {
      path: function() {
        return require.context('./pages', false, /^\.\/.*\.jsx$/);
      },
    },
    blog: sections.blog(),
    react: sections.react(reactHeaders),
    webpack_react: sections.webpackReact(),
    webpack: sections.webpack(webpackHeaders)
  }
};
