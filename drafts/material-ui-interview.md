---
title: 'Material-UI - React Components that Implement Google&#x27;s Material Design - Interview with Olivier Tassinari'
date: 2017-xx-xx
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview', 'reactjs']
---

TODO: Feel free to suggest a header image. Otherwise I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e2b3127c877367bce1892635ffe153d0?s=200" alt="Olivier Tassinari" class="author" width="100" height="100" />
</span>
</p>

I've been mastering Lego all my childhood but I have eventually ended up as a Software Engineer.

I have started web development back in 2008, then graduated from one of the most prestigious and selective "grandes écoles" in France with a Master Degree in computer science.
I worked at Doctolib, the leading booking platform and management software provider for doctors in France.

Beside of coding, I love sport, swimming, running and from time to time climbing.
I'm training to beat my 10k record next year.

## How would you describe *Material-UI* to someone who has never heard of it?

[Material-UI](https://github.com/callemall/material-ui) provides pieces of interface usable in different contexts. That's our core mission, we are a UI library.

These pieces of interface are called **components**.
You can find components in the React, Angular, Vue, Ember and Polymer ecosystem.
We have chosen to focus on [React](https://facebook.github.io/react/) and the [Material Design Specification](https://material.io/guidelines/).

Let's say you want to display a beautiful button, all you need to do is the following (example for Material-UI v1):

```js
import Button from 'material-ui/Button'

function MyApp() {
  return (
    <Button>
      I Will Survive
    </Button>
  )
}

export default MyApp
```

## How does *Material-UI* work?

*Material-UI* has two foundations, React and [JSS](https://github.com/cssinjs/jss).
Most of the heavy lifting is done by these two libraries.
While we have been betting on React early in 2014 and have stuck it to it,
we are at our **third iteration** on the styling solution.
We have started with LESS, tried inline-style, and are now transitioning toward **CSS-in-JS** thanks to JSS.

One of the first things people ask when discovering the library is how to customize the style of it.
We used to have a poor answer to that question, but it's getting much better now.
As components evolve in different contexts, we have identified four different types of customization needs going from **the most specific** to **the most generic** one:

- [Specific variation for a one-time situation](https://material-ui-1dab0.firebaseapp.com/customization/overrides#1-specific-variation-for-a-one-time-situation)
- [Specific variation of a component made by a user and used in different contexts](https://material-ui-1dab0.firebaseapp.com/customization/overrides#2-specific-variation-of-a-component)
- [Material Design variations like with the buttons](https://material-ui-1dab0.firebaseapp.com/customization/overrides#3-material-design-variations)
- [User global theme variation](https://material-ui-1dab0.firebaseapp.com/customization/overrides#4-user-global-theme-variation)

And we have addressed all of them.

## How does *Material-UI* differ from the other solutions?

People need to understand the **tradeoffs we have made**.
If you have tried to build a UI library in the past, or even a presentational component you know that, at some point, you have to prioritize one dimension over another.
So let's see what we have prioritized and what we haven't.

First, I believe that **most of the value of using a UI library comes from the contract API it's giving you**. But at the same time, API design is one of the hardest things to do when building a UI library.

1. We want the API to be consistent. We want to reduce the cognitive overhead of learning our API.
That's opposed to an API tuned for each context.
2. We want the API to be low-level. By low-level, we mean close to the DOM elements.
**It's simpler to recover from no abstraction than from a wrong one** and it's increasing composition capabilities. We encourage users **to build on top of it**. If they find something valuable, we can integrate it into the library. That's opposed to a high-level API.

Secondly, sometimes we have to trade consistency and level of abstraction to have a good enough implementation.

3. We want our components to **work in isolation** as much as possible.
For instance, we consider global styles as an anti-pattern, not to mention the code splitting implication of them.
Also, that means that people should be able to use only one of our components without paying a large overhead.
4. We want the implementation to be performant.
5. We want our components to be **easily customizable** from the outside.
6. We want our components to be accessible.

Finally, we would rather **support few use-cases very well and allow people to build** on top of it than many poorly.
You can learn more about our [vision for the project](https://material-ui-1dab0.firebaseapp.com/discover-more/vision#material-ui-s-vision).

## Why did you develop *Material-UI*?

The credit for creating *Material-UI* comes to [Hai Nguyen](https://twitter.com/haicea).
I have started contributing 6 months after the first release and haven't stopped since then.

Ironically, the motivation I had for choosing *Material-UI* as my UI library for a [fun-side project](https://github.com/oliviertassinari/SplitMe) goes against the maintainer status I have today.
I was looking for a React implementation of the Material Design that I could use **in order to save time**. I end up spending a lot of time improving the library.
But I don't regret it. I have learned a lot in the process, ranging from social interactions through deep web stack understanding, not forgetting API decision making, [visual tests](https://www.argos-ci.com/callemall/material-ui), etc.

## What comes next?

We are in the middle of the rewrite on the [v1-alpha branch](https://github.com/callemall/material-ui/tree/v1-alpha). The rewrite effort was started one year ago by [Nathan Marks](https://github.com/nathanmarks).

Personally, I have stopped using the v0.x releases. We are going to try to follow this plan:
1. We completely address the styling issue before moving from *alpha* to [*beta*](https://github.com/callemall/material-ui/milestone/22).
2. We publish our first beta releases.
3. We fix the last API inconsistencies (as we can make breaking changes without having to worry much).
4. We merge the beta branch into master
5. We publish our first pre-releases, if all goes well, we move to the next step.
6. We publish v1 :tada:

At that point, some features and components from the v0.x will be missing in the v1.
So, what about them?
- First, both versions can be used at the same time, people can progressively migrate, one component at the time.
- Then, **with the help of the community** and over time, we will support more and more components.
- Finally, as said before, we would rather **support few use-cases very well and allow people to build on top of it** than many poorly.

It's all in our [ROADMAP](https://github.com/callemall/material-ui/blob/master/ROADMAP.md).

## What does the future look like for *Material-UI* and web development in general? Can you see any particular trends?

*Material-UI* is very popular in the React ecosystem, but Google recently changed their strategy with [material-components-web](https://github.com/material-components/material-components-web).
Depending on how well `material-components-web` solves the problem, *Material-UI* [might use it internally](https://github.com/callemall/material-ui/issues/6799).

But at the same time, *Material-UI* goal is to provide an elegant implementation of the Material Design guidelines **and more**. The "more" is important here.
The Material design specification set the bar quite high. As we are addressing it, people should be able to take advantage of it for their own business with any style customization needed.

This is what I have been doing lately at work.
We have been taking advantage of *Material-UI* and its customization power in order to **implement a brand specific UI**.
A UI far from the Material specification. You can think of it as a Bootstrap theme.

## What advice would you give to programmers getting into web development?

- Learn to focus on what matters. It's so easy to get lost.
- Learn the abstractions up and down the one you are using.
- Never miss the big picture.
- Be curious, look for the details. In a codebase, nothing is left to chance. Learn and understand the Why.
- **Sleep well** and go practice sports. It's always how I get my best ideas.

## Who should I interview next?

[Arunoda Susiripala](https://twitter.com/arunoda) for the awesome work he as been doing with the **@zeit** team on [next.js](https://github.com/zeit/next.js).
I haven't been that excited by a JavaScript project since React. The User Experience and Developer Experience is way above anything I have been using before.
Combined with *Material-UI*, it's a real joy to be a web developer.

## Any last remarks?

Special thanks to the core *Material-UI* team:
- [Hai Nguyen](https://twitter.com/haicea)
- [Matt Brookes](https://twitter.com/randomtechdude)
- [Nathan Marks](https://github.com/nathanmarks)
- [Kevin Ross](https://twitter.com/rosskevin)

Thank you [Oleg Slobodskoi](https://twitter.com/oleg008) for open sourcing JSS.

And thanks for having me on the blog!

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Olivier!