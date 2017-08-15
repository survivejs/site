---
title: 'SurviveJS - Webpack and React - v2.0.0-rc3'
date: 2016-01-22
headerImage: 'assets/img/cool.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

If the previous [release candidate](./survivejs200-rc2) had few changes, this one is the opposite. I consider this good news as it's better to catch bigger issues now rather than later. Thanks for feedback!

## Overview of the Situation

I managed to improve [the Redux version of Kanban](https://github.com/survivejs/redux-demo). Most importantly I integrated [redux-devtools](https://www.npmjs.com/package/redux-devtools) to it. The implementation could probably use a few more tweaks, but that's not the priority right now.

Thanks to reader feedback, the Kanban implementation has improved in various places. The UX is a little better now and the logic is clearer in certain parts. These are small touches that are worth doing. I still need to update certain screenshots at the book to match the current status, but the technical parts are there.

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) reached a new major version. Unfortunately this broke compatibility with [html-webpack-template](https://www.npmjs.com/package/html-webpack-template) temporarily. There's a compatible version of the latter available as a tagged version. The problem has been resolved in the current version.

It's starting to look good. I will be very happy to get this puppy out of the door. Who said writing books is easy? :)

## Book Improvements - `2.0.0-rc3`

In total 58 commits went to `2.0.0-rc3`. To make it easier to follow what happened and where, I've split up the changes below.

On general level I tidied up arrow syntax. I.e. instead of `(name) => ...` you might see `name => ...`. The latter form is less noisy so that's used where it makes sense. Feel free to use either one you prefer, though.

See GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0-rc2...v2.0.0-rc3). Especially the "Files changed" tab is highly useful.

### Introduction

* To make it easier to use the book, I wrote a section on how to approach it. There's no one right way and it all depends on what you know already and how you prefer to learn. You could, for instance, jump straight to the React bits and read Webpack ones after that.

### Developing with Webpack

* Suggested the usage of [Vagrant](https://www.vagrantup.com/) in addition to the official [Node.js packages](https://nodejs.org/en/download/package-manager/).
* Defined a starter *index.html* by hand. Now *html-webpack-plugin* gets discussed later in the book. It felt like introducing it so early could be distracting. It's better to start with something people are familiar with and move from there.
* Improved flow overall. Now it should be a little easier to follow.

### Webpack and React

* Dropped the mention that *stage 2* features are included in Babel. That's not true anymore given the book uses Babel 6.
* Corrected naming. *Class properties* -> *property initializers*
* Included [babel-plugin-transform-object-assign](https://www.npmjs.com/package/babel-plugin-transform-object-assign) to the project preset. This allows us to use the standard `Object.assign` while keeping it legacy compatible. One less direct dependency to worry about!
* Simplified "Rendering Through `index.jsx`" greatly. This was possible thanks to the fact that *html-webpack-plugin* is discussed later.
* Dropped the mention of [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors). No need for that anymore given there's a Babel preset now that deals with the details.

### Implementing a Basic Note Application

* Changed editing logic to use `defaultValue` instead of `placeholder` while setting the input caret to the end. This achieved by using a `ref` with a callback. It's a small trick that's worth knowing and covering as it gives you more control just for cases like this.

### React and Flux

* Dropped *object-assign* dependency. This isn't needed anymore given we go through Babel now. We can use just `Object.assign` directly and it will work.
* Cleaned up the implementation of *storage.js*. Now it's all ES6.

### From Notes to Kanban

* Renamed `NoteStore.get` and `NoteStore.getNotesByIds` to make it unambiguous.
* Annotated `NoteStorage.getNotesByIds` in detail. There's quite a bit going on so this felt like a good idea.
* Improved UX of lanes. Now there are separate controls for editing and removing lanes. You can begin to edit a lane name by clicking anywhere on the lane header. The only exception to that rule is adding a note to it. In that case we trigger `stopPropagation` to override the default bubbling behavior.
* Converted `console.log` to use backtick syntax where it felt like a good idea. A little easier to read.

### Implementing Drag and Drop

* Converted `console.log` to use backtick syntax where it felt like a good idea.
* Removed `removeNote` and wrote the logic inline into `attachToLane`. Simpler and easier to understand.

### Building Kanban

* Moved *html-webpack-plugin* bits here. Now there's a single section where I discuss the approach. Far neater!
* Made sure *webpack-clean-plugin* isn't in verbose mode. This breaks Webpack stats so it's better to do it this way for now. The problem is that the plugin [uses Webpack API wrong](https://github.com/johnagan/clean-webpack-plugin/issues/11) and goes through `console` instead of the logging API that Webpack provides. I'll try to get the plugin fixed in the near future.

### Typing with React*

* Dropped redundant `onDelete` `propType` from `Note`. This isn't needed at all as it's enough to assert it on `Editable`.

### Linting in Webpack

* Recommended the usage of `"extends": "eslint:recommended",` at *.eslintrc*. It's a good starting point.

### Authoring Libraries

* Changed *package.json* example to use namespacing and added some newlines. Cleaner to read and use.
* Explained various ways to bump a version in greater detail.
* Clarified why to preprocess your distribution files instead of including them to your version control.

### Language Features

* Showed how to return an object easily when using the arrow notation for functions.
* Expanded on string interpolation.
* Added a section on object shorthands.

## What Next?

As usual, I will work based on your feedback. I have a couple of discussion points in mind I want to expand upon. And I need to get those screenshots done. The nice thing is that there aren't that many content related tasks yet! So in short, it's starting to look good.

After I have done the tweaks I have in mind, I'll move to the next step with my publication process to get the first paper version done. Interesting times.

## Conclusion

If you are working through the book, remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). I maintain the stable version at the `master` branch. For technical reasons the repository shows you the development version, though. This is just to make it easier to contribute to the book.

Remember that you can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It's good for me to know where you struggle so I can tweak the book.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
