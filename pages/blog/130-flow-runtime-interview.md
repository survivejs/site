---
title: 'Flow Runtime - A runtime type system for JavaScript with full Flow compatibility - Interview with Charles Pick'
date: 2017-11-26
headerImage: 'assets/img/drop.jpg'
keywords: ['interview', 'typing']
---

As [discussed in the maintenance book](/maintenance/code-quality/typing/), typing your code can be valuable in many ways. In part, it's about communication. Having the type information available makes it easier to develop tools that make it easier to manipulate code (think refactoring, intelligent parameters).

To understand the topic more in-depth, this time around I'm interviewing [Charles Pick](https://twitter.com/codemixers), the author of [Flow Runtime](https://github.com/codemix/flow-runtime).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/7f6a5e0c29577f724ad28bea4c577139?s=200" alt="Charles Pick" class="author" width="100" height="100" />
</span>

I'm Charles, and I run a JavaScript consultancy called [codemix](https://codemix.com), I live in the countryside with my wife and kids near York, UK.
</p>

My first exposure to programming was with BASIC on the BBC Micro at school when I was seven, ever since then I've been hooked. I worked as a nightclub DJ before becoming a full-time web developer about twelve years ago.

Since 2013 I've been entirely focused on JavaScript, and I love it. I'm interested in how to make JavaScript faster, safer, less error-prone and more comfortable to refactor.

## How would you describe *Flow Runtime* to someone who has never heard of it?

It's a type system for JavaScript that works while the application is running, not at compile time like TypeScript or Flow do. The core idea is that types become first-class values that you can reference and pass around like any other.

Flow Runtime can represent the type of any possible JavaScript value; numbers, objects, classes, functions, etc. and verifies that the input your program receives in reality matches what you were expecting when you wrote it.

The goal is to be 100% compatible with Flow - Flow catches errors at compile time, Flow Runtime catches errors when your code interacts with untyped code or user input.

## How does *Flow Runtime* work?

There are two main packages:

**flow-runtime**

[flow-runtime](https://www.npmjs.com/package/flow-runtime) represents types and does the actual verification. It provides a simple, composable API for defining types and matching values against them:

```javascript
import t from "flow-runtime";

const stringOrNumber = t.union(t.string(), t.number());

stringOrNumber.assert(123);
stringOrNumber.assert("this is fine");
stringOrNumber.assert(false); // throws an error
```

You can use this standalone and as well as type checking it enables some pretty cool stuff, like [pattern matching](https://codemix.github.io/flow-runtime/#/docs/pattern-matching).

**babel-plugin-flow-runtime**

[babel-plugin-flow-runtime](https://www.npmjs.com/package/babel-plugin-flow-runtime) takes code written with Flow annotations and turns those annotations into flow-runtime API calls.

So when you write code like this:

```javascript
type Thing = {
  id: number;
  name: string;
};

const widget: Thing = {
  id: 123,
  name: "Widget"
};
```

the plugin produces this:

```javascript
import t from "flow-runtime";

const Thing = t.type("Thing", t.object(
  t.property("id", t.number()),
  t.property("name", t.string())
));

const widget = Thing.assert({
  id: 123,
  name: "Widget"
});
```

T> You can try this out in [the online demo](https://codemix.github.io/flow-runtime/#/try).

## How does *Flow Runtime* differ from other solutions?

The vast majority of JS validation libraries have a focus on validating user input of one kind or another, whereas Flow Runtime is all about program correctness. To do this, we have to be able to represent the type of any possible JavaScript value, e.g., the shape of a class, or whether a generator function yields the right type of object.

Most popular validation libraries don't handle these kinds of scenarios, the closest alternative is [tcomb](https://github.com/gcanti/tcomb) by Giulio Canti, it's a vast library but pre-dates Flow and therefore can't handle some complicated cases.

## Why did you develop *Flow Runtime*?

We were modernizing a pretty large, sprawling JavaScript codebase for one of our customers back in 2014 when Facebook launched Flow, and after a bit of experimentation we were sold entirely - it's an excellent technology. However, at the time it was still pretty rough around the edges and didn't support a lot of the newer ES6 features we were using.

We also found introducing a type system to an existing project pretty challenging. You have to make a lot of assumptions about the untyped code, and you don't start seeing the benefit until the overwhelming majority of the codebase is converted.

The core problem is that your nice, newly typed codebase touches untyped code so often that static analysis is defeated - it's entirely possible to write fully annotated code that Flow happily accepts and is completely wrong because the real-world input does not match your expectations. So if we can't find these problems at compile time, the only way to find them is at runtime.

Out of this idea came my first effort - [babel-plugin-typecheck](https://github.com/codemix/babel-plugin-typecheck) which compiles Flow type annotations into type checks. It generates all the code inline which makes it very hard to develop for and maintain. As Flow matured and continued getting better, it became clear that we needed a different approach if we were ever going to be compatible, and so flow-runtime was born.

## What next?

I'd like to produce a webpack plugin to make it easier to work with external type definitions. Right now you have to use a separate package called `flow-runtime-cli` which generates a file that you can later import, and it's all a bit messy. I also want to simplify some of the internals to make it easier for people to contribute.

## What does the future look like for *Flow Runtime* and web development in general? Can you see any particular trends?

In general, I think we're going to see TypeScript and Flow become more and more popular, the benefits of optional static typing are pretty clear at this point. I'd like to see the ecosystem around Flow mature, I think it's the technically superior option but TypeScript offers a lot better tooling at the moment.

Eventually, I think we'll see Flow's type information start being incorporated into other projects, which will enable a lot of cool things. If that information were available directly to Babel, webpack or uglify, etc. it would be possible to generate much faster safely, smaller production builds.

Now that Babel supports TypeScript it is possible to support TypeScript in flow-runtime. I'm pretty excited to try that out.

## What advice would you give to programmers getting into web development?

Take every prescriptive blog post or article you read with a pinch of salt and be particularly suspicious of anyone who tells you to always/never do X, Y or Z.

Stick with well-established tools at first and don't worry about keeping up with the cutting edge - excellent documentation and support matter most.

Seek out and work closely with people smarter and more experienced than you, but remember that those intelligent people are still going to be wrong a lot of the time.

Comment your code, for your future benefit and because you'll spot a bunch of lurking bugs in the process.

## Who should I interview next?

I think [Benjamin Gruenbaum](https://github.com/benjamingr) is an unsung hero in the Open Source JavaScript community. Benjamin contributes to so many projects and discussions that it's hard to keep up, he's one of those people that is always there, helping people on Stack Overflow, supporting other developers in GitHub issues, being pragmatic and helping keep discussions productive.

## Conclusion

Thanks for the interview Charles! I think your work complements [Flow](https://flow.org/) well and will allow people using it already to get more out of the approach.

Check out [flow-runtime site to learn more](https://codemix.github.io/flow-runtime/). See [the project in GitHub](https://github.com/codemix/flow-runtime) as well.
