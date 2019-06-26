---
title: 'Overmind - Frictionless State Management - Interview with Christian Alfoni'
date: 2019-02-15
updateDate: 2019-06-26
headerImage: 'assets/img/overmind-header.jpg'
keywords: ['interview', 'react', 'state-management']
---

Although state management solutions like [Redux](/blog/redux-interview/) have become the standard, at least with React, there's still room for innovation in the space.

Sometimes what happens is that technology becomes reinterpreted. When you can see the technology in context, you can also figure out what went right and what went wrong. It's this process that gives room for innovation.

In this interview, [Christian Alfoni](https://twitter.com/christianalfoni) will tell us about a new state management solution - [Overmind](https://overmindjs.org/).

T> [I interviewed Christian earlier about Cerebral](/blog/cerebral-interview/), another state management solution. Consider Overmind as its spiritual successor.

## Can you tell a bit about yourself?s

![Christian Alfoni|100|100|author](https://www.gravatar.com/avatar/60a5ce418250e26b42baef8ef7314f39?s=200")

I am a 35-year-old Norwegian developer who figured out coding was his big passion around 26. That said, I have spent many years face to face with customers, drinking coffee, and sometimes I miss that a lot. Everybody needs recognition in some form, and it just hits you harder when it is face to face.

As much as I love open source you rarely get a face to face recognition of creating value for someone. "thanks, I learned something from you", or "man, I enjoyed using this tool to solve someone else's problem" beats 10.000 stars on Github any day.

I have to admit I am at the airport with a delayed flight, got two beers in me and a bit of gin and tonic so I got a bit philosophical there. In terms of contributions, I have been sharing most of the stuff I have created. Sometimes bad ideas, other times, good ideas and often just iterating existing ideas to try to push them further.

What I mostly care about is state management. It is one of these challenging problems as your perspective on it is heavily affected by the types of apps you build. It is almost like speaking different languages at times. But where I have given my perspective is with [cerebraljs](https://www.cerebraljs.com) and [Overmind](https://www.overmindjs.org). I have even contributed to the world of [flutter](https://www.flutter.dev) with the [flutter_observable_state](https://pub.dev/packages/flutter_observable_state#-readme-tab-) package.

I have also worked a lot on [Codesandbox](https://www.codesandbox.io), trying to wield the extreme requirement to state management there. My efforts there will increase over the Summer and looking forward to showing people how we can separate our concerns, lower the threshold of contributions, and have great insight into how the application works.

T> [Read the Codesandbox interview to learn more about the service.](/blog/codesandbox-interview/)

## How would you describe _Overmind_ to someone who has never heard of it?

Overmind is a state management library. That said, it takes things a bit further and pushes you to conceptually and practically think of the [UI of the application as an implementation detail](https://medium.com/swlh/ui-as-an-implementation-detail-7fb9f952fb43). The components, no matter what framework, is just a powerful way to compose a UI.

That means Overmind can contain all the state, effects, and logic required to make your application work. Separating all your state management from the UI is of course not a new idea, we have been doing this for ages.

In this "components can do all world" I think it is crucial that someone states that even though components is an excellent UI composition tool, it is not necessarily an awesome state management tool. It can be a practical approach to keep those two things completely separate. At least that is my experience.

## How does _Overmind_ work?

There is one decision you have to make early on with a state management tool. Should it be based on immutability or mutation tracking?

In my experience immutability is a technically elegant solution. The problem is that the developer experience tends to suffer because of the amount of boilerplate code required. The issue of boilerplate applies from everything from defining a state change, to mapping state to components, to worrying about render performance if too much state is exposed, and so on.

There were two things we wanted to do with Overmind. The first thing was to have an api-less api. The other was to give a kick-ass experience using TypeScript. Api-less api means that we take as much advantage of the native API of JavaScript as possible, which results in you defining your state as simple objects, effects as simple methods, and logic as everyday functions. That said, Overmind is aware of these building blocks and enhances them.

T> See [Christian's article about mutation tracking](https://itnext.io/updating-uis-value-comparison-vs-mutation-tracking-9f6fe912dd9a) to learn more.

### State as Plain Objects

One of those enhancements is that even though you define your state as plain objects, arrays, strings, etc., it becomes reactive. That means when you change some state, Overmind can pinpoint what components are interested in that change, even though you use the native mutation api of JavaScript.

![devtools_state](assets/img/overmind/overmind-01.png)

It can do this because it uses [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). What is essential to understand about this is that mutation and proxies allows for a far more optimized notification of what has changed compared to immutability.

With immutability, a change to a posts title in an array causes a change to the post itself and also the array with all the posts. That means any component looking at the array of posts will reconcile. Since UIs often consists of lists of things, this can often cause performance issues, as the whole list in the UI evaluates when only a single value changes but this is not the case with mutable proxied state.

The chosen approach also increases debugging experience as Overmind can tell you exactly what value you changed, and it knows the dependencies of the components.

![devtools_mutate](assets/img/overmind/overmind-02.png)

### All Actions Have The Same First Argument

The second enhancement is that every function, or actions as we call them, will have the same first argument. This argument is injected and contains all the state, effects, and other actions of your application. That means there is no isolation. Holding your state, logic, and effects in isolation can cause more harm than good in my experience. Splitting up your domains and concerns should be a discipline, not forced upon you.

Who has ever created an application where you know from the start exactly how your state and logic should be split up and contained in the end? Does an application ever "end"? By allowing you to freely explore the domains of your application without forcing you to refactor is freedom. And you know, sometimes you do have cross-domain state access and logic.

There are other aspects I could go into related to Overmind, but I think those are the two most fun to bring up :)

### Example of the API

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

You know, the two big solutions out there now is Redux and MobX/MobX-State-Tree. Where Overmind differs the most is that it is not just a state management solution, meaning it defines and changes state. It also manages effects.

If you think about it, it is quite insane how we keep importing all these generic tools directly into our code — locking ourselves to "the current technology". In practice, this might not be such a big deal, but from a coding principle, it is not a good practice.

For example, in Codesandbox, we have an API based on GraphQL. In a React component, we import `apollo-react` directly and query some sandboxes for the dashboard. While this is easy and straightforward, we just made React, Apollo and GraphQL a hard dependency of the Codesandbox application. That is not good.

If we rather created an effect API `server.getDashboardSandboxes()` we suddenly have no requirement to React, Apollo or GraphQL. All of them becomes an implementation detail. And this is what Overmind is pushing.

Your application is the state, effects, and the logic to manage them. The UI is an implementation detail, and the tools you use to allow the app to talk to the outside world is also an implementation detail. What this results in is logic that is "to the point".

All the naming is explicitly related to the domains of your application. You can change out the UI or run the same app on multiple environments, and you can change out any of the tools your application uses to talk to the outside world, without touching the application itself. It is just about separation of concerns really, but with a concept of effects, you know where and how to do that separation while gaining additional debugging information.

![devtoos_effects](assets/img/overmind/overmind-03.png)

### Example of a Complex Action

When you need to work on complex logic like debounced search, composing actions together, etc. it can often be expressed better in a functional way. The great thing is that you can move between the default imperative actions and the functional API to your liking:

```js
export const search = pipe(
  mutate(({ state }, query) => {
    state.query = query;
  }),
  filter(({ state }) => state.query.length > 2),
  debounce(200),
  mutate(async ({ state, effects }) => {
    state.isSearching = true;
    state.searchResult = await effects.api.search(
      state.query
    );
    state.isSearching = false;
  })
);
```

## Why did you develop _Overmind_?

I learned so much developing [cerebraljs](https://cerebraljs.com/). I think it is still a compelling way to write declarative logic, managing state and effects, but there is no way it will ever have first-class support for TypeScript. The API is too "exotic" so TypeScript was one reason. The other purpose was this push back and forth about [value comparison VS tracking mutations](https://itnext.io/updating-uis-value-comparison-vs-mutation-tracking-9f6fe912dd9a).

You can think of Redux as value comparison and MobX as tracking mutations. The two approaches affect how much time you spend "boilerplating", time spent evaluating performance issues and also the API is affected by the two methods.

For me, it is only a question of which one of the approaches gives the best developer experience. I love the implementation of Redux. It is such a neat and straightforward idea, much because of immutability. That said, the resulting API with reducers, configuring the project, boilerplating actions, and `mapStateToProps` and being careful about what state you expose related to performance does not give the developer experience I want.

MobX is opposite. The implementation can seem magical, even "hackish" (although it is not) and you go against "mutation is the root of all evil". But the developer experience is impressive in comparison!

Overmind is taking experiences learned from Redux, MobX and Cerebral and tries to create the best possible developer experience possible based on my personal experience and the feedback from the Cerebral community and people testing Overmind during its development.

T> [Read the MobX interview to learn more about the state management solution.](/blog/mobx-interview/). [See also the Redux interview with Dan Abramov.](/blog/redux-interview/)

## What next?

For me? Well, I am going 100% freelance after summer and will spend my time with startups. I have been helping out quite a bit with Codeandbox since the beginning, and now that they are funded, I can help out even more. So really looking forward to sharing experiences building such an insanely complex application, both in terms of state management and UI composition :)

## What does the future look like for _Overmind_ and web development in general? Can you see any particular trends?

What I learned from Cerebral is to "lock the API" after the official release. We spent six months iterating the API of Overmind to see how "API less" and straight forward we could make it. Although you almost do no typing in your app, there is a lot of typing inside Overmind; this also took a lot of iterations to get right.

That does not mean there will not be new features added to Overmind, but we will not change out anything. If we ever get to a point where we want to do something radically different, that will be a new project.

So now that we have our API, we want to see what we can do with the concept of building apps without the UI. As previously mentioned, the idea is nothing new, and you can do it with all the before suggested solutions, but the tooling for doing so can be improved a lot. Even to the point where you do not have to fire up the browser to work on your state and logic. No more questions about where should my state and logic live? Inside a component? Where in the component tree?

You build your app, and then you attach a UI to that app. That does not mean component state, and logic is terrible; it is essential. But the state and logic you put in components will instead be related to building the actual UI, not defining how your application should work. This way of thinking has helped me, and I want to explore it even further. "UI as an implementation detail" :-)

## What advice would you give to programmers getting into web development?

Take courses and try to build something, even though it has been created before. There are no right and wrong. React is not wrong about their approach; Vue is not wrong about their approach, and Angular is not wrong about their approach. You can build most things with any one of them.

## Who should I interview next?

You know, I have this guy I do a podcast with which built a library called [Immstruct](https://github.com/omniscientjs/immstruct) I long time ago. It was quite popular and even mentioned related to React. What is interesting about this project is that it has many of the ideas popularized today, also related to components. Even though this project does not have broad usage now, it could be fun to see that these ideas still live out there in other types of implementations. :-)

So like, do the same interview as if Immstruct was released today, how they thought about web development then, the future, etc. Think it would be interesting :) Anyways, just an idea!

## Any last remarks?

You know, building tools and putting them out there is not easy. Cause it can often come out as "What you are doing is wrong, this is the way to do it". But that is not the intention. The intention is to share concepts and approaches to solving problems. We spend a lot of time in front of the computer trying to solve real problems for people, the more we iterate and share knowledge around tools, the more effective we become at solving these REAL problems.

## Conclusion

Thanks for the interview, Christian! I think Overmind is an excellent example of what can happen when you reinterpret what exists while taking the current constraints, or lack of them, into account. The fact that Proxies are now widely supported by the browsers has opened new doors for developers to explore.

T> To learn more, [head to Overmind site](https://overmindjs.org/) and [check it out on GitHub](https://github.com/cerebral/overmind). Note that the solution works with React, Angular, and Vue.
