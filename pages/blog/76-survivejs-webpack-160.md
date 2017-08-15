---
title: 'SurviveJS - Webpack - v1.6.0'
date: 2017-01-19
headerImage: 'assets/img/kermit.jpg'
keywords: ['release-notes', 'webpack']
---

You might have noticed that [webpack 2 reached a final release](https://medium.com/webpack/webpack-2-2-the-final-release-76c3d43bf144). That means it's a good time to update this book as well. Even though it's mostly a maintenance release, there's some new content in store.

Compared to [the previous release](../survivejs-webpack-150) this one feels more solid and should be a little easier to approach. A lot of grammatical issues were eliminated in addition to other tweaks. This work is a part of the hardening required for a paper release.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the Situation

When I started working on the book again, I had roughly three hundred issues on my list to tackle. Roughly 40 remains. The current content requires certain minor tweaks. Also a couple of new chapters are required. After that we are good to go with the milestone release.

This time around my special thanks go to [Alexander Zaytsev](https://github.com/jeggett) for his awesome feedback on the content that allowed me to push it further. Thanks Alexander!

The next release might be the last before the book reaches 2.0. It's not too late to contribute specific ideas on what to cover at the book. [Open issues](https://github.com/survivejs/webpack/issues) as you see fit. You can also [reach me through Gitter](https://gitter.im/survivejs/webpack).

## Book Improvements - `1.6.0`

In total 118 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.5.0...v1.6.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

This time around I made a couple of "silent" releases (no notification on Leanpub) to get smaller fixes in. I will likely continue this habit as it's more in line with the way I like to work and publish.

Structurally the biggest change was pushing the configuration splitting chapter at the end of its part. Earlier it was too early and you understand the idea better after you experience some of the pain the approach solves.

I had a pair of non-technical editors go through the content. This alone lead to hundreds of little fixes all around the content. You won't notice most of them, but I feel it contributes towards the overall quality. It's impossible for me to fix the paper book so it's better to do this now.

Unlike the general JavaScript convention, the book uses trailing commas in its book examples now. This lead to one big benefit - simplified code diffs. Instead of having to remove and add code, I can often only add code now. This eliminated some redundant code from the book making room for more content in the paper release.

## Developing with Webpack

### Automatic Browser Refresh

* This chapter is right after the *Getting Started* one now. The splitting idea is covered at the end of the part. The flow of the book feels better this way and it should be easier for beginners to pick up.
* The chapter has been largely redeveloped. Especially `--env` fits the whole better now.

### Configuring Hot Module Replacement

* Listed some of the features of webpack-dev-server that weren't mentioned earlier. At least this way you know what it's capable of.
* Added a screenshot to clarify the idea.

### Linting JavaScript

* Restructured ESLint tips so they are easier to access.
* Mentioned [Prettier](https://www.npmjs.com/package/prettier) and [Danger](https://github.com/danger/danger-js).

### Splitting Configuration

* This chapter is largely the same as before except this time around you can see better the difference the approach makes.

## Handling Styles

### Loading Styles

* Rewrote PostCSS approach to use `options`.
* Pushed the import tilde idea to a single section to simplify further.
* Added sections on sourcemaps, Bootstrap, and converting CSS to a string (Angular).
* Improved the quality of the images.

### Separating CSS

* Added a section on how to maintain CSS outside of JavaScript.

### Linting CSS

* Ported PostCSS to `options` based scheme to encapsulate the idea better.

## Understanding Loaders

### Loader Definitions

* Added more detail to the main example.
* Discussed inline definitions in greater detail.

### Loading Fonts

* Simplified a notch while adding a better example for Font Awesome.

### Writing Loaders

* Explained the idea of pitch loaders.

## Building with Webpack

### Splitting Bundles

* Expanded on the basic ideas and especially `CommonsChunkPlugin`.
* Added a section on chunk merging and splitting.

### Code Splitting

* Added more examples and related patterns.

### Processing with Babel

* Added sections on TypeScript and Flow and explained them in greater detail than earlier.

### Hosting on GitHub Pages

* Added an example of how to resolve `publicPath` dynamically.

## Optimizing Build

### Minifying

* Explained the basic idea of tree shaking with a small demonstration.

### Adding Hashes to Filenames

* Explained the idea of records and why/how to use them.

## Advanced Techniques

### Consuming Packages

* Added a section on how to deal with globals, like jQuery, using webpack as this is a common problem.

### Configuring React

* Added a React specific code splitting example.
* Pushed TypeScript and Flow bits to the Babel chapter as those fit below compiling topic.

## What Next?

I'll continue on my task list. I don't expect the current content will change a lot. It's possible the *Writing Loaders* chapter will go to a part with a similar chapter for plugins and I have [prepared a plugin example](https://github.com/webpack-contrib/purifycss-webpack-plugin) for the chapter already. The plugin will eventually replace the current Purify plugin of the book.

I expect the next release has at least a couple of more chapters to make the book complete enough for a paper release.

## Conclusion

I hope you enjoy the new version. There were quite a few smaller changes that I didn't cover, but it's up to you to discover those.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his. Literally most of the income goes to webpack developers now!

T> You can [support webpack through open collective](https://opencollective.com/webpack) too.
