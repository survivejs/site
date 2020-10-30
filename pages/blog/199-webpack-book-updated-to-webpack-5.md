---
title: '"SurviveJS - Webpack" book updated to webpack 5'
date: 2020-08-28
headerImage: "assets/img/strange.jpg"
keywords: ["release-notes", "webpack"]
---

Webpack 5 is getting near and it felt like a good time to update the book. Although it's still in beta, it seems quite stable already and it's worth experimenting with it. During this work, I went through my long list of TODOs that had accrued since [the previous release of the book](/blog/webpack-book-updated-to-webpack-4).

The current version of the book supports both webpack 4 and 5 and I've noted about the new features where possible. The best source for all the changes is [the official changelog](https://github.com/webpack/changelog-v5). Although the release has a couple of major features, including better caching and module federation, in a big part it's a clean-up release that should make subsequent releases easier.

I've rewritten and reworked a big part of the book and modernized it where necessary. The length of the book is roughly the same and I've tightened the content where I felt this was necessary while dropping references that are now obsolete.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## webpack-merge - Updated to support TypeScript out of the box

Thanks to Google sponsorship, I was able to go through [webpack-merge](https://www.npmjs.com/package/webpack-merge) issues and add first-class support for TypeScript to it. I ended up dropping smart merging from the package as it became impossible to handle all the special cases related to it. Instead, there are now utilities that give you control over details.

> [One last typing related issue](https://github.com/survivejs/webpack-merge/issues/141) remains and it has something to do with the way webpack and webpack-dev-server typings play with together.

## Overview of the situation

Since the past release, I've been working on occasional client projects and putting a lot of energy behind the [React Finland](https://react-finland.fi/) conference as its director. Sadly, the on-going pandemic shattered our plans for the conference and forced us to postpone the physical portion to the next year. In the meantime, we're running online mini-conferences to provide service for our audience. So far we've organized two and there are many on the way.

The delay in webpack 5 release has been problematic as the lack of a stable release means I cannot make a paper release of the book either. I feel it was a good time to update the book, though, as when it goes stable, the paper version can receive a long pending update as well. While waiting for the stable version, I hope to integrate changes based on your feedback to improve the book further.

Especially client work has generated valuable insights which I've integrated to the book. These days people often use a solution such as [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and simply skip configuring webpack but at times custom configuration is needed.

Even with CRA, you may find yourself extending the setup using unofficial ways as the defaults won't fit each use case. My client work tends to center around getting webpack configuration under control while improving performance of both the build and the end result.

## Book Improvements - `2.6`

I've released multiple silent releases since the previous public version to improve the book. The past month during which I've been renovating the book has been intense and I feel it's in a much better shape than before.

I still use it as my personal main reference for webpack related things and I've tried to develop the book so that you have strong secondary material with more information available should you want to dig deeper. For me, that's the sweet spot for the book.

The book has received [numerous changes](https://github.com/survivejs/webpack-book/compare/v2.3.0...v2.6.1) and it's not possible to list them all here. Instead, I've compiled a list of the most important ones:

- Most code examples have been formatted by Prettier simplifying my workflow.
- I've given the book a heavy grammar and formatting pass so it should look and feel better than before.
- Instead of **webpack-dev-server** (WDS), the book uses [webpack-plugin-serve](https://www.npmjs.com/package/webpack-plugin-serve). It's an option that has been built on top of webpack's watch mode although it can run as a server of its own (needed for multi-compiler mode). In practice, I've found it to work better than WDS with complex proxy setups while being compatible with webpack 5 out of the box. As a result, the corresponding chapter has been renamed as _Development Server_.
- Instead of **webpack-cli**, the book uses [webpack-nano](https://www.npmjs.com/package/webpack-nano). Again, I went with a light alternative that's enough for the book and provides compatibility with webpack 5.
- Instead of [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin), the book uses [mini-html-webpack-plugin](https://www.npmjs.com/package/mini-html-webpack-plugin) which I developed with Tobias Koppers and Artem Sapegin. Feature-wise it's much simpler but that's exactly why I've settled on it in my personal usage. That said, for anything that has complex requirements, **html-webpack-plugin** may be the better option and it's easy to refactor the book's examples to use it instead.
- As order-wise it makes more sense to explain code splitting before bundle splitting, I swapped the order of the chapters.
- Given **mini-css-extract-plugin** has become stable, the _Separating CSS_ chapter is using it instead of **extract-text-webpack-plugin**. The change was done earlier during a silent release but it's still worth mentioning. Webpack 5 won't introduce first-class support for CSS out of the box so the plugin will still be needed.
- I've rewritten the _Eliminating Unused CSS_ chapter to use [Tailwind CSS](https://tailwindcss.com/) and [PurgeCSS](https://www.npmjs.com/package/purgecss). Ideally purging shouldn't be needed at all and solutions like [Stitches](https://www.npmjs.com/package/@stitches/css) achieve this. It's still a good technique to discuss as it has relevance for legacy projects.
- The _Source Maps_ chapter has simpler comparisons now to save some space. I found condensing the examples didn't lose anything valuable while making space for new content.
- The _Tree Shaking_ chapter has more information on how to get it to work with webpack especially with webpack 4 as there are certain prerequisites.
- The _Separating Manifest_ chapter has been renamed as _Separating a Runtime_ to use more accurate naming.
- I've rewritten the _Build Analysis_ chapter to contain the tools and services that have emerged.
- The _Performance_ chapter has more specific advice on how to measure and improve webpack's performance. I also included webpack 4 specific tips.
- There's a new chapter about _Module Federation_ and micro frontends. I designed the chapter so that you can complete the setup without having to go through the entire book. The target of the chapter is to get you started and to a point where you can learn more about it through the examples available online.
- I've rewritten the _Internationalization_ chapter to use [embed-i18n-webpack-plugin](https://www.npmjs.com/package/embed-i18n-webpack-plugin) over now deprecated **i18n-webpack-plugin**.
- The _Testing_ chapter has been greatly simplified. It still has basic content but I feel often testing is better handled outside of webpack using specific tools designed for the purpose.
- The _Searching with React_ appendix has been rewritten to use modern React.
- The _Comparison of Build Tools_ appendix includes the current alternatives to webpack that have emerged.
- The _Glossary_ has been expanded and made more accurate.

You can find the book below:

- [“SurviveJS — Webpack” - Free online edition](/webpack/preface/)
- [“SurviveJS — Webpack” - Leanpub edition (digital)](https://leanpub.com/survivejs-webpack/)

T> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. I support his work this way given mine builds on top of his.

## What next?

My hope is that webpack 5 reaches a stable state soon. While waiting for it, I hope to receive feedback on the content so I can improve it before the next paper release.

Given this book is now in a good shape, I can focus on updating the remaining two books and working on my site infrastructure project. I am currently reworking the technical stack of this site while learning a lot about emerging technologies.

## Conclusion

I hope you enjoy the first webpack 5 version of the book!

Note that I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) if you want to bug me about webpack. You can also [ask questions at my AmA](https://github.com/survivejs/ama/issues).
