---
title: 'Redux - Reinventing Flux - Interview with Dan Abramov'
date: 2015-09-14
headerImage: 'assets/img/ducks.jpg'
keywords: ['interview', 'react', 'redux', 'state-management']
---

I remember seeing these strange `webpack.config.js` files in JavaScript projects for a long time. I didn’t give [Webpack](https://webpack.github.io/) a good look until the promise of hot loading with React drew me in. [Dan Abramov](https://twitter.com/dan_abramov)’s [React Hot Loader](https://github.com/gaearon/react-hot-loader) was life changing for me.

Besides React Hot Loader, Dan is behind well-known projects such as [React DnD](https://gaearon.github.io/react-dnd/) and [Redux](http://redux.js.org/). Redux in particular has begun to make waves across the community even though it’s a young project. Compared to earlier [Flux](https://facebook.github.io/flux/docs/overview.html) inspired implementations it is particularly small (~2k) yet powerful.

## How did you discover React? Can you provide a bit of background?

<p>
  ![Dan Abramov|100|100|author](assets/img/interviews/dan.jpg)

  I think it’s a typical story. In 2014, when I was working at [Stampsy](http://stampsy.com), we needed to pivot from an iPad app to a webapp in a matter of a few months. We only knew Backbone so we went with it, but as the app grew more dynamic and complicated, we knew we couldn’t use it for much longer.
</p>

However, we also decidedly did not adopt any opinionated data binding library because we wanted to maintain a simple mental model of what’s happening in the app. At some point in time, there was a widget with a dozen of different states that occurred several times on the page, and we knew we *had* to throw some data binding library into the mix.

A coworker of mine suggested React a few month before, but I shrugged at JSX and didn’t investigate. So he suggested it again, and I decided to go for it. The same evening, I got this widget working exactly as I wanted, and I was hooked. Over the course of the next nine months, we gradually rewrote the Backbone app into a React app. Then React Router came along, and we migrated fully. All the while adding new features.

## As I ran to you through React Hot Loader what motivated you to develop the project in the first place?

There were a couple of factors.

Firstly, it was watching our designer [Gadzhi](https://twitter.com/kkga_) struggle with tweaking components inside modal windows. (By the way, Gadzhi created [Spacegray](https://github.com/kkga/spacegray), which is still more popular than any of my projects!)

Every time he’d change some tiny piece of UI, he’d have to refresh, open that modal, find that widget, discover that something is wrong, and change it again, over and over. It was even more painful with widgets like autocomplete, or dynamic widgets that change their state too quickly.

Secondly, I read a book on Erlang when I was a teenager, and it said something that changed my life forever:

![Pure functions can be replaced while the application is running|400|400|center-image](assets/img/pure_functions.jpg)

Thirdly, I was in awe of Bret Victor’s videos.

At some point I was reading Webpack docs and it described something mysterious called [hot module replacement](/webpack/appendices/hmr/). I [asked about it](http://stackoverflow.com/q/24581873), and [Tobias answered](http://stackoverflow.com/a/24587740). I realized I could mix HMR with React, and this was the birth of React Hot Loader.

I don’t think React Hot Loader is important as a piece of tech—it’s really not—but I definitely see people’s expectations of web tooling capabilities raise, and I’m happy if my work helped this. [Elm](https://github.com/elm-lang/elm-reactor) and [ClojureScript](https://github.com/bhauman/lein-figwheel) community are doing exciting work in this field, and I’m happy that JavaScript community is now paying more attention to the functional programming and developer experience it enables.

## How would you describe Redux to someone who has never heard of it?

First of all, it’s tiny (about 2k). If you remove sanity checks that prevent common beginner mistakes, it’s 1K. I’m not saying this to brag, and I’m not obsessed with microlibraries. However, this should give you an idea about the scope of the project.

Although it is often used instead of Backbone, Flummox, or some other Flux-inspired library, the size of the API surface is comparable to the original [Flux](https://github.com/facebook/flux) package.

Why would you use it? Redux embraces immutability and [ties your hands to free your mind.](https://youtu.be/1uRC3hmKQnM?t=15m26s) If you developed a complex JavaScript application, you might have fallen into one of two traps:

* using mutable models in asynchronous code which is later impossible to trace, understand, modify, or refactor;
* using a framework that promised to solve this problem, and then spending hours debugging the guts of this framework and working around its limitations.

Redux is my attempt to answer the following question: what is the least opinionated API surface useful for predictably managing state of complex apps with a [great developer experience](https://github.com/gaearon/redux-devtools)? What hooks do we need to expose to create [an ecosystem](https://github.com/xgrommx/awesome-redux) around a 2K library?

There is nothing new in Redux: David Nolen has been talking about benefits of a single immutable state tree [for two years now](https://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs), and Evan Czaplicki has made an enormous effort to describe the [Elm architecture](https://github.com/evancz/elm-architecture-tutorial) from which Redux borrows its ideas.

## Why did you develop Redux?

I didn’t mean to create a Flux framework. When React Europe was first announced, I proposed a talk on “hot reloading and time travel” but to be honest I had no idea how to implement time travel. I thought about it for a while, and I knew there was prior art in [Elm](http://elm-lang.org), so I read [Elm Architecture](https://github.com/evancz/elm-architecture-tutorial), but forgot about it soon. I attempted to create a “Flux Hot Loader” but it was full of horrible hacks to work around all the side effects inside Flux Stores: registering a handler, managing subscriptions.

I wanted the logic of the Stores to be hot reloadable so I tried to move subscriptions and registering outside the Stores. I also realized I needed to guarantee the data to be immutable. I remembered how Pete Hunt and others described Flux Stores as `state, action => state`, and how Jing Chen suggested me to replay actions for hot reloading. So all of this was in my head, but I was still prototyping when I released Redux 0.1.0.

I had these “stateless Stores” (now we call them reducers) that take `state` and `action` and return the next `state`. This let me implement hot reloading for their logic. However, there was still a big missing piece: I had this “dispatcher” thing from Flux that would call those “stateless Stores”.

Then Andrew Clark [suggested](https://gist.github.com/acdlite/9f1b5883d132ad242323) we just combine reducer functions into a single reducer function. This would kill the need for dispatcher. Just like UI component tree has one component at the root, different reducer functions can be called from a single root reducer function. Later I realized that this is exactly [Elm architecture](https://github.com/evancz/elm-architecture-tutorial), and I just didn’t understand it at first.

This is how Redux came to be. I was trying to write some code for a fancy React Europe demo, but it turned out that people really liked the architecture, so I marketed it as a library, although there is really very little code there.

## What next?

I am happy to have moved Redux to [reactjs](http://github.com/reactjs) where we share ownership of quality React-related code. I’ve been doing things on my own for quite a while, and lately it’s been more stressful because of the attention my work is receiving, so I intend to [step back](http://250bpm.com/blog:50) from the active maintenance of Redux once I’m happy with it. (And I almost am.)

Andrew Clark is collaborating with [Ryan and Michael](https://reactjs-training.com/) on the [React Router integration](https://github.com/acdlite/redux-react-router)—people have been asking for it for a long time, so I’m full of joy this is finally happening.

I have released [a few new tools](https://github.com/gaearon/react-transform-boilerplate) that are going to obsolete React Hot Loader. I will write a post describing them in greater detail soon. I am also going to work on screencasts about Redux, as I promised in [my Patreon campaign](https://www.patreon.com/reactdx).

And then—who knows?—I might even take a day job!

## At the moment a lot of architecture related innovation seems to happen. What do you think of alternative approaches such as [MobX](https://mobxjs.github.io/mobx/) or [Cerebral](https://cerebraljs.com/)?

I am not the right person to ask, as I have not used them. I’m definitely in awe of the work Christian has been putting into Cerebral and the [developer experience behind it](http://www.youtube.com/watch?v=xCIv4-Q2dtA). Its concept of signals and expressing async flow declaratively is [also very interesting](https://github.com/reactjs/redux/issues/343).

My hope with Redux is that it’s extensible enough that great ideas and patterns find its way into it as userland extensions like [Redux middleware](https://redux.js.org/introduction/ecosystem#middleware). My other hope is that migrating *from* Redux to something better won’t be difficult because of its tiny API surface.

## What does the future look like for React? Can you see any particular trends?

Look no further than [Sebastian’s talk](https://www.youtube.com/watch?v=Zemce4Y1Y-A). We’re going to see more [universality](https://medium.com/@mjackson/universal-javascript-4761051b7ae9). We’re going to see both cross-platform, as well as platform-specific components for DOM, server, native, [console](https://github.com/gaearon/react-blessed-hot-motion), WebGL, you name it.

With the advent of [pure functions as components](http://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html), we’re also entering the era of a new kind of universality: components that work across libraries. If you don’t use imperative APIs, what’s the different between a React component function, Deku component function and a Cycle component function? Only the rendering backend and element factories. If you use JSX, you can literally replace the view framework, and pure function components will “just work” with the new engine.

## Who should I interview next?

[André Staltz](https://twitter.com/andrestaltz), creator of [Cycle](http://cycle.js.org/).

## Conclusion

Thanks for the interview Dan! It has been certainly amazing to see how much React has evolved within a year. And of course we can thank you for some of the innovation - hot loading and Redux in particular.

It was straight-forward to port the [Kanban example of the book to Redux](https://github.com/survivejs/redux-demo). There's a lot of familiar code. It has been just structured a little differently. It is easy to understand what's going on.

If Redux piqued your interest, check out [the official documentation](http://redux.js.org/) to get started. Even though the library is tiny, it comes with high quality documentation. See the following resources for more:

* [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
* [Tutorial: Handcrafting an Isomorphic Redux Application (With Love)](https://medium.com/@bananaoomarang/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4)
* [happypoulp/redux-tutorial](https://github.com/happypoulp/redux-tutorial)
