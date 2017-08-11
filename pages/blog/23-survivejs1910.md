---
title: 'SurviveJS - Webpack and React - v1.9.10'
date: 2015-11-22
headerImage: 'assets/img/winter.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

It's time for another maintenance release with minor tweaks here and there. Probably the biggest change is the fancy new cover which I crafted based on the logo design of [Prospect One](http://prospectone.pl/). Cheers for that.

Probably the biggest news this time around is that the book is going to be a part of the [React Indie Bundle](http://www.reactindiebundle.com/). This will be a good chance to pick up some additional material while supporting indie authors and library/tool developers in their craft.

## Overview of the Situation

The situation with Babel 6 is still a little problematic. Besides waiting for [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) to catch up, there's [the additional issue of decorator support](http://phabricator.babeljs.io/T2645). I'll keep an eye on the progress and update the book once the time is right.

The biggest cosmetic change has to do with the introduction of property initializers. I simply got tired of having to use `bind` at constructor so I enabled the feature for the project. Even though experimental feature, it cleans up the examples somewhat so I believe it was worth it. The only gotcha is that hot loading doesn't support property initializers. But then, we had the same issue earlier. Now the code is just a little neater.

I put some serious effort to developing [Antwar](https://antwarjs.github.io/), my Webpack and React based site generator. Given I use it to develop this site, I felt it was a good chance to push it further. I managed to simplify it conceptually somewhat while improve performance a great deal. The work is on-going and I'm still dogfooding it. By the looks of it, the next release should be quite sweet. You can think of Antwar as "Webpack of static site generators".

## Book Improvements - `1.9.10`

In total 34 commits went to `1.9.10`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.9.5...v1.9.10).

### Introduction

* Explained Webpack's approach in detail.
* Explained React in detail.

### Developing with Webpack

* Pushed path configuration to a single `PATHS` structure. A little neater this way.
* Explained how to serve build results easily.
* Made *webpack-dev-server* use `stats: 'errors-only',` option. This relatively new option gives you far less output and helps to keep your terminal clean.

### Webpack and React

* Enabled [class properties](https://github.com/jeffmo/es-class-static-properties-and-fields) so we can use *property initializers* to clean up the code.

### Implementing a Basic Note Application

* Added warning mentioning that hot loading isn't fool proof. It's at its best if you can push your state to a state container such as [redux](http://redux.js.org/).
* Changed `key` to use `id` directly. The ids are unique so why not.
* Explained [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) in greater detail.

### React and Flux

* Added missing filenames.
* Simplified [AltContainer](http://alt.js.org/docs/components/altContainer/) explanation.

### From Notes to Kanban

* Clarified `waitFor` explanation.
* Hinted how to improve `Editable`. Now it encapsulates store itself. It would be interesting to extract the state and control it outside. This would be a good extension point for further development.

### Implementing Drag and Drop

* Tied drag and drop explanation to the application better.
* Fixed filenames.

### Building Kanban

* Expanded on `DefinePlugin` and how to use it. I managed to bum a couple of lines of code while at it given you can do just `'process.env.NODE_ENV'`. Small win but a win still.

### Testing React*

* Fixed *isparta-instrumenter-loader* to version 0.2.1 given that's the last version that works with Babel 5.

## What Next?

I will review the typing situation and go through the book myself from start to finish to see potential pain points. Perhaps I can do something to improve the code examples. There are a couple of ideas related to that. After this I have to cut `v2.0.0`. That's not an end of course but I feel it's an important milestone for this project.

## Conclusion

Even though small release, I want to thank you for feedback again. You helped me to fix a lot of issues I never would have caught on my own. You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
