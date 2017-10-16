---
title: 'SurviveJS - Webpack and React - v1.8.0'
date: 2015-09-13
headerImage: 'assets/img/yellow.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

We have once more new chapters in the book. I'm going to try a new model with these. For now the full versions of the testing and typing chapters will be available through [Leanpub](https://leanpub.com/survivejs_webpack_react) only. The community version will contain TLDR;s for these so you still get the core points. Of course the project source is public for examination.

By doing this I want to give my supporters a small edge. As a result they'll get the access to the new material first. If it looks like this works, I don't mind developing more content and opening old as new chapters get developed. Consider it as a poor man's Kickstarter. We can even agree on goals if that works better.

Pricing-wise I've bumped the minimum price of the book to $20 as I believe that reflects its current value. I may do another bump later on as I understand how the situation develops.

## Book Improvements - `v1.8.0`

In total 137 commits went to `v1.8.0`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.7.5...v1.8.0).

### General Fixes

* Grammar was improved overall. Big thanks Steve!
* *app/main.js[x]* was renamed as *app/index.js[x]*. This simplifies Webpack entry configuration as you can point directly to `app`. This resolves to the index file within the directory and saves some hassle.

### Webpack and React

* Mentioned [Visual Studio Code](https://code.visualstudio.com/). This free editor has grown fast. It gained JSX support in `v0.8.0`.
* Fixed basic JSX example. A React component should return a single node.
* Linked to a [blog post about JSX shock](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98). It goes more detail about the experience.
* Updated Webpack example to use `eval-source-map` instead of `eval`. This is consistent with the earlier chapter. In our case we can avoid `eval`. Even though it's faster we can afford to go for quality.
* Explained `resolve.extensions` in detail. Simply put this Webpack property allows us to control the way it matches against files (is it ok to skip extension or not).
* Moved Babel to use `.babelrc`. This will become even more important in the future as [react-transform](https://github.com/gaearon/babel-plugin-react-transform) Babel plugin will replace the current hot loader.
* Documented how to control `.babelrc` based on env easily. This is important when you want to perform branching based on your build target.
* Mentioned about [React Developer Tools](https://github.com/facebook/react-devtools). They give you a better idea of what's going on at your code. Available for both Chrome and Firefox.

### Implementing a Basic Note Application

* Noted that hot loading won't pick up changes made to a `constructor`. It simply replaces method contents so these get missed. It would be nice to find a good alternative to those `bind` statements that is performant and works with hot loading.
* Explained what `super()` actually does. Simply put it invokes the same method of the parent class.
* Mentioned that using a *context* might be a viable option for dealing with `onEdit`. It is currently and undocumented feature. Dmitry Kudryavtsev goes into a good detail at his article [The land of undocumented react.js: The Context](https://medium.com/@skwee357/the-land-of-undocumented-react-js-the-context-99b3f931ff73). React 0.14 will introduce a stable context API and it's worth discussing then.
* Caught possible `alt.bootstrap` related exception. It can fail if it receives data it cannot interpret. Better to deal with that than to blow up.
* Linked to Sebastian Markbåge's expanded explanation of [JSX spread attributes](https://gist.github.com/sebmarkbage/07bbe37bc42b6d4aef81).
* Made `get(ids)` more tolerant against missing data. Now it doesn't return possible empty (`undefined` or such) results. Of course getting that sort of data at `localStorage` isn't a good idea in the first place but sometimes it's a good idea to be a little defensive.

### Implementing Drag and Drop

* Pushed `ItemTypes` below *app/constants/itemTypes.js*. Given they are constants that feels like the right place for those. I noticed this while implementing the [Redux version of the Kanban](https://github.com/survivejs/redux-demo).
* Expanded explanations. I tend to go somewhat terse on my first pass of content. Now I've expanded on possibly clear parts so it's easier to see what's going on and why.
* Passed `id` instead of `data` to `Note`. This change simplified `move` logic somewhat and it goes according to [the law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter).

### Building Kanban

* Dropped redundant references to `TARGET`. Now we can avoid setting `TARGET` at *package.json* as we deduce the target based on npm lifecycle information.
* Noted that peeking at the warnings Uglify.js, the minifier, provides can be beneficial.
* Expanded on splitting `app` and `vendor` bundles. Now it's easier to see what's going on and, most importantly, why.
* Noted `ExtractTextPlugin` related gotchas. It won't work through `loader` form. Instead you have to use `loaders: [ExtractTextPlugin.extract('style', 'css!autoprefixer')]` or such. If you need to use multiple loaders with it, note the syntax! You should use the `!` form in the second parameter to add more if needed.
* Noted that [chunkhash seems to be broken](https://github.com/webpack/webpack/issues/1315) at the moment. For now I would suggest generating hashes of your own but I understand it's a heavy solution. Hopefully this one gets fixed soon.

### Testing React

This is a new chapter! The chapter can likely use some work still. I'll probably cover techniques such as mocking in the future but the basic setup inspired by Cesar Andreu's [web-app](https://github.com/cesarandreu/web-app) is there. We also get some tests done so that's good.

### Typing with React

This is another new chapter. In the chapter I show how to annotate our project using [propTypes](https://facebook.github.io/react/docs/reusable-components.html). This is one of those steps you should take to solidify your project.

There is a basic introduction to [Flow](http://flowtype.org/). Unfortunately the current version is missing some functionality our project would need. I have to get back to this later as the tool develops further.

[TypeScript](http://www.typescriptlang.org/) will receive JSX support in 1.6. That's another tool I want to cover once it gets out.

### Linting in Webpack

* Rewrote introduction to be easier to approach.
* Mentioned about [ESLint autofixing](https://eslint.org/blog/2015/09/eslint-v1.4.0-released). This is a feature that allows you to fix certain linting errors automatically. As it's new, not a lot of rules are supported yet.
* Explained ESLint env configuration detail. That's important to know especially when you are dealing with multiple environments and testing tools.
* Added [EditorConfig](http://editorconfig.org/). This tool allows you to maintain project-wide coding style. There's a good level of editor/IDE support. It's a valuable tool in a team environment.

### Authoring Libraries

* Expanded on `npm adduser` and mentioned `npm login` alias to clear up confusion.

### Styling React

* Mentioned [Stylus](https://learnboost.github.io/stylus/).
* Added "resources" sidebar to the site. I'll be setting similar ones for other chapters. I'll likely push this to a separate repository so it's easier to contribute.

## What Next?

Given there's a [release candidate of React 0.14](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html) out there, it likely doesn't take that long for a final version to appear. This will lead to some important changes in the book. Most importantly it will allow me to default to function syntax for components. In addition I can dig into features such as context.

Once I'm convinced that [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) is stable enough and that it works well with the project, I'll change my recommendation to it. It's already worth a look.

I'll also develop the content based on your feedback. The site may receive some small updates. I would love to do something about the highlighting of the code examples and improve the way the are laid out (show added/removed lines better).

I'll write at least one more chapter for my Leanpub readers. The way the situation develops determines the rest.

## Conclusion

I hope you enjoy this release. As usual [feedback](https://github.com/survivejs/webpack_react/issues) and pull requests are welcome.

I'm still a little conflicted about Amazon and dead tree versions. One option is that I'll do a snapshot (`v2.0.0`) that will be published. Leanpub version would then continue from there. Amazon buyers would obviously receive a heavy discount on Leanpub. It's more about reaching more people with the work than anything else.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
