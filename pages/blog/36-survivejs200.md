---
title: 'SurviveJS - Webpack and React - v2.0.0'
date: 2016-02-15
headerImage: 'assets/img/laptop.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

When I started this project roughly a year ago I had no idea how rewarding and demanding one it would be. Writing books is way harder than it sounds. Especially when you go through the self-publishing route, you have a lot to learn!

## Overview of the Situation

I believe this little journey has been worthwhile. And if it's up to me, it's a journey that will continue. Even though I am very happy to announce the final 2.0 version of the book, I see that as a milestone, not as an end. But what an important milestone it is.

The goal of this release was to produce something worth publishing in a paper format. The greatest advantage of a digital book is that you can push updates to it at will. This is something you lose with paperbacks. As a result greater amount of finesse is required.

I feel this conscious effort towards a paperback contributed to the book in a nice way. It's not the perfect book and I am absolutely certain it's not everyone's cup of coffee. All I can hope is that someone finds it valuable and worth paying for.

The 2.0 version of the book is now available through [Amazon](http://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X/)

I want to thank you, my readers, for providing an ample amount of feedback. It is one of those things that keeps me going. As a result, all of us learn in the process. I hope we can continue this fruitful collaboration for a long while.

## Book Improvements - `2.0.0`

In total 45 commits went to book since the last release candidate. A lot of the changes made were cosmetic (formatting related). You can find the important changes below.

See GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.0.0-rc4...v2.0.0). Especially the "Files changed" tab is highly useful.

### Introduction

* Put emphasis on the fact that there's a community in case you are struggling with something. No need to struggle alone.

### Webpack and React

* Added a tip about [HyperScript](https://github.com/dominictarr/hyperscript) and [hyperscript-helpers](https://www.npmjs.com/package/hyperscript-helpers).
* Mentioned [preact](https://developit.github.io/preact/) and [react-lite](https://github.com/Lucifier129/react-lite).

### Implementing a Basic Note Application

* Dropped duplicate tip related to `import`. This was covered in the previous chapter already.
* Explained React `state` in far greater detail. This was treated too lightly earlier.
* Explained how/why component hierarchy is improved.
* Explained React `props` in greater detail.
* Pushed input trimming logic to higher level. If you try to empty a field, it will simply cancel editing now and revert back to the original value.

### From Notes to Kanban

* Made `Editable` example diff based. It feels a bit easier to follow this way.

### Implementing Drag and Drop

* Linked better to the testing chapter.

### Building Kanban

* Mentioned about `[contenthash]` placeholder. Unfortunately it doesn't work as well as you might expect yet. See [Webpack issue #672](https://github.com/webpack/webpack/issues/672).

### Styling React

* Mentioned how to enable sourcemaps for CSS. You need to set Webpack's `output.publicPath` for this to work.

### Structuring React Projects

* Mentioned [gajus/create-index](https://github.com/gajus/create-index) as it can help a lot with the suggested structures.

## What Next?

You could say the past month or two have been pretty tough mentally. Dark winter and cold didn't entirely help. I've been picking up my exercise habits, though, so it's looking a little better now. That said, a break of day or two might be in order in the near future.

I still have improvements planned. I've listed these based on priority:

* Improve site outlook. Basically I'll redo the landing page of the site and do a few UX tweaks here and there. I have a nice plan, just need to focus on this for a full day to get it done.
* Write **async** appendix. This would show how to deal with asynchronous concerns through Alt. It's a common problem and worth covering.
* Develop [Redux](http://redux.js.org/) and [Immutable.js](https://facebook.github.io/immutable-js/) based version of the Kanban.
* Port book content to Redux. I still have to decide whether or not to introduce Immutable.js there as well. It would be a good fit, but I haven't made up my mind yet.

I know there are more topics that would be nice to cover. Based on what I've seen and heard, focusing on Redux would be a nice next step. But if you have other ideas, please let me know.

## Expanding Business

In order to keep the effort sustainable I've been forced to think about financials. Currently the primary problem is that I am relying on single sales. Even if you found my work valuable, I'm sure you wouldn't want to buy the same book many times. I wouldn't for sure.

As a result I've been thinking about an alternative model that would support the current setup. I would love to build an "inner circle" of supporters. You would gain access to a private Slack at least and gain early access to new content. You would literally help me guide the effort. You would get all this against a monthly fee (say $20) and you could opt-out any time you want.

If you want to participate in a supporter scheme like this, [sign up to the supporter mailing list](https://buttondown.email/SurviveJS). Signing up doesn't bind you to anything. This is more of an experiment to see if there are people interested. Provided there are enough, it will make sense to go ahead with the scheme and build a real business around this.

## Conclusion

Thank you for being a part of this project. I would have given up ages ago if it wasn't for the community. I hope you enjoy this milestone release!

Remember that you can find up to date code from [the book repository](https://github.com/survivejs/webpack_react). The stable version of the book is available at the `master` branch.

You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/webpack_react/issues). Also [Gitter](https://gitter.im/survivejs/webpack_react) will work. It's good for me to know where you struggle so I can tweak the book.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react) or [CreateSpace](https://www.createspace.com/6052981) (paper version). Every little bit counts and allows me to keep it up.
