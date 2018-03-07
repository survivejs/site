---
title: 'SurviveJS - Webpack and React - v1.7'
date: 2015-08-16
headerImage: 'assets/img/pineapple.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

I skipped doing a public post for `v1.6` as I was too tired (berry season is taxing). Now I'm going to give you release notes for both `v1.6` and `v1.7` at once. I have also some news of the future plans. So stay tuned.

## Development Model Changes

I've moved to a staged development model. Now I maintain `master` and `dev` branches. `master` contains the current stable release. All development happens at `dev`. This way the code examples stay in sync with the book and the site. Less frustration and a better book for everyone. If you have PRs in mind, please make them against `dev`.

## Book Improvements - `v1.6`

In total 63 commits went to `v1.6`.

* Some typo fixes were made. A lot more follow in `v1.7`.
* `webpack-dev-server` configuration was pushed to `webpack.config.js`
* Noted that `webpack.config.babel.js` works. I've expanded on this at `v1.7`
* A lot of effort went into making *Implementing a Basic Note Application* easier to approach
* Dropped custom `findIndex`. In `v1.7` I went further and now it uses [array.prototype.findindex](https://www.npmjs.com/package/array.prototype.findindex)
* Added imagery to *React and Flux*
* Mentioned that `-S` and `-D` map to `npm i --save` and `npm i --save-dev`. This is just for you keyboard jockeys out there.
* Added the book subtitle to the cover. It looked strange without.
* Formatted all `npm i` parts so that they stand out better. The web version uses special formatting reminiscent of a real terminal.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.5.0...v1.6.0).

## Book Improvements - `v1.7`

108 commits went to `v1.7`. So based on numbers it was busier. Especially the early part of the week was good. After that it was all berries and mushrooms for me. It's the season after all and Winter is coming.

* A massive amount of typo and grammar fixes were made in this iteration. I tried my luck with Fiverr and it paid off seriously. Thank you Ava and Nancy! There might be some left still but we squashed quite a few. I also ran the content through [Hemingway](http://www.hemingwayapp.com/) to simplify sentence structures where needed.
* I managed to make *webpack.config.js* `TARGET` selection cross-platform. Now the configuration relies on `process.env.npm_lifecycle_event`. npm sets that during execution and we can rely on that. Thanks Hector for pointing me to the right direction!
* Clarified point about `eval`. As it happens Webpack provides multiple [devtool](https://webpack.js.org/configuration/devtool/#devtool) options. I suggest `eval-source-map` for development in small projects. You can try faster, lower quality options with bigger projects.
* Noted that it's possible to exit Node.js repl using `CTRL-D` instead of `CTRL-C`. Thanks to Ahmed for pointing this out!
* Improved Kanban project naming (consistent with CRUD) overall. Now it should read a little better. I also pushed reference related logic to a store method. It's nicer but still a lot of code considering what it actually does. As long as we operate through indices like this, there's no neat way around it.
* Showed how to set up isomorphic rendering for the Kanban application. It's not that useful in this case. I do hope you get the idea as it's powerful.
* Dropped deployment chapter. As I managed to explain isomorphic rendering earlier in the previous point, the deployment chapter became redundant. Good riddance.
* Added JSX suffixes to imports. As the project gets run through Node.js context when rendering in an isomorphic way, I had to add JSX suffixes. Perhaps someone knows a better solution but this made sense at the time.
* Pushed id creation inside stores. The reasoning for this is that if you are dealing with a real back-end, that's the way it goes. You should *never* have to think about ids at view level so it's better to do it right. Besides now gluing a real back-end with the project is a notch easier.
* Reworked the early part of the Flux chapter with my editor (thanks Jesús!). The chapter can likely still be improved but it's better now. It's a little long to my tastes but on the other hand it covers a lot of ground.
* Ended up using term *Webpack* everywhere. I know *webpack* is the correct name but I went for consistency here. So consider that "Webpack" == "webpack".

I wanted to get some screenshots done for this iteration too and work on a Leanpub exclusive chapter. This work will go to the next iteration. The good news are that now there's far less to worry about so I'm more likely to get these tasks done.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.6.0...v1.7.0).

## What Next?

> Fail to plan, plan to fail.

It seems to me the book is on a good track and we're making steady progress. New people are finding the book and even buying it. And the feedback has been good. I know the book isn't everyone's piece of cake. But I'm okay with that. By trying to please everyone you please none.

### Going Amazon

The next major goal for me is to get the book to Amazon, iBooks and such through [Lulu](https://www.lulu.com/). This might also provide us a paper version if there's demand. Enhanced distribution could go a long way in improving sales. After all I'll need to make this work financially in order to be able to write more.

For this to happen we'll need to lock the scope of the book. This is due to ISBN requirements. You can make small changes to a published book but nowhere on the level what we're doing right now.

### But There's More Technology to Cover

I know interesting new technology, such as [redux](http://redux.js.org/), keeps on coming out all the time. The problem is that if I keep on changing the newest cool thing I will never get a stable version out. It is far better idea to lock the scope and cover the interesting things through the blog.

This gives me a more flexible way to try out various ideas before committing them to a book. It also helps to give the current work some visibility it sorely needs.

### The Current Plan

As a result the current plan is as follows:

* Continue iterating on the current content based on feedback. No major changes to the chapter structure anymore, just minor tweaks to make the book more approachable.
* Write chapters that are unique for the commercial edition. This improves the value proposition and actually might encourage more people to buy the book. After all, that enables more content! I expect at least three chapters.
* Expand this blog with supporting topics. I have a nice series of posts planned up and I welcome ideas. I want more people to discover the book and this could go a long way towards that.
* Figure out how Hacker News works. I did try *Show HN* but received zero response. Perhaps I'll have better luck next time.

## Conclusion

So towards the Amazon release I go. It might be interesting to try running some sort of campaign to eventually open the unique content. For now I will need to let the commercial version to have some leverage over the community edition. Perhaps there's a way to align these two goals (community content, making a living) but as for now this might be the way.

I will be able to tell a lot more after a wider scale release. Given I'm a first time author I'm still learning the ropes here and no doubt making a lot of mistakes in the process. I have other book ideas but I'll have to get this first one out before I can even think about those. Perhaps within a year or so I can do an expanded second edition. Any sooner and I'm pissing off my first edition readers. :)

I hope you enjoy this release. As usual [feedback](https://github.com/survivejs/webpack_react/issues) and pull requests are welcome. It's interesting to write a book this way. That's for sure.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
