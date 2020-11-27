---
title: '"SurviveJS - Webpack 5" - Amazon Version is Available'
date: 2020-11-27
headerImage: "assets/img/screwdrivers.jpg"
keywords: ["release-notes", "webpack"]
---

Doing a paper release of a book comes with additional thrill as once you go paper, there's no going back. Any mistakes you might have in the book are going to remain until you make a new edition. It's for this reason that especially technical books maintain errata separately from the book to list known issues.

At the same time, a paper release will force you to improve especially the way book is laid out as an author and to condense where sensible. Editing requires patience.

The main point of this release is that now the book is [available through Amazon](https://www.amazon.com/dp/B08P3S2G66) and my hope is that the wider distribution will help to recoup some of the development cost of the book as it's fairly time intensive. I found that editing takes a good chunk of time especially with my current Leanpub based setup.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the situation

As mentioned in [the previous release notes](/blog/webpack-book-webpack-5-updates/), a lot of work has gone into making the book take changes made within webpack 5 into account.

In the current version, that's available through Amazon as well, I've taken care to go further. In addition to simplifying edits and removal of obsolete content, I've made chapters work standalone where possible so they work better in "random access" type of reading as it's a lot to assume that people have seen the earlier content especially if they access it through the web.

As a result, I've trimmed the book further and compared to the previous paper edition, this one is more to the point while still packed with useful reference that complements the official documentation.

## Book Improvements - `3.0`

The book has received [numerous changes](https://github.com/survivejs/webpack-book/compare/v2.8.1...v3.0.0) and it's not possible to list them all here. Instead, I've compiled a list of the most important ones:

- I took specific care to make sure that the formatting of the book is consistent with itself. I.e. filenames are shown as `index.js` and so on. It's a little thing but it counts.
- Where possible, I condensed the layout of the book so that it fits better and less space is wasted. When I started the process months ago, the book had around 360 pages or so and now it's closer to 300. Small changes add up.
- I've updated book links where possible and dropped resources that are obsolete by now. Given the JavaScript ecosystem moves fairly fast, it's common for packages to become outdated.
- I rewrote the [Multiple Pages chapter](/webpack/output/multiple-pages/) in a simplified form that works standalone. It gets to the point without anything extra.
- The [Web Workers chapter](/webpack/techniques/web-workers/) is using native support of webpack 5 by default now although it still mentions **worker-loader** as an option.
- Given the plugin I use for i18n doesn't work with webpack 5 anymore, I rewrote the [Internationalization chapter](/webpack/techniques/i18n/) based on code splitting while mentioning related solutions.

You can find the book below:

- [“SurviveJS — Webpack 5” - Free online edition](/webpack/preface/)
- [“SurviveJS — Webpack 5” - Leanpub edition (digital)](https://leanpub.com/survivejs-webpack/)
- [“SurviveJS — Webpack 5” - Amazon (paperback)](https://www.amazon.com/dp/B08P2C69PR)
- [“SurviveJS — Webpack 5” - Kindle (digital)](https://www.amazon.com/dp/B08P3S2G66)

T> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. I support his work this way given mine builds on top of his.

## What next?

As the book is in a good shape to be ported to a course format, I'll put effort into that direction to see how it works out. It's not going to be easy but at the same time the restructuring made to the book will help.

The book content feels stable to me now so I don't expect to make any major changes to it for a while. Most likely webpack 6 will require a set of changes again but I would expect them to be smaller unless the configuration format is going to be completely different.

## Conclusion

I hope you enjoy the 3.0 version of the book and find it useful in your work.

Note that I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) if you want to bug me about webpack. You can also [ask questions at my AmA](https://github.com/survivejs/ama/issues).
