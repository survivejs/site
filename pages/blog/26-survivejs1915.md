---
title: 'SurviveJS - Webpack and React v1.9.15'
date: 2015-12-11
headerImage: 'assets/img/blue.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

This is perhaps the last release before the long awaited `2.0`. [Alt](http://alt.js.org/) reached version `0.18`. As a result a certain part of the book broke. I have fixed that issue in this release. There are also plenty of other tweaks here and there, and even some new content.

I visited an event known as "Web on the Edge" earlier this week. Even though these kind of trips always take some time, they tend to be worthwhile. At least I got to see some readers and managed to get exposure to some new ideas. See my [conference report](http://www.nixtu.info/2015/12/afterthoughts-web-on-edge.html).

## Overview of the Situation

The situation with Babel 6 is starting to look a little better. Babel 6 compatible beta version of [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) just came out a couple of days ago. Other plugins have been moving towards Babel 6 as well. I know decorator support is still a little iffy, but I have some solutions in sight that might work.

I made a little breakthrough with my [Flow](http://flowtype.org/). It will still take some work, but I cannot see any blockers anymore. This is something I will tackle in the near future.

In order to make it easier to contribute fixes and tweaks to the book, I changed the [GitHub repository](https://github.com/survivejs/webpack_react) to use the `dev` branch by default. That's where the development happens after all. This will help to avoid some confusion.

I want to give special thanks to the user [snowyplover](https://github.com/snowyplover) for providing nice edits to early parts of the book. [Tobias Koppers](https://github.com/sokra) deserves a special mention as well. Overall the feedback has been encouraging and helped me to push the book a notch further. Thanks guys!

## Book Improvements - `1.9.15`

In total 74 commits went to `1.9.15`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.9.10...v1.9.15).

### Webpack Compared

* Improved the flow of the chapter. Now it should read a little better.
* Added emphasis between *task runners* and *bundlers*. This helps to understand how these tools can complement each other.

### Developing with Webpack

* Documented Webpack `entry` better. It accepts a path or an object of entries.
* Pointed `open` to the correct location.
* Put emphasis on the fact that the dev server runs in-memory. This should decrease the amount of confusion.
* Mentioned that `HOST` should be set to `0.0.0.0` for Cloud9 and similar environments.
* Noted that `test` expects a RegExp.
* Noted that `include` expects a path or an array of paths.

### Webpack and React

* Removed mention of *stage 1* now that we enable specific features we use at the project one by one.
* Added examples of the custom features used to make it easier to understand what they do.
* Pushed the ES6 class autobinding note to the correct place.
* Added missing `"es7.classProperties" declaration.

### Implementing a Basic Note Application

* Removed mention of *react-hot-loader*. It has been replaced by *babel-plugin-react-transform* so no need for this anymore.
* Added emphasis to the fact that I prefer functional style and the reasons for this.
* Renamed `renderTask` as `renderNote` to communicate the intent better.
* Showed how to use `map` to set context. Example: `map(fn, context)`.
* Dropped `findIndex`. The usage has been replaced with simpler functions. This reduces the complexity of the project and makes the chapter quicker to go through.
* Improved the flow of *Understanding React Components*. Now it explains things in the right order.

### React and Flux

* Integrated *alt-utils* so the project works with Alt 0.18.
* Simplified store methods somewhat.
* Put emphasis on the dangers of mutation.
* Explained isomorphic rendering briefly given it's mentioned.

### From Notes to Kanban

* Simplified store methods.
* Dropped *Implementing `findLane`*. This isn't needed now that the implementation is simpler.

### Implementing Drag and Drop

* Installed *react-addons-update* from a package of its own so the project won't break with React 0.15.

### Building Kanban

* Improved the flow of the chapter. Now it proceeds in a slightly smarter order.
* Fixed hashing configuration. Bundles should get invalidated as initially intended now. This took some extra effort to pull off.
* Linked the chapter better to *Authoring Libraries*. It's valuable to understand npm in detail as that can help with your build so that's a good chapter to read.

### Authoring Libraries

* Expanded on *.gitignore*.
* Added mention of *postinstall* and its usage.
* Explained how to deal with preprocessing (i.e., *postinstall*).
* Added a section about version ranges and how they work.

### Styling React

* Improved the flow of the early part of the chapter.
* Added an image showing how different processing tools can work in tandem. [Stefan Baumgartner](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3) describes that well so I used his idea.
* Added a section for [PostCSS](https://github.com/postcss/postcss). It was mentioned already but I felt it could use a better description.

### Troubleshooting

* Added a section about `Module parse failed`. That's something you can see with Webpack quite easily so it felt like something nice to cover.

## What Next?

The coast is clear for the Flow work. I see no blockers with that. TypeScript will take some further investigation. And there are some smaller things, like improving those code examples, which I want to get done. That should keep me busy next week.

## Conclusion

Again, this is a small release. If you are working through the book, it might be a good idea to patch your project based on [the book repository](https://github.com/survivejs/webpack_react) so it's up to date and continue from there. I know this isn't ideal, but you cannot make an omelette without breaking an egg. It's for the better.

Thanks for the feedback again. It helps. You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
