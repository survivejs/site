---
title: "Kea - High level abstraction between React and Redux - Interview with Marius Andra"
date: 2017-09-18
headerImage: "assets/img/kea.jpg"
keywords:
  ["interview", "react", "redux", "state-management"]
---

Redux took the React world by a storm when it was introduced. The simple idea provided a guideline for the community and "solved" state management for a lot of different kinds of applications.

That said, Redux comes with a certain amount of wiring. For this reason, people have begun to explore abstractions on top of it to make it more comfortable to use without sacrificing the core benefits provided by the library.

Kea by [Marius Andra](https://twitter.com/mariusandra) is one of these solutions. It provides a high-level abstraction between React and Redux.

T> To learn more about Redux, [read the interview of Dan Abramov](/blog/redux-interview).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/6b918f21a04da6c562766a3be2626ef7?s=200" alt="Marius Andra" class="author" width="100" height="100" />
</span>

Sure! I'm Marius. I was born in Estonia and now live in Belgium. I work as the CTO of [Apprentus](https://www.apprentus.com), a private lessons marketplace which I co-founded. I sometimes write about life on [my blog](https://mariusandra.com/blog/) and about coding on [Medium](https://medium.com/@mariusandra).

</p>

I started programming in QBASIC at the ripe old age of 8 and have been hooked ever since. From BASIC I moved to C and C++ (for [2D and 3D game development](https://web.archive.org/web/20110727142308/http://cone3d.gamedev.net:80/cgi-bin/index.pl)), Perl ([cgi-bin](http://amzn.to/2xlJzTS) web development) and Java (when I had to build a client-server chat applet). In high school, I wrote a lot of PHP, in university a lot of Java/JSP. Eventually, I moved to Ruby, and it was my language of choice... until ES6 came out.

During my PHP years, I wrote vanilla JavaScript (AJAX!). Later I went with Prototype and then jQuery. I completely skipped the Angular train. When Apprentus's jQuery spaghetti-code was no longer maintainable, I bet hard on Ember, rewriting most of the frontend in it. Unfortunately, I traded one set of problems for another... and frustrated a lot of mobile users with the 10sec load times. I'll spare you the rant!

In November of 2015, after a month-long vacation in New Zealand, I started learning React as part of a freelance gig. That's where the story of Kea begins.

## How would you describe _Kea_ to someone who has never heard of it?

Kea is an [extremely smart mountain parrot](https://www.youtube.com/results?search_query=kea+parrot) from New Zealand.

Kea is also an extremely smart abstraction between [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [Redux-Saga](https://redux-saga.js.org/) and [Reselect](https://github.com/reactjs/reselect). You may think of it either as _redux without the boilerplate_ or _the ease of `setState` with the connectivity of Redux_.

In a nutshell, React handles your views, Kea handles your logic.

## How does _Kea_ work?

Almost everything you do in Kea is done with the `kea` function. You use it to:

1. Create new logic stores (the place where your logic and data live).
2. Pull in data or actions from existing logic stores.
3. Connect logic stores to your React components.

Let's look at the simplest example: a counter that can be incremented and decremented with the push of a button.

It's built in the "inline kea" style, where we create a logic store and immediately attach it to a React component. I'm using ES decorators here for extra smoothness, but you don't necessarily have to use them.

I will assume you're familiar with the concepts in Redux. If not, please check out [the interview with Dan Abramov](/blog/redux-interview/) for some much-needed context... although you'll surely understand the code without it:

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";
import { kea } from "kea";

@kea({
  actions: () => ({
    increment: (amount) => ({ amount }),
    decrement: (amount) => ({ amount }),
  }),

  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) =>
          state + payload.amount,
        [actions.decrement]: (state, payload) =>
          state - payload.amount,
      },
    ],
  }),
})
export default class Counter extends Component {
  render() {
    const { counter } = this.props;
    const { increment, decrement } = this.actions;

    return (
      <div className="kea-counter">
        <p>Count: {counter}</p>
        <button onClick={() => increment(1)}>
          Increment
        </button>
        <button onClick={() => decrement(1)}>
          Decrement
        </button>
      </div>
    );
  }
}
```

It's all very _Reduxy_. You have actions and reducers. Both are pure functions. The code is very readable, and there's a clear separation of concerns.

Compare this to a standard Redux-based approach:

**constants/counter.js**

```javascript
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
```

**actions/counter.js**

```javascript
import { INCREMENT, DECREMENT } from "../constants/counter";

export function increment(amount = 1) {
  return {
    type: INCREMENT,
    payload: {
      amount: amount,
    },
  };
}

export function decrement(amount = 1) {
  return {
    type: DECREMENT,
    payload: {
      amount: amount,
    },
  };
}
```

**reducers/counter.js**

```javascript
import { INCREMENT, DECREMENT } from "../constants/counter";

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload.amount;
    case DECREMENT:
      return state - action.payload.amount;
    default:
      return state;
  }
}
```

**containers/counter.js**

```javascript
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";

import Counter from "../components/counter";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (amount) => {
      dispatch(increment(amount));
    },
    decrement: (amount) => {
      dispatch(decrement(amount));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
```

**components/counter.js**

```javascript
import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div className="kea-counter">
        <p>Count: {counter}</p>
        <button onClick={() => increment(1)}>
          Increment
        </button>
        <button onClick={() => decrement(1)}>
          Decrement
        </button>
      </div>
    );
  }
}
```

**store.js**

```javascript
// I'll spare you this part...
```

As you can see, the amount of boilerplate you save is HUGE! No more `mapStateToProps`. No more `export const INCREMENT = 'INCREMENT'`. You just write code that matters while retaining the clear functional approach that makes Redux so powerful.

Now, an example of this complexity can easily be written with React's own `setState`... but what if your specs change and you need access to this data from a different component? Move the state up and pass around a million props? That's not elegant enough for my taste.

With Kea, assuming you also need to display the value of `counter` in your header, you would do as follows:

**logic.js**

```javascript
import PropTypes from "prop-types";
import { kea } from "kea";

// no change to the code below
export default kea({
  actions: () => ({
    increment: (amount) => ({ amount }),
    decrement: (amount) => ({ amount }),
  }),

  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) =>
          state + payload.amount,
        [actions.decrement]: (state, payload) =>
          state - payload.amount,
      },
    ],
  }),
});
```

**index.js**

```javascript
import React, { Component } from "react";
import { connect } from "kea";

import counterLogic from "./logic";

// pull in actions and props from logic stores
@connect({
  actions: [counterLogic, ["increment", "decrement"]],
  props: [counterLogic, ["counter"]],
})
export default class Counter extends Component {
  // nothing changes here
  render() {
    const { counter } = this.props;
    const { increment, decrement } = this.actions;

    return (
      <div className="kea-counter">
        <p>Count: {counter}</p>
        <button onClick={() => increment(1)}>
          Increment
        </button>
        <button onClick={() => decrement(1)}>
          Decrement
        </button>
      </div>
    );
  }
}
```

**header.js**

```javascript
import React, { Component } from "react";
import { connect } from "kea";

import counterLogic from "./logic";

@connect({
  props: [counterLogic, ["counter"]],
})
export default class Counter extends Component {
  render() {
    const { counter } = this.props;

    return (
      <header>
        <strong>Kea is awesome!</strong>
        <span>Count: {counter}</span>
      </header>
    );
  }
}
```

This magical `@connect(options)` helper is actually just a shorthand for `@kea({ connect: options })`. By replacing `@connect` with `@kea`, you can also define new actions and reducers while pulling in existing ones.

### Selectors and Side Effects in Kea

Kea has two other notable features:

- First, you may use selectors (through Reselect) to re-calculate values only when the input changes.
- Second, you may use sagas for side-effects. Please read the documentation for [redux-saga](https://redux-saga.js.org) to learn more.

The [Github API](https://kea.js.org/guide/github) example is a good demonstration of both features:

```javascript
const githubLogic = kea({
  actions: () => ({
    setUsername: (username) => ({ username }),
    setRepositories: (repositories) => ({ repositories }),
  }),

  reducers: ({ actions }) => ({
    username: [
      "keajs",
      PropTypes.string,
      {
        [actions.setUsername]: (_, payload) =>
          payload.username,
      },
    ],
    repositories: [
      [],
      PropTypes.array,
      {
        [actions.setUsername]: () => [],
        [actions.setRepositories]: (_, payload) =>
          payload.repositories,
      },
    ],
  }),

  selectors: ({ selectors }) => ({
    // this will only be updated if "repositories" change.
    sortedRepositories: [
      () => [selectors.repositories],
      (repositories) =>
        repositories.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        ),
      PropTypes.array,
    ],
  }),

  // every time a "setUsername" action is called,
  // run the "fetchRepositories" worker
  takeLatest: ({ actions, workers }) => ({
    [actions.setUsername]: workers.fetchRepositories,
  }),

  workers: {
    *fetchRepositories(action) {
      const { setRepositories } = this.actions;
      const { username } = action.payload;

      yield delay(100); // debounce for 100ms

      const url = `${API_URL}/users/${username}/repos?per_page=250`;
      const response = yield window.fetch(url);
      const json = yield response.json();

      yield put(setRepositories(json));
    },
  },
});
```

T> Please dive into the [Kea documentation](https://kea.js.org) to learn more!

## How does _Kea_ differ from other solutions?

I wrote an [article on Medium describing how Kea differs from Redux](https://medium.com/@mariusandra/kea-vs-setstate-redux-mobx-dva-jumpstate-apollo-etc-4aa26ea11d02), MobX, DVA and other state management solutions. Please check it out for details! :)

## Why did you develop _Kea_?

In late 2015 I got a freelance gig, where my job was to code part of a fleet tracking solution. I was told to use React and Redux and given free reign over what other libraries I would use, how I would structure the code, etc. My employer tasked me with finding the best combination of React and Redux. The solution needed to be extremely verbose and maintainable since I would not stay on the project forever.

So I started looking, reading, experimenting, rewriting and inventing. There was scarce documentation on how to structure a React and Redux application. Most guides recommended the `actions/counter.js`, `constants/counter.js`, `reducers/counter.js`, etc. approach. I knew from my Ember days that this is a disaster and strongly preferred a features-based approach (`counter/actions.js`, `counter/constants.js`, etc.).

I tried and replaced many libraries, until I ended up with a combination of redux, reselect, redux-act and redux-saga... The resulting folder structure combined better ideas from the ducks approach and a `scenes` folder from the [Redux without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/hard_and_fast_rules_for_apps.html) book.

I wrote several helper functions to group actions, reducers and selectors into what I called "logic stores" and built glue to connect them to react components. I also wrote helpers that added sagas to the mix.

Eventually, I released all of it under the name `Kea` with no fanfare. The developers who knew it were hooked and quickly adopted it in their projects, but nobody else knew about it.

Since Kea turned out to be so useful for us, I decided to write documentation, develop tests and add features necessary for a proper release. And here we are!

## What next?

For Kea, the near-term goal is to develop an extension system, which would let one choose between sagas with `redux-saga` and epics with `redux-observable` for side effects or even let you use both at the same time ([Issue #40](https://github.com/keajs/kea/issues/40)). Of course, such a plugin system would open up other possibilities.

The ultimate goal is to stabilize the API for a 1.0 release. For this, we need as many people to test things as possible. So please try it out and send feedback! :)

For myself, once Kea hits a stable 1.0, I plan to shift my open source efforts to [Insights](https://github.com/mariusandra/insights), a "Desktop and Self-Hosted SQL-not-required data analytics and visualization tool". I have big plans for it but had to neglect it for a few months in favor of Kea.

## What does the future look like for _Kea_ and web development in general? Can you see any particular trends?

I've been wrong before with my technological predictions (JSP and Makumba are the new Ruby on Rails! Ember 4 ever!), so I'm hesitant to make bold claims.

That said, based on my experience moving from Ember to React and Redux, it felt like a whole new world opened before my eyes. Switching from an imperative paradigm to a functional one was counter-intuitive at first, but worth it. Who would have guessed that by limiting a number of operations I'm allowed to perform on my data, my code becomes simpler to read and mostly bug-free!

Functional programming has been around for a very long time, but it was never as mainstream as it is now. When you get into functional programming, you become a better programmer, no matter the language or paradigm. React brought this to the masses. In my mind, this will be its greatest legacy.

The difference between functional and imperative in frontend development is analogous to what [Paul Graham said about Lisp](http://www.paulgraham.com/avg.html):

> _"During the years we worked on Viaweb, I read a lot of job descriptions. A new competitor seemed to emerge out of the woodwork every month or so. The first thing I would do, after checking to see if they had a live online demo, was look at their job listings. After a couple of years of this, I could tell which companies to worry about and which not to. The more of an IT flavor the job descriptions had, the less dangerous the company was. The safest kind were the ones that wanted Oracle experience. You never had to worry about those. You were also safe if they said they wanted C++ or Java developers. If they wanted Perl or Python programmers, that would be a bit frightening - that's starting to sound like a company where the technical side, at least, is run by real hackers. If I had ever seen a job posting looking for Lisp hackers, I would have been really worried."_

Writing frontend code with React and Kea feels like writing Lisp when all of your competitors are stuck with Java.

I expect this trend towards functional programming to continue.

## What advice would you give to programmers getting into web development?

I would show them the example of [Jennifer Dewalt](https://jenniferdewalt.com/).

One summer morning, four years ago, I stumbled upon a post in HN titled "[I’m learning to code by building 180 websites in 180 days. Today is day 115](http://blog.jenniferdewalt.com/post/56319597560/im-learning-to-code-by-building-180-websites-in)".

It's an amazing story. The author started with no skills in web development and went on to build [amazing](https://jenniferdewalt.com/algae_tank/board) [examples](https://jenniferdewalt.com/minesweeper/game) all because she stuck with it and didn't give up.

It's been demonstrated that the main difference between people who make it and people who don't is grit ([read the book!](http://amzn.to/2wgAsEK)). This is the willingness to push through no matter what.

Combine grit with deliberate practice and [compound effects](https://mariusandra.com/blog/2014/01/how-to-be-productive/) and you'll be unstoppable!

So my advice for you is this: learn a bit, but learn often. Make a plan that for every day for the next 30 days, you will read 15 min of any programming tutorial, listen to 15 min of [the changelog](https://changelog.com/) or a watch 15 min of a good screencast.

Once you're done for the day, draw a big red X in your calendar. Continue like this for 30 days and set up a system that makes it [inevitable](https://mariusandra.com/blog/2012/05/make-your-success-inevitable-and-lose-weight/) that you succeed. For example, tell a friend that every day in the next 30 days you skip your 15 min of coding, you'll pay them 50 €.

You won't skip a day, and after 30 days, the habit of daily coding will be so ingrained, it will be hard to break. And you will have grown a lot!

That's my advice.

## Who should I interview next?

Everyone I thought about has already been interviewed! :).

Perhaps [Jason Miller](https://twitter.com/_developit), the guy behind Preact?

## Any last remarks?

Please try out [Kea](https://kea.js.org) and help make the React+Redux world a better place!

Oh, and if you found any of this useful, don't forget to [give kea a star on Github](https://github.com/keajs/kea)! It would mean a lot to me!

## Conclusion

Thanks for the interview Marius! Kea seems to hit a nice balance in API design. You can get the power of Redux without all the wiring.

To learn more, [head to Kea site](https://kea.js.org/), see also [Kea on GitHub](https://github.com/keajs/kea/). Marius also wrote [a comparison between Kea and alternatives](https://medium.com/@mariusandra/kea-vs-setstate-redux-mobx-dva-jumpstate-apollo-etc-4aa26ea11d02).
