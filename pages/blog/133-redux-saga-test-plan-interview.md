---
title: 'redux-saga-test-plan - Test Redux Saga with an easy plan - Interview with Jeremy Fairbank'
date: 2017-12-20
headerImage: 'assets/img/plan.jpg'
keywords: ['interview', 'redux', 'redux-saga', 'testing', 'state-management']
editors: ['bebraw', 'karlhorky']
---

Redux Saga is famous for being easy to test but what if it could be even more comfortable. *redux-saga-test-plan* by [Jeremy Fairbank](https://twitter.com/elpapapollo) was designed precisely for this purpose.

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://www.gravatar.com/avatar/94bd558238b69c45d3d3e15797ae94f7?s=200" alt="Jeremy Fairbank" class="author" width="100" height="100" />
  </span>

I'm a software engineer and consultant with [Test Double](https://testdouble.com/). We believe that software is broken, and we're here to fix it. Our mission is to improve how the world builds software.
</p>

I've been doing front-end development for almost ten years now and enjoy the paradigms that React and Redux helped introduce to the front-end world. I've created a few open source projects that work well with the React and Redux ecosystem such as [revalidate](https://github.com/jfairbank/revalidate), [redux-saga-router](https://github.com/jfairbank/redux-saga-router), and, the topic of this interview, [_redux-saga-test-plan_](https://github.com/jfairbank/redux-saga-test-plan).

I'm a huge fan of functional programming and Elm. In fact, I'm currently writing a book on Elm with [The Pragmatic Programmers](https://pragprog.com/) called _Programming Elm: Build Safe and Maintainable Front-End Applications_. The book is over halfway complete and should be available sometime in Spring 2018.

## How would you describe _redux-saga-test-plan_ to someone who has never heard of it?

[_redux-saga-test-plan_](https://redux-saga-test-plan.jeremyfairbank.com/) is a library for easily testing [redux-saga](https://redux-saga.js.org/).

T> If you're unfamiliar with redux-saga, check out [the redux-saga interview](/blog/redux-saga-interview/) with creator Yassine Elouafi.

_redux-saga-test-plan_ removes the headache of manually testing saga generator functions that couple your tests to their implementations. It offers a declarative, chainable API for testing that your saga yields certain effects without worrying about other effects or the order effects were yielded. It also runs your saga with redux-saga's runtime so that you can write integration tests, or you can use _redux-saga-test-plan's_ built-in effect mocking to write unit tests too.

## How does _redux-saga-test-plan_ work?

Let's look at some example sagas to see how _redux-saga-test-plan_ makes it easy to test them.

### Simple API Saga

Given this simple saga for fetching an array of users:

```javascript
import { call, put } from "redux-saga/effects";

function* fetchUsersSaga(api) {
  const users = yield call(api.getUsers);
  yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
}
```

You can test it with _redux-saga-test-plan_ like this:

```javascript
import { expectSaga } from "redux-saga-test-plan";

it("fetches users", () => {
  const users = ["Jeremy", "Tucker"];

  const api = {
    getUsers: () => users,
  };

  return expectSaga(fetchUsersSaga, api)
    .put({ type: "FETCH_USERS_SUCCESS", payload: users })
    .run();
});
```

The `expectSaga` function accepts a saga as an argument as well as any additional arguments for the saga itself. Here, we pass in the `fetchUsersSaga` and inject a mock `api` to fake the API response.

`expectSaga` returns a chainable API with lots of useful methods. The `put` method is an assertion that the saga will eventually yield a `put` effect with the given `FETCH_USERS_SUCCESS` action.

The `run` method starts the saga. _redux-saga-test-plan_ uses redux-saga's `runSaga` function to run the saga like it would be run in your application. `expectSaga` tracks any effects your saga yields, so you can assert them like we do with `put` here.

Sagas are inherently asynchronous, so _redux-saga-test-plan_ returns a promise from the `run` method. You need that promise to know when the test is complete. In this example, we're using Jest so that we can return the promise directly to it.

Because _redux-saga-test-plan_ runs asynchronously, it times out your saga after a set amount of time. You can [configure the timeout length](http://redux-saga-test-plan.jeremyfairbank.com/integration-testing/timeout.html#adjusting-timeout).

### Built-in Mocking

If you don't inject dependencies like the `api` object, you can use `expectSaga`'s built-in mocking mechanism called _providers_. Let's say you import `api` from another file and use it like this instead:

```javascript
import { call, put } from "redux-saga/effects";
import api from "./api";

function* fetchUsersSaga() {
  const users = yield call(api.getUsers);
  yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
}
```

You can mock it with the `provide` method like this:

```javascript
import { expectSaga } from "redux-saga-test-plan";
import api from "./api";

it("fetches users", () => {
  const users = ["Jeremy", "Tucker"];

  return expectSaga(fetchUsersSaga)
    .provide([[call(api.getUsers), users]])
    .put({ type: "FETCH_USERS_SUCCESS", payload: users })
    .run();
});
```

The `provide` method takes an array of matcher-value pairs. Each matcher-value pair is an array with an effect to match and a fake value to return. _redux-saga-test-plan_ will intercept effects that match and return the fake value instead of letting redux-saga handle the effect. In this example, we match any `call` effects to `api.getUsers` and return a fake array of users instead.

### Dispatching Effects and Forked Sagas

_redux-saga-test-plan_ can handle more complex saga relationships like this:

```javascript
import { call, put, takeLatest } from "redux-saga/effects";
import api from "./api";

function* fetchUserSaga(action) {
  const id = action.payload;
  const user = yield call(api.getUser, id);

  yield put({ type: "FETCH_USER_SUCCESS", payload: user });
}

function* watchFetchUserSaga() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUserSaga);
}
```

In this example, `watchFetchUserSaga` uses `takeLatest` to handle the latest `FETCH_USER_REQUEST` action. If something dispatches `FETCH_USER_REQUEST`, then redux-saga forks `fetchUserSaga` to handle the action and fetch a user by id from the action's `payload`. You can test these sagas with _redux-saga-test-plan_ like this:

```javascript
import { expectSaga } from "redux-saga-test-plan";
import api from "./api";

it("fetches a user", () => {
  const id = 42;
  const user = { id, name: "Jeremy" };

  return expectSaga(watchFetchUserSaga)
    .provide([[call(api.getUser, id), user]])
    .put({ type: "FETCH_USER_SUCCESS", payload: user })
    .dispatch({ type: "FETCH_USER_REQUEST", payload: id })
    .silentRun();
});
```

_redux-saga-test-plan_ captures effects from forked sagas too. Notice that we call `expectSaga` with `watchFetchUserSaga` but still test the behavior of `fetchUserSaga` with the `put` assertion.

We use the `dispatch` method to dispatch a `FETCH_USER_REQUEST` action with a `payload` id of `42` to `watchFetchUserSaga`. redux-saga then forks and runs `fetchUserSaga`.

`takeLatest` runs in a loop so that _redux-saga-test-plan_ will time out the saga with a warning message. You can safely silence the warning with the alternative `silentRun` method since we expect a timeout here.

### Error Handling

You can use providers to test your saga's error handling too. Take this new version of `fetchUsersSaga` that uses a `try-catch` block:

```javascript
function* fetchUsersSaga() {
  try {
    const users = yield call(api.getUsers);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
  } catch (e) {
    yield put({ type: "FETCH_USERS_FAIL", payload: e });
  }
}
```

You can import `throwError` from `redux-saga-test-plan/providers` to simulate an error in the `provide` method:

```javascript
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

it("handles errors", () => {
  const error = new Error("Whoops");

  return expectSaga(fetchUsersSaga)
    .provide([[call(api.getUsers), throwError(error)]])
    .put({ type: "FETCH_USERS_FAIL", payload: error })
    .run();
});
```

### Redux State

You can also test your Redux reducers alongside your sagas. Take this reducer for updating the array of users in the store state:

```javascript
const INITIAL_STATE = { users: [] };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
```

You can use the `withReducer` method to hook up your reducer and then assert the final state with `hasFinalState`:

```javascript
import { expectSaga } from "redux-saga-test-plan";

it("fetches the users into the store state", () => {
  const users = ["Jeremy", "Tucker"];

  return expectSaga(fetchUsersSaga)
    .withReducer(reducer)
    .provide([[call(api.getUsers), users]])
    .hasFinalState({ users })
    .run();
});
```

### Available Effect Assertions

Here are the other effect assertions available for testing.

* `take(pattern)`
* `take.maybe(pattern)`
* `put(action)`
* `put.resolve(action)`
* `call(fn, ...args)`
* `call([context, fn], ...args)`
* `apply(context, fn, args)`
* `cps(fn, ...args)`
* `cps([context, fn], ...args)`
* `fork(fn, ...args)`
* `fork([context, fn], ...args)`
* `spawn(fn, ...args)`
* `spawn([context, fn], ...args)`
* `join(task)`
* `select(selector, ...args)`
* `actionChannel(pattern, [buffer])`
* `race(effects)`

### Other Features

* [Snapshot testing](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/snapshot-testing.html)
* [Partial assertions](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/partial-matching.html)
* [Negated assertions](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/partial-matching.html)
* [Assert a saga's return value](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/return-value.html)

## How does _redux-saga-test-plan_ differ from other solutions?

* Only test the effects you're interested in with `expectSaga`. You don't have to manually iterate through your saga's yielded effects, which decouples your test from the implementation.
* A declarative, chainable API with less setup for testing sagas. Other options that I've seen use imperative APIs with more setup steps and only let you test certain effects.
* One of the few saga testing libraries that lets you also test your Redux reducers.
* Test forked sagas many layers deep.
* Built-in mocking with [static](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/mocking/static-providers.html) and [dynamic](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/mocking/dynamic-providers.html) providers.
* [Negated assertions](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/partial-matching.html). You can test that your saga did **not** yield a particular effect.
* [Partial assertions](https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/partial-matching.html). For example, you can test that your saga `put` a particular `type` of action without worrying about the action payload.

## Why did you develop _redux-saga-test-plan_?

I grew tired of manually testing sagas by iterating through yielded effects like this:

```javascript
function* fetchUsersSaga() {
  const users = yield call(api.getUsers);
  yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
}

it("fetches users", () => {
  const users = ["Jeremy", "Tucker"];
  const iter = fetchUsersSaga();

  expect(iter.next().value).toEqual(call(api.getUsers));

  expect(iter.next(users).value).toEqual(
    put({ type: "FETCH_USERS_SUCCESS", payload: users })
  );
});
```

These tests took long to write and coupled the test to the implementation. One small change in the order of effects would break a test even if the change didn't change the saga's overall behavior. Ironically, I created a [testSaga API](https://redux-saga-test-plan.jeremyfairbank.com/unit-testing/) that took some of that boilerplate away but still coupled tests to their implementation.

I finally set out to create a more user-friendly API that removed most of the boilerplate and let you focus on testing the behavior you were most interested, and this is how `expectSaga` was born.

## What next?

Writing my Elm book is currently consuming a lot of my time, so I've had to take a short break from _redux-saga-test-plan_. However, the next big plan is to support redux-saga v1, which adds support for effect middlewares. Effect middlewares let you intercept effects to return a mock value. I hope to simplify `expectSaga`'s implementation of providers with effect middlewares.

There's a nice backlog of issues for other cool features like new helpful assertions and integrating with a full Redux store too.

Contributors are welcome!

## What does the future look like for _redux-saga-test-plan_ and web development in general? Can you see any particular trends?

I'm not entirely sure because it depends on the life of redux-saga. [Mateusz Burzyński](https://github.com/Andarist) and all the contributors have been doing a great job maintaining it. It's a great sign that they're working toward v1. But front-end development can move and change so fast. For example, we've seen a massive rise in the popularity of [RxJS](https://github.com/ReactiveX/rxjs) and [redux-observable](https://github.com/redux-observable/redux-observable).

As long as there is broad support for redux-saga in front-end applications, I think _redux-saga-test-plan_ will stick around and fill a much-needed testing niche. Testing saga generators is hard, so _redux-saga-test-plan_ will hopefully continue to make it easy. That being said, I don't always get to use redux-saga with my client projects, so I could use the support of other contributors to make _redux-saga-test-plan_ the best it can be for testing.

As far as trends, I think front-end development is heading toward better maintainability and safety with static typing. Elm, TypeScript, and Flow are making it easier to build robust front-end applications. Static types can catch so many simple bugs and mistakes to help you refactor code more confidently.

## What advice would you give to programmers getting into web development?

You don't need to keep up with every new library and framework coming out. Focus on a stack that you like and build fantastic software. Don't let others make you feel like you're not a real developer because you're not up-to-date with the latest JavaScript framework. What's most important is understanding the language you're working with and how to stick to good software engineering practices. Find a mentor that's empathetic and eager to help you.

Also, ask to speak at a meetup or submit to a conference. You'd be surprised how many people sometimes aren't experts on the topics they share (I've been there for sure). You can share the pain points you experienced learning a technology and offer your unique perspective on what you love about it. Then, you can inspire and empower other newcomers.

## Who should I interview next?

I might be a little biased because I work for Test Double, but you should interview [Justin Searls](https://twitter.com/searls). He speaks a lot about testing, and his insight is something the JavaScript world would greatly benefit from. He maintains our awesome test double library [testdouble.js](https://github.com/testdouble/testdouble.js), which has transformed how I think about mocking in tests.

## Conclusion

Thanks for the interview Jeremy! _redux-saga-test-plan_ seems to complement _redux-saga_ well.

You can learn more from [the redux-saga-test-plan site](http://redux-saga-test-plan.jeremyfairbank.com/) and [redux-saga-test-plan GitHub page](https://github.com/jfairbank/redux-saga-test-plan).