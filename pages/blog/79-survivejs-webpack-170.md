---
title: 'SurviveJS - Webpack - v1.7.0'
date: 2017-02-04
headerImage: 'assets/img/frost.jpg'
keywords: ['release-notes', 'webpack']
---

Compared to [the previous release](../survivejs-webpack-160) we've proceeded a step or two closer towards paper. This time around in addition to the usual tweaks there are a couple of new chapters and more content.

It will likely take at least one more release till we get to the magical 2.0 release that should become available in paper as well.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the Situation

I tackled most of the issues I had in mind for this release. Some were deferred to the next one and I'll continue iterating there. The structure of the book feels solid and it's fast to progress now. There are three chapters and three appendices to add. After that I consider the book "feature complete".

This time around my special thanks go to [Pedr Browne](https://github.com/Undistraction) for his amazing feedback that helped me improve particularly the flow of the book. Some improvements are still in store.

There will be at least a 1.8 version before the book reaches paper, but the end is definitely in sight. [Open issues](https://github.com/survivejs/webpack/issues) as you see fit. You can also [reach me through Gitter](https://gitter.im/survivejs/webpack).

Note that webpack 2 is considered stable now and you don't need `@beta` specifier with it when installing. Only [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) remains in release candidate mode. If you want to help with it, check out the issue tracker and especially the milestones. It has to reach a final release before I can push the paper book out there.

T> If you have found the content useful, this would be a good time to contribute a testimonial. A sentence or two would go a long way. Contact me the way you see the most fitting. You can find a couple of channels at the site footer.

## Book Improvements - `1.7.0`

In total 159 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.6.0...v1.7.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

I continued the habit of silent releases and I actually intend to do one quite fast after this release to improve the formatting of webpack output.

There's a new part on how to extend webpack. I pushed the existing loader chapter there and added a short one on plugins. It's more of a quick dip in the topic to give you some idea on how you might write one.

I also integrated React HMR appendix to the React chapter itself as that felt like a better place for it. During this process I upgraded the setup to use the newest beta version of *react-hot-loader* while covering a couple of gotchas related to it and how to work around those.

The configuration style has improved a notch and you'll see many functions accept objects. This is to keep them readable and easy to extend.

You will find numerous smaller improvements in the book and it should flow better. Certain chapters contribute more to the book project and I've tried to take care to write the chapters so that you can approach them even without knowledge of the previous ones. Sometimes that's impossible to pull off, but it should be a little better now at least.

## Webpack Compared

* Simplified especially the end part a notch. The book digs into detail later so there's no need to repeat.

## Developing with Webpack

### Getting Started

* Covered webpack's multi-compiler mode. That might eventually go elsewhere.

### Automatic Browser Refresh

* Pushed development plugins section to this chapter to improve balance between the chapters.

### Linting

* Explained advanced ESLint configuration and how to pull that off with webpack.

### Composing Configuration

* Dropped `env` discussion as that's covered earlier now.

## Handling Styles

### Separating CSS

* Added autoprefixing setup. Now configuration is more flexible.

### Eliminating Unused CSS

* Ported the setup to [purifycss-webpack](http://npmjs.org/package/purifycss-webpack) as I couldn't get rights to the old package on time. *purifycss-webpack-plugin* will be deprecated once npm makes its move.
* Added a small section on a technique known as critical path rendering.

## Understanding Loaders

### Loader Definitions

* Added a section on enforcing order.
* Added a section on how to use functions with `use`.
* Added a section on alternative matchers.

### Loading Images

* Showed how to integrate the techniques to the book project.

### Loading Fonts

* Integrated the Font Awesome setup to the project.

## Building with Webpack

### Source Maps

* Renamed the chapter and fixed a typo while at it.
* Expanded the explanation of source maps greatly. Now you can see what kind of output webpack emits. During this process [I found a bug](https://github.com/webpack/webpack/issues/4176) in a certain variant.

### Processing with Babel

* Added a section on how to enable Babel plugins and presets per environment.

## Optimizing Build

### Minifying Build

* Explained the idea of a performance budget in detail.

### Setting Environment Variables

* Showed how to choose a package based on environment.
* Listed optimization related plugins.

### Adding Hashes to Filenames

* Split into two chapters. Manifest has a chapter of its own now.

## Extending Webpack

### Extending Webpack with Plugins

* New chapter based on [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack) plugin. It's a quick introduction to give initial idea on what's needed to write plugins. There's more to come.

## Advanced Techniques

### Consuming Packages

* Explained how to deal with pre-built dependencies.

### Configuring React

* Explained how to make ESLint work with React as that was missing earlier.
* Added *react-hot-loader* 3 setup and integrated it to the book project. There is no React HMR appendix anymore.

## What Next?

I'll focus on the smaller tweaks on my list first and get a silent release or two out there based on those. After that I will get the remaining chapters and appendices done. Especially the early part of the book will receive certain improvements that make it a little easier to approach.

## Conclusion

I hope you enjoy the changes. As usual, feedback is welcome. I'm active at the [book Gitter channel](https://gitter.im/survivejs/webpack) and you can reach me through it easily.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his. Literally most of the income goes to webpack developers now!

T> You can [support webpack through open collective](https://opencollective.com/webpack) too.
