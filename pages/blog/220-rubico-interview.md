---
title: "Rubico - [a]synchronous functional programming - Interview with Richard Tong"
date: 2021-03-10
headerImage: "assets/img/cube.jpg"
headerAuthor: "congerdesign"
headerSource: "https://pixabay.com/photos/magic-cube-patience-tricky-hobby-1976725/"
keywords: ["interview", "javascript"]
---

One of the tricky parts of JavaScript is dealing with asynchronous behavior. The language itself has introduced improved syntax (`async`/`await`) and utilities like `Promise.all` and `Promise.race` but it's not enough for more advanced use cases.

To learn about a potential solution, I am interviewing [Richard Tong](https://twitter.com/richytong_) about a new library called Rubico.

## Can you tell a bit about yourself?

![Richard Tong|100|100|author](https://www.gravatar.com/avatar/c6448099cd4214a65480fabc2d6187b7?s=200)

I am a programmer based in Los Angeles who enjoys solving problems with JavaScript. Currently, I am working on [Claimyr](https://claimyr.com) - the quickest way to speak with an unemployment agent. In my spare time, I enjoy going out to eat and getting coffee.

## How would you describe _Rubico_ to someone who has never heard of it?

Rubico is a set of functions that supports a simple and expressive way of programming in JavaScript. With Rubico, you can reduce a ton of boilerplate surrounding `Promise` handling in your code, allowing you to focus on writing business logic and shipping quickly. Rubico is geared towards ES2018+, requiring syntax for async generator functions.

## How does _Rubico_ work?

Use Rubico's operators to create async-enabled compositions of functions. Each operator handles `Promise` resolution for you. Consider the following example:

```javascript
const { pipe, map, filter } = rubico;

const isOdd = (number) => number % 2 == 1;

const asyncSquare = async (number) => number ** 2;

const squaredOdds = pipe([
  // each asyncSquare Promise is resolved before filter
  map(asyncSquare),
  filter(isOdd),
]);

squaredOdds([1, 2, 3, 4, 5]).then(console.log); // [1, 9, 25]
```

At the moment, Rubico supports the following functions:

```javascript
const {
  pipe,
  tap,
  switchCase,
  tryCatch,
  fork,
  assign,
  get,
  pick,
  omit,
  map,
  filter,
  reduce,
  transform,
  flatMap,
  and,
  or,
  not,
  any,
  all,
  eq,
  gt,
  lt,
  gte,
  lte,
  thunkify,
  always,
  curry,
  __,
} = rubico;
```

You can create full applications with just `pipe` and `tap`. Usually I recommend people start with these two. Use `pipe` to chain a bunch of functions (sync or async) together, then use `tap` to specify any "side-effecting" functions, i.e., functions that shouldn't contribute to the main flow, such as writing to a file or database. The rule is pretty arbitrary and will always be as pure as your best effort.

Here's a setup you could get started with that I've been using for my HTTP handlers:

```javascript
const MyHttpHandler = ({
  dependencyA, dependencyB, myConfigValue,
}) => (request, response) => tryCatch(pipe([
  always(request)
  transform(map(chunk => chunk), Buffer.from('')),
  callProp('toString', 'utf8'),
  JSON.parse,
  // { parameterA: 'hey', parameterB: 100 }
]), error => {
  console.error(error.message)
  response.writeHead(error.code ?? 500, {
    'Content-Type': 'text/plain',
  })
  response.end(error.message)
})()

// Initialize dependencies, grab config values...
http.createServer(MyHttpHandler({
  dependencyA, dependencyB, myConfigValue,
})).listen(3000)
```

If you are interested in getting started with Rubico, I recommend [taking the tour](https://rubico.land/tour) and then glancing over all the functions at the [docs](https://rubico.land/docs). Try to master the core API first, then move on to the advanced functions in `rubico/x`.

## How does _Rubico_ differ from other solutions?

Rubico is comparable to [Lodash FP](https://lodash.com/), [Ramda](https://ramdajs.com/), [Bluebird](https://www.npmjs.com/package/bluebird), and [RxJS](https://www.npmjs.com/package/rxjs) libraries. All five libraries are competing in the utility space, though with differing core principles/ideologies. I've compared them briefly below to show you the differences:

### Rubico vs Lodash FP:

- Lodash FP - immutable, auto-curried, iteratee-first, and data-last methods
- Rubico - mutable, uncurried, promise-resolving, iteratee-first, and data-last methods

### Rubico vs Ramda:

- Ramda - immutability, and side-effect free functions are at the heart of its design philosophy
- Rubico - composability, performance, and simplicity are at the heart of its design philosophy

### Rubico vs Bluebird:

- Bluebird - built around Promises. Utility operators focus on `Promise` handling.
- Rubico - built around async functions. Utility operators focus on async function composition.

### Rubico vs RxJS:

- RxJS - a library for composing asynchronous and event-based programs by using observable sequences
- Rubico - a library for composing asynchronous and event-based programs with async functions

### Similarities

Rubico, Lodash FP, and Ramda all have a placeholder operator `__`. Rubico's `__` can be used in conjunction with Rubico's `curry` to create new functions from existing ones by fixing some of the arguments.

Lodash FP and Ramda don't need the `curry` function as much because their functions come as auto-curried. Rubico does not curry automatically for performance reasons and instead exports higher-order functions with fixed signatures.

```javascript
const { curry, __ } = require("rubico");
const R = require("ramda");
const _ = require("lodash/fp");

const add = (a, b) => a + b;

// rubico
const add3Rubico = curry(add, __, 3);
add3Rubico(5); // 8

// ramda
const add3Ramda = R.curry(add)(R.__, 3);
add3Ramda(5); // 8

// lodash/fp
const add3Lodash = _.curry(add)(_.__, 3);
add3Lodash(5); // 8
```

Both Rubico and Bluebird provide an asynchronous pooling option. With Rubico, you can specify an asynchronous limit while applying an async function to each item of a collection via the property function `map.pool`. Bluebird enables pooling functionality via the `concurrency` option on Bluebird's `Promise.map`.

```javascript
const Promise = require("bluebird");
const { map } = require("rubico");

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// bluebird
Promise.map(
  [1, 2, 3, 4, 5],
  async function asyncSquare(number) {
    console.log("squaring", number);
    await sleep(500);
    return number ** 2;
  },
  { concurrency: 2 }
);

// rubico
map.pool(2, async function asyncSquare(number) {
  console.log("squaring", number);
  await sleep(500);
  return number ** 2;
})([1, 2, 3, 4, 5]);
```

## Why did you develop _Rubico_?

Initially, I developed Rubico because I needed a function that could chain async functions together in a data-last fashion. Then I wondered about other ways in which async functions could be composed. The rest went from there.

## What next?

I'm building [Claimyr](https://claimyr.com) with Rubico and a couple of other libraries I'm working on: [Presidium](https://github.com/richytong/presidium) and [Arche](https://github.com/richytong/arche).

Presidium provides a type system that addresses the complete set of needs of a back-end Node.js application architect: from handling HTTP to working with Amazon Web Services like DynamoDB or S3, to deploying on your in-house docker swarm.

Arche is a simple wrapper over React, enabling a declarative interface for working with React without the need for transpilation.

These libraries and others contribute to high-quality software development at Claimyr.

## What does the future look like for _Rubico_ and web development in general? Can you see any particular trends?

Rubico has a long roadmap - it is just getting started. There's still a lot of cool and useful asynchronous behaviors yet to be implemented. For example, `reduce.parallel` could apply an asynchronous reducer in parallel to a possibly infinite or asynchronous source.

I think it's hard to predict exactly where we'll end up in the next few years or next year even. Innovation happens every day, for sure - chances are you'll be using new software a year from now.

## What advice would you give to programmers getting into web development?

If you feel like you are struggling, keep at it for as long as you can, then get a good night's sleep. Chances are, you will grasp it a little better the next day.

## Who should I interview next?

[Thomas Wang](https://twitter.com/ThomasWang), the co-founder of [@Napkin](https://twitter.com/napkin).

## Any last remarks?

Thanks for giving me the time.

It's an exciting time to be a web developer. If you are interested in contributing to Rubico or any of my other projects, or even just learning about how to build for the web, [please reach out to me via email](mailto:richytong@gmail.com).

## Conclusion

Thanks for the interview, Richard! Rubico looks like a great solution for handling any complex asynchronous case and I hope you keep improving it.

T> You can [find rubico on npm](https://www.npmjs.com/package/rubico) and on [GitHub](https://github.com/a-synchronous/rubico).
