---
title: 'SurviveJS - Webpack and React - v2.0.0-beta2'
date: 2015-12-28
headerImage: 'assets/img/winter_fog.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

The long awaited 2.0 is getting very close. [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) reached version 2.0 last Wednesday. This was all I needed to push the book to Babel 6. I released *2.0.0-beta1* as a xmas present of some sort to my [Leanpub readers](https://leanpub.com/survivejs_webpack_react) in early access at 25th. I think they earned it. :)

Today, after some initial feedback and subsequent fixes, I am prepared to publish a wider scale beta. Besides Babel 6 support, I have improved the formatting of the code examples considerably. Instead of having to guess what code goes and where, the examples now contain bolding and overlining to illustrate the changes better. In addition, there's some new content about Flow and JavaScript language features.

## Overview of the Situation

The primary purpose of this beta is to encourage you to provide feedback as there's still some time before the book goes to printing presses. I know it's missing some interesting topics, but that's something that can be worked during the next iteration (2 -> 3) of the book.

I am prepared to spend the next week or two on improvements on both the book and the site. It might be fun to code something cool for a change. ;)

## Book Improvements - `2.0.0-beta2`

In total 129 commits went to `2.0.0-beta2`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.9.15...v2.0.0-beta2).

### Introduction

* Made the chapter paragraphs flow better.
* Improved section structure.
* Explained better who the book is meant for.
* Added a bit about book versioning. Version included.

### Webpack Compared

* Made Webpack explanation flow better. It should be easier to understand what it does now.

### Developing with Webpack

* Mentioned `npm init -y` shortcut. Far better than having to hit *return*.
* Reworked chapter structure. Now it's more logical and hopefully easier to follow.
* Expanded explanations and added warnings about gotchas.

### Webpack and React

* Mentioned [paldepind/snabbdom](https://github.com/paldepind/snabbdom) as a Virtual DOM alternative.
* Added missing section (JSX vs. HTML)
* Hinted about the difference of React components and elements. Components generate elements and are more complex by nature given they can contain state.
* Updated the setup to Babel 6.
* Explained Babel 6 plugins and presets.
* Simplified application entry point by introducing [html-webpack-template](https://www.npmjs.com/package/html-webpack-template). It's a versatile template that works simple projects like this perfectly. This avoids unnecessary DOM manipulation.
* Explained how `BABEL_ENV` works and why it needs to be set.
* Dropped the mention of `bind` convention and replaced that with a snippet about property initializers.

### Implementing a Basic Note Application

* Updated React components to use function based definitions where it made sense. This is a good starting point for new components.
* Renamed `items` to more specific `notes`. This has been done also for `lanes`.
* Hinted about the benefits of immutability when discussing `componentWillUpdate`.

### React and Flux

* Generalized `update` interface. Now it doesn't care about the data you pass to it. This has been done for both stores (`NoteStore`, `LaneStore`). The implementation goes through `object-assign`.
* Discussed possible alternative implementations briefly to give more perspective.

### From Notes to Kanban

* Generalized `update` interface here as well. One interesting refactoring would be to do a generic CRUD store and then reuse that from elsewhere.
* Dropped `waitFor`. It just introduced unnecessary complexity given we're dealing with synchronous data. There's still an explanation around as you need to be aware of it in asynchronous cases when you are dealing with data dependencies.
* Pushed `Lane` `bind`s from the `constructor` to `render()`. Although this isn't ideal performance-wise, this is something that is easier to handle in Flow typing.

### Implementing Drag and Drop

* Did just grammar fixes, better highlighting.

### Building Kanban

* Dropped *Setting Up a Build Target*. This was possible given we set up one at *Developing with Webpack* already.
* Improved flow and dropped some redundant information.
* Mentioned [babel-plugin-transform-inline-environment-variables](https://www.npmjs.com/package/babel-plugin-transform-inline-environment-variables) as an alternative to `DefinePlugin`.
* Dropped sourcemaps from production. Less complexity.
* Mentioned about how to structure the project. I might write a little appendix about that, but we'll see.

### Testing React*

* Fixed test path for `include`s. Interestingly this worked even if it was missing a "s". That's something to investigate.

### Typing with React*

* Expanded on Flow somewhat. Now you can see how you would begin to push the project towards Flow typing. Flow is still missing some functionality required by a full port, but this is far better than nothing.
* Linked to various TypeScript loaders. I might do a TypeScript version of Kanban if there's interest.

### Linting in Webpack

* Improved grammar, highlighting.

### Authoring Libraries

* Mentioned [files](https://docs.npmjs.com/files/package.json#files) *package.json* field as an alternative to *.npmignore*.
* Explained `peerDependencies`.
* Mentioned [semantic-release](https://www.npmjs.com/package/semantic-release). It's a tool that provides better release flow.
* Mentioned `>= 1.3.0 < 2.0.0` version range.

### Styling React

* Improved grammar.

### Language Features

* New content! This is supposed to help especially those that haven't used the features before. The appendix is terse and gets to the point. I'll improve this based on your feedback.

### Understanding Decorators.

* Improved grammar.

### Troubleshooting

* Improved grammar.

## What Next?

This depends on you. I have a couple smaller things on my plate, but nothing major. I want to push the final release as far as I can. But to achieve that, I'm going to need feedback so I know what to improve. There's no such thing as a perfect book, but at least I'm willing to push this as far as I possibly can.

I might do an intermediate *beta-3*. I want to do a final release within a week or two. After that I'll focus my efforts depending on demand.

## Conclusion

If you are working through the book, it might be a good idea to patch your project based on [the book repository](https://github.com/survivejs/webpack_react) so it's up to date and continue from there. Eggs and omelette, right?

Leanpub readers have access to the stable release through "extras". I made a little switcheroo there. Earlier the beta version was within "extras". Speaking of which, I will need to figure out a better way to archive releases and make them available. Leanpub isn't working in my favor here unfortunately.

Remember that you can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. The last thing I want is that you curse some parts of the book alone. I'm here to help after all.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
