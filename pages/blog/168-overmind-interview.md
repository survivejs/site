---
title: 'Overmind - Frictionless State Management - Interview with Christian Alfoni'
date: 2019-02-15
headerImage: 'assets/img/overmind-header.jpg'
keywords: ['interview', 'react', 'state-management']
---

Although state management solutions like [Redux](/blog/redux-interview/) have become the standard, at least with React, there's still room for innovation in the space.

Sometimes what happens is that technology becomes reinterpreted. When you can see the technology in context, you can also figure out what went right and what went wrong. It's this process that gives room for innovation.

In this interview, [Christian Alfoni](https://twitter.com/christianalfoni) will tell us about a new state management solution - [Overmind](https://overmindjs.org/).

T> [I interviewed Christian earlier about Cerebral](/blog/cerebral-interview/), another state management solution. Consider Overmind as its spiritual successor.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/60a5ce418250e26b42baef8ef7314f39?s=200" alt="Christian Alfoni" class="author" width="100" height="100" />
</span>

You know, entering 35 years I am starting to be quite comfortable with my good and bad parts. I try to see the best in people and their communication, which is essential in open source, but I also obsess and can lash out when I can not get things to work. ;-) I am still trying to find the balance of family, open source and work though.

</p>

In the open source world, I have built a lot of different stuff. Everything from form validation in React ([formsy-react](https://github.com/formsy/formsy-react)), and converting markdown into a React tree ([marksy](https://www.npmjs.com/package/marksy)). I also try to build helpful services, where I am currently working on [boilproject.io](https://boilproject.io), soon to be officially released, where I have put most of my efforts though is into state management.

## How would you describe _Overmind_ to someone who has never heard of it?

On the surface, you could say that Overmind is just another state management tool. It manages state and changes to that state. It also helps you separate your low-level logic of doing side effects from your actual application logic.

## How does _Overmind_ work?

There is one decision you have to make early on with a state management tool. Should it be based on immutability or mutation tracking?

T> See [Christian's article about mutation tracking](https://itnext.io/updating-uis-value-comparison-vs-mutation-tracking-9f6fe912dd9a) to learn more.

In my experience immutability is a technically elegant solution. The problem is that the developer experience tends to suffer because of the amount of boilerplate code required. The issue of boilerplate applies from everything from defining a state change, to mapping state to components, to worrying about render performance if too much state is exposed, and so on.

When `Proxies` became available in all major browsers, I wanted to build a state management library that has as little API surface as possible. Overmind is based on the concepts of `state`, `actions` and `effects`. You write everyday functions and use the straight forward mutation API of JavaScript

"Mutation is the root of all evil" is like the battle cry of immutability, but with proxies that is not true. Overmind controls where and how mutations occur. It even tells you all about it in the development tool.

Here is an example of how straight forward the API is. The mutations are locked to these actions. You also see how we put an **effect** abstraction around the actual fetching of the posts which is the essence of Overmind, API simplicity. To boot the devtools tracks everything that happens here, even the effect:

```js
export const loadPosts = async ({ state, effects }) => {
  state.isLoadingPosts = true;
  state.posts = await effects.api.getPosts();
  state.isLoadingPosts = false;
};
```

Since we use proxies, we can also make sure that whatever state you expose to components you never worry about render performance. Whatever state is accessed by a component is tracked and will cause the component to render again, if changed.

With hooks in React you get a pretty rich API for exposing state and actions to your components:

```js
function MyComponent() {
  const { state, actions } = useOvermind();

  return (
    <div>
      <button onClick={actions.decrement}>-</button>
      {state.count}
      <button onClick={actions.increment}>+</button>
    </div>
  );
}
```

## How does _Overmind_ differ from other solutions?

It is dead simple. There are very few abstractions — no dispatching, action types, reducers, decorators, injection, etc. You have the configuration of your application based on `state, actions, effects` and all the actions have access to this configuration, allowing you to change the state, run effects, etc.

If you write TypeScript, Overmind will be an enjoyable experience. The reason is that Overmind was designed to make the types part of the API, not an afterthought. There were many iterations at the beginning of the project, and we depend on TypeScript version 3.2 or higher, which means there were features added to TypeScript during the development of Overmind which made the simple API possible.

Overmind also has a functional API. When you need to work on complex logic like debounced search, composing actions together, etc. it can often be expressed better in a functional way. The great thing is that you can move between the default imperative actions and the functional API to your liking:

```js
export const search: Operator<string> = pipe(
  action(({ state }, query) => {
    state.query = query;
  }),
  filter(({ state }) => state.query.length > 2),
  debounce(200),
  action(async ({ state, effects }) => {
    state.isSearching = true;
    state.searchResult = await effects.api.search(state.query);
    state.isSearching = false;
  })
);
```

Where Overmind also differs is that we took all the experience from Cerebral, building the development tool there, and brought it into Overmind. Going from browser extension, to an Electron app downloaded separately and now just `npx overmind-devtools`.

You get insight into all your state, all actions run, what state they change, what effects they run, what components are looking at state and specifically what state they are looking at, and we have planned so much more. When Overmind is officially released (currently just announced) we will shift our focus to the development tool.

## Why did you develop _Overmind_?

The last year I have been working as a consultant, doing Redux and TypeScript... and frankly, it was painful. In addition to the boilerplate of Redux itself all the typing also just became boilerplate. I felt I was writing a lot of code that never gave any value to the end customer.

I want to spend time on defining state and writing logic to change and consume that state. That is where you produce value for the customer. The less API to do so, the better.

I think Redux is an excellent solution when you know exactly how your application is going to work, but that is rarely the case in my experience. What I mean is that as developers we are explorers. We explore domains, state structures, component compositions and also styling.

It is crucial to have APIs that allows us to do that effectively or it becomes frustrating. At the same time though you still want to end up with a maintainable, testable and predictable code base where new features can be added later.

That is what we have tried to do with Overmind. You move blazingly fast in the "discovery phase" and when you are done exploring there is minimal effort to review and put `{ state, actions, effects }` where they belong.

The [announcement article](https://blog.usejournal.com/reducing-the-pain-of-developing-apps-cd10b2e6a83c) was named: "Reducing the pain of developing apps"... and that sums it up nicely :)

## What next?

We are doing some final iterations after feedback. Then we will start to focus on the devtools, which I am looking forward to. There are so many cool things we can do there :) Also Codesandbox will be refactored to Overmind, which I am also looking forward to.

T> [Read the Codesandbox interview to learn more about the service.](/blog/codesandbox-interview/)

## What does the future look like for _Overmind_ and web development in general? Can you see any particular trends?

I am incredibly happy that [MobX](https://mobx.js.org/getting-started.html) came around. Even though Facebook had its best intentions pushing immutability, it also has costs. Having a healthy balance of different approaches is essential so that we do not get stuck. I hope and believe that this trend will continue, allowing small projects to shake up the community as well.

I think Vue 3.0 is going to be huge. With proper TypeScript support, it becomes a very appealing framework for everyone I guess. Of course, React hooks is going to be massive.

I hope Overmind can become an inspiration on how simple you can make an API. I also hope it shows how far you can take development tools and what role they can play to manage complexity in apps.

T> [Read the MobX interview to learn more about the state management solution.](/blog/mobx-interview/)

## What advice would you give to programmers getting into web development?

Web development is not only about the tools, but also the community behind them. There are a hundred different tools for every problem to solve. As a newcomer, I encourage you to find helpful communities behind the tools. There you will get your questions answered, you will get encouragement, and often you also make some friends :-)

## Who should I interview next?

You know, I have been looking into [emotion.sh](https://emotion.sh/) lately and I love the new `css` prop that allows for the same "exploratory" approach, though for styling. You move insanely fast and can later refactor your styling when you know exactly how it is going to work. Would be cool to hear about the philosophy there. :)

## Any last remarks?

Good luck at [React Finland (24-26.4, Helsinki)](https://react-finland.fi/), wish you all the best, and I will be tuned in on the live stream. :-D

## Conclusion

Thanks for the interview, Christian! I think Overmind is an excellent example of what can happen when you reinterpret what exists while taking the current constraints, or lack of them, into account. The fact that Proxies are now widely supported by the browsers has opened new doors for developers to explore.

T> To learn more, [head to Overmind site](https://overmindjs.org/) and [check it out on GitHub](https://github.com/cerebral/overmind). Note that the solution works with React, Angular, and Vue.
