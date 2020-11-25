---
title: '"SurviveJS - Webpack 5" - Further webpack 5 updates'
date: 2020-10-30
headerImage: "assets/img/mandelbulb.jpg"
keywords: ["release-notes", "webpack"]
---

Webpack 5 has been available for a couple of weeks by now. [The previous release of the book covered majority of the required changes](/blog/webpack-book-updated-to-webpack-5/) but I realized there's still more work and updates to be done as I perused through [the official release post](https://webpack.js.org/blog/2020-10-10-webpack-5-release/). You see the results of the additional work in this release of the book.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the situation

The current version of the book has been designed with webpack 5 in mind from the start and I've taken care to use plugins that support webpack 5. The ecosystem is still adapting to the new major release and I've done my share of related work in the packages I help to maintain to ensure effortless transition.

During this work, I've managed to trim the book a bit more to prepare for a paper release. I may work further on the book to make the chapters work better as standalone to support "random access" type of reading and majority of the content works like this already although I'm sure it can be improved still.

## Book Improvements - `2.8`

The book has received [numerous changes](https://github.com/survivejs/webpack-book/compare/v2.6.4...v2.8.1) and it's not possible to list them all here. Instead, I've compiled a list of the most important ones:

- I've taken care to replace **webpack-cli** specifing command line flags with configuration as the book is using [webpack-nano](https://www.npmjs.com/package/webpack-nano), a light option, now.
- I've condensed and restructured the content at places to fit the pages better.
- The cover of the book has been updated to include "webpack 5" in it given that's the focus of the book.
- The _Loading Images_ chapter has been updated to use [asset modules](https://webpack.js.org/guides/asset-modules/), a new feature from webpack 5. For most use cases, **file-loader** and **url-loader** aren't required anymore. The same change applied to the _Loading Fonts_ chapter as well.
- The _Separating CSS_ chapter has become simpler thanks to the changes made to [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin). It's able to detect automatically now if hot module replacement is enabled or not.
- The _Minifying_ chapter is using [css-minimizer-webpack-plugin](https://www.npmjs.com/package/css-minimizer-webpack-plugin) instead of [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) as it's doing the same and supports webpack 5.
- The _Performance_ chapter has been reworked with webpack 5 in mind.
- The _Extending with Plugins_ chapter has been rewritten. I realized the testing approach I presented at the _Composing Configuration_ chapter is a good way to develop plugins so I moved the boilerplate to the plugin chapter and then rewrote the examples against that while using webpack 5 specific APIs.
- The _Searching with React_ example has been written in a more condensed form to fit the pages better.

You can find the book below:

- [“SurviveJS — Webpack 5” - Free online edition](/webpack/preface/)
- [“SurviveJS — Webpack 5” - Leanpub edition (digital)](https://leanpub.com/survivejs-webpack/)
- [“SurviveJS — Webpack 5” - Amazon (paperback)](https://www.amazon.com/dp/B08P2C69PR)
- [“SurviveJS — Webpack 5” - Kindle (digital)](https://www.amazon.com/dp/B08P3S2G66)

T> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. I support his work this way given mine builds on top of his.

## What next?

I want to publish the book in a course format through a platform. For this to work, I'll need to take care each chapter works as a standalone so it's likely some of the changes from the work find their to the book as well. Depending on how this work goes, I'll decide whether to use the current version for the paper release or whether I'll integrate those changes to it.

## Conclusion

I hope you enjoy the webpack 5 feature update.

Note that I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) if you want to bug me about webpack. You can also [ask questions at my AmA](https://github.com/survivejs/ama/issues).
