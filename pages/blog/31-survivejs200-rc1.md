---
title: 'SurviveJS - Webpack and React - v2.0.0-rc1'
date: 2016-01-06
headerImage: 'assets/img/ice_morning.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

Since the [beta](./survivejs200-beta2) was launched, I've been working on remaining improvements. This has mostly meant tuning the existing content, although there are some new bits as well.

Obviously the released book won't be complete in sense that it contains everything you need to know about React and surrounded technologies. But I believe it amounts to something. Given the nature of the effort, the coverage will slowly but surely improve over time.

## Book Compared to Pete Hunt's Learning Recommendation

Compared to [Pete Hunt's official learning recommendation](https://github.com/petehunt/react-howto) we're doing quite well. The book covers most of the issues he mentions. Mainly the book is missing information on routing, [Immutable.js](https://facebook.github.io/immutable-js/), [Relay](https://facebook.github.io/relay/), [Falcor](https://netflix.github.io/falcor/), and such topics. I'm not worried, though. These topics can be discussed in detail at a later time. And there's plenty of other material available already.

## Overview of the Situation

I've improved the book based on your feedback. I also ate my own dogfood and went through it myself. This revealed some issues (mainly code formatting) and helped me to simplify certain portions further.

I also wrote a little appendix that should inspire you to think about how to structure your application. There's no one true way. Rather, as with all things React, there's a lot of flexibility available.

Feedback is still welcome of course. I'll spend more time with the content and start pushing certain other bits to get a nice release done.

## Book Improvements - `2.0.0-rc1`

In total 79 commits went to `2.0.0-rc1`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0-beta2...v2.0.0-rc1).

### Introduction

* Explained the point of appendices.
* Added more sectioning to make the points clearer.

### Webpack Compared

* Added more sectioning. Better be consistent with that.

### Developing with Webpack

* Moved `require` statements to use `const` instead of `var`. This feels more consistent given `const`s are used anyway.
* Added more terminal output to make expectations clearer.
* Added a section about *HMR on Windows*. The default setup won't work on all versions of Windows so I added an alternative. It's not as efficient as it uses polling.
* Mentioned [dotenv](https://www.npmjs.com/package/dotenv). That's handy for managing environment variables through a module of its own.
* Made sure *babel-loader* caching gets enabled through `babel?cacheDirectory`. This helps especially with rebuild performance.

### Webpack and React

* Fixed Babel settings passing. Instead of `babel?stage=1` you'll want to use `babel?presets[]=react,presets[]=es2015` kind of format. It's cleaner to use *.babelrc*, though.
* Defined a section for *Using Babel for Webpack Configuration* and expanded on the idea. If you want to use *webpack.config.babel.js*, you need to have [babel-register](https://www.npmjs.com/package/babel-register) installed to your project.
* Moved the setup to use [babel-preset-react-hmre](https://www.npmjs.com/package/babel-preset-react-hmre). This simplifies the Babel setup a lot!

### Implementing a Basic Note Application

* Restructured for clarity. There are less steps now and the chapter gets faster to the point.

### React and Flux

* Added missing subsections to the Flux explanation. This is consistent with the rest of the book now.
* Explained the difference between a *ponyfill* and a *polyfill*. Former don't override native methods whereas latter do.
* Cleaned up code examples. They should be easier to follow now.
* Defaulted to the term *universal rendering* over *isomorphic* given it seems that's winning over. The term *isomorphic* is still mentioned, though.

### From Notes to Kanban

* Renamed `this.addItem` as more specific `this.addLane` to communicate the intent better.
* Pushed *On Data Dependencies and `waitFor`* to a more appropriate place in the chapter. Earlier it broke the flow a bit.
* Explained the need for association (notes to lane) better.
* Added missing `constructor` bits to the `Lane` code examples.
* Simplified add/remove annotations of the code examples to make them easier to copy and follow.
* Moved from `defaultValue` to `placeholder` at `Editable`. This is a cleaner approach.

### Implementing Drag and Drop

* Clarified the point that HTML5 Drag and Drop based backend is now separate from React DnD core.
* Made the code examples clearer to follow.

### Building Kanban

* Updated terminal output to match the current state.
* Explained *Defining a `vendor` Entry Point* in greater detail.
* Linked to [ExtractTextPlugin](https://www.npmjs.com/package/extract-text-webpack-plugin).
* Simplified deployment configuration. It's enough to do just `"deploy": "gh-pages -d build"` given *gh-pages* provides a CLI tool these days.

### Testing React*

* Dropped `require('babel/register')` mention. This isn't needed in the current setup anymore.
* Added missing id to `NoteContent` at `Note` test to mute a propType warning.
* Simplified Babel setup.

### Linting in Webpack

* Mentioned [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter) and ESLint `--format` parameter.

### Authoring Libraries

* Mentioned [irish-pub](https://www.npmjs.com/package/irish-pub). This is a useful tool for checking what your package looks like before hitting `npm publish`.
* Clarified *Dealing with Preprocessing* so it's easier to understand the point.
* Modernized `lib/post_install.js` script.

### Structuring React Projects

* New content. This appendix gives you some ideas on how to proceed with [structuring React projects](..webpack_react/structuring_react_projects).

### Language Features

* Added an example of *aliasing imports*.
* Added an example of *Classes and Modules*.
* Added more examples to property initializers.
* Explained arrow functions more accurately.

## What Next?

As usual, I'll remain responsive to feedback. I'm prepared to do minor tweaks to the book. Major development will have to wait for subsequent versions.

I'll most likely spend time on some technical development. The site could use some tweaks and there are certain ideas I must prototype.

## Conclusion

If you are working through the book, remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). I know it's a little inconvenient to catch up with changes, but what can you do. :)

Remember that you can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It has been very instructive to work through various issue with my readers. This is useful for all parties involved.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
