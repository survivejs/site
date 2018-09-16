---
title: 'Refract - Manage Component Side Effects the Reactive Way - Interview with Thomas Roch.'
date: 2018-09-16
headerImage: 'assets/img/aperture.jpg'
keywords: ['interview', 'state-management', 'react']
---

It's difficult to write an application without side effects. Consider handling requests, dealing with third parties, managing storage for example. These concerns come up often.

[Refract](https://refract.js.org/) by [Thomas Roch](https://twitter.com/tcroch) provides a solution to the problem for React users.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8f3bfe81d2d4de9670c430346c490c3f?s=200" alt="Thomas Roch" class="author" width="100" height="100" />
</span>

Hey, my name is Thomas Roch. I work as a principal software engineer at FanDuel, and I live near Glasgow in Scotland. I've been focusing on front-end engineering for the last few years, and some people might know me for [router5](https://router5.js.org).

</p>

T> [Read the router5 interview](/blog/react-router5-interview/) to learn more about it.

## How would you describe _Refract_ to someone who has never heard of it?

Side effects are one of the primary sources of scalability issues for an application: in React lifecycle methods, and event handlers are used to handle side effects (making requests, persisting values in storage, pushing events to a third party vendor, etc.).

Refract allows you to manage side-effects in React (in Inferno and Preact too), using reactive programming: you can observe props a component receives, and decide to take actions on what is observed.

For instance, you can observe a text input, debounce it and make a request to receive a list of suggestions: components like a typeahead are straight-forward to implement with Refract.

## How does _Refract_ work?

Refract offers a high-order component that you can use to wrap a component you want to observe. You need to supply two functions to your HoC:

* A function we call "aperture": it is there for creating a stream of effects (as data).
* Each value emitted by your stream of effects will be passed to a second function called "handler" which will trigger side-effects imperatively.

A simple example is: you have a multi-step process, and you want to reset the page scroll position each time the step changes. Let's say you have a component called `MultiStepProcess` which takes a `step` property, with Refract you would achieve it this way:

```javascript
import { withEffects } from "refract-rxjs";

// The aperture observes step changes, and for each step change
// will emit an effect
const aperture = initialProps => component =>
  component.observe("step").pipe(mapTo({ type: "SCROLL_RESET" }));

// The handler handles the effects emitted by the aperture
const handler = initialProps => effect => {
  if (effect.type === "SCROLL_RESET") {
    window.scrollTo(0, 0);
  }
};

// Finally, we wrap MultiStepProcess
const MultiStepProcessWithEffects = withEffects(handler)(aperture)(
  MultiStepProcess
);
```

In your aperture, you can observe values of a prop or arguments a callback prop is called with. Also, you can use any other data source you have available: a redux store (we offer redux bindings to observe actions and selectors), data from a WebSocket, global events, etc. The example above can be extended to fetch data, push analytics events, etc.

T> To learn more, [see the online examples](https://refract.js.org/examples).

## How does _Refract_ differ from other solutions

Refract can be compared to solutions commonly found in the Redux ecosystem (redux-saga, redux-observable, redux-loop) but without the need to use Redux. Redux has seen a lot of innovation in managing side effects due to Redux stores being easily observed (actions with middlewares, the state with subscribe).

Refract makes React components observable, and it enables to colocate side-effect management with components: business logic can be isolated per view rather than being centralized, applications become more comfortable to code-split and therefore easier to scale.

Refract is a great way to make use of reactive programming techniques in React, and we've made a special effort to have first-class support for multiple reactive libraries (RxJS, xstream, Most, Callbag): we publish fully typed individual packages rather than the main package with adapters (which lacks type safety).

T> We have a document [comparing Refract to alternative solutions](https://refract.js.org/introduction/alternatives).

## Why did you develop _Refract_?

It's been a long process: what has been open-sourced is the fifth iteration of what we have developed internally at FanDuel to help scale our main application. I was introduced to reactive programming (and React) four years ago: router5 came from starting to learn reactive programming. Three years ago I began to work with a colleague on a new product.

Initially, I was tempted to use CycleJS. We ended up using React with Redux due to the ecosystem and the benefits of functional programming. React, and Redux was seen as a "safer" choice.

I was however still very keen to find opportunities to leverage reactive programming. What is now Refract started with a few thoughts around handling analytics in our app (see [Redux analytics, without middleware](http://troch.github.io/posts/2016/09/27/redux-analytics-without-middleware/)).

Through this work, I began to understand the importance of observability, and I started to colocate observing behaviors to components. Initially what was developed was for analytics only. The first iterations were forced by the various use cases we discovered until we eventually came up with Refract: a generic way to handle side-effects using reactive programming.

## What next?

I'm not sure I know. We are going to improve examples and add more to our current documentation. If Refract integrates well with existing codebases, We are looking at providing a local state solution to help new projects. The API surface of Refract is tiny, so I don't think it will evolve much. With React, Suspense is next: I am currently exploring ways for Refract to leverage it.

## What does the future look like for _Refract_ and web development in general? Can you see any particular trends?

Reactive programming is becoming a hot topic, and side effect management is an excellent application for it. Refract makes it possible to adopt reactive programming consistently gradually, and I hope it will help a lot of people getting started with it.

The full data journey, from user to persistent storage and back is always evolving and getting simplified. In general, the libraries of today tend to be the implementation detail of tomorrow.

A library like Redux is a good example: it has enforced good habits in state management (and continue to do so), but it will tend to become a pattern inspiring superior abstractions (as a cache in data fetching libraries like Apollo, in new local state abstractions leveraging React context API, ...).

## What advice would you give to programmers getting into web development?

The journey is long so staying curious and critical, don't settle, be opinionated but not dogmatic, collaborate with people around you, and listen to your guts! Quite often we have good intuitions: it is by learning, discussing and experimenting with others that we develop knowledge, gather experience and innovate. But all of that without losing focus on the primary goal: crafting great experiences for users!

## Who should I interview next?

I like Robin Frischmann's work and in particular [Fela](fela.js.org), a CSS-in-JS library we've been using successfully for more than a year.

## Any last remarks?

Thanks for the interview!

## Conclusion

Thanks for the interview, Thomas! Refract provides a robust solution for managing application side effects in reactive style by the looks of it.

To learn more, head to [Refract site](https://refract.js.org/) and [check the project on GitHub](https://github.com/fanduel-oss/refract).
