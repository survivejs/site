---
title: "Material-UI - React Components that Implement Google's Material Design - Interview with Olivier Tassinari"
date: 2017-07-21
headerImage: 'assets/img/material.jpg'
keywords: ['interview', 'react', 'ui']
editors: ['bebraw', 'karlhorky']
---

Design is difficult as you have to come up with a set of rules to describe it – a system. You don't always have to devise one yourself, and [Material Design](https://material.io/) by Google is one starting point.

To understand the topic better, I'm interviewing [Olivier Tassinari](https://twitter.com/olivtassinari), one of the authors of [Material UI](https://github.com/callemall/material-ui). It's a collection of React components which implement the system.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e2b3127c877367bce1892635ffe153d0?s=200" alt="Olivier Tassinari" class="author" width="100" height="100" />
</span>

I spent my childhood mastering LEGO, but I ended up as a software engineer. I started with web development back in 2008. I went on to graduate from one of the most prestigious and selective *grandes écoles* in France with a Master's Degree in computer science.
</p>

Sometime later I worked at Doctolib, the leading booking platform, and management software provider for doctors in France.

Besides coding I love sports, swimming, running and from time to time climbing.
I'm training to beat my 10k record next year.

## How would you describe *Material-UI* to someone who has never heard of it?

[Material-UI](https://github.com/callemall/material-ui) provides user interface components which can be reused in different contexts. That's our core mission - we are a UI library.

The React, Angular, Vue, Ember and Polymer ecosystems all have the concept of components.
We have chosen to implement the [Material Design Specification](https://material.io/guidelines/) in [React](https://facebook.github.io/react/) components.

Let's say you want to display a nice button, all you need to do is the following (example for Material-UI v1):

```javascript
import Button from 'material-ui/Button';

const MyApp = () => <Button>I Will Survive</Button>;

export default MyApp;
```

T> **Editor's note:** This would be a good chance to use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) as it can rewrite `import { Button } from 'material-ui';` to above while still pulling the same amount of code to the project.

## How does *Material-UI* work?

Most of the heavy lifting in *Material-UI* is done by React and [JSS](https://github.com/cssinjs/jss).
While we bet on React early in 2014 and have stuck with it,
we are already at our **third iteration** on our choice of a styling solution.
We started with Less, tried inline styles, and now are switching to **CSS in JS** thanks to JSS.

One of the first things people ask when they find out about the library is how to customize the style of it.
In the past our answer to that question was not ideal, but it's improving now.
Through the evolution of components in different contexts, we have identified and addressed four types of customization going (ordered from most specific to most generic):

- [Specific variation for a one-time situation](https://material-ui-1dab0.firebaseapp.com/customization/overrides#1-specific-variation-for-a-one-time-situation)
- [Specific variation of a component made by a user and used in different contexts](https://material-ui-1dab0.firebaseapp.com/customization/overrides#2-specific-variation-of-a-component)
- [Material Design variations like with the buttons](https://material-ui-1dab0.firebaseapp.com/customization/overrides#3-material-design-variations)
- [User global theme variation](https://material-ui-1dab0.firebaseapp.com/customization/overrides#4-user-global-theme-variation)

T> To learn more about JSS, see [the interview of Oleg Slobodskoi](/blog/jss-interview/), the author of the tool.

## How does *Material-UI* differ from other solutions?

It helps to understand the tradeoffs we have made.
At some point when building a UI library or even a presentational component, one aspect will need to be prioritized over another.
So let's see what we have prioritized and what we have not.

I believe that **most of the value of using a UI library comes from the API contract it provides**. But at the same time, API design is one of the hardest things to do when building a UI library.

1. We want the API to be consistent. We want to reduce the cognitive overhead of learning our API. Doing this is prioritized over an API tuned for specific contexts.
2. We want the API to be low-level. By low-level, we mean close to the DOM elements.
**It's simpler to work with no abstraction than the wrong abstraction** and low-level APIs more easily allow composition. We encourage users to build on top of it. If they create something that is helpful for more users, it can be integrated into the library. We have prioritized these things over a higher-level API.

However, sometimes we have to trade consistency and level of abstraction to have a good enough implementation.

3. We want our components to work in isolation as much as possible.
For instance, we consider global styles an anti-pattern, not to mention their implications for code splitting.
Also, developers should be able to use only one of our components without paying a large overhead.
4. We want the implementation to be performant.
5. We want our components to be easily customizable from the outside.
6. We want our components to be accessible.

Finally, we would rather support fewer use-cases well and allow people to build on top of the library than supporting more use-cases poorly.
You can read further in our [vision for the project](https://material-ui-1dab0.firebaseapp.com/discover-more/vision#material-ui-s-vision).

## Why did you develop *Material-UI*?

The credit for creating *Material-UI* goes to [Hai Nguyen](https://twitter.com/haicea).
I have been contributing since six months after the first release.

Ironically, my original motivation for choosing *Material-UI* for a [fun-side project](https://github.com/oliviertassinari/SplitMe) (to save time by using an existing React implementation of Material Design) is at odds with the effort I put in as a maintainer now. I have spent a lot of time improving the library.

But I don't regret it as I have learned a lot in the process, ranging from how to conduct social interactions in a community to the ins and outs of the web stack, API design, [visual testing](https://www.argos-ci.com/callemall/material-ui) and more.

## What comes next?

We are going to try to follow this plan:

1. Publish the first beta releases.
2. Fix the last API inconsistencies (in beta we will still make breaking changes).
3. Merge the beta branch into master.
4. Publish the first pre-releases and fix any issues that come up.
5. Publish v1! 🎉

At that point, some features and components from v0.x will be missing in v1.
So, what about them?

- Both versions can be used at the same time, meaning projects can progressively migrate to the new version, one component at the time.
- Over time and with help from the community, more and more components will be implemented in v1.
- Finally, in alignment with our vision, we would rather support fewer use-cases which may mean that some features and components will not be in the v1 core.

All of the plans above are in [our roadmap](https://github.com/callemall/material-ui/blob/master/ROADMAP.md).

## What does the future look like for *Material-UI* and web development in general? Can you see any particular trends?

*Material-UI* is popular in the React ecosystem, but Google recently changed their strategy with [material-components-web](https://github.com/material-components/material-components-web).
Depending on how well `material-components-web` solves the problem, *Material-UI* [might use it internally](https://github.com/callemall/material-ui/issues/6799).

But at the same time, *Material-UI*'s goal goes further than just providing an elegant implementation of the Material Design guidelines.
The Material Design specification sets the bar quite high, and developers should be able to benefit from that while easily customizing it for their needs.

This customization work is what I have been collaborating on lately at work.
We have been taking advantage of *Material-UI*'s customization power to implement a brand-specific UI far from the Material Design specification. You can think of it as a Bootstrap theme. I believe this can be a useful strategy for other developers too.

## What advice would you give to programmers getting into web development?

- Learn to focus on what matters. It's so easy to lose focus and work on the wrong thing.
- Learn the ins and outs of the abstractions you use.
- Keep the big picture in mind.
- Be curious about the details. In a codebase, nothing exists by chance. Learn and understand the "why" behind things.
- Sleep well.
- Stay active with something like sports. It's always how I get my best ideas.

## Who should I interview next?

[Arunoda Susiripala](https://twitter.com/arunoda) for the awesome work he has been doing with the **ZEIT** team on [Next.js](https://github.com/zeit/next.js).
React was the last JavaScript project that I was as excited about as I am about Next.js. The user experience and developer experience is way beyond anything I have used before.

## Any last remarks?

Special thanks to the core *Material-UI* team:

- [Hai Nguyen](https://twitter.com/haicea)
- [Matt Brookes](https://twitter.com/randomtechdude)
- [Nathan Marks](https://github.com/nathanmarks)
- [Kevin Ross](https://twitter.com/rosskevin)

Thank you [Oleg Slobodskoi](https://twitter.com/oleg008) for open sourcing JSS.

And thanks for having me on the blog!

## Conclusion

Thanks for the interview Olivier! It's great to see solid UI libraries for React as that has been traditionally a little weak point but looks like the situation is improving.

See [Material UI site](http://www.material-ui.com/) and [Material UI GitHub](https://github.com/callemall/material-ui) to learn more about the project.
