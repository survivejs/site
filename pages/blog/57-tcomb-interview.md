---
title: 'tcomb - Type checking and DDD for JavaScript - Interview with Giulio Canti'
date: 2016-07-25
headerImage: 'assets/img/types.jpg'
keywords: ['interview', 'typing']
---

Given JavaScript is loosely typed, it can be amazingly productive language for prototyping. The problems begin once your project grows in complexity. It is very easy to end up with a runtime error if you miss a simple check at the right place.

Testing can help to control the situation, but it's not the only way. Typing systems, like [tcomb](https://github.com/gcanti/tcomb) by [Giulio Canti](https://twitter.com/GiulioCanti), can help. Read on to learn more.

### Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/17e7c06ba6bf8429ce311069b95c57d7?s=200" alt"Giulio Canti" class="author" width="100" height="100" />
</span>

I am Giulio Canti, a mathematician turned frontend developer 15 years ago. I live in Milan, Italy. Math is still my love and passion and I try to bring its spirit and methodologies in my day to day work. I'm interested in functional programming languages, in particular the ML family: Scala, Haskell and OCaml.
</p>

Two years ago I started to do open source, which I genuinely love, with a precise goal: bring type safety to JavaScript.

## How would you describe *tcomb* to someone who has never heard of it?

**tcomb** is a library for checking the types of JavaScript values at runtime with a simple and concise syntax. It's great for Domain Driven Design and for adding safety to your internal code. It has solid mathematical foundations, being based on [set theory](https://en.wikipedia.org/wiki/Set_theory).

Type instances are not boxed, meaning tcomb works great with existing libraries (lodash, Ramda, ...). You can of course use them as props to React components and it works great paired with [tcomb-react](https://github.com/gcanti/tcomb-react), an alternative to `PropTypes`.

It's enforces immutability, using the native `Object.freeze` on type instances.

Finally, it's performance friendly, since asserts and "freezes" are only present in development mode and stripped out in production builds.

## How does *tcomb* work?

tcomb defines a set of basic types (e.g. `t.String`, `t.Number`, `t.Boolean`, ...) and a set of type combinators, i.e. functions that return a new type (e.g. `t.list`, `t.maybe`, `t.interface`, ...). The power of tcomb, comes from the composition of combinators:

```js
import t from 'tcomb';

// the maybe combinator returns a new type
// that represents an optional value
const MyOptString = t.maybe(t.String);  // an optional string

// the list combinator returns a new type
// that represents a list of values
const MyList = t.list(MyOptString); // a list of optional strings
```

Using combinators like `t.interface` or utilities like `t.assert`, you can model your own domain and its invariants:

```js
import t from 'tcomb';

// a domain model
const Person = t.interface({
  name: t.String,
  surname: t.maybe(t.String),
  age: t.Number,
  tags: t.list(t.String)
}, 'Person');

function getFullName(person) {
  // an invariant
  t.assert(
    Person.is(person),
    'Invalid argument person supplied to getFullName'
  );

  return `${this.name} ${this.surname}`;
}
```

When an assert fails, the default behavior throws a `TypeError` with a descriptive message, so you can leverage the power of the debugger, inspect the stack and find out what's wrong with little effort.

## How does *tcomb* differ from other solutions?

For a start, tcomb is a mature project: it's five years old, battle tested and deployed in several production environments (it recently hit 70K/month downloads).

It's also an extremely flexible tool and its strength comes from two unique features: refinements and runtime type introspection:

### Refinements

A refinement type is a type endowed with a predicate which must hold for all instances of the refined type. Here's a simple example:

```js
import t from 'tcomb';

const Integer = t.refinement(t.Number, (n) => n % 1 === 0);
const PositiveInteger = t.refinement(Integer, (n) => n >= 0);

const Person = t.interface({
  name: t.String,
  surname: t.maybe(t.String),
  age: PositiveInteger, // <= much better!
  tags: t.list(t.String)
}, 'Person');
```

This means you can narrow your types defining *precise* invariants, something that static type checkers can do only partially.

### Runtime Type Introspection

All models are inspectable at runtime. You can read and reuse the informations stored in your types. For example, you can build a validation library on top of tcomb with a few lines of code; or maybe a form generator library like [tcomb-form](https://github.com/gcanti/tcomb-form).

## Why did you develop *tcomb*?

In my day to day work I make many mistakes. I mean *many* mistakes. I wanted a tool which would allow me to speed up the development phase, bringing in solid type safety, yet flexible enough to define my own types and progressively introduce them in the code base.

## What next?

I'm really excited about my last project, a [babel plugin](https://github.com/gcanti/babel-plugin-tcomb) for combining static and runtime type checking using [Flow](https://github.com/facebook/flow) and tcomb.

It allows to define your tcomb types (refinements included!) as type annotations fully compatible with Flow. This means you can run them side by side, statically checking your code with Flow and catching the remaining mistakes with tcomb at runtime: the best of the two worlds!

Here's the first example we've seen above, rewritten leveraging the plugin:

```js
type Person = {
  name: string,
  surname: ?string
  age: number
  tags: Array<string>
};

function getFullName(person: Person): string {
  return `${this.name} ${this.surname}`;
}
```

Flow can typecheck this, but you can also turn it off and let tcomb check it at runtime. This simple example may not be particularly useful, but, once you start using type refinements, the mixed approach really starts to shine!


## What does the future look like for *tcomb* and web development in general? Can you see any particular trends?

Now that we have static type checkers for JavaScript like Flow or TypeScript one could think that tcomb will be irrelevant in the long run. Far from it, there are features that I want (namely refinements, IO validation and runtime type introspection) which are either too hard or impossible for a static type checker to provide. Static and runtime type checking are complementary and both useful.

More in general, I'm pleased to see functional programming going mainstream in many communities, included the frontend one.
I think smart type checkers and functional techniques are going to become common tools for a growing number of frontend developers.

## Who should I interview next?

I'd like to read what Phil Freeman has to say about the future of PureScript.

## Conclusion

Thanks for the interview Giulio! I've definitely seen the light with types after getting familiar with languages like Haskell myself. Even though you can manage without a strong typing system, it can still be highly useful to document your types when you know them.

Particularly the new [babel plugin](https://github.com/gcanti/babel-plugin-tcomb) seems interesting to me and no doubt I'll be giving it a good go in the near future and integrate it to the material.

Perhaps we will see something similar with types and JavaScript as we saw with CoffeeScript and JavaScript. The current standard integrated the best ideas from there and as a result we have a stronger language.

I hope we see stronger options for typing in the language itself in the future. Projects like [tcomb](https://github.com/gcanti/tcomb) are important in that they allow us to experiment with these ideas.
