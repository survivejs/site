---
title: 'redux-saga - Saga Middleware for Redux to Handle Side Effects - Interview with Yassine Elouafi'
date: 2016-07-18
headerImage: 'assets/img/dice.jpg'
keywords: ['interview', 'react', 'redux', 'redux-saga', 'state-management']
---

When developing front-ends, handling asynchronous behavior is always bit of a challenge. [Yassine Elouafi](https://twitter.com/YassineElouafi2)'s [redux-saga](https://www.npmjs.com/package/redux-saga) provides one solution to this problem. Read on to learn more about sagas and **redux-saga** in particular.

T> Check out [the earlier interview about Redux](./redux-interview) if you haven't dug into [Redux](http://redux.js.org/) just yet.

### Can you tell a bit about yourself?

<p>
  ![Yassine Elouafi|100|100|author](assets/img/interviews/yassine.jpg)

  My name is Yassine Elouafi, 39 old and Dad for 2 kids. I live in Tangier (Morocco) and work on a real estate company. I have a lot of passion for coding and learning and hacking new things, exploring new ideas.
</p>

Graduated? Nope (well yes and no, I'm graduated in Finances not in CS). I'm a self taught programmer. I hack things for myself, my company and occasionally others.

## How would you describe *redux-saga* to someone who has never heard of it?

It is a Redux middleware for handling **side effects**.

### Redux Middlewares

Redux middleware is an add-on you plug into Redux to get additional features. Redux is an opinionated library for managing the state of an application. Without middleware, all we can do in Redux is compute a new state from the previous state and a given action through reducers which are pure functions.

All the handling inside reducers is synchronous and pure. But in real applications we need also to do things that are asynchronous (may not complete immediately like an AJAX request) and impure (change the state of the outside world, like saving to a database). In functional programming (FP) jargon we commonly refer to those things as **side effects**.

> The *redux-saga* middleware isolates all side effects into software artifacts called **sagas** so that side effects can be managed.

### Sagas

The term *saga* was historically used by [Hector Garcia-Molina and Kenneth Salem](http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf) to define a mechanism to handle long lived transactions in database systems. But in *redux-saga*, The closest meaning is actually a [process manager](https://msdn.microsoft.com/en-us/library/jj591569.aspx) basically: "a process that receive events, and may emit new events (sync or async), aiming to orchestrate complex workflows inside your application" (kudos to @slorber).

I want to emphasize that you don't actually have to go through academic papers and backend concepts in order to use *redux-saga*. It's sufficient to know that a saga is a piece of code which runs in the background, watch for dispatched actions, may perform some async calls (or synchronous impure calls like browser storage) and can dispatch other actions to the store.

## How does *redux-saga* work?

Sagas are implemented using generator functions (a new ES2015 feature). Unlike normal functions which run to completion and return a final value, generator functions can be paused and resumed on demand and can return (more accurately `yield`) multiple values.

> In *redux-saga*, Generators typically yield *effects*. They are simply JavaScript objects containing instructions to be performed by the middleware.

To understand how saga works, I'll illustrate with a fairly common example and compare with [redux-thunk](https://www.npmjs.com/package/redux-thunk), the idiomatic way to handle async actions in Redux.

### Requesting Data Using *redux-thunk*

Suppose we want to request some data from a given url each time an UI Button is clicked. With *redux-thunk* we'll write a thunk which will typically look like:

```javascript
function fetchUrl(url) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_REQUEST'
    });

    fetch(url).then(data => dispatch({
      type: 'FETCH_SUCCESS',
      data
    }));
  }
}
```

Then, assuming the thunk middleware is mounted in the Redux store, we can dispatch the above function like this:

```javascript
dispatch(
  fetchUrl(url)
):
```

That is, You write the *task* to be performed (the `fetchUrl` which return the thunk). And you invoke that task directly from UI components.

If you don't want to pollute your React components with business logic, then thunks are a the simplest and the most idiomatic way to perform side effects in Redux. However, they may have some drawbacks:

1. In order to test the logic inside thunks, you must mock all invoked functions, including the store methods.
2. Coordinating concurrent tasks can be difficult: If you want to cancel a pending fetch whenever a new fetch is triggered, you'll have to use the Redux store to keep track of the control state (whether the previous fetch is still running or not). It might not be that difficult for simple concurrency requirements but can get quickly become awkward.
3. Business logic tends to be scattered in various places: startup modules, components, and thunks themselves.

### Requesting Data Using *redux-saga*

In *redux-saga*, things are slightly different. First, UI Components never invoke the tasks themselves, instead they always dispatch plain object actions to notify that something happened in the UI:

```javascript
dispacth({
  type: 'FETCH_REQUEST',
  url: /* ... */}
);
```

Everything else must be encapsulated inside sagas. To perform the task that will perform the actual fetch, you must create a saga that will *watch* for the dispatched action `FETCH_REQUEST` and *fork* the task whenever we get the desired action:

```javascript
import { take, fork, call, put } from 'redux-saga/effects';

// The watcher: watch actions and coordinate worker tasks
function* watchFetchRequests() {
  while(true) {
    const action = yield take('FETCH_REQUEST');

    yield fork(fetchUrl, action.url);
  }
}

// The worker: perform the requested task
function* fetchUrl(url) {
  const data = yield call(fetch, url);

  yield put({
    type: 'FETCH_SUCCESS',
    data
  });
}
```

Note all the 4 functions we imported from `redux-saga/effects` are pure functions. I said previously that generators yield plain JavaScript objects called effects. The above functions serve that purpose.

Each function constructs a particular object which embeds some instruction to be fullfilled by the middleware. For example `call(fetchUrl, url)` returns an object like `{ type: CALL, function: fetchUrl, args: [url] }`.

This is a fundamental concept in *redux-saga*: we're not actually executing the side effect (i.e. function call) ourselves, but just constructing a description of the desired effect. The middleware takes care of the real execution then hands the result back to the generator.

In the above example, we used `yield take('FETCH_REQUEST')` to tell the middleware that we're waiting for an action of type `FETCH_REQUEST`. What happens is that the middleware will block the `watchFetchRequests` generator until a `FETCH_REQUEST` action is dispatched. Once we get a matching action, the middleware will resume the generator with the result which is the action object.

The next instruction `fork(fetchUrl, action.url)` tells the middleware to *fork* a new `fetchUrl` task with `action.url` as argument. Now the middleware will invoke the `fetchUrl` Generator but **without blocking** `watchFetchRequests`. It's as if the 2 tasks are now evolving in parallel.

`watchFetchRequests` continues listening to other `watchFetchRequests` actions *while* the `fetchUrl` starts doing its work. Of course in reality only on thing can be done at time since JavaScript is single threaded, *redux-saga* is performing the scheduling behind the scene to make it look like things are done in parallel.

Similarly, in `fetchUrl`, we used `call(fetch, url)` to instruct the middleware to call the `fetch` function. But this time, the call is *blocking*, the middleware will suspend the generator until the `Promise` returned by `fetch` is resolved (or rejected) then resume the generator with the resolved value (or throw with the rejected error)

It may sound like a lot of indirection, but this separation between effect creation and execution makes it really simple to test the logic inside generators. For example, we can test `fetchUrl` simply by iterating over the generator and inspecting the yielded effects:

```javascript
const generator = fetchUrl();

assert.deepEqual(
  generator.next().value,
  take('FETCH_RESULT')
);

// we can easily mock the result of the `take('FETCH_RESULT')` call
const mockAction = {
  url: 'some url'
};

// and inject the result back into the Generator
assert.deepEqual(
  generator.next(mockAction).value,
  take('FETCH_RESULT')
);
```

And since generators are stateful, we have much more flexibility to coordinate concurrent tasks. For example, if we want to cancel any pending fetch whenever we request a new fetch, we can store a reference to the current task in a local variable and use the `cancel` effect:

```javascript
import { take, fork, cancel, call, put } from 'redux-saga/effects';

function* watchFetchRequests() {
  let currentTask;

  while(true) {
    const action = yield take('FETCH_REQUEST');

    if(currentTask) {
      yield cancel(currentTask);
    }

    currentTask = yield fork(fetchUrl, action.url);
  }
}
```

## How does *redux-saga* differ from other solutions?

- **Declarative effects**: all operations inside sagas are yielded as plain JavaScript objects, which then get executed by the middleware. This makes it very easy to test the business logic inside the saga. You simply iterate over the generator and test the yielded sequence of objects by a simple `deepEqual`.

In other solutions, you'll typically have to mock all the surrounding environment which can make the tests very complicated and less reliable.

- **Advanced async control flow and concurrency management**: You can describe your async flow using a simple synchronous style and familiar control flow constructs (`if/else`, loops, `try/catch`...).

The library also provides primitives and operators to manage concurrency between tasks (e.g. coordinate concurrent AJAX requests). You can *fork* multiple background tasks in parallel. You can also cancel a running task.

- Sagas has also some architectural benefits: In *redux-saga* applications, since all side effects are moved into sagas, UI components do not typically perform any business logic but only dispatch actions as pure JavaScript objects to notify what happened.

This makes the components more reusable in different contexts. A saga can also act as a decoupling point between 2 parts of the UI, by listening for events from one part and emitting actions that may update another part of the UI. Without any part being aware of the other part.

## Why did you develop *redux-saga*?

It all started with [an article](https://medium.com/@yelouafi/react-less-virtual-dom-with-snabbdom-functions-everywhere-53b672cb2fe3#.98gygakup) I wrote about virtual DOM and a functional front-end architecture inspired by Elm. The architecture makes it possible to write the entire web application using pure functions. After finishing the article, I was looking for the possible ways to introduce side effects. Elm has already introduced the concept of Declarative Effects (effects as data).

I [started a discussion](https://github.com/paldepind/functional-frontend-architecture/issues/20) in the [functional-frontend-architecture](https://github.com/paldepind/functional-frontend-architecture) repository which turned out to be immensely useful.

Sebastien Lorber (@slorber) introduced me to the concept of Sagas as *process managers*: a kind of background threads which listen for incoming events and can emit themselves other events. Although my initial focus was not on Redux, I started playing with the idea as a Redux middleware and later realized I could have a more powerful implementation using Generators and by introducing the `take` effect.

Instead of subscribing to Redux actions and continually invoke a piece of code (the handler) each time an action is dispatched. I could describe the concept of *waiting an action* as a normal function call which would block the generator until the expected action is dispatched. This would offer a lot more flexibility to describe complex async flows.

## What next?

I'm still toying with 'alternative' ways (to virtual DOM) to describe dynamic and interactive UIs. I was recently looking at [Glimmer](https://github.com/tildeio/glimmer) (the rendering engine behind Ember) which has some interesting ideas borrowed from Functional Reactive Programming (FRP).

Basically it's a kind of a pull based model (no subscription or change propagation through listeners) which is a concept I'm very attached to. I intend to play with the concept when I have some time and see if we can combine the data-flow model of React with the templating approach of Glimmer/Ember.

## What does the future look like for *redux-saga* and web development in general? Can you see any particular trends?

Hard to tell. There are more and more people using *redux-saga* but front-end development is continually evolving and the community is more receptive to innovations (more than in other languages like Java for example).

There seems to be an increasing interest on static typing. There is also a trend toward declarative data fetching (GraphQL, Falcor) although less marked (perhaps because the solutions are still very young and evolving).

## Who should I interview next?

Brian Lonsdorf (@drboolean). He's doing a great job on demystifying FP concepts to JavaScript developers.

## Conclusion

Thanks for the interview Yassine! Sagas seem like a great solution to problems of asynchronous sort.

If you want to give redux-saga a go, head to the [project GitHub](https://github.com/yelouafi/redux-saga) and learn more!
