---
title: 'SurviveJS - Webpack and React - v1.7.5'
date: 2015-08-30
headerImage: 'assets/img/mushrooms2.jpg'
keywords: ['release-notes', 'webpack', 'react']
---

Onwards we go. `v1.7.5` can be characterized as a refinement release. I went through "React and Flux" and "From Notes to Kanban" with my editor (thanks Jesús!). As a result we should have something that's a notch better together. I took some decompression time during this iteration and negotiated a lot towards a better future I hope.

## Book Improvements - `v1.7.5`

In total 116 commits went to `v1.7.5`. To make it easier to follow what happened and where, I've split up the changes below.

You can see GitHub for [all changes](https://github.com/survivejs/webpack_react/compare/v1.7.0...v1.7.5).

### General Fixes

* I learned something curious about *a* and *an* (no, we don't have these things in Finnish). It is important to remember to take in count what the words **sound** like.
* Use nicer formatting for `npm i` bits. Now `--` shouldn't get mangled.

### Introduction

* The introduction of the book has been expanded somewhat. There's only one chance to make a first impression so might as well try to do a good one.

### Webpack Compared

* Added an expanded explanation for `make`.
* Added [JSPM](http://jspm.io/). You should watch [Glen Maddern's](https://www.youtube.com/watch?t=33&v=iukBMY4apvI) awesome demo about it. It wouldn't surprise me a lot if JSPM had a bright future.

### Developing with Webpack

* Highlighted the importance of a proper `.gitignore`. I've seen some people to neglect this so I felt it's good to cover. It's just one of those things that saves your nerves. :)
* Dropped `colors: true` setting from `devServer` configuration. Reading from source I learned that `webpack-dev-server` actually detects for terminal colors automatically. As a result this bit of configuration can be dropped.

### Implementing a Basic Note Application

* Pushed `notes` definition outside of the `App` component. This cleans up the implementation a little.
* Added screenshots to show what you should see after each visual step.
* Expanded the explanation of `super()`. Remember that it refers to the method of the parent class.
* Improved the visual outlook of the add button.
* Made sure note tasks get assigned `display: inline-block;` to force a minimum height to them even if there's no content at all. This way they can be edited even then.

### React and Flux

* Clarified *Gluing It All Together* section a lot.
* Pushed *Dispatching in Alt* to the end. I've settled for a convention where the main content should be about getting ahead with the application whereas these sort of good to know things have been pushed to the end.
* Dropped redundant `this.notes = this.notes || [];` check. This won't be needed so it can be safely dropped. The same goes for bootstrapped data in general. It just works.
* Clarified and expanded *What Are Decorators?* and added an example showing how to implement `@log` for logging how methods are called.
* Reworked *Using `AltContainer` Instead of a Decorator* for clarity.

### From Notes to Kanban

* Added screenshots to illustrate progress.
* Reworked *Modeling Lane* for clarity.
* Reworked *Making Lanes Responsible of Notes* for clarity.
* Push `addNote` and `deleteNote` `bind`s to `constructor` level. Logically `Lane` id remains the same during its lifecycle so this seemed like a safe change to make.
* Highlighted important code changes using bullet points.
* Added a section known as *On Namespacing Components*. This is a small technique you may find handy. It allows you to model cleaner component APIs so it's worth knowing.
* Added missing `get` to `NoteStore`. While at it I bummed a couple of lines of code from it. Now it's as compact as it can get.

### Implementing Drag and Drop

* Reworked introduction.
* Reworked *Preparing Notes to Be Sorted*.
* Pushed `ItemTypes` to `'../libs/item_types'` as it's not a component.

We will be doing more work on this chapter to make it clearer still.

### Building Kanban

* Added more context to the code examples to make them clearer.

### Authoring Libraries

* Made sure `preversion` hook `git commit` takes `--allow-empty` to allow empty distribution commits to be made.
* Dropped redundant version related tip as `preversion` hook does everything we need now.

### Styling React

* Expanded on CSS Modules and linked to [gajus/react-css-modules](https://github.com/gajus/react-css-modules) as that makes it more convenient to work with them in React.

## What Next?

I'll continue going through the content with my editor while listening to your feedback. I'm particularly interested in [highlighting updated lines](https://github.com/survivejs/webpack_react/issues/224) as that would make it easier to follow what lines of code changed during the tutorial. I believe resolving this could help to push the book quality a notch further.

Now that the content is getting solid this means I can spend more time on producing new content. I'll be focusing on typing next. Also some other plans have been put to motion but more on those later.

## Conclusion

I think this was yet another good step towards a quality release at Amazon. Thanks for everyone involved! You make it worthwhile. :)

I hope you enjoy this release. As usual [feedback](https://github.com/survivejs/webpack_react/issues) and pull requests are welcome.

Remember that you can support my work by [purchasing the book at Leanpub](https://leanpub.com/survivejs_webpack_react). Every little bit counts and allows me to keep it up.
