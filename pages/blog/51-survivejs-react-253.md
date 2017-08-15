---
title: 'SurviveJS - React - v2.5.3'
date: 2016-06-01
headerImage: 'assets/img/serene.jpg'
keywords: ['release-notes', 'react']
---

It has been a while since [the previous release](./survivejs210) and a lot has happened. In addition to ramping up my consulting and [training](https://survivejs.github.io/training) business, I managed to publish a [book on webpack](/webpack/preface). That was the first part of my planned split. This is the second.

From now on we'll continue with two books - "SurviveJS - Webpack" and "SurviveJS - React". I am a lot more comfortable with this setup as now it's easier to focus and we can cover more advanced topics. In short, the effort is more manageable now.

T> To reward my current Leanpub readers, you will receive the Leanpub version of "SurviveJS - Webpack" for free. You will receive an email about that.

## Overview of the Situation

This release, 2.5, is easily the biggest I've done in a while. Just extracting the webpack portions wasn't enough. I felt the book needed polish. As a result I ended up rewriting a significant portion of it. It took time but I'm happy with the outcome.

The book consists of smaller, more focused chapters now. This brings down the difficulty while allowing me to cover different dimensions of React in greater detail. The rework enables me to develop further content easier than the old one. You can see this also in the application architecture.

In short, I'm confident about the direction of the effort. Thanks to the effort I'll be able to pick up the pace again and add more advanced information to the book.

## Book Improvements - `2.5.3`

In total 191 commits went to book since the last release. Given the book has changed so much, it would be easier to tell you what hasn't changed that what did, but I'll try my best.

You can find the important changes below. See GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v2.1.0...v2.5.1). Especially the "Files changed" tab is highly useful although in this case it's probably going to be a little sluggish.

T> If you were following an old version through the web, remember that you can find the versions tagged at [GitHub](https://github.com/survivejs/react).

## Getting Started

This part replaces the earlier *Setting Up Webpack* chapter. Rather than stepping you through how to develop your own webpack configuration, you will start from a [small boilerplate](https://github.com/survivejs/react-boilerplate) instead. [The webpack book](..webpack/preface) covers the techniques used there in detail.

### Introduction to React

I felt the previous version didn't spend enough time on discussing React. This has been remedied now as I discuss the basic ideas of React in greater detail. Especially the Virtual DOM has received more attention. This chapter will likely grow further as I receive feedback on it.

### Setting Up the Project

The idea of this chapter is to show you how to get the boilerplate project up and running. It also describes the boilerplate and the custom language features used.

### Implementing a Note Application

This chapter existed in the previous version as well. This time, however, I have split it up into multiple smaller ones. All major steps belong to chapters of their own. This allows more detailed discussion where needed.

### Deleting `Notes`

Even though a short chapter, I felt deletion deserved a chapter of its own. It's a breather after the a heavier chapter if nothing else.

### Understanding React Components

Earlier the React component discussion was quite terse and scattered. I resolved the problem by gathering the material to a chapter of its own. This is more of a reference level chapter that you can check out if you have some component level related question in mind. I'll likely use it a lot myself for this purpose.

### Editing `Notes`

This is another tutorial level chapter that moves the implementation forward. As usual, there's material on component design. I pushed the entire `Editable` component here to simplify the later portions of the book.

### Styling the Notes Application

I pushed the Notes application styling related aspects to a chapter of its own. Also [classnames](https://www.npmjs.org/package/classnames) is discussed briefly now. It would be possible to expand this chapter to discuss **CSS Modules** in detail. I'm still on the edge about that, though.

## Implementing Kanban

This part existed in the earlier version. It is more focused, though, as the Notes application was pushed to the new part we just covered.

### React and Flux

I expanded the scope of this chapter a notch. It mentions solutions such as Redux and MobX and puts them into a perspective. I evolved the application architecture so that instead of using `AltContainer` directly, we push the state management related aspects behind a facade.

I achieved this by implementing a `Provider` and a `connect` higher order function pair based on [react-redux](https://www.npmjs.com/package/react-redux) API. It takes effort to implement the pair, but on the plus side now the Kanban has a looser dependency on Alt.

The point of this change was to enable the development of new content. I could imagine Redux and MobX specific chapters. It would be possible to achieve now without having to rewrite significant portions of the application. Even then the rewrite needed would be very instructive.

### Implementing Store and Actions

Given the previous chapter focused on theory and connecting a state management system with React, this one adds a missing concepts - store and actions.

### Implementing Persistency over `localStorage`

Persistency felt like a chapter of its own so I changed it that way. It might be possible to push this chapter further (offline usage?) but even the current version is quite fine. At least it is focused.

### Handling Data Dependencies

Earlier the difficult concept of data relations was within the *From Notes to Kanban* chapter. Now the idea is an entire chapter of its own as it felt like one of those ideas that deserves more emphasis.

### Editing Lanes

This chapter does the remainder of the implementation apart from drag and drop. It just uses the collection of components we have together to get it together.

### Drag and Drop

The drag and drop portion related more or less the same. The chapter is simpler now as certain logic is handled earlier. I was able to drop a couple of steps as a result. The chapter should flow a little better now.

## Advanced Techniques

This part gained a new chapter as I moved structuring ideas here. The part received a beauty pass as I went through the content to make it work with the new implementation of Kanban.

### Testing React*

This Leanpub exclusive chapter gained updated graphics. Thanks to the improved implementation, now the tests are a little simpler as well. There's some complexity involved given now the book defaults to stateless functional components, but overall the chapter feels better.

### Typing with React*

*Typing with React* received a beauty pass as well. Given Flow supports stateless functional components now, this was a fun one to improve.

TypeScript might deserve more attention in the future. Especially the upcoming 2.0 release looks promising!

### Styling React

Not a lot happened here. I removed webpack references but nothing drastic happened.

### Structuring React Projects

I felt structuring is a core topic so I pushed it here. The chapter should probably be pushed further. It could perhaps use more concrete examples.

## Appendices

Apart from that move the appendices didn't see a lot of action. There were minor tweaks but those are too small to mention.

## What Next?

Now that I have completed the split, it is easier to develop the content again. I will prioritize state management related work. Here is my task list based on priority:

* Add a new chapter or two on state management. Essentially we would port the application to Redux and MobX here and discuss different systems in detail. I feel Alt works adequately for the purposes of the book but having this sort of advanced discussion would improve it.
* Expand on asynchronous handling. The current edition improves on this but we can do better.
* Figure out what to do after these have been tackled. I have proposed chapters at [the issue tracker](https://github.com/survivejs/react/issues). Feel free to propose one or comment on the existing ones there. Maybe a routing chapter would be nice?

## Pricing Changes

Given the content has changed (two books!), I've implemented the following pricing changes:

* The [Amazon edition](https://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X) will be available for $19.99. Once I have paper versions of the new books out there, this book will go out of market.
* ["SurviveJS - Webpack" - Leanpub edition](https://leanpub.com/survivejs-webpack) goes to $15.99. Thanks early supporters!
* ["SurviveJS - React" - Leanpub edition](https://leanpub.com/survivejs-react) goes to $15.99. If you bought the original book, you will receive "SurviveJS - Webpack" for free.
* ["SurviveJS - Webpack" + "SurviveJS - React" bundle](https://leanpub.com/b/survivejs-webpack-react) - $27.99.

The idea is that as more content gets developed, the price will gradually go up. Also if splits like this happen, the modus operandi is the same. You will receive the split book as well. This is my way of saying thanks to those who support the effort monetarily.

T> If you have bought the paper version before June 2016, get in touch and I'll hook you up with the digital versions.

## Conclusion

I hope you enjoy this release. As usual, your support keeps this effort going on. Thanks!

Remember that you can find up to date code from [the book repository](https://github.com/survivejs/react). The stable version of the book is available at the `master` branch.

You can [contact me directly](mailto:info@survivejs.com) or through the GitHub [issue tracker](https://github.com/survivejs/react/issues). Also [Gitter](https://gitter.im/survivejs/react) will work. There are topic specific channels now so it's easier to handle.

You can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs-react) or an earlier version of the book at [Amazon](https://amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X) (paper version). Every little bit counts and allows me to keep it up.
