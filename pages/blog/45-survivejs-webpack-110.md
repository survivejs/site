---
title: 'SurviveJS - Webpack - v1.1.0'
date: 2016-04-24
headerImage: 'assets/img/texture.jpg'
keywords: ['release-notes', 'webpack']
---

Compared to [the first release](./survivejs-webpack-100) a couple of weeks ago, this version has matured quite a bit. I've been reviewing the content with [my editor](http://angular-tips.com/) (thanks Jesús!) and that has lead to some nice insights. Our work is still in progress and so far we've combed through only a couple of the first chapters. The work will continue in the coming weeks.

Overall we are going to a good direction with this book. The effort has forced me to understand webpack on a deeper level. That's a good thing. I expect `1.2.0` will improve the situation further as I can cover webpack in greater detail. The book structure seems solid and it's easy to grow content on top of it.

## Overview of the Situation

Perhaps the biggest technical improvement this time around is the introduction of a new configuration format. I realized using [webpack-merge](https://www.npmjs.com/package/webpack-merge) allows us to split configuration into smaller functions.

This way *webpack.config.js* can remain simpler while we get configuration code that can be shared across multiple projects and even published to npm. It's also easier for me to explain what's going on this way.

This change was motivated by a tool known as [webpack-validator](https://www.npmjs.com/package/webpack-validator). It checks your webpack configuration against a schema and it is able to point out configuration issues during development. This is valuable as the errors webpack emits aren't always the easiest to understand. Using a little tool like this takes some pain out of the process.

There are numerous other improvements as well, but read on to learn more about those. I feel the book is evolving to a good direction although there is still a lot of work left. I'll focus on the React book next so I can finally get the promised split done.

## Book Improvements - `1.1.0`

In total 118 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.0.0...v1.1.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

## Webpack Compared

* Improved flow. Now JSPM has a section of its own and overall the chapter reads a little better.

## Developing with Webpack

### Getting Started

* Improved flow here as well. The chapter should be a little easier to read now. I've done flow tweaks elsewhere too and I won't be mentioning about it separately anymore. They are small tweaks, but they count.

### Splitting the Configuration

* Ported to the new configuration scheme.
* Explained how to integrate [webpack-validator](https://www.npmjs.org/package/webpack-validator). Now it's within Webpack configuration. This might change in the future as a CLI is developed for the tool. Then we can run it in a smarter way.

### Automatic Browser Refresh

* Ported to the new configuration scheme just like the remainder of the book. No special mentions after this mention.
* Explained in greater detail what's going on.

### Enabling Sourcemaps

* New chapter! I pushed the sourcemap related bits here. Now the topic is discussed in greater detail. Also `SourceMapDevToolPlugin` is covered.

### Setting Up `npm-install-webpack-plugin`

* Removed this chapter as it didn't contribute much.

### Optimizing Development

* Removed this chapter and moved the ideas discussed to the React chapter.

## Building with Webpack

### Minifying the Build

* Pushed React `import` to this chapter. It felt like a good idea to push it later in the book. It cannot be eliminated as we need something to minify.
* Explained how to use UglifyJS specific options through Webpack.

### Setting Environment Variables

* Explained `DefinePlugin` in greater detail.

### Splitting Bundles

* Explained why a manifest is extracted.

### Adding Hashes to Filenames

* Explained the idea of the approach in greater detail.

### Separating CSS

* Explained how to process CSS through [purifycss](https://github.com/purifycss/purifycss) to drop unused CSS. This is particularly useful with CSS frameworks.

### Analyzing Build Statistics

* Explained what `--profile` and `--json` actually do. If you aren't interested in timing information, you can skip `--profile`.

## Advanced Techniques

### Authoring Packages

* Mentioned that relying on `postinstall` scripts can be [potentially dangerous](http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability). If you want to skip them, use `npm install --ignore-scripts` or set `npm config set ignore-scripts true` to default to ignore.

### Configuring React

* Mentioned [babel-preset-react-optimize](https://www.npmjs.com/package/babel-preset-react-optimize) preset. You can experiment with it to get more optimal builds.
* Explained how to configure [react-lite](https://www.npmjs.com/package/react-lite) and [preact](https://www.npmjs.com/package/preact) for production. This is useful if you are particularly conscious about bundle size.
* Explained how to configure React [performance related utilities](https://facebook.github.io/react/docs/perf.html) so that you can access them through the browser.
* Moved the `module.noParse` idea to this chapter to improve the flow and to make the early part of the book a little easier.

## Conclusion

I feel this release took the book a notch further. I still have plenty of topics to explore and expand upon. We'll also be continue reviewing the book chapter by chapter to push quality.

I'll do a little pass on the React book next to finish the split. If you have bought it already, you'll receive a free coupon to this one then to thank you for your support.

Of course if you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). You can still gift the coupon to a friend. A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his.
