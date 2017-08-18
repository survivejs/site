---
title: 'Most.js - Monadic streams for reactive programming - Interview with Brian Cavalier'
date: 2017-06-26
headerImage: 'assets/img/cradle.jpg'
keywords: ['interview', 'functional programming']
---

If there's one trend that has been nice to notice, it's the rise of reactive programming. You can see this in technologies like [RxJS](http://reactivex.io/rxjs/) and [cycle.js](https://cycle.js.org/).

To learn more about the topic, I'm interviewing [Brian Cavalier](https://twitter.com/briancavalier), one of the authors of [Most.js](https://github.com/cujojs/most).

## Can you tell a bit about yourself?

<p>
  ![Brian Cavalier|100|100|author](assets/img/interviews/brian.jpg)

I'm a software engineer at Yelp in Pittsburgh, PA, where I work on Node-based web services and distributed systems. I had done all kinds of stuff before I started writing JavaScript: Basic, Assembly, C, C++, Ruby, ML, and way more Java than I want to admit. Recently, I've done a decent amount of Haskell, and have been actively digging into Purescript, Rust, and Idris. I love learning about how to solve problems in different ways.
</p>

In 2007, I was working for a Pittsburgh startup as a Java server-side engineer. They wanted to create an ambitious web UI, and I ended up diving into the role of front-end JavaScript developer. A few years later, John Hann (unscriptable) and I created cujojs, and I became hooked on doing open source work.

## How would you describe *Most.js* to someone who has never heard of it?

Most.js is a library for reactive programming. It helps you combine streams of events, like DOM Events, to create highly interactive applications. Asynchronous programming is hard because trying to reason about when things happen and in what order is hard. Most.js makes this easier by giving you a declarative DSL for explicitly describing how asynchronous events relate to each other.

For example, if your goal is to log all the `mousemove` events until the user clicks the mouse, you can declare that's what you want:

```javascript
import { mousemove, click } from `@most/dom-event`

mousemove(document)
 .until(click(document))
 .observe(e => console.log(e))
```

The ability to describe *what* the result should be, rather than having to try to detail all the steps of *how* to achieve it, is a central idea of Most.js's declarative functional API.

## How does *Most.js* work?

The primary architectural concept in Most.js is the `Stream`, which represents an asynchronous sequence of discrete events, like mouse clicks, or WebSocket messages. Under the hood, a Most.js `Stream` is a composition of two other important concepts: `Source` and `Sink`. A `Source` produces events, and a `Sink` consumes them.

For example, a particular kind of `Source` may represent DOM events, like `mousemove()` and `click()` above, which produce DOM `mousemove` and `click` events on the `document`. In contrast, `observe()` is an example of a particular kind of `Sink` that consumes events, and passes them to a function you provide.

The vast majority of operations involve both a `Source` and a `Sink`. For example. `map()`, which transforms all the events in a stream, acts as a `Sink` by consuming events, and as a `Source` then producing new event values after applying a function to them.

```js
mousemove(document)
  .until(click(document))
  .map(event => `${event.clientX}, ${event.clientY}`)
  .observe(e => console.log(e))
```

So, when you create and transform a Most.js `Stream`, you're building up a chain of `Sources` and `Sinks` that represent the behavior of the `Stream`. However, Most.js `Streams` are not active until you consume them, by using one of the "terminal" combinators, `observe`, `drain`, or `reduce`. When you call one of those, the `Stream` sends a signal to the `Source`-`Sink` chain to the `Source` at the very beginning of the chain. That producer `Source` will then begin producing events.

Events are then propagated synchronously from the `Source` through the `Source`-`Sink` chain by a simple method call. In the example above:

1. The `mousemove` producer `Source` propagates a `mousemove` DOM event by calling the `until` Sink's `event` method.
2. If the mouse hasn't yet been clicked on the `document`, the `until` Sink propagates an event to the `map` `Sink` by calling its `event` method.
3. The `map` `Sink` then applies the mapping function to the event value and calls the `observe` `Sink`'s `event` method.

This direct synchronous method call event propagation model is one of the keys to Most.js's simple and performant internal architecture.

T> Check out the [Architecture wiki](https://github.com/cujojs/most/wiki/Architecture), to read more about the details of the Source-Sink chain, including how error handling works, and avoids having to `try`/`catch` in every combinator.

## How does *Most.js* differ from other solutions?

### Performance

I think many people know Most.js because of its performance characteristics, and that was certainly a goal from the beginning, along with modularity and a simple API. The simple call stack event propagation architecture, plus hoisting `try`/`catch` out of combinator implementations were two of the earliest and biggest performance improvements.

Most.js performs several other optimizations automatically, based on algebraic equivalences. A relatively well-known example is combining multiple `map` operations, e.g. `map(g, map(f, stream))`, into a single `map` by doing function composition on `f` and `g`.

The operation also combines multiple `filter` operations, multiple `merge` operations, multiple `take` and `skip`, among others. These optimizations reduce the number of method calls needed to propagate an event from producer to consumer.

### Unapologetically Declarative

To me, though, Most.js's more strict adherence to a smaller declarative API is even more important, and maybe even a bigger differentiator.

Asynchronous programming is complicated in general. JavaScript programs often deal with many interleaving asynchronous events, and as programmers, we have to try to coordinate all of them. Using imperative approaches, especially those that rely on the developer to manage shared mutable state, to try to coordinate highly asynchronous systems is difficult because we have to think carefully about the operational semantics of the system.

We have to look at our static code and execute it in our heads to figure out the order(s) in which things might happen. Then, we have to convince ourselves that our code is correct for each possible ordering.

As one example, Most.js event streams' core API doesn't provide an imperative "unsubscribe" function. Instead, you use combinators such as `until`, `take`, `takeWhile`, and `skipAfter` to declare, up front, the slice of an event stream you want. You declare what your intentions are, and Most.js takes care of the how and when.

## Why did you develop *Most.js*?

Two big personal reasons are learning, and that reactive programming is the way I want to be building front-end JS apps.

I believe in learning by doing. I wanted to find out more about reactive programming and Functional Reactive Programming (FRP) because they just seemed like such a great fit for front-end JS development. After I had discovered reactive programming concepts, I started reading all the papers and source code I could find. Finally, I decided that the best way to learn even more was to try to implement something. That's basically how the project started.

As for technical motivations, there were several. Performance, architectural and API simplicity, and modularity have been driving factors from the beginning.

A while back, there was a GitHub issue asking why someone might pick Most.js over other reactive libs. I [wrote a longer answer there](https://github.com/cujojs/most/issues/96#issuecomment-77769425) with more detail about the technical reasons and differences with other libs. It's still a good read and sums up my motivation pretty well.

## What next?

### @most/core

There are a few exciting things on the horizon. The Most.js team is working on [`@most/core`](https://github.com/mostjs/core), where we've extracted a minimal core of the Most.js architecture and combinators. It's a base reactive events package that has a strict focus on a lean, declarative API, and incorporates more functional programming concepts. For example, it has a functions-only API, where every function is curried, so you get partial application and function composition.

It's also even more modular and exposes more pieces that other developers can use in building new event sources and combinators. For example, Most.js's high-performance scheduler is available in the `@most/scheduler` package. And we're planning to expose many of Most.js's internal testing tools as a part of `@most/core`.

You can `npm install --save @most/core` to try it today. It's not yet 1.0, and we have some work to do on documentation and examples, but they're very usable.

### Most.js 2.0

These new `@most/core` packages will for the basis of Most.js 2.0. They're a separate project at the moment, but once they hit 1.0, we'll start the work of building Most.js 2.0 on top of them.

### Experimental packages

We're also experimenting with a [package of continuous values](https://www.npmjs.com/package/@briancavalier/most-behavior), aka "Behaviors" or "Properties", values that vary over time, as a companion to Most.js's discrete event streams. The notion of continuous values is quite common in FRP in other functional languages, like Haskell and PureScript, and a few other JS reactive libraries, such as [Bacon.js](https://baconjs.github.io/) and [kefir](https://rpominov.github.io/kefir/), provide continuous them.

Some things can be modeled more simply as values that vary over time rather than as discrete occurrences (events). For example, a mouse click is fairly clearly a thing that occurs, an event. However, the position of a spaceship in a game is a value. It varies over time as the ship moves but doesn't *occur* per se.

We're very use case driven, and we love feedback, so we encourage folks to [try it out](https://www.npmjs.com/package/@briancavalier/most-behavior) and [give us feedback in gitter](https://gitter.im/cujojs/most).

## What does the future look like for *Most.js* and web development in general? Can you see any particular trends?

I see a trend toward functional programming techniques in the JavaScript community. I think it's fascinating how JavaScript, being such a flexible language, can support both OO and functional techniques fairly effectively. Declarative (vs. imperative) programming seems to be on the rise and fits real with the similar swell in reactive programming techniques.

Typescript and Flow have also raised the awareness of the benefits of strong static type systems. I think we'll continue to see more tooling around type checking: better IDE support, better type systems, code generators, tools for dealing with foreign data (like [PureScript's foreign package](https://pursuit.purescript.org/packages/purescript-foreign-generic/4.1.0/docs/Data.Foreign.Class)). These technologies make everything safer by reducing the kinds of mistakes that can make it through to deployment.

We plan to continue embracing these things in Most.js. For example, Most.js has a full set of TypeScript type definitions, and `@most/core` has a complete set of *both* TypeScript and Flow type definitions. We use type checking in the development of Most.js and `@more/core`, and even type check our unit tests.

## What advice would you give to programmers getting into web development?

There are a few things that have become very important to me in every bit of programming I do now - that transcend any project, library, framework, or programming paradigm du jour.

### Be fearless about learning

The first is learning by doing, or perhaps more accurately in my case, learning by trying and failing! One key has been learning that it's ok to fail. It's ok to read about a concept, or algorithm, or data structure in a blog or paper, and then write code solely to try to learn more about how the thing works. Make lots of mistakes trying to get the thing to work.

Not everything has to become a long-lived project. If you learn something (even if its the best way *not* to do something!), you can take that with you no matter what happens to the code.

### Focus on simplicity

Simplicity has become the most important guiding principal in everything programming-related I do. Simplicity in code, API design, directory structure, project management, communicating with other team members ... everything.

Simple is hard. It requires think time and sometimes trying and failing. Simple helps others. Sometimes it takes a while to reap the benefits of simple.

On the other hand, "easy" may feel like it helps right now, but often lays a complexity land mine you (or someone else) will step on later. Often, you have to find a balance between the two. I always try to err on the side of simple when I can.

### Be kind

I've gotten way more from the open source web community than I've given to it. In many cases, that's been due to interacting with and learning from other developers who have treated me with respect and kindness. I'm very thankful for the excellent people in the web community who help others.

At some point, you'll be the one who knows more than someone else. When it happens, be one of that kind, awesome people.

## Who should I interview next?

I think an interview with [Tylor Steinberger](https://github.com/TylorS167), creator of [Motorcycle.js](https://github.com/motorcyclejs), and a Most.js contributor would be great. It's amazing that he's completely self-taught.

I've become a huge fan of [Rollup](https://rollupjs.org), and I think it'd be cool to interview [Rich Harris](https://github.com/Rich-Harris) about it, and about modern JavaScript build tooling in general.

T> **Editor's note:** Brian suggested interviewing [Phil Freeman](https://github.com/paf31), the author [PureScript](http://www.purescript.org). As it happens, [I interviewed him earlier](/blog/purescript-interview/). So go check out the interview.

## Any last remarks?

I really want to thank the Most.js core team: [Tylor Steinberger](https://github.com/TylorS167), [David Chase](https://github.com/davidchase), and [Frederik Krautwald](https://github.com/frikki). They've contributed a ton of ideas and code, and they proposed the idea of `@most/core`.

Given that Most.js started as a project to help me learn about reactive programming, I never expected it to become as popular as it has. Thanks to everyone who has supported it, who has sent a PR, and who is using it to build cool things!

## Conclusion

Thanks for the interview Brian! It's refreshing to see reactive approaches make their way to JavaScript. I feel a lot of these ideas are slowly but surely beginning to enter the mainstream as people discover their value. By changing your thinking you can forget about older problems while gaining more powerful constructs to use.

To learn more about Most.js, head to [Most.js GitHub page](https://github.com/cujojs/most) and study especially the examples.
