---
title: 'SurviveJS - Webpack - v2.0 - Results and Errata'
date: 2017-04-12
headerImage: 'assets/img/fly.jpg'
keywords: ['release-notes', 'webpack']
---

Enough time has passed since [the major release of the webpack book](../survivejs-webpack-20) so it's a good time to evaluate how well it went. As no release is perfect, I've been pushing smaller patches to the content and I cover the fixes later in this post. The fixes are minor but they were still worth doing.

## Results

[The paperback](https://www.amazon.com/dp/9526868803) has sold roughly twenty copies in two weeks. [The Kindle edition](https://www.amazon.com/SurviveJS-Webpack-apprentice-Juho-Veps%C3%A4l%C3%A4inen-ebook/dp/B06XWZZGBS) is close to thirty and the higher quality and more expensive [hard cover edition](https://survivejs.typeform.com/to/LUQK0T) has close to ten interested buyers which just might be enough for me to do a little print but we'll see.

In addition, the [Leanpub edition](https://leanpub.com/survivejs-webpack) reached two thousand readers but it's good to remember half of those received the book for free when I split up my first book.

Based on these results it's safe to say the release wasn't a great financial success. I'm particularly happy that I found a good writing model, though. Especially the last few months were great as significant progress was made and this bodes well for the future.

The book is stronger in many ways than the initial "Webpack and React" one and I have a solid writing process in place now. I know what kind of books to write from now on.

There's still a lot of work to do, some related to the webpack book. Even with poor sales it's worth doing as it adds more streams to the whole. As they say, a lot of small streams form a big river.

## Errata

I've listed errata per version below so you can see the main changes. You can see them all through [GitHub compare changes view](https://github.com/survivejs/webpack-book/compare/v2.0.1...v2.0.7).

## 2.0.2

* Renamed *Splitting Bundles* chapter as *Bundle Splitting* to be consistent.
* Linked to [JSPM](http://jspm.io/) in the comparison appendix.
* Added missing `const webpack = require('webpack');` to the *Bundle Splitting* chapter example.
* Improved wording related to disabling package consumption related warnings.
* Noted that generating a single bundle over many is more performant as discussed in [karma-webpack issue 23](https://github.com/webpack-contrib/karma-webpack/issues/23).
* Made Istanbul exclude test files from coverage results.

## 2.0.3

* Added missing file names to the i18n chapter.
* Clarified i18n chapter ESLint configuration.

## 2.0.4

* Changed entry name from `demo` to `lib` at the *Bundling Libraries* chapter.

## 2.0.5

* Simplified `import`s at the *Extending with Loaders* chapter to avoid a linting warning.
* Noted that PhantomJS doesn't support ES6 features yet so it requires preprocessing in order to work.
* Added missing `path` import to Karma configuration example.

## 2.0.6

* Mentioned that HMR setup needs to be done before implementing *Hot Module Replacement with React* at the appendix.
* Cleared up webpack process image a bit so you can see entry can be something complex.

## 2.0.7

* Simplified *Searching with React* appendix example so that it works with HMR out of the box. The old example used binding method that doesn't work well with *react-hot-loader*.
* Fixed a typo at the *Minifying* chapter - `that` &rarr; `than`.
* Made sure `recordsPath` receives an absolute path as webpack enforces this now.
* Mentioned that PurifyCSS doesn't work with CSS Modules yet.

## 2.0.8

* Fixed a typo at the *Glossary*. `an a` &rarr; `a`.

## 2.0.9

* Recommended `cheap-module-source-map` over `cheap-module-eval-source-map` since it's a more stable option.
* Included naming to `import()` syntax given that's supported now.
* Dropped `devServer.open: true` bit as redundant.
* Noted that CSS Modules work with purify if you use a whitelist.

## 2.0.10

* Pushed `CommonsChunkPlugin` to production configuration to speed up the build.
* Dropped `useSourceMap` flag from `parts.minifyJavaScript`.
* Added missing `const webpack = require('webpack');` to `HashedModuleIdsPlugin` example.
* Made CSSNext example use `require('postcss-cssnext')(),`.
* Made autoprefixer example compatible with the newest version. It needs `require('autoprefixer')()` over `require('autoprefixer')` now.
* Simplified stylelint configuration by dropping `ignoreFiles` since webpack `include` is used already.

## 2.0.11

* Add missing **.babelrc** to a  filename in the Loading JavaScript chapter.
* Added `purify-css` as a dependency to install as `purifycss-webpack` requires that now as a peer dependency.

## 2.0.12

* Linked to [Predictable long term caching with Webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31).
* Toned down **records** statement.

## 2.0.13

* Fixed the book to use `cheap-module-eval-source-map` over `cheap-module-source-map` for development.

## 2.0.14

* Changed **browserslist** to **.browserslistrc** as the project has changed the file name.

## 2.0.15

* Added missing `const path = require('path');` to **Extending Loaders** chapter.
* Added missing formatting to `const { RawSource } = require('webpack-sources');` at **Extending Loaders** chapter.

## 2.0.16

* Changed `PATHS.app` to `PATHS.lib` at the **Bundling Libraries** chapter.

## 2.0.17

* Simplified a `devtool` related paragraph to pass Amazon margin check.

## 2.0.18

* Getting Started - Use `import` over `require` at text.
* Composing Configuration - Fix sentence structure at "Composition-based approach..."

## Conclusion

There's still a [lot of touring](../euro-tour-2017) to be done so things will move slower than usual. That said, I'll try to get most out of this experience and convert that into something good. Traveling is good for ideas.
