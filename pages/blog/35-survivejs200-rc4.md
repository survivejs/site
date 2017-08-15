---
title: 'SurviveJS - Webpack and React - v2.0.0-rc4'
date: 2016-02-07
headerImage: 'assets/img/snow.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

[The previous release candidate](./survivejs200-rc3) prompted a nice amount of feedback. I've taken that into account in this release. I have a date for the final in sight and I won't be making any significant changes for the final release.

It's not going to be the perfect book in any way, but it's absolutely far better book than I could have pulled off on my own. Given this is my first effort, it has been a great learning experience. And it continues to be so.

## Overview of the Situation

I split my efforts during the past two weeks towards a couple of separate goals. My primary goal was to smooth out remaining bigger issues. [The book chat](https://gitter.im/survivejs/webpack_react) helped a lot in this regard. I also enjoy discussing with my readers through mail. It's great to get multiple perspectives on the content.

My secondary goals included getting some coding done and preparing for a little presentation I have promised to give. I don't normally get invited to talk so I like to get the most out of these special occasions.

### Work on React Components

Since you need to be able to practice what you preach, I did a little API design experiment in form of [react-pagify](https://bebraw.github.io/react-pagify/). It is a paginator component for React. I know it sounds like a trivial one, but the goal here was to end up with something flexible while providing a minimal API surface. This was achieved partially through utilizing [React context](https://facebook.github.io/react/docs/context.html).

I've been considering using a similar design for [reactabular](http://reactabular.js.org/), a data table component of mine. This was a good chance to experiment with the ideas in smaller scale. I think the design will fit *reactabular* well and allow me to improve its API further without sacrificing any functionality.

### Preparing for February Meetup

Beyond component development I put thought towards a presentation I have to give at [February Meetup of Frontend Finland](http://www.meetup.com/frontendfinland/events/228369937/). Given I rather write than talk, this gave me a good excuse to write an opinion piece. I believe there's room for [a common component definition](./towards-common-components). Something like this would allow us to make the ecosystem stronger and more vibrant.

### Improving Kanban

The Kanban implementation has improved a notch. It won't allow you to drag an input that's being edited anymore. I also found [a book related question](https://stackoverflow.com/questions/33108567/webpack-hash-the-same-for-css-and-js-files-both-change-when-only-one-should) at Stack Overflow. The problem had to do with hashing and cache invalidation.

If CSS was altered in the current, it also changed the hash of JavaScript. This is definitely something you don't want to happen. It took a while to understand what's going on, but then it hit me. Given we were using `require` to bring the CSS to JavaScript, this made it end up in the same chunk. And that's the core of the issue here.

I realized the only good way to resolve this issue was to separate the CSS into a chunk of its own. This change has been implemented in the book now. The Kanban CSS gets loaded through an *entry chunk* of its own. The only gotcha with this approach is that it will generate a redundant JavaScript. It's annoying but something you can live with. To keep track of the problem, I [opened an issue](https://github.com/webpack/webpack/issues/1967).

### Introducing *npm-install-webpack-plugin*

One of my personal annoyances with the book has been all those `npm install` parts. Often they just break the flow as you have to jump into terminal and do some work there. Fortunately there's a good solution for this problem now.

[npm-install-webpack-plugin](https://github.com/ericclemmons/npm-install-webpack-plugin) by Eric Clemmons is able to detect when you `require` something in your project and install the dependency in question. It's not completely perfect yet as it doesn't allow us to choose between `--save` and `--save-dev` easily based on context yet. I've discussed about this with Eric and it's likely a feature that will be developed in the near future. I wrote a little proof of concept and it worked somewhat nicely.

It's always fun to discover small gems like this plugin. You can still install all your dependencies by hand of course, but at least now there's a good option that can save some trouble.

## Book Improvements - `2.0.0-rc4`

In total 68 commits went to `2.0.0-rc4`. To make it easier to follow what happened and where, I've split up the changes below.

See GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0-rc3...v2.0.0-rc4). Especially the "Files changed" tab is highly useful.

### Introduction

* Clarified the book repository structure and mentioned the repository defaults to `dev`. That's not likely the branch you want to see so there's an image showing how to find the one you are after.
* Linked to [SurviveJS AmA](https://github.com/survivejs/ama/issues).

### Developing with Webpack

* Added an example of output you might get when running Webpack the first time.
* Moved to use object format for `entry`. This leads to less hassle later on when dealing with styling and hashing so this felt like a good move.
* Dropped redundant `HtmlWebpackPlugin` mention.
* Explained `0.0.0.0` idea earlier on so you might actually find it in case you are using a virtual machine.
* Explained `eval` options in greater detail. Now it's clearer that options starting with `eval-` emit sourcemaps as a part of JavaScript code. Better performance, but obviously this is a bad idea for production usage as it bloats the bundle.
* Integrated *npm-install-webpack-plugin* so that plenty of those `npm install` bits could be dropped.

### Webpack and React

* Put emphasis on the fact why `include` is used at the loader definition. I strongly recommend using it just for the sake of improved performance. This also documents how you expect Webpack to parse your project.
* Added a tip showing how to use brace expansion with npm. Example: `npm i babel-preset-{es2015,react} -D`.
* Added [babel-plugin-array-includes](https://www.npmjs.com/package/babel-plugin-array-includes) to SurviveJS preset. Given [array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) is a part of the standard now, this felt like a good chance to begin using it over `indexOf` in certain places.
* Mentioned alternatives to shimming `Object.assign` through Babel.
* Explained how to develop your own Babel presets.
* Mentioned that React developer tools won't work if you are using Webpack in the iframe mode.
* Mentioned [babel-plugin-react-require](https://www.npmjs.com/package/babel-plugin-react-require) as an alternative to including `React` for function based components.
* Improved flow around the part where HMR is set up with React. Now the content is discussed in a more approachable order.

### Implementing a Basic Note Application

* Simplified **Generating Ids** section. It's the same content, but in simpler form.
* Mentioned [autobind-decorator](https://www.npmjs.com/package/autobind-decorator). That's an interesting looking alternative at least.
* Explained the `ref` idea in greater detail.
* Explained how `Note` state changes are communicated in greater detail.
* Discussed the problem of `state`. This is something you need to think a lot in the context of React.

### React and Flux

* Explained `Object.assign`. Given it's not that common yet, it felt like a good idea to explain why and how it is used here.
* Simplified code examples so that they are easier to copy from Markdown. That's how I like to read the book by the way.
* Used `includes` over `indexOf` where it made sense.

### From Notes to Kanban

* Dropped `constructor` from `Lane`. Even though binding the lane id to methods worked this way, it's often an anti-pattern to map a prop this way. This is true particularly if the value of a prop can change. It binds through property initializers now.
* Added `stopPropagation` to `deleteNote` to avoid issues with hovering.
* Mentioned that `Editable` uses **uncontrolled** design and discussed **controlled** alternative.

### Implementing Drag and Drop

* Simplified logic by introducing `includes` to code.
* Fixed editing behavior during dragging. This means an additional check needed to add to `Note` so that we know to enable/disable dragging based on editing state. This is a good example of the importance of state management.

### Building Kanban

* Simplified `DefinePlugin` declaration to form `'process.env.NODE_ENV': '"production"'`. `JSON.stringify` felt a little too verbose and it didn't communicate the idea as well.
* Added a checklist of `dependencies` you should see before starting to split your bundles.
* Renamed `Clean` to `CleanPlugin` in the sake of consistency. Other plugins have `Plugin` suffix so this one should have one too.
* Dropped the mention of `autoprefixer-loader` given it has been deprecated. Use `postcss-loader` instead.
* Explained how to improve caching behavior by loading CSS through an entry chunk. This won't work for each and every case, but it felt like a decent solution here as it fixes hashing. That was the main goal here after all.

### Testing React*

* Moved from *phantomjs* to *phantomjs-prebuilt* as the package was renamed.
* Mentioned [JSVerify](https://jsverify.github.io/), a property testing tool.
* Mentioned [invariant](https://www.npmjs.com/package/invariant) package.

### Understanding Decorators

* Explained how to enable decorators in Babel 6.

### Troubleshooting

* Explained how to deal with *Warning: setState(...)*.
* Explained how to deal with *Warning: React attempted to reuse markup*.

## What Next?

Content-wise I'm done. I am still willing to do minor tweaks based on your feedback, but major work has to wait for the next releases. I can't wait to get back to a normal release cycle.

I will have to proof the content. In other words, I will have to go through it very carefully a couple of times and try to catch any remaining issues. No doubt some will remain, but that's how books work. I will also have to craft a cover for the paper version and figure out what to put on the backside and spine. If nothing else, at least I'll get something to put on my bookshelf out of this!

## Conclusion

If you are working through the book, remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). Remember that you can find the stable version at the `master` branch or you can look up a specific tag.

You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It's good for me to know where you struggle so I can tweak the book.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
