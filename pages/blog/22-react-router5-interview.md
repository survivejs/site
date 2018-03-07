---
title: 'react-router5 - Routing Alternative for React - Interview with Thomas Roch'
date: 2015-11-09
headerImage: 'assets/img/route.jpg'
keywords: ['interview', 'react', 'routing']
---

When people ask about what routing solution to use with React, they often get pointed at [react-router](https://github.com/reactjs/react-router). It is a powerful solution and used by many so it can make sense. That doesn't mean it's the only alternative, though.

This time I'm interviewing [Thomas Roch](https://twitter.com/tcroch), the author of [react-router5](https://github.com/router5/react-router5). It provides React bindings for [router5](https://router5.github.io/), a generic routing solution he has developed. Read on to learn more about this interesting alternative.

> There are also [redux bindings](https://github.com/router5/redux-router5) available for router5!

## Can you tell a bit about yourself?

<p>
  ![Thomas Roch|100|100|author](assets/img/interviews/roch.jpg)

  I have a degree in engineering, although my education was for most parts non specialised, I ended up studying a bit more mechanical and electronics engineering. I have always been programming in my spare time and hacking stuff, and inevitably, my early professional career slowly drifted towards software engineering. I explored a few areas and languages: embedded software on micro-processors, desktop applications and web applications.
</p>

I did a fair amount of full-stack web development, and a few years ago I decided to take front-end development very seriously, being amazed by what a difference Node.js and social coding had started to make. I am a French national, I am currently a software engineer at Fanduel and live in Glasgow, Scotland.

## How would you describe *react-router5* to someone who has never heard of it?

*react-router5* (and router5) is a different way of thinking about routing in front-end applications, and a way which I think suits a lot more trees of components. Instead of focusing on what component to render for what route, or providing a handler function per route, it sees routing as going from A to B, not loading B.

There is clear separation of concerns: router5 will take care of checking routing can happen and provide route updates. react-router5 provides ways to update your virtual tree, but won't do it for you. So you can have control over routing. I am not the only one testing and implementing new ideas around routing though.

## Why did you develop *react-router5*?

I started using React a little more than a year ago, while still developing heavily with Angular. Working alongside a back-end team using Scala, I had slowly been introduced to functional programming, immutability, reactive programming, etc... I played with React, used it on a playground project at home, and one of the really first thing I searched for was a router. I think it is a habit most of us have, having being used to rely on frameworks. And no surprise on the outcome, I ended up with react-router.

Slowly, my practice of React evolved. I started to reject state, played with Flux without being fully convinced, looked a lot at reactive programming but I didn't know what to do about routing. It felt like it was standing on my way, I wasn't building my application virtual tree, a router was doing it for me. So I started to play with routing, implementing custom solutions.

The first ones reflected my thoughts at the time: it was all very confusing. I slowly realized I wanted routing to be treated the same way application state changes are. Therefore, I didn't need a router for React. And not only did I need a library or framework agnostic router, I needed a router spitting out route updates as data updates, and not a router defining routes as a map of paths and route handlers.

I looked around and couldn't find what I was after. At the time, an article mentioning [pillarjs/routington](https://github.com/pillarjs/routington) on DailyJS was published, I really liked the idea of a trie of routes. It mirrors your tree of components which helps building a mental model about your application and routing in general.

But I wanted to use named routes with parameters and it became router5 starting point: developing a library allowing to build a tree of named routes (route-node, supported by path-parser) before developing a router. It was also a conscious effort to explode routing in specialised parts, and remove the tight coupling between routes and components. I took some inspiration from various sources, including new generation frameworks like Aurelia and Angular2 for functionalities.

A few months back, shortly after ReactEurope 2015, I remember watching Christopher Chedeau saying about routers during his keynote: _"We have seen only one player emerge which is react-router... Is there any innovation going on? ... Actually, innovation already happened a few years ago and it happened in the Ember community..."._ That fuelled my motivation and made me accelerate on router5. Once router5 was released in July, I started to focus on integration with React but lacked time and maturity. And it is only now with 1.0.0 that a solid React integration is provided with react-router5.

## What kind of challenges have you experienced while developing it?

The first barrier was to believe routing is complicated, there was an intimidation factor. Once I started to focus on specific areas and to split concerns, those initial concerns went away. One other challenge was to detrain from libraries and frameworks I was used to, and trying not to be too much influenced by existing routing solutions.

I don't think I had major technical challenges, I was for example able to re-use previous experiences around lexical analysis and tokenisers to build a library for parsing and matching paths. I otherwise needed to let my thoughts and knowledge mature over time. For react-router5, I had to gain experience on higher-order components to be able to propose them rather than mixins.

## What next?

Version 1.0.0 of router5 is an important milestone because it totally removes side-effects from the router core. URL and browser history are now fully treated as side-effects, like DOM updates are side-effects of state updates and virtual tree re-renders. It also introduces plugins and improves on the use of middleware functions. The next step would be to start to see stuff emerge from the community.

The second important aspect is data loading. I don't currently have examples demonstrating how it can be achieved. Partially because there are so many ways data loading can be handled depending on how you handle state, and partially because I am careful not to introduce tight coupling where I wouldn't want to see some. But I will explore GraphQL and Falcor and see if there is a need to introduce integration helpers.

I would also like to improve the overall quality of the documentation I provide in order to attract more people.

## What does the future look like for React and front-end in general? Can you see any particular trends?

The biggest trend right now is functional programming. At the component level, it means context-free and state-free components with higher-order components linking them to state and context. The second trend is reactive programming, outside components.

I mentioned above having routes in a tree to help with building mental pictures, having an application state as a tree is also very beneficial in that sense, and I believe in global application states. I am currently using redux on a greenfield project and released [redux-router5](https://github.com/router5/redux-router5).

I also like Baobab a lot and follow what Christian Alfoni is doing with Cerebral, and what Andre Staltz is doing with CycleJs.

For React, the future will be towards stateless, context-less, this-less functional components. It only started with 0.14.

## Who should I interview next?

I like what Anthony Short is doing with [Deku](https://github.com/dekujs/deku). I also like the work of Simon Friis Vindum ([paldepind](https://github.com/paldepind) on Github).

## Conclusion

Thanks a lot for the interview Thomas! I hope people will find your routing solution. To make it easier to dig in, I've compiled a set of resources below:

* [The official site of router5](https://router5.github.io/)
* [router5/react-router5](https://github.com/router5/router5/tree/master/packages/react-router5) - React bindings
* [Online demo for React](https://router5.github.io/docs/with-react.html#/inbox) - [Demo source](https://github.com/router5/examples/tree/master/apps/react)
* [router5/redux-router5](https://github.com/router5/router5/tree/master/packages/redux-router5) - Redux bindings
* [Online demo for React and Redux](https://router5.github.io/docs/with-react-redux.html#/inbox) - [Demo source](https://github.com/router5/examples/tree/master/apps/react-redux)
