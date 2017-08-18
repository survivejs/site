---
title: 'Sanctuary - Refuge from unsafe JavaScript - Interview with David Chambers'
date: 2017-04-10
headerImage: 'assets/img/sanctuary.jpg'
keywords: ['interview', 'functional programming']
---

If there's something that's easy, it's making mistakes while coding JavaScript. Overlook one detail and you have a runtime error! One way to deal with the problem is to use a programming style which leads code that's harder to break and also easier to test.

[David Chambers](https://twitter.com/davidchambers) has been developing [sanctuary](https://www.npmjs.com/package/sanctuary), a *functional programming* library these goals in mind.

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://www.gravatar.com/avatar/5f41fa18e9774f1a2ea7c519f476c348?s=200" alt="David Chambers" class="author" width="100" height="100" />
  </span>

I grew up in New Zealand. I studied graphic design at University and worked briefly as a graphic designer after graduating. I found myself in a cycle of procrastination, guilt, self-doubt, and euphoria. I loved my job a small proportion of the time.
</p>

I became interested in web design and discovered that I enjoyed writing HTML, CSS, and JavaScript. This work was also creative, but I found the emotional ups and downs much less extreme. In recent years my interests have shifted towards programming, specifically functional programming.

## How would you describe *Sanctuary* to someone who has never heard of it?

The [project's overview](https://sanctuary.js.org/#overview) puts it the best:

> Sanctuary is a JavaScript functional programming library inspired by Haskell and PureScript. It's stricter than [Ramda](https://www.npmjs.com/package/ramda) and provides a similar suite of functions.
>
> Sanctuary promotes programs composed of simple, pure functions. Such programs are easier to comprehend, test, and maintain &ndash; they are also a pleasure to write.

## How does *Sanctuary* work?

Sanctuary is designed to take full advantage of the [Fantasy Land](https://github.com/fantasyland/fantasy-land) specification. Fantasy Land defines some methods, each with accompanying laws.

> The inclusion of laws makes Fantasy Land significantly different in nature from Promises/A+. Fantasy Land is a set of well-understood concepts with Wikipedia entries rather than an ad hoc list of requirement for implementors.

Sanctuary provides functions for operating on built-in types:

```javascript
> S.map(s => s.length)(['foo', 'bar', 'baz', 'quux'])
[3, 3, 3, 4]
```

The neat thing is that [`S.map`](https://sanctuary.js.org/#map) is not defined only for arrays. We can
enter a function's name into the REPL to see the function's type signature:

```javascript
> S.map
map :: Functor f => (a -> b) -> f a -> f b
```

Don't be put off by this notation. It'll be very helpful once we've learned to read it. Let's do so.

We'll start with `::`. The markup can be read as _is a member of_. For example, `true :: Boolean` can be read _`true` is a member of `Boolean`_.

How do we represent the types of functions? Let's consider [`S.toUpper`](https://sanctuary.js.org/#toUpper) which takes a string and returns its upper-case equivalent. We would write `S.toUpper :: String -> String`.

What is the type of `x => x`, the identity function? `String -> String` is too restrictive, as the identity function can operate on a value of any type. We write it like so:

```javascript
//    id :: a -> a
const id = x => x;
```

`a` is a type variable. We can replace it with any type we choose, but we must replace every occurrence of `a` in a type signature with the same type.

Before we consider the `Functor f =>` bit, let's consider a similar function which operates exclusively on arrays:

```haskell
arrayMap :: (a -> b) -> Array a -> Array b
```

So, `arrayMap` takes as its argument a value of type `(a -> b)`, a function from `a` to `b`. It returns a value of type `Array a -> Array b`. We would use it like so:

```javascript
> arrayMap(s => s.length)(['foo', 'bar', 'baz', 'quux'])
[3, 3, 3, 4]
```

Arrays are just one of *many* structures we may wish to map over. It would be unfortunate to have to define `arrayMap`, `listMap`, `futureMap`, `maybeMap`, `eitherMap`, `streamMap`, etc. Although necessary for some languages, it is not so in
JavaScript, as we can dispatch to a method with a particular name.

The method name, in this case, is `fantasy-land/map`. We wish to express that `S.map` can operate on a value of any type which provides a `fantasy-land/map` method. `Functor f =>` is a constraint on the type variable `f`. It states that `f` can be replaced with any type which provides `fantasy-land/map`.

Let's *specialize* the type of `S.map` in the expression
`S.map(s => s.length)(['foo', 'bar', 'baz', 'quux'])`. Here's the general type again:

```haskell
S.map :: Functor f => (a -> b) -> f a -> f b
```

`f` is `Array`, in this case:

```haskell
S.map :: (a -> b) -> Array a -> Array b
```

`a` is `String`, as we're operating on an array of strings:

```haskell
S.map :: (String -> b) -> Array String -> Array b
```

`b` is `Number`, since the provided function returns the length of its string argument:

```haskell
S.map :: (String -> Number) -> Array String -> Array Number
```

## How does *Sanctuary* differ from other solutions?

Sanctuary is most similar to Ramda. In [sanctuary-js/sanctuary#377](https://github.com/sanctuary-js/sanctuary/issues/377)
we're currently documenting the differences between Ramda and Sanctuary.

The most striking difference is the handling of invalid inputs. When applied to arguments of the correct types, `R.append` and `S.append` are equivalent:

```javascript
R.append(3, [1, 2])
// => [1, 2, 3]

S.append(3, [1, 2])
// => [1, 2, 3]
```

But what happens if we get the arguments in the wrong order?

```javascript
R.append([1, 2], 3)
// => [[1, 2]]
```

`R.append` somehow coerces `3` into `[]` and "succeeds". We expected the result to be of type `Array Number`, but it's actually of type `Array (Array Number)`. This will likely result in an error being thrown, possibly several steps from the source of the type error.

`S.append`, on the other hand, throws a type error with a descriptive message:

```javascript
S.append([1, 2], 3)
// ! TypeError: Invalid value
//
// append :: a -> Array a -> Array a
//                ^^^^^^^
//                   1
//
// 1)  3 :: Number, FiniteNumber, NonZeroFiniteNumber, Integer, ValidNumber
//
// The value at position 1 is not a member of ‘Array a’.
//
// See https://github.com/sanctuary-js/sanctuary-def/tree/v0.9.0#Array for information about the Array type.
```

Run-time type checking isn't free, so one can disable it if desired.

## Why did you develop *Sanctuary*?

I was a significant contributor to Ramda at the time, but I was unhappy with the fact that a certain Ramda function was not composable (and remains so). To use [`R.head`](http://ramdajs.com/docs/#head) safely one must first check that the array is non-empty:

```javascript
R.isEmpty(xs) ? /* some default value */ : f(R.head(xs))
```

I wanted to be able to write this instead:

```javascript
R.map(f, R.head(xs))
```

We decided not to pursue this approach in [ramda/ramda#683](https://github.com/ramda/ramda/issues/683). I created Sanctuary so I could use safe versions of the Ramda functions I found troubling alongside the many Ramda functions I was happy to use.

Over the past two years, Sanctuary has grown to the point that it no longer makes sense to use Ramda and Sanctuary together, as there's so much overlap in the functionality they provide.

## What next?

[Sanctuary v0.12.0](https://github.com/sanctuary-js/sanctuary/issues/332) was a big release representing about eight months' work. From this point forward we hope to make smaller, more frequent releases.

The significant changes currently in the works are [sanctuary-js/sanctuary-maybe#3](https://github.com/sanctuary-js/sanctuary-maybe/pull/3) and [sanctuary-js/sanctuary-either#3](https://github.com/sanctuary-js/sanctuary-either/pull/3), which will make Sanctuary's `Maybe` and `Either` type available as stand-alone packages.

## What does the future look like for *Sanctuary* and web development in general? Can you see any particular trends?

My hope is that the JavaScript community's current enthusiasm for functional programming is part of a long-term trend rather than a fad. I predict the Sanctuary community will continue to grow as more people come to appreciate the benefits of building software on principled foundations.

## What advice would you give to programmers getting into web development?

Learn [Elm](http://elm-lang.org/). Treating user actions as values which can be passed as arguments to functions is a truly wonderful idea! Whether one continues to write Elm, or switches to JavaScript or PureScript, the approach will remain valid.

## Who should I interview next?

[Aldwin Vlasblom](https://github.com/Avaq), the creator of [Fluture](https://github.com/fluture-js/Fluture). I respect him as a programmer
and as a person. :)

## Any last remarks?

If you decide to start using type signatures to document your functions you may be interested in [Transcribe](https://www.npmjs.com/package/transcribe). The tool used to generate the readme files for the various Sanctuary projects.

Each type signature in the source code is turned into a heading in the readme which links back to the type signature in the source code, so it's easy to jump to an implementation when reading the documentation. Transcribe supports arbitrary GitHub Flavored
Markdown.

One other project I'd like to plug is [xyz](https://www.npmjs.com/package/xyz). If you've ever forgotten a step when publishing an npm package, you should give xyz a look.

## Conclusion

Thanks for the interview David! It's cool to see functional solutions get more attention from the community. I see it as a great technique and enjoy spending time composing.

You can learn more about sanctuary at [Sanctuary site](https://sanctuary.js.org/) and [GitHub project page](https://github.com/sanctuary-js/sanctuary).
