---
title: 'SurviveJS - Webpack - v1.2.0'
date: 2016-05-11
headerImage: 'assets/img/bell.jpg'
keywords: ['release-notes', 'webpack']
---

As I've been working towards splitting [the first book](/react/introduction), I realized I must do one more release of this webpack one before I can complete it. That's what the current release, `1.2.0`, is about. I've moved certain content there (mainly linting, npm related) and done assorted tweaks based on feedback.

Compared to [the previous release](./survivejs-webpack-110) we have something more mature together now. There are still improvements in store, but you have to take one step at a time.

Getting the split done successfully is my next major goal with this effort. Completing that will take a lot of pressure out of my shoulders and allow new content to be developed more easily.

> Speaking of new content, I produced [a set of React training slides](https://survivejs.github.io/training/) for a session. A lot of the research done for the slides will fold back to the written content eventually. Even though it took a lot of time and effort to produce the set, I believe it was worth it.

## Overview of the Situation

In addition to pushing the book content further, I spent some time contributing to [webpack-validator](https://www.npmjs.com/package/webpack-validator). The tool is growing nicely. There's still a lot to do, but it's progressing nicely. The biggest advantage of having this kind of shell around webpack is that it is able to catch issues early while saving your valuable time.

The development of the [training slides](https://survivejs.github.io/training/) took serious effort, but fortunately now that's done, I don't have to worry about slides so much anymore should I get training requests. The initial set can be developed further and perhaps turned into something greater, but more on this later.

My next goal is to finish the split. There is still some content to be developed and infrastructure work to be done, but it's gladly it's not that far away! Most importantly [Leanpub has completed its share](https://medium.com/@leanpub/the-leanpub-blog-in-progress-publishing-and-ebook-mitosis-2ab707198ca7) so now I just need to finish my part and we are in a good place with this.

## Book Improvements - `1.2.0`

In total 36 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.1.0...v1.2.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

## General Improvements

* Ported `path.join` and other path related portions to a platform agnostic format. This is to avoid issues on Windows. Slashes tend to be problematic. Thanks Viktor!

## Developing with Webpack

### Automatic Browser Refresh

* Mentioned `webpack --watch`. That provides a nice bridge to the HMR topic and it's one of those features you might want to be aware of in case you don't want to use webpack-dev-server for some reason and are just interested in generating a build automatically.

### Refreshing CSS

* Explained CSS scoping in greater detail. This was a good chance to discuss the basic idea behind [CSS Modules](https://github.com/css-modules/css-modules) as well so you can see the difference. Thanks Christian!

### Enabling Sourcemaps

* Explained browser side support better. Thanks Tom!

## Building with Webpack

### Splitting Bundles

* Used `vendor: Object.keys(pkg.dependencies)` over `vendor: Object.keys(pkg)`. That was the original intention after all. Thanks Viktor!

### Minifying Build

* Mentioned that you can use [babel-plugin-remove-console](https://www.npmjs.com/package/babel-plugin-remove-console) to drop the `console` statements from your source. Uglify works too, but this is a good alternative to be aware of especially if you use Babel already.

### Separating CSS

* Explained PurifyCSS in greater detail. Now `paths` and additional options should be a little clearer. Thanks Christian!

### Hosting on GitHub Pages

* Explained the purpose of the `output.publicPath` field. That is useful to be aware of as you can use it to manipulate your asset paths and point to a CDN for instance.

## Loading Assets

* Mentioned [babel-plugin-webpack-loaders](https://www.npmjs.com/package/babel-plugin-webpack-loaders). Sometimes you might get away without using webpack. Less work means more speed. *babel-plugin-webpack-loaders* is particularly useful if you want to do server side rendering without getting webpack involved in the process.

## Advanced Techniques

### Linting in Webpack

* Ported from the first book. While porting, I made adjustments to fit the chapter to this book better so that it doesn't assume a Kanban project. Especially the ESLint related portions have been expanded and reworked partially.

### Authoring Packages

* Integrated npm bits from the first book. I reworked the material slightly and pushed technique bits to the end of the chapter. This way you get theory first and practical parts after that.
* Linked to [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals). That's one potential option for dealing with package `externals`. I don't use it myself, but I felt it was worth mentioning about.

### Configuring React

* Mentioned that `webpack.NoErrorsPlugin()` can be potentially useful with HMR. It allows you to see possible syntax errors at the console over the error overlay used by the hmre preset.
* Linked to the *Setting Environment Variables* chapter as that's a valuable chapter to check out when you are using React.

## Conclusion

Even though this isn't a huge release, it's a solid step towards something nicer. As usual, the content will evolve as more experience is gained. I find it particularly cool that a little effort like this can help to motivate improvements in tooling as well.

As stated earlier, my next goal is to finish the split. It's good to have this side of the fence in a good shape so we can get the other part across it as well. If you bought the original React/Webpack book, you'll get access to the digital version of this one then. The pricing model will change then (total value goes up) as I like to thank my early supporters.

Of course if you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). You can still gift the coupon to a friend. A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his.
