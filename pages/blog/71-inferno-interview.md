---
title: 'Inferno - Blazing fast, React-like UI library - Interview with Dominic Gannaway'
date: 2016-12-12
headerImage: 'assets/img/inferno.jpg'
keywords: ['interview', 'react']
---

One of the cool things about React is that it managed to pull a lot of people into the component world. Even though there was initial resistance, the ideas seem to have stuck. Maybe the question is, what next?

[Inferno](https://infernojs.org/), a blazing fast React-like UI library by [Dominic Gannaway](https://twitter.com/trueadm) might be one of the answers.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/5d645ce683649c2332294ea6fcc8b7a2?s=200" alt="Dominic Gannaway" class="author" width="100" height="100" />
</span>
I'm currently a Software Development Engineer at Tesco, based in London.

I've been developing and writing actual software since I was 15 years old, but I was first interested in coding when I was around 7 years old. (It was Visual Basic 5 back then!)
</p>

I'm a huge fan and advocate of web technologies, and I've always enjoyed optimising and making things fast. These days I spend a lot of time building complex UIs, middlewares, tooling and all the other things you would associate with a full-stack JavaScript engineer.

In my free time, I enjoy being a Dad (I've got two kids) and spending time with my family. I also enjoying working on open-source projects and I love to attend meetups and conferences when I get the chance.

## How would you describe *Inferno* to someone who has never heard of it?

[Inferno](https://github.com/trueadm/inferno) is a JavaScript library that helps developers build user interfaces for websites and apps. Inferno intentionally builds on the same API as React, so developers do not have to invest time/money in learning a completely new way of building things.

In many ways I think React has been a game-changer for the web UI community. It scrapped the old ways of doing things like we'd been doing them for years on the server (MVC for example) and offered an approach that inspired many different patterns and design discussions; e.g., one-way data flow, components over templates, JSX, Virtual DOM.

Inferno was designed to be really, _really_ fast and lightweight while offering a bunch of out-of-the-box features that makes working with a React-like project a bit nicer.

There's also a big push right now to improve the experience on mobile and it's good to see so many people taking notice – as, in my opinion, mobile performance has been really poor for a long time. Inferno started off nearly 2 years ago as my attempt to fix the problems with mobile performance.

## How does *Inferno* work?

Like many other libraries and frameworks, Inferno uses a Virtual DOM. Virtual DOM is a tiny abstraction above the real DOM that provides Inferno with a list of instructions on what the UI will look like; so that when a user creates components or virtual DOM nodes (`VNodes`), they are describing how they'd like their UI to look.

Inferno takes all this information and works out the least amount of changes necessary to update the webpage from one state to the next. It makes this process fast by leveraging several optimisations that modern JavaScript engines provide; along with the mounds of trial-and-error it required to improve "touching" the DOM.

This *might get a bit technical*, but I've been asked about it plenty of times so I thought it would be best to share my experiences:

- Inferno tries to ensure as many object property callsites are [monomorphic](http://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html) as possible.
- Inferno avoids using prototype objects with constructors and instead favours object literals with minimal properties. Inferno uses utility/helper functions to mutate/access these objects rather than adding methods onto the object itself. This had a noticeble impact in non-JIT (just in time) compilation or on mobile devices with low memory.
- Rather than "diff" virtual DOM against the real DOM, Inferno instead diffs the virtual DOM against the last virtual DOM created. This also had a noticeable impact on performance.
- Inferno tries to reuse properties, objects and DOM nodes whenever possible. Creating too many objects can be expensive on memory, the GC (garbage collector) and overall performance. For example, rather than create extra properties on `VNode` objects, Inferno reuses previous properties (even if the property name doesn't really align anymore with what's being put within it). Furthermore, DOM nodes are also stored and recycled, reducing the cost of having to recreate large DOM trees and computing all the internal visual calculations again.
- Inferno avoids touching the DOM as often as it can. Instead, it opts to only touch a small subset of properties/methods on DOM nodes (`firstChild`, `lastChild`, `parentNode`, `nextSibling`, `createElement`, `removeChild`, `insertBefore`, `replaceChild`). Inferno avoids using `childNodes` and `innerHTML` as these methods tend to be very expensive. A nice optimisation trick to clear a DOM's content was to use `textContent('')`.
- Inferno prefers the usage of helper functions that all get inlined by a JIT compiler – for example, rather than doing `foo === null`, doing `isNull(foo)`. We found that this really helped improve bundle size, and in some cases it also improved JIT performance (when the [inline budget for inlining hadn't been fully consumed](https://docs.google.com/document/d/1VoYBhpDhJC4VlqMXCKvae-8IGuheBGxy32EOgC2LnT8/edit)).
- Extensive checking was done to ensure that deoptimisations ("deopts", where a JIT compiler can't compile something) were kept to the absolute minimum. The Inferno team used benchmarks, profiling tools (IRHydra 2, Chrome Dev Tools) and lots of spikes re-writes on various parts of the codebase as way of constantly finding ways to remove deopts.
- Inferno uses its own event system for certain events, which allows it to choose a delegated event or an inline event depending on the type of event. Delegated events can offer a significant performance and memory improvement over non-delegated events in cetain use-cases.
- Inferno's keyed children sorting algorithm is highly efficient and yields the fewest possible DOM mutations to get from A to B (thanks to the [great work](https://github.com/ivijs/ivi) by [localvoid](https://github.com/localvoid)).

There are plenty more optimisations going on under the hood, so I'd recommend reading the sourcecode if anyone is interested in learning more.

## How does *Inferno* differ from other solutions?

Inferno doesn't try to be too different from React. Very much like Preact, Inferno enjoys having lots of similarities with React. Inferno supports many different ways of creating UIs, such as: JSX (Inferno has its own Babel plugin for this), HyperScript and good ol' `createElement()` from React.

Inferno differs in that it offers some additional features that React or Preact don't have (at the expense of some file size):

- Tiny in size; in fact, only 8kb min+gzip. It parses and evaluates as quickly as anything in the browser (almost the same as that of Preact). It's perfect for mobile!
- Lifecycle events like `shouldComponentUpdate` and `componentDidMount` on functional components.
- Better modularisation of core features. For example, `createClass` isn't in Inferno's core; it's a separate package called `inferno-create-class`. The same applies for ES2015 class components. This helps reduce filesize for people who simply don't need to carry things that they will never use.
- Inferno doesn't have an InfernoDOM - the DOM is baked into the core. Inferno will never have an Inferno Native, so it made a lot of sense (improved performance and bundle size by unifying the two).
- A [`linkEvent`](https://github.com/trueadm/inferno/blob/master/README.md#linkevent-package-inferno) helper for passing `state`/`props`/`this` to an event callback without needing to use arrow functions or `bind()`. Not only is it a lot faster than the alternatives, but you can use it on functional components too:

```jsx
import Inferno, { linkEvent } from 'inferno';

function handleClick(props, event) {
  props.validateValue(event.target.value);
}

function MyComponent(props) {
  return (
    <div>
      <input type="text" onClick={linkEvent(props, handleClick)} />
    <div>
  );
}
```

## Why did you develop *Inferno*?

I developed Inferno because (1) curiosity/research and (2) I ran into too many performance issues too often while trying to build a highly complex mobile web app.

Two years ago, when this project started, I was really frustrated with the mentality that a lot of the community had in regards to mobile performance. I was commonly told that "mobile is fast enough" or "people simply don't need aything faster" or "X is already as fast as it gets".

Thankfully, that mentality has changed since then and now people are starting to become more aware of the real problem users are having; especially in emerging countries with poor web experiences on mobile.

## What next?

The focus for me and the rest of the Inferno team is to get 1.0 released before Christmas (along with the website). I have some big plans for 2017, but it's a bit too early to announce them right now. :)

## What does the future look like for *Inferno* and web development in general? Can you see any particular trends?

I think there is going to be a big shift towards making things smaller and faster. I think we've only just begun tapping into the potential of JavaScript compiling. With the work that Rich Harris has done with [Svelte](https://svelte.technology/), along with the work by the Ember and Angular guys on AoT (ahead of time) compiling, we'll see WebAssembly compilation start to take off too. I think 2017 will be an interesting year for the future of web development.

## What advice would you give to programmers who are getting into web development?

Get into open source, either on an existing project or start your own. You'll learn huge amounts from the experience and get to tap into a huge community of very smart people.

## Who should I interview next?

[Jason Miller](https://github.com/developit) and [Ryan Tsao](https://github.com/rtsao). They're both doing fantastic work!

## Any last remarks?

I'd like to say a big thank you to the team behind making Inferno awesome. [Sampo Kivistö](https://github.com/Havunen), [Ryan M](https://github.com/nightwolfz), [Luke Sheard](https://github.com/LukeSheard), [Boris Kaul](https://github.com/localvoid), [Luke Edwards](https://gist.github.com/lukeed) and many others! They've been great.

## Conclusion

Thanks for the interview Dominic! If there's one thing that sets Inferno apart from my point of view, it's how it expands function based components through a beautifully designed hook system. That solves a major pain point for me even if it's not standard React code.

You should check out [the official site](https://infernojs.org/) and [Inferno on GitHub](https://github.com/trueadm/inferno/) to learn more about the project and those hooks. Maybe 2017 is the big year for Inferno.
