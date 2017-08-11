---
title: 'SurviveJS - Webpack - v1.5.0'
date: 2017-01-03
headerImage: 'assets/img/sea.jpg'
keywords: ['release-notes', 'webpack']
---

New year, new chance to write. [The previous release](../survivejs-webpack-142) put the writing gear back on and it's time to continue. This time around there are quite a big changes in the content and it's starting to feel more and more something worth publishing in a paper format.

T> If you aren't interested in what has changed, [skip straight to the book](/webpack/preface).

## Overview of the Situation

You could say the last few weeks were intense. As usual, I started working through my list of things to resolve. The effort escalated fairly fast and I ended up restructuring the entire book to make it easier to handle.

I've noticed my sweet spot for a chapter length is between 1-3k words and I've structured the book accordingly. So the chapters are shorter, but also more focused. And they have been split over more parts.

I want to give my special thanks to [Artem Sapegin](https://twitter.com/sapegin) for motivating quite a few changes. I take feedback seriously and it's great to push the book forward especially as you see it going improving.

There's still work left to do, but now that the structure feels solid enough, I can focus more and more on content instead of editing.

If you have specific ideas on what to cover at the book, [open an issue](https://github.com/survivejs/webpack/issues). That will give me a better idea. You can also [reach me through Gitter](https://gitter.im/survivejs/webpack).

## Book Improvements - `1.5.0`

In total 234 commits went to the book since the last release. You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack/compare/v1.4.2...v1.5.0). Remember especially the "Files changed" tab as it gives you a good overview of what's happening with the book.

## Webpack Compared

* Added [RequireJS](http://requirejs.org/) as it's worth mentioning due to its contribution. Now the AMD module format discussion is here too due to this.
* Explained how to use npm as a task runner.
* Split most of the webpack bits to a chapter of its own as this chapter started feeling too long.

## Why Webpack?

* New chapter based on the old *Webpack Compared* information.

## Developing with Webpack

### Getting Started

* Ported modules to ES6 format given webpack 2 supports that out of the box.
* Added a section about useful *html-webpack-plugin* extensions.
* Added a section about useful development plugins.

### Splitting Configuration

* Explained `--env` behavior in greater detail.

### Automatic Browser Refresh

* Simplified greatly as I realized it's possible to split this into two chapters.
* Added a section about how to make module ids more debuggable.
* Added a section about how to make it faster to develop configuration using nodemon.

### Configuring Hot Module Replacement

* New chapter focused on Hot Module Replacement (HMR). Now you actually implement the client-side interface to get the idea better.

### Linting JavaScript

* The earlier linting bits are an early chapter now. You will integrate ESLint to the project early on. I split up a couple of appendices from here to keep this to the point.

## Handling Styles with Webpack

* This new part encapsulates all styling related concerns. Earlier they were split around the book and there was some duplication. This move allowed me to simplify things quite a bit.

### Loading Styles

* This is the old style chapter renamed and slightly expanded.

### Separating CSS

* This is the old separating chapter renamed.

### Eliminating Unused CSS

* There was a little glitch in the old setup that has been fixed now. The purify interface is more flexible now as well.

### Linting CSS

* Earlier this was a part of the generic linting chapter, but now it's focused chapter of its own.

## Understanding Loaders

* This part replaces the old asset one.

### Loader Definitions

* This chapter replaces the old loader definition one. The supported formats chapter was assimilated by others and disappeared entirely.
* Tweaked based on a couple of tips by Tobias so you can see the idea behind the design better.

### Loading Images

* Added a tip about dynamic imports.

### Loading Fonts

* Added a section about Font Awesome.

### Writing Loaders

* Moved to this new part as it felt like the right place for the chapter for now.

## Building with Webpack

* Earlier this part was too big so it has been split into a few more focused ones.

### Enabling Sourcemaps

* This is the old chapter with a few clarifications here and there. I'm still not completely happy about it and it needs more examples, but those are good goals for the next releases.

### Splitting Bundles

* No major changes were made to bundle splitting.

### Code Splitting

* Earlier code splitting was explained far too late. Now it's a part of the main content and you can see the idea better.

### Processing with Babel

* I realized I had to add a chapter focused on Babel as the information was split around the book. I gathered it here and show how to process the source through Babel. It might be interesting to do a similar chapter for TypeScript if there is interest.

### Cleaning the Build

* This is the same old chapter more or less.

### Hosting on GitHub Pages

* Added a few deployment tips including how to get archives and what other systems exist.

## Optimizing Build

* This is a new part focused on build optimization.

### Minifying the Build

* No major changes were required.

### Setting Environment Variables

* Minor cleanup to illustrate the idea better.

### Adding Hashes to Filenames

* I pushed all the hashing related bits here. Better than splitting the ideas over the book. Now you get the changes in a single place.
* Explained manifest related ideas in greater detail.

### Analyzing Build Statistics

* Added more analysis tools.
* Added graphics to go with the tools.

## Advanced Techniques

### Consuming Packages

* It felt like the package authoring chapter did too much so I ended up splitting it into two chapters. This gave me a good chance to discuss ideas like aliasing.

### Authoring Packages

* I did minor cleanup here and the chapter is lighter now that it doesn't have to cover as much ground as before.

### Configuring React

* Given there's a Babel chapter now, this one doesn't need to discuss Babel in great detail anymore. The HMR bit went to an appendix to keep this more focused.

## Appendices

* Since it started to feel that certain content is secondary, it made sense to push it to appendices.

### Searching with React

* The old code splitting example fit an appendix well.

### Configuring Hot Module Replacement with React

* This felt like a good appendix. I need to revisit this one to show how to handle react-hot-loader 3 beta.

### Writing ESLint Plugins

* Another good appendix. Writing ESLint plugins went past the book focus so it fit into an appendix.

### Customizing ESLint

* ESLint customization was another topic like that.

## What Next?

I still have quite a few smaller tasks to dig through before I am willing to call this 2.0. I have a feeling the current restructuring will pay off nicely in the coming weeks. There are a couple of chapters to write and content to tune.

## Conclusion

The current version of the book is beginning to feel solid to me. I'm starting to find a writing style I like and it's easier to spot what works than earlier. Keep the feedback coming as I can put it to good use.

If you want to support the development of the book, [pick up a copy at Leanpub](https://leanpub.com/survivejs-webpack). A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack. This is my way of supporting his work given mine builds on top of his. Literally most of the income goes to webpack developers now!

T> You can [support webpack through open collective](https://opencollective.com/webpack) too.
