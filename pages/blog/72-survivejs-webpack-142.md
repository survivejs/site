---
title: 'SurviveJS - Webpack - v1.4.2'
date: 2016-12-19
headerImage: 'assets/img/tunnel.jpg'
keywords: ['release-notes', 'webpack']
---

Alright, here we go again. It has been a while since [the previous release](../survivejs-webpack-131) and it's time for a big Winter update!

Quite a bit has happened since. I spent most of the intermediate time in consulting and training mode. Since I became a part of webpack core team, I've been pushing things forward in my own way. This has meant coordinating efforts around [the new site of webpack](https://webpack.js.org/) and developing certain technology related to it.

We also launched something known as [open collective for webpack](https://opencollective.com/webpack). This makes it possible for individuals and companies to support the project in form of donations. The overall theme of this year has been in making webpack more sustainable as a project and scaling it from one person to many. By the looks of it we are actually succeeding in this goal.

T> You can get a better idea of the type of training I have been doing at [my presentation site](https://presentations.survivejs.com/). See especially [my slides on advanced webpack](http://presentations.survivejs.com/advanced-webpack/) as those complement the book material well. It probably goes without saying, but if you are interested in training on these topics, you know who to poke.

## Overview of the Situation

This time around I focused especially on getting the book up to date with upcoming webpack 2. The book uses webpack 2 syntax now. In addition, I went through quite a few issues I have on my list. All of this has translated into a nice list of improvements.

There is one new chapter that was gained through splitting *Separating CSS* into two shorter ones. The existing ones should be better than before as well. Thanks to the changes introduced with webpack 2, I could simply drop a part of the content.

Webpack 2 performs validation and simplifies environment handling greatly. Also the configuration format is a little neater in certain parts although there is still work left for webpack 3. I believe we can improve the way you configure webpack with little effort.

I still have quite a few issues on my list. This includes a couple of chapters and further improvements to the current content. If you have specific ideas, [open an issue](https://github.com/survivejs/webpack/issues). That will give me a better idea on what kind of content to develop for the book.

## Book Improvements - `1.4.2`

In total 192 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.3.0...v1.4.2). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

## Introduction

* Rewrote for clarity, mostly the same.

## Webpack Compared

* Added more upcoming tools.
* Expanded on core ideas of webpack.

## Developing with Webpack

### Getting Started

* Bumped to webpack 2 beta. This applies to other content too.
* Noted that entries have to resolve against files. Directories won't work unless they resolve to *index.js*.
* Mentioned plugins that work well with *html-webpack-plugin*.

### Splitting Configuration

* Explained *webpack-merge* in greater detail so it's less of a black box.
* Simplified environment passing to benefit from webpack 2 `--env`.
* Explained why configuration composition is a good thing.
* Renamed *lib/parts.js* as *webpack.parts.js*. This feels more natural way to handle it.

### Automatic Browser Refresh

* Rewrote for clarity.
* Disabled `multiStep` option of `HotModuleReplacementPlugin` as that doesn't work yet with webpack 2 and *html-webpack-plugin*.

### Enabling Sourcemaps

* Explained the difference between inline and separate sourcemaps. There's still work to do, but it's a little better now.

## Building with Webpack

### Minifying Build

* Mentioned UglifyJS alternatives.
* Mentioned gotchas related to minifying CSS.

### Setting Environment Variables

* Rewrote the introduction so it's easier to see why `DefinePlugin` is valuable.
* Mentioned `webpack.EnvironmentPlugin`.
* Mentioned [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin) as that's handy for generating gzips.

### Splitting Bundles

* Mentioned about **code splitting** and explained the difference.
* Added an alternative technique for figuring out which dependencies should go to the vendor bundle.

### Adding Hashes to Filenames

* Mentioned hash slicing trick (`[chunkhash:8]`).
* Added a concrete example showing how to use placeholders.

### Separating CSS

* Mentioned that you should **not** use `ExtractTextPlugin` for development. It's not compatible with HMR yet, although there's a PR in progress.

### Eliminating Unused CSS

* This chapter was a part of *Separating CSS* earlier. Now it is a chapter of its own.
* There was a little glitch in the approach that made it to match against *node_modules*. This has been fixed and it gives very compact results now.

### Analyzing Build Statistics

* Simplified greatly thanks to webpack 2 `--env`.
* Added more analysis tools.

## Loading Assets

### Loader Definitions

* Rewrote for clarity.

### Loading Images

* Explained in greater detail.
* Added more techniques.

### Loading Fonts

* Added more techniques.

## Advanced Techniques

### Understanding Chunks

* Rewrote using webpack 2 [dynamic imports](https://github.com/tc39/proposal-dynamic-import). This simplified the implementation somewhat.

### Linting

* Mentioned `eslint --init`.
* Added more techniques.

### Authoring Packages

* Rewrote to reflect the current situation. More tools and techniques.

### Configuring React

* Mentioned [create-react-app](https://www.npmjs.com/package/create-react-app).
* Added Babel related presets and plugins that are useful with React.

## What Next?

I have next two weeks to dedicate to this work. It is quite possible we will see an intermediate release or two before 2.0. But at least now we are in sync with webpack so that's great!

After 2.0, I can give the React book a big refresh.

## Conclusion

Given webpack 2 isn't actually out yet, there still may be some rough edges. I've tried to annotate these as well as I can, but there still may be something. I'll fix potential issues in the next release.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his. Literally most of the income goes to webpack developers now!

T> You can [support webpack through open collective](https://opencollective.com/webpack) too.
