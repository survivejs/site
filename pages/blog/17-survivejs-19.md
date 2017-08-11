---
title: 'SurviveJS - Webpack and React - v1.9.0'
date: 2015-10-07
headerImage: 'assets/img/red.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

Compared to [1.8.0](./survivejs-18), `1.9.0` can be seen as a more conservative release. There are plenty of smaller fixes and even some new content too. I decided to fix the chapter structure to the current. I rather provide less but better content. This also helps to keep the cost of a paper version down.

## Towards `2.0.0`

Besides integrating changes (thanks Steve!) and ideas, I gave `2.0.0` some proper thought. With `2.0.0` I will finally try to get the book to Amazon while getting it printed through them. This means I'll need to get a proper ISBN for the book. Only smaller tweaks, such as grammar fixes, are allowed after this. That's a little problematic.

The way I see it, the smartest move would be to treat `2.0.0` as an Amazon snapshot while developing the book further at Leanpub (`2.1.0` and so on). Once `3.0.0` is reached, Amazon would get a new snapshot. I don't expect `3.0.0` to happen anytime soon, though, as that wouldn't be fair to the Amazon customers that bought `2.0.0`. Perhaps a yearly cycle would work. That would mean a minor release per month.

In order to keep it fair to potential Amazon clients, I'm willing to provide the Leanpub version for them using a heavily discounted upgrade cost. I'm a still fuzzy on the exact details but there has to be a neat transition path in place.

Getting the book printed is a huge step for me personally. It's great unknown but you don't get ahead unless you put in the effort. At the very least I will get something for my bookshelf if nothing else. The printing costs seem adequate given the current scope of the book. The print version will likely have to be black and white to keep the cost bearable but apart from that we should be good.

Ideally the book will continue to provide some level of income as that enables me to keep developing the content and technology around it.

## Book Improvements - `1.9.0`

In total 134 commits went to `1.9.0`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.8.0...v1.9.0).

### General Fixes

* Grammar was improved overall. Big thanks again Steve!
* Move from `<ul className='names'>` format to `<ul className="names">`. This is the format that official React documentation uses so it's better to use the same here as well.

### Introduction

* Linked to alternative implementations of Kanban. See [MobX](https://github.com/survivejs-demos/mobx-demo), [Redux](https://github.com/survivejs-demos/redux-demo), and [Cerebral/Baobab](https://github.com/survivejs-demos/cerebral-demo) demos.

### Webpack Compared

* Explained in more detail what Webpack actually does.

### Developing with Webpack

* Noted that *css-loader* requires some tweaking when using Node 0.10. See [the issue](https://github.com/webpack/css-loader/issues/144) for details.
* Dropped *node-libs-browser* from project dependencies. Webpack depends on it directly now.
* Explained why *html-webpack-plugin* is used.
* Pushed configuration paths to higher level. This way it's easier to tweak them to fit your personal projects.
* Mentioned [open-browser-webpack-plugin](https://www.npmjs.com/package/open-browser-webpack-plugin). There are small plugins like this that save time once you have set them up.

### Webpack and React

* Dropped *babel-core* as *babel-loader* depends on that directly.
* Replaced deprecated *react-hot-loader* with a [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) based solution. Even though it takes more configuration, it's more powerful. I recommend moving your projects to it if you are using *react-hot-loader*.

### Implementing a Basic Note Application

* Mentioned `debugger;` statement. I realized this is a feature not many people are aware of. It's good to have it mentioned as a tip.
* Mentioned that spread operator can be used to replace `concat`. I.e., instead of `this.state.notes.concat({id: uuid.v4(), task: 'New task'})` you could do `[...this.state.notes, [{id: uuid.v4(), task: 'New task'}]]`. You see this particularly in Redux examples so it's good to know.
* Explained why we have to retain the state at `App` level. We'll push that to a nicer place in the following chapter of course.
* Link to [feature detection](https://github.com/casesandberg/react-context/) example as that showcases well when to use a context.

### React and Flux

* Expanded on Flux explanation. Now we start from a unidirectional flow and show how that becomes a cycle in the architecture.
* Noted that `{notes}` is analogous to `{notes: notes}` and linked to [property shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) documentation. We are using this shorthand a lot so it's worth discussing it.
* Explained by I don't use `splice` although it would work here.
* Dropped matryoshka image. That was a poor analogy. Better to save the space for something else.

### From Notes to Kanban

* Passed Lane data through `lane` prop instead of object spreading. It is easier to understand what's going on in this solution.
* Explained why Object rest spread syntax is used when it's used.
* Explained why `waitFor` is used in a clearer manner.
* Fixed the ordering between `LaneActions.detachFromLane` and `NoteActions.delete`. It is a very good idea to detach a note from a lane before actually removing it from the system. Else you might end up trying to render notes that don't exist.
* Noted that it would be a very good idea to get rid of notes associated to a lane when a lane is removed.

### Implementing Drag and Drop

* Showed how to indicate where to move a note while you are moving. This improves user experience somewhat.

### Building Kanban

* Simplified JSX related Webpack configuration. This was possible because *react-hot-loader* was dropped.
* Moved cache invalidation hashes back to filenames. I'm going to take [Steve Souders](http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/)' word on it.
* Dropped the section about isomorphic rendering. That felt like a kludge and you would never do it like this in a real world configuration. As a result I removed it from the book. It is a far better idea for me to discuss the topic in a blog post of its own later on.
* Explained how to analyze your Webpack build statistics using [the online tool](http://webpack.github.io/analyse/).

### Testing React*

* Rewrote the introduction and added testing pyramid to get better into the topic.
* Updated configuration to work with the adjusted setup (no *react-hot-loader*).
* Linked to more associated tooling.

### Typing with React*

* Fixed `Lane` related `propTypes`. There were a couple of glitches to fix.

### Linting in Webpack

* Explained why `preLoaders` is used for linting. These get executed first. If a linter fails, you'll want to know about it before doing anything else.
* Explained how to enable specific ES6 features with ESLint. Of course as we go through *babel-eslint*, we can skip that but it's good to know.

### Styling React

* Explained how `style-loader` and `css-loader` work in tandem.

## What Next?

I originally intended to have this release to include React 0.14 related fixes. Rather than to keep you waiting, I decided to push those to `2.0.0`. An intermediate `1.9.5` might be possible but we'll see.

The book content is fixed and I'll perform tweaks only to the current content. I'm most interested in expanding the sections about Flow and TypeScript. Even though Flow has been developing fast, there are still some issues I have to wrestle with.

I also have to look into integrating [react-dnd-touch-backend](https://github.com/yahoo/react-dnd-touch-backend). I've done some preliminary work on that and hope to get included it in `2.0.0`.

I have a variety of blog content coming up. It's the perfect place for me to play with ideas in a more freeform manner. As I stated earlier, getting that Amazon release done is the biggest hurdle for me.

## Conclusion

I hope you enjoy this release. As usual [feedback](https://github.com/survivejs/webpack_react/issues) and pull requests are welcome.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
