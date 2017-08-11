---
title: 'SurviveJS - Webpack - v1.3.1'
date: 2016-06-14
headerImage: 'assets/img/trees.jpg'
keywords: ['release-notes', 'webpack']
---

Compared to [the previous release](./survivejs-webpack-120) this is a conservative release. There are certain bug fixes and content improvements, but no new chapters. The focus was on pushing the current content further based on feedback.

I am very happy that [the book split has been completed now](./survivejs-react-253). That was a big undertaking, but well worth it as it's easier to move forward now.

## Overview of the Situation

Even though it's a better book now, there are still tasks to be done. I don't have a clear roadmap for 2.0 yet. If you have specific ideas on what you would like to see in the book, [open an issue](https://github.com/survivejs/webpack/issues). That will give me a better idea on what kind of content to develop for the book.

I've been thinking of writing a small tool that would generate a Git repository based on the book code. This kind of automation would help a lot, and even though it's not trivial to achieve, it could be worth it as it would save time and effort. In addition, this would allow me to lint the book code somewhat effectively so I'll likely prioritize the development of this tool.

## Book Improvements - `1.3.1`

In total 53 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.2.0...v1.3.1). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

Special thanks to David Lee, Steve Schwartz, and Jesús Rodríguez Rodríguez for their helpful contributions and feedback! It has been great to discuss about the topic at [the book chat](https://gitter.im/survivejs/webpack). That helps to shape the future of the content.

## Webpack Compared

* Added a section for [Brunch](http://brunch.io/). It's an interesting alternative to webpack and worth covering. There's even a [HMR runtime](https://github.com/brunch/hmr-brunch) available for it.

## Developing with Webpack

### Getting Started

* Explained Webpack output in detail.

### Automatic Browser Refresh

* Explained why HMR is easy with CSS but hard with JavaScript.

### Refreshing CSS

* Linked the `css?modules` idea to the *Loader Definitions* chapter.
* Fixed generated class. Instead of `styles.locals.redButton` it should be just `styles.redButton`.

### Enabling Sourcemaps

* Explained the topic in greater detail and separated the ideas of JavaScript and CSS sourcemaps.

## Building with Webpack

### Setting Environment Variables

* Explained the basic idea of `DefinePlugin` in detail.

### Splitting Bundles

* Reworked and explained the split idea in greater detail to get the point.

### Minifying the Build

* Reworked the section about UglifyJS specific options. It should be clearer what's going on now.
* Mentioned [uglify-loader](https://www.npmjs.com/package/uglify-loader) as an alternative.

### Analyzing Build Statistics

* Reworked and explained the value of analysis in greater detail. Now there are also more tools listed.

## Loading Assets

### Loading Fonts

* Dropped `query.prefix` and replaced it with `name: 'font/[hash].[ext]'` given the latter form has been deprecated.

## Advanced Techniques

### Linting

* Mentioned [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import). It's able to lint your ES6 imports effectively.

### Authoring Packages

* Mentioned [lockdown](https://www.npmjs.com/package/lockdown) as an alternative to `npm shrinkwrap`.

### Understanding Chunks

* Added an image showing the idea and mentioned `require.ensure` respects `output.publicPath`.

### Configuring React

* Added more context to `resolve.extensions` idea.

## What Next?

I'll do a pass on [the React book](/react/introduction) next and then continue plowing through my TODO list for this one. There are always topics to cover and you can affect the direction of the book.

## Conclusion

Even though this is another small release, it's a step ahead. Keep up providing feedback and I'll integrate as well as I can.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his.
