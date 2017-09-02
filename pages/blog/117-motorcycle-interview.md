---
title: 'Motorcycle.js - A statically-typed, functional and reactive framework for modern browsers - Interview with Tylor Steinberger'
date: 2017-08-18
headerImage: 'assets/img/motorcycle.jpg'
keywords: ['interview', 'functional programming', 'cyclejs']
editors: ['bebraw', 'karlhorky']
---

Functional reactive programming allows us to think carefully about state and side effects. The question is, how to do that in JavaScript?

[Motorcycle.js](https://github.com/motorcyclejs/motorcyclejs) by [Tylor Steinberger](https://twitter.com/TylorS167) is one solution to this problem.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8e82cfdc051e96e55ade3ccb870edeff?s=200" alt="Tylor Steinberger" class="author" width="100" height="100" />
</span>

I'm a software engineer at a company called PokerJuice, where I mostly work on the front-end using Motorcycle and domain-driven design. I'm a self-taught developer with almost two years of open-source contributions and 1.5 years professional experience.
</p>

Besides my work on Motorcycle, I'm also a core Most.js contributor. My professional and open-source work have both been primarily focused on functional and reactive programming in TypeScript.

Away from a keyboard, music festivals are my home away from home. I love to create, play, and experience music as much as I can. Traveling is a newly discovered interest of mine, and I'm trying to increase my ability to travel as much as possible in the future.

T> To learn more about Most.js, [read the Most.js interview](/blog/most-interview).

## How would you describe *Motorcycle.js* to someone who has never heard of it?

Motorcycle is a type-safe functional and reactive framework for modern browsers. In large part, it is an architectural pattern for building highly interactive applications with Most.js.

Given that the base is built with Most.js, Motorcycle is fully reactive. Being reactive solves many challenges such as handling events, errors, and any other asynchronous calls you may need to make.

Motorcycle is *functional*. Large applications can be written using only functions which make them extremely testable. You'll never need to use the `this` keyword or make imperative function calls. Paired with a library like Ramda you may never have to see `foo.bar` or `foo['bar']` notations again!

Motorcycle is programmed as a function over time given it's most functional and reactive.

## How does *Motorcycle.js* work?

In order to better understand how Motorcycle works, it's important to understand what it achieves first. Motorcycle itself is just a single function named `run`. Using `run` requires two functions. We call these two functions `Main` and `Effects`.

![Motorcycle run diagram](assets/img/motorcycle/run-diagram.png)

As you may be able to tell from the diagram above, the `run` function effectively operates like this:

```typescript
const sinks = Main(sources)
const sources = Effects(sinks)
```

Above may seem impossible to do at first glance, but is 100% possible! Using a
[`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
we can solve this problem.

```typescript
// Create a Proxy which dynamically adds key-value entries
// as they are accessed from Effects
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

The above is an abbreviated version of how the real thing works, for those interested in how it works in practice, [the source code can be found online](https://github.com/motorcyclejs/motorcyclejs/tree/master/run).

## How does *Motorcycle.js* differ from other solutions?

Motorcycle tries to push the boundaries of how applications can be written. Countless hours have been spent to write the best TypeScript typings imaginable. In an editor like Visual Studio Code, you'll get autocompletion for everything, making spelling errors nearly impossible.

When you query for a click event, Motorcycle already knows you're going to get a `MouseEvent` back, not just an `Event`. When you want to change the color of a font, you'll even get autocompletion for values like `'darkturquoise'` and `'lightsteelblue'`. I'm not aware of any other framework that has aimed to achieve this quality of developer experience.

## Why did you develop *Motorcycle.js*?

Motorcycle started as a sister project to [Cycle.js](https://github.com/cyclejs/cyclejs). The original goal was to squeeze as much performance out of the ideas that André Staltz introduced in Cycle.js.

At the time Cycle.js still made exclusive use of RxJS 4 and a [virtual-dom](https://github.com/Matt-Esch/virtual-dom), so first attempts to make Motorcycle as fast as possible involved integrating [Most.js](https://github.com/cujojs/most) and [snabbdom](https://github.com/snabbdom/snabbdom) in an untouched version of Cycle.

Only in the past year have I reduced my activity on Cycle.js and begun to focus more of my time elsewhere, Motorcycle taking on a slightly different API and semantics. In particular, Motorcycle now requires a browser that supports the ES2015 `Proxy`. The changes that have been made since dropping support for IE have opened many doors for us, especially for architecting large applications.

## What next?

Motorcycle has become stable over the past two years. The next venture in Motorcycle will be to upgrade to depend on [`@most/core`](https://github.com/mostjs/core) which is a large improvement over the current version of Most.js. Doing this shouldn't take too long after a v1.0.0 release.

Spoiler: I plan to rebrand Motorcycle.js to Motorcycle.ts to further emphasize our commitment to having the best TypeScript typings the language allows. We're also looking to improve documentation, split existing packages up into smaller pieces, and providing a great deal more testing utilities and commonly used functions. Mainly, we want to foster the community around the project and continue to grow.

## What does the future look like for *Motorcycle.js* and web development in general? Can you see any particular trends?

I think functional and reactive programming is creeping more and more into mainstream web development, and we'll be seeing more and more ideas exploring them. Motorcycle will continue to support this trend and bring these programming styles more into the limelight.

## What advice would you give to programmers getting into web development?

Being self-taught, all the advice I can give is to find a project that piques your curiosity, join their community, and work hard to contribute regardless of your skill level. I found Cycle.js in August 2015, joined the community, and just tried making things, almost none of which anyone uses today.

The people active in those days would ask questions, do code reviews, and provide all kinds of tips to learn and grow. Ask questions, be curious, and never stop asking yourself and others how you can improve your skills at and away from a keyboard.

## Who should I interview next?

I think it'd be great to interview André Staltz. He's doing some awesome work to free people from large companies exploiting our privacy for profits.

T> [I interviewed André earlier about Cycle.js](/blog/cycle-interview). Perhaps we can find another topic to cover!

## Any last remarks?

I'd like to thank everyone from the early Cycle.js days: [André Staltz](https://github.com/staltz), [Nick Johnstone](https://github.com/widdershin) [Frederik Krautwald](https://github.com/frikki) and [Nathan Ridley](https://github.com/axefrog). I'd also really like to thank the Most.js core team: [Brian Cavalier](https://github.com/briancavalier) and [David Chase](https://github.com/davidchase). Without these people and others along the way, I'd still work 50+ hours a week in a coffee shop. I can't thank them enough!

## Conclusion

Thanks for the interview Tylor!

To learn more about the approach, study [Motorcycle.js GitHub page](https://github.com/motorcyclejs/motorcyclejs).
