---
title: 'SurviveJS - Webpack and React - v1.5'
date: 2015-07-31
headerImage: 'assets/img/mushrooms.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

Compared to the previous tagged release (v1.1.0, 10th of July) this new one (v1.5.0) is a monster. 274 commits went into it and nine contributors took part. Of course it was up to me to do most of the work. That said it is always amazing to get external contributions. It always makes my day when I get one.

I have to give my biggest thanks to [Jesús Rodríguez Rodríguez](https://github.com/Foxandxss), my new official editor! It's not understatement to say that he motivated most of the changes you see in the current revision.

## Book Improvements

The book has been improved in various important ways:

* The early part of the book gets faster to the interesting parts (i.e. React). I removed some of the fluff (Flow, redundant `index.html` etc.) and eliminated the old `Getting Started` chapter. Now you jump straight to [developing with webpack](/webpack_react/developing_with_webpack).
* There's a new chapter about [building the Kanban project](/webpack_react/building_kanban). I focus on production related concerns there solely and discuss various related techniques. I believe some of those might be useful even if you don't care about the project itself.
* The architecture of the Kanban application has been revamped to be singleton based. This is more faithful to the way [Flux architecture](https://facebook.github.io/flux/docs/overview.html) has been designed to use. There are some parts of code that aren't particularly beautiful and there's likely some room for improvement.
* More insightful explanations. Instead of dropping some code and waiting you to decipher it I've moved to **explain**, **show code**, **what happened** kind of model that should be hopefully easier to follow.

In addition there are hundreds of other fixes. But you know me, I don't like to ramble too much. You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.1.0...v1.5.0).

## Known Issues

The portions dealing with Alt don't support hot loading yet. I will have to craft a pull request to fix [a hot loading issue](https://github.com/goatslacker/alt/issues/408). Doing that should improve your experience a bit. So be prepared to refresh the old fashioned way for now.

## What Next?

I will prioritize my work depending on the feedback this release receives. I know some of the current content can be pushed further. For instance deployment chapter could use some TLC. On the other hand it would be a good idea to start serving my paying clients (i.e. Leanpub readers) better.

Given I want to provide the guys that support me a little extra something I've thought of making [bonus chapters](https://github.com/survivejs/webpack_react/issues?q=is%3Aopen+is%3Aissue+label%3A%22bonus+chapter%22) available on early access through Leanpub. The chapters would become available to public as certain conditions are met.

In order to encourage you to encourage me I could tie it to amount of readers. There are two hundred readers right now. I could release a new chapter as another two hundred are gained for instance until I run out of chapters to write. I believe this would be a fair way to deal with it.

## Conclusion

I hope you enjoy this release. There's a lot of content to go through. As usual [feedback](https://github.com/survivejs/webpack_react/issues) and pull requests are welcome. I hope you enjoy the improved version of the book.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
