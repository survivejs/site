---
title: '"SurviveJS - Webpack" book updated to webpack 4'
date: 2018-03-19
headerImage: "assets/img/strange.jpg"
keywords: ["release-notes", "webpack"]
---

Quite a bit has happened in the world of webpack. Most notably, the [webpack reached version 4](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4) recently. The purpose of this release of the book is to update it to support webpack 4 while preparing towards the next paper edition.

Compared to [the previous release](../survivejs-webpack-and-maintenance) this one is even lighter although it's more informative at places. Webpack became simpler and this meant the book could as well. Most notably `CommonsChunkPlugin` is gone now and the tool comes with better defaults.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the Situation

Somehow the December and the early part of the year just went by. Organizing [React Finland](https://react-finland.fi/) took its toll and it's still an ongoing effort. On the plus side, doing this has taught me a lot so far.

I've also begun to generate some business in Vienna although it hasn't been particularly easy. There's likely more to come and these things tend to get easier over time.

After webpack 4 came out, I updated the book to it fairly quickly. I gave it some extra polish and now it's the time to release the improvements to the wider public. There's still some work left to be done and I can cover topics such as WebAssembly in future versions but overall it feels like the best version yet.

## Book Improvements - `2.3`

I released a series of silent releases as before. The chapter structure is intact but the contents have changed significantly at places as webpack 4 allowed simplifications. The grammar has been improved as well.

I've listed the main changes next:

- _Eliminating Unused CSS_ chapter is before _Autoprefixing_ now as this way it felt like it flows better.
- The _Comparison of Build Tools_ appendix has been largely rewritten to reflect the current situation.
- The _Source Maps_ chapter has been tuned to take webpack 4 into account leading to simplifications.
- The _Bundle Splitting_ chapter has been rewritten to take advantage of webpack 4 syntax. Much simpler now.
- The _Code Splitting_ chapter doesn't contain the old syntax anymore. It's better to refer to webpack documentation for that.
- The _Getting Started_ chapter has been rewritten so it's easier for people to go through.
- The _Loader Definitions_ chapter has been expanded to contain more ideas.
- The _Loading Fonts_ chapter doesn't contain Font Awesome example anymore. Their documentation seems to cover usage well enough now. The change also simplified the remaining book.
- `webpack.NamedModulesPlugin` gets less attention now that webpack has `mode` and module ids are set in a better way without the user having to tune them.
- The _Build Analysis_ chapter has been expanded to contain more ideas.

In total 242 commits went to the book since the last public release. You can find the [changes at GitHub](https://github.com/survivejs/webpack-book/compare/v2.1.7...v2.3.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

You can find the book below:

- [“SurviveJS — Webpack” - Free online edition](/webpack/preface/)
- [“SurviveJS — Webpack” - Leanpub edition (digital)](https://leanpub.com/survivejs-webpack/)

T> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. I support his work this way given mine builds on top of his.

## What Next?

Even though I have a list of improvements planned for the webpack book, it doesn't make sense to push it to paper until [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) and [Babel 7](https://www.npmjs.com/package/@babel/core) have reached stable status. _mini-css-extract-plugin_ replaces _extract-text-webpack-plugin_ for majority of users but it still requires more work. It will simplify CSS configuration somewhat.

Most likely the next book release has to do with the [maintenance book](/maintenance/). There are those last bits of content that require work and the book needs structural editing as well. That said, it's already a useful one even its current state.

## Conclusion

I hope you enjoy the webpack 4 version of the book!

Note that I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) if you want to bug me about webpack. You can also [ask questions at my AmA](https://github.com/survivejs/ama/issues).

T> There will be [webpack workshops in Munich early May 2018](/blog/webpack-in-munich-may-2018/)!
