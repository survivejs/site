---
title: 'SurviveJS - Webpack and React - v2.0.0-rc2'
date: 2016-01-10
headerImage: 'assets/img/winter_sun2.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

Not a lot has happened since the previous [release candidate](./survivejs200-rc1). The biggest change has to do with a little bug that the recent release of Babel 6.4 revealed. All property initializer based declarations were missing a semicolon as Babel treated them in a too lax way before. This has been fixed in this release candidate.

## Overview of the Situation

We're on a good track as far as I can see. It's not the perfect book, but no book is. In any case, the development will continue even after the release. To prepare for the future, I made sure [the Redux version of Kanban](https://github.com/survivejs/redux-demo) is up to date.

The next bigger effort is porting the chapters to it. The implementation will most likely live still as I'll want to given [Immutable.js](https://facebook.github.io/immutable-js/) a go. I feel discussing these two topics could be valuable to a lot of readers.

### Experimenting with Webpack

I experimented with a higher level format for configuring Webpack. You can see my work in the form of [webpack-presets](https://www.npmjs.com/package/webpack-presets). There's a little parser that converts the JSON format into the one we all are more or less familiar with.

I am not the only one who is looking into this problem. Jason Quense developed a prototype known as [webpack-config-utils](https://github.com/jquense/webpack-config-utils). The idea is to provide a DSL that hides some problems of the current format. Most importantly it's able to give us good errors.

A user known as @scriptjs has led an effort to push Webpack into a Babel style monorepo. There was an early specification that has since been removed. The approach is quite close to *.webpackrc* and we've been collaborating on it.

Tobias Koppers, the author of Webpack, has prepared a specification known as [Concord](https://github.com/webpack/concord). It's yet another way to solve these issues. Especially the mimetype, loader mapping is highly interesting.

I hope something good comes out of these experiments and we can resolve some of the pain points of the tool. Even though it's quite nice already, there is always room for improvement.

## Book Improvements - `2.0.0-rc2`

In total 17 commits went to `2.0.0-rc2`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0-rc1...v2.0.0-rc2).

### Developing with Webpack

* Showed how to polyfill `Promise` through `require('es6-promise').polyfill()`. This is good to know if you have to run on a legacy platform.
* Added a brief description of HMR just to get the basic point through.
* Mentioned `netstat -na | grep 8080` as that's useful for checking whether or not the port is available.

### Webpack and React

* Set up a [custom Babel preset](https://github.com/survivejs/babel-preset-survivejs-kanban) to make the project a little lighter.
* Explained Webpack loader declarations. This is something good to be aware of so it felt like a good place to go through it.

### Implementing a Basic Note Application

* Mentioned that `this.setState` is required for committing data to `state`.
* Added missing semicolons to property initializers.

### From Notes to Kanban

* Added missing semicolons to property initializers.
* Cleaned up `update` method slightly. Returning early is a good practice.

### Testing React*

* Fixed `Editable` import paths. They were missing `..`'s.

### Language Features

* Added missing semicolons to property initializers.

## What Next?

I will tweak the book based on your feedback as usual and start certain preparations. I expect the final version will be out in a week or two. After that we are back to usual cadence. I hope to maintain a monthly release cycle at least. Currently a lot of decisions are made based on the situation.

## Conclusion

If you are working through the book, remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). This time there weren't a lot of changes fortunately.

Remember that you can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It's good for me to know where you struggle so I can tweak the book.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
