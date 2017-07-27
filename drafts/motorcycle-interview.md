---
title: 'Motorcycle.js - A statically-typed, functional and reactive framework for modern browsers - Interview with Tylor Steinberger'
date: 2017-08-14
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise I'll figure out something.

TODO: I'll fill this up and link to your Twitter (@TylorS167)

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8e82cfdc051e96e55ade3ccb870edeff?s=200" alt="Tylor Steinberger" class="author" width="100" height="100" />
</span>

I'm a software engineer at a company called PokerJuice, where I mostly work on the front-end using Motorcycle and domain-driven-design. I'm a self-taught developer with almost 2 years of open-source contributions and 1.5 years professional experience. Besides my work on Motorcycle, I'm also a core-contributor to [`most.js`](https://survivejs.com/blog/most-interview/). My professional and open-source work have both been primarily focused on functional and reactive programming in TypeScript.
</p>

Away from a keyboard music festivals are my home away from home. I love to create, play, and experience music as much as I can. Traveling is a newly discovered interest of mine and I'm trying to increase my ability to travel as much as possible in the future.

## How would you describe *Motorcycle.js* to someone who has never heard of it?

Motorcycle is a type-safe functional and reactive framework for modern browsers. In large part it is an architectural pattern for building highly interactive applications with `most.js`.

Given the base being built with `most.js`, Motorcycle is fully reactive. Being reactive solves many problems such as handling events, errors, and any other asynchrounous calls you may need to make.

Motorcycle is *functional*. Large Applications can be written using only functions which makes it extremely testable. You'll never need to use the `this` keyword or make imperative function calls. Paired with a libary like `ramda` you may never have to see `foo.bar` or `foo['bar']` notations again!

Being functional and reactive, Motorcycle is programmed as a function over time.

## How does *Motorcycle.js* work?

In order to better understand how Motorcycle works, it's important to understand what it achieves first. Motorcycle itself is really just a single function named `run`. Using `run` requires 2 functions; We generally call these two functions `Main` and `Effects`.

> *Side Note:* In Motorcycle it is a convention to name components using PascalCase as there is no need for the `class` keyword.

![Motorcycle Run Diagram](https://gist.githubusercontent.com/TylorS/be8211cccc3f0c9fc418f31006b591f8/raw/28da1a247fa1d65e8de1f8c9ffe688cf8abb6219/motorcycle-run-diagram.png)

`run` as you may be able to tell from the diagram above is responsible for effectively allowing the following code

```typescript
const sinks = Main(sources)
const sources = Effects(sinks)
```

This may seem impossible to do at first glance, but is 100% possible! Using a
[`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
we are able to solve this problem.

```typescript
// Create a Proxy which dynamically adds key-value entries
// as they are asked for from Effects
const proxySinks = new Proxy({}, {
  get(target, property) {
    if (!target[property]) {
      target[property] = createNewStream()
    }

    return target[property]
  }
})

// Call Effects with our Proxy
const sources = Effects(proxySinks)
// Call Main to get our *real* Sinks
const sinks = Main(sources)

// Replicate the values from *real* Sinks to the proxySinks
// This is what "closes" the loop to make a reactive cycle
for (const sinkName in sinks)
  sinks[sinkName].subscribe(proxySinks[sinkName])
```

The above is an abbreviated version of how the real thing works, for those interested in how it really works in practice, the source code can be found [here](https://github.com/motorcyclejs/motorcyclejs/tree/master/run).

## How does *Motorcycle.js* differ from the other solutions?

Motorcycle tries to push the boundaries of how we write our applications. Countless hours and hours have been spent to have the best TypeScript typings you could imagine. In an editor like Visual Studio Code, you'll get autocompletion for everything, and spelling errors are nearly impossible. When you query for a click event, Motorcycle already knows you're going to get a `MouseEvent` back, not just an `Event`. When you want to change the color of a font you'll even get autocompletion for values like `'darkturquoise'` and `'lightsteelblue'`. I'm not aware of any other framework that has strived to make these sort goals.

## Why did you develop *Motorcycle.js*?

Motorcycle started as a sister project to [Cycle.js](https://github.com/cyclejs/cyclejs). The original goal was to squeeze as much performance out of the ideas that André Staltz had introduced in Cycle.js.

At the time Cycle.js still made exclusive use of Rx 4 and a [`virtual-dom`](https://github.com/Matt-Esch/virtual-dom), so in attempts to make Motorcycle as fast as possible it was a 1:1 port of Cycle to use [`most`](https://github.com/cujojs/most) and [`snabbdom`](https://github.com/snabbdom/snabbdom).

Only in the past year has my activity with Cycle.js dropped and I've begun to focus more of my time elsewhere and Motorcycle has begun to differ slightly in API and semantics. In particular, Motorcycle has dropped support for browsers not supporting the ES2015 `Proxy`. The changes that have been made since dropping support for IE has opened many doors for us, especially for architecting large applications.

## What next?

Motorcycle has become stable over the past 2 years. The next venture in Motorcycle will be to update to the [`@most/core`](https://github.com/mostjs/core) which is a large improvement over the current version of Most.js, which shouldn't take too long after a v1.0.0 release.

Spoiler: I plan to rebrand `Motorcycle.js` to `Motorcycle.ts`, to further emphasize our commitment to having the best TypeScript typings as the language will allow. We're also looking to **vastly** improve documentation, split existing packages up into smaller pieces, and providing a great deal more testing utilities and commonly used functions. Essentially, we're looking to begin fostering a community around the project and continue to grow.

## What does the future look like for *Motorcycle.js* and web development in general? Can you see any particular trends?

I think functional and reactive programming is creeping more and more into mainstream web development, and we'll be seeing more and more ideas exploring them. Motorcycle will always be trying to push this trend further and into the limelight.

## What advice would you give to programmers getting into web development?

Being self-taught, all the advice I can give is find a project that piques your curiosity and join their community and work hard to contribute regardless of you skill level. I found Cycle.js in August 2015, joined the community, and just tried making things, almost none of which anyone use today. The people active in those days would ask questions, do code reviews, and provide all kinds of tips to progressing and growing. Ask questions, be curious, and never stop asking yourself and others how you can improve your skills at and away from a keyboard.

## Who should I interview next?

I think it'd be great to interview André Staltz; He's doing some really awesome work to free people from large companies exploiting our privacy for profits.

## Any last remarks?

I'd just really like to thank everyone from the early Cycle.js days: [André Staltz](https://github.com/staltz), [Nick Johnstone](https://github.com/widdershin) [Frederik Krautwald](https://github.com/frikki) and [Nathan Ridley](https://github.com/axefrog). I'd also really like to thank the Most.js core team: [Brian Cavalier](https://github.com/briancavalier) and [David Chase](https://github.com/davidchase). Without these people, and others along the way, I'd still work 50+ hours a week in a coffee shop. I can't thank them enough!

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Tylor!
