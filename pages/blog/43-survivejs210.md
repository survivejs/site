---
title: 'SurviveJS - Webpack and React - v2.1.0'
date: 2016-04-17
headerImage: 'assets/img/field.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

It has been a while since [the previous release](./survivejs200) and quite a bit has happened. As you might have noticed, there's actually [a new book about webpack](./survivejs-webpack-100) out there now. The idea is that I will split this one in two.

This book will continue as something React focused while I'll push all the webpack bits to the other one. All current readers will receive a free coupon to the webpack book once I complete this transition. To get a preview, check out [the online version](/webpack/preface).

> A part of the income (around ~30%) goes to Tobias Koppers, the author of webpack, to support its development. That's the least I can do to support his efforts.

This release, 2.1, can be considered a bug fix release. There isn't any major new content. In fact, I dropped the [JSCS](http://jscs.info/) section as it was announced that the project has reached end of life. The core team will join [ESLint](http://eslint.org/) efforts.

## Overview of the Situation

Even though getting this release out there took longer than I would have liked, I feel we are on the right track. I've managed to take care of certain necessary things, such as setting up a proper business entity (waiting for the government now). I even got a nomination for [an award](http://www.bluearrowawards.com/), but I have no high hopes for that of course.

Splitting the book will allow me to provide more focused content. I got into touch with my old editor and we'll be working especially on the webpack book to push it further. During the week I actually discovered [a neater way to structure webpack configuration](https://github.com/survivejs-demos/webpack-demo/tree/dev).

The solution relies on [webpack-merge](https://www.npmjs.com/package/webpack-merge), a tool I developed earlier for the purposes of this book. The approach allows you to split your configuration into easily reusable functions. The next version of the webpack book will cover it in detail.

I have agreed to a training day at May. This will give me a good excuse to research further. Particularly Redux will receive attention. During the past few weeks I've spent a lot of time with it so I know the pros/cons and related patterns quite well now. This will pay off in the coming weeks.

I hope to complete the split in the next release. That will make room for more content and make it easier to maintain it.

## Book Improvements - `2.1.0`

In total 112 commits went to book since the last release. Given PDF generation was sketchy at best and didn't even work on certain systems, I ended up scrapping it for now. [GitBook](https://www.gitbook.com/) doesn't support the custom syntax the book relies on so the output was not optimal.

It might be feasible to fix the situation in the future by rendering the site to PDF through something like [html-pdf](https://www.npmjs.com/package/html-pdf). This is an approach I used successfully in my React based [invoice generator](https://github.com/bebraw/generate-invoice) and it worked beautifully there.

Even though I did my best to avoid mistakes with [the Amazon version](http://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X), a few smaller issues managed to find their way into the book. Fortunately nothing major, though. I've listed these issues at [the Amazon errata](https://github.com/survivejs/webpack_react/blob/dev/amazon_errata.md). The errors listed there have been fixed in the paper version.

You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0...v2.1.0). Especially the "Files changed" tab is highly useful.

### Webpack Compared

* Mentioned [Fly](https://github.com/bucaran/fly) as an alternative to Gulp. It relies on ES6 generators.

### Developing with Webpack

* Recommended the usage of an LTS (Long-Term Support) version of Node. Please don't use Node 0.10 or 0.12 anymore. That's just asking for trouble. :)
* Mentioned `--save-exact` and `-E` shortcut for those who want to install exact versions of their dependencies.
* Simplified *app/index.js* further. Literally just `document.body.appendChild(component());` after the import does the trick.
* Mentioned where to look for the generated bundle.
* Explained that *npm start* and *npm test* are special cases. Normally you run scripts through *npm run*.
* Mentioned that polling is needed for Vagrant and Ubuntu too.
* Simplified polling configuration. Now it's on JavaScript side.

### Webpack and React

* Linked to the correct page related to [Babel's experimental features](https://babeljs.io/docs/plugins/#stage-x-experimental-presets-).
* Mentioned that it's a good idea to disable IDE feature known as **safe save** if you are using HMR. It can cause problems.
* Clarified the section about React component styles.

### Implementing a Basic Note Application

* Clarified the spread operator idea so it's clear that it should still go through the `setState` method.
* Added examples of how to write function based components. This helps to understand the syntax and how it works better.
* Explained refs in greater detail.
* Added `e.stopPropagation();` to `deleteNote` in order to avoid bubbling to edit.

### From Notes to Kanban

* Clarified the `waitFor` section.
* Expanded on the `onEdit` and `onValueClick` idea to see how they work.
* Expanded on the idea of *controlled* and *uncontrolled* components. There's a section for this now.
* Added a section about cleaning up notes. While writing this section I realized this bug could be turned into a feature - a recycle bin for notes.

### Implementing Drag and Drop

* Dropped `isDragging` check. The current version of React DnD doesn't need it anymore.

### Building Kanban

* Added missing `inject: false` to `HtmlWebpackPlugin` configuration to make it work with the template.

### Testing React

* Explained `resolve.alias` idea in greater detail.

### Typing with React

* Mentioned [TSLint](https://palantir.github.io/tslint/).
* Mentioned [babel-plugin-flow-react-proptypes](https://www.npmjs.com/package/babel-plugin-flow-react-proptypes).
* Mentioned [flow-status-webpack-plugin](https://www.npmjs.com/package/flow-status-webpack-plugin).

### Linting in Webpack

* Mentioned that [JSCS decided to merge its efforts with ESLint](http://eslint.org/blog/2016/04/welcoming-jscs-to-eslint). As a result I dropped the JSCS section.
* Mentioned that it is possible to use ESLint autofixing through the Webpack plugin.
* Showed how to enable caching for ESLint to speed it up.
* Mentioned how to make ESLint respect *.gitignore*.
* Showed how to use vanilla ES6 with ESLint.
* Mentioned that ESLint supports other formats than JSON for configuration.

### Authoring Packages

* Mentioned that `postinstall` scripts can be [potentially dangerous](http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability).
* Mentioned [bundledDependencies](https://docs.npmjs.com/files/package.json#bundleddependencies) for those that are cautious.
* Mentioned [npm-check](https://www.npmjs.com/package/npm-check) for updating dependencies.

### Styling React

* Added PostCSS image and linked to [PostCSS site](http://postcss.org/).
* Cleaned up CSS Modules example.

### Language Features

* Mentioned it is possible to omit `()` with simple fat arrow functions. I.e., `const square = a => a * a;` is valid.
* Mentioned [analyze-es6-modules](https://www.npmjs.com/package/analyze-es6-modules) given ES6 module format is statically analyzable and enables these type of tools to provide you more information about your source.
* Mentioned spread operator gotchas (shallow by default).

## What Next?

Even though I have managed to tackle some of my goals, there is still work left. The split took some time, and will take still, but I believe it was a good move. Upon completion it will make room for more development.

I still have improvements planned. I've listed these based on priority:

* Complete the book split. I'll drop the webpack bits from this book and provide you a boilerplate instead. This means the readers get faster to the React bits. This decreases the weight of the book somewhat and makes room for more goodies and growth.
* Port book content to Redux. I have prepared both [vanilla and Immutable.js versions of Kanban](https://github.com/survivejs-demos/redux-demo) to prepare for this.
* Write **async** appendix. This would show how to deal with asynchronous concerns through Alt. It's a common problem and worth covering.

## Expanding Business

Currently I'm in authoring/consulting/training mode. Even though consulting and training take time out of authoring, they feed back in terms of experience. I'm particularly excited about the upcoming training case. It will force me to simplify and focus.

Possible service model is possible still. If you would be interested in becoming a supporter and gaining early access to content, and even one-on-one time with me, [sign up to the supporter mailing list](http://eepurl.com/bQAeuH). Signing up doesn't bind you to anything and it's more of a signal for me to do something about it.

## Conclusion

I hope you enjoy this release. Thanks for support. That's what makes this worth doing.

Remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). The stable version of the book is available at the `master` branch.

You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It's good for me to know where you struggle so I can tweak the book.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react) or [Amazon](amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X) (paper version). Every little bit counts and allows me to keep it up.
