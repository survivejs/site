---
title: 'SurviveJS - Webpack and React - v1.9.5'
date: 2015-11-03
headerImage: 'assets/img/types.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

You could say a lot has happened since [the previous release](./survivejs-19). [React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) came out mere hours after it. React DnD gained 0.14 compatibility in its 2.0 release. Node.js reached [5.0.0](https://nodejs.org/en/blog/release/v5.0.0/) (v4 is LTS, supported for four years). And a couple of days ago [Babel 6.0.0](https://babeljs.io/blog/2015/10/29/6.0.0) was released. In addition [Webpack 2](https://github.com/webpack/webpack/pull/861) is in sight.

The purpose of this release is to take some of these changes into account. Most importantly it introduces initial support for React 0.14. Babel hasn't been updated to the newest version yet given some tooling the book relies upon needs to catch up. The book doesn't take advantage of the function based component syntax because of the same reason. As the tooling matures, I'll perform the changes needed.

Due to a twist of fate I had a chance to represent [jsDelivr](http://www.jsdelivr.com/), a free super-fast CDN, at [OSCON EU](http://conferences.oreilly.com/oscon/open-source-eu-2015). It was a great trip and gave some new perspective on what I'm doing at the moment. Besides [visiting OSCON](http://www.nixtu.info/2015/10/thoughts-on-oscon-2015-amsterdam.html), I did a quick visit at [the Blender conference](http://www.nixtu.info/2015/10/thoughts-on-blender-conference-2015.html). It's fun to break the monotony every once in a while.

## Book Improvements - `1.9.5`

In total 79 commits went to `1.9.5`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.9.0...v1.9.5).

### Developing with Webpack

* Improved the flow of the chapter and made it more accessible hopefully.
* Added `host` and `port` configuration. Now you can set those through the env if you want.
* Mentioned *webpack-dev-server* alternatives.
* Made the code examples more complete so it's harder to miss vital parts.

### Webpack and React

* Fixed *babel-loader* to version 5. If version 6 is installed, the current setup will fail as major changes are needed.
* Expanded code examples so it's harder to miss vital parts.
* Changed the configuration to enable specific features instead of *stage 1*. This will change further with Babel 6. I believe it's preferable to enable specific features rather than stages as that documents the project better.
* Streamlined Babel discussion and removed duplication.
* Added React 0.14 specific bits (*react-dom* most importantly).

### Implementing a Basic Note Application

* Mentioned React import shortcut. Personally I favor explicit imports as then it's easier to grep around. It's good to be aware of alternatives, though.
* Linked to `debugger;` statement documentation and cleared it up. It matters where you place it.
* Explained `super` behavior in greater detail.
* Fixed `concat` shortcut related typo. It's better to use `[...this.state.notes, {id: uuid.v4(), task: 'New task'}]` there.
* Simplified *context* discussion now that there is [official documentation](https://facebook.github.io/react/docs/context.html) for it.

### React and Flux

* Explained `bind` and its behavior in greater detail.
* Pushed decorator parts to an appendix of its own. Now the chapter is more digestible and you can check out decorators later if you want.
* Changed Alt to use `alt-container` package. This makes it React 0.14 compatible.
* Simplified dispatching discussion to make PDF layout work better.

### From Notes to Kanban

* Discussed alternative ways to deal with data modeling at introduction.

### Implementing Drag and Drop

* Added `react-dnd-html5-backend` to the project. Now React DnD backends are available through separate packages.
* Explained what the decorator does given this is the first place where we hit them now.

### Building Kanban

* Added a little section about deploying to GitHub Pages. This is one of those small things that makes life simpler.

### Testing React*

* Upgraded to 0.14. Now React DnD uses a separate package for testing.
* Renamed `react-testutil-query` as `teaspoon`.

### Typing with React*

* Upgraded to 0.14.
* Fixed `Lane` propType definition.

### Authoring Libraries

* Rewrote portions to improve flow.
* Dropped *bower.json* mention.
* Updated *package.json* example to match [the boilerplate](https://survivejs.github.io/react-component-boilerplate/).
* Added a section about publishing packages. Now the workflow should be clearer.

### Styling React

* Rewrote portions to improve flow.
* Replaced [smart-css](https://github.com/hackhat/smart-css) with [JSS](https://github.com/jsstyles/jss) as JSS is more current and represents an interesting alternative.

## What Next?

Content-wise there isn't much to do. I want to get the typing chapter to a good shape. Fortunately [Flow](http://flowtype.org/) has been developing nicely. The same goes for [TypeScript](http://www.typescriptlang.org/).

[react-dnd-touch-backend](https://github.com/yahoo/react-dnd-touch-backend) related work is progressing. There are still some initial problems to resolve, though, so I'm not sure if this will make the cut.

Depending on how 0.14 related tooling develops, I may do an intermediate release before `v2.0.0`. In any case, there's light at the end of the tunnel.

## Conclusion

The most amazing part of this project has been the amount of feedback I've received. I've tried to put it to good use. You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
