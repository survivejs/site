---
title: 'Cycle.js - Reactive Framework for HCI - Interview with André Staltz'
date: 2015-09-21
headerImage: 'assets/img/cycle.jpg'
keywords: ['interview', 'functional programming', 'cyclejs']
---

If there's one thing that has been bubbling below for a couple of years now, it must be reactive programming. There have been solutions, such as [RxJS](https://github.com/Reactive-Extensions/RxJS) or [bacon.js](https://github.com/baconjs/bacon.js), but they haven't quite made it to the mainstream yet. I feel the time for that might be close, though.

[Cycle.js](http://cycle.js.org/) builds on top of RxJS and characterizes itself as a fully reactive JavaScript framework for Human-Computer Interaction. The question of course is what that means. André Staltz, the author of Cycle.js, is the best person to tell us.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/d992db0c8f42fcee52f96dc320f8aa04?s=200" alt="André Staltz" class='author' width='100' height='100' />
</span>

I am a UI developer at Futurice in Finland, with extensive knowledge in reactive programming. In my daily work I build web apps and Android applications, and on my free time I build open source libraries such as Cycle.js and contribute to ReactiveX.
</p>

A lot of people have read the [Introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) that I wrote in the summer of 2014, or have seen [RxMarbles](http://RxMarbles.com). That is how most people know me.

## How would you describe Cycle.js to someone who has never heard of it?

Cycle.js is a framework where your app is described as a simple function taking an event stream as input and outputting an event stream. These event streams might sound magical, but they are pretty simple. They are similar to arrays in reality, except they evolve over time instead of being static.

A simple Cycle.js app might take an array-like sequence of clicks and output an array-like sequence of DOM elements. So essentially coding is just describing how to dynamically transform a stream of user events into a stream of interface elements.

## Why did you develop Cycle.js?

I started developing Cycle.js after I took React for a spin and was disappointed with its API. I initially got really excited about the Virtual DOM concept in React, but could not understand why the API is built on OOP classes, state mutation, and imperative event handlers. There is a mismatch between React’s foundational ideas (reactive rendering and UI as pure function of state) and its implementation means (OOP, classes, imperative programming).

Cycle.js is a React alternative where implementation matches foundational ideas by applying functional and reactive programming to the extreme. The result is a tiny API surface where everything is either a function or an RxJS Observable.

## What next?

I have been slowly learning more about hard core functional programming, in other words Haskell. I have also been experimenting with Elm, a more approachable Haskell alternative for the Web.

I have many plans on what to develop next. My time will probably be mainly focused on improving Cycle.js: making it simpler to use, building integrations with React Native, integrating the upcoming rewritten RxJS by Netflix, etc. But I hope to join efforts with the pure functional programming community, be it [Haskell](https://www.haskell.org/), [Elm](http://elm-lang.org/), or [PureScript](http://www.purescript.org/).

Cycle.js has a lot of functional techniques but JavaScript is not a language that supports functional programming well enough. I miss the types, the immutability, and the clean syntax.

## What does the future look like for React and front-end in general? Can you see any particular trends?

Functional programming is definitely a trend in the front-end community. React is also at the center of this trend. I recall Sebastian Markbåge mentioned multiple times in his interview at React Europe that React is all about functional programming and how to introduce it in a clever way to people unfamiliar with this paradigm.

It seems there are still a lot of unsolved problems regarding APIs. In modern JavaScript, we use functional and reactive techniques, often mixed with some imperative programming. One on hand, imperative programming is familiar and simple for many of us, but functional and reactive have amazing benefits often hidden behind obscure terminology. Yet these two sides are often incompatible in the same application.

The community will need to actively experiment with alternatives, and we need to start considering transpiled functional languages (PureScript, Elm) more and more if our techniques are mainly functional anyway. I am not convinced we have stable best practices and good guiding principles in how to architect applications. Cycle.js is just one attempt at finding that guiding principle.

## Who should I interview next?

Evan Czaplicki. I was skeptic about Elm before meeting him, but after meeting him in person, I strongly believe his work with Elm is doing a great service to the whole community in bringing functional programming to a level most of us can digest. Evan has vision, is enthusiastic, reads Computer Science papers, and has a ton of great and wild ideas.

## Conclusion

Thanks a lot for the interview André! Perhaps a programming model as demonstrated by Cycle.js is the future. It always takes time for the community to warm up to the ideas. Interestingly there's a proof of concept that implements [thisless React](https://github.com/jas-chen/thisless-react), inspired by Cycle.js of course!

If this interview made you interested in Cycle.js, consider the following resources:

* [Getting started guide](http://cycle.js.org/getting-started.html). I set up a small [boilerplate](https://github.com/survivejs/cycle-starter) to help you get up to speed faster.
* [Time traveling with Cycle.js](https://github.com/cyclejs/cycle-time-travel)
* [A Dead-Simple Todo List with Cycle.js](https://gist.github.com/eschwartz/c8a98275e014b43ea6f0d3b8876d67ac) by Edan Schwartz
* [Online support through Gitter](https://gitter.im/cyclejs/cycle-core)
* [Awesome Cycle.js](https://github.com/vic/awesome-cyclejs) contains a lot more.
