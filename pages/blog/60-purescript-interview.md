---
title: 'PureScript - Strongly Typed Programming Language Compiling to JavaScript - Interview with Phil Freeman'
date: 2016-08-22
headerImage: 'assets/img/pure.jpg'
keywords: ['interview']
---

It's interesting how JavaScript development proceeds in cycles. While a lot of people might be happy with the standard language, there are always some that are willing to go further and push the envelope.

Sometimes this leads to a better standard as we saw with ES2015 when it adopted a variety of CoffeeScript inspired features. The cycle will likely repeat as we see more experimentation around the language.

To get a better idea of the topic, I'm interviewing [Phil Freeman](https://twitter.com/paf31), the author of [PureScript](http://www.purescript.org/).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/cbed6f201f9a0e735e5660d118c6662d?s=200" alt="Phil Freeman" class="author" width="100" height="100" />
</span>

I created the PureScript language and compiler a few years ago, and I continue to develop the language and its libraries. I write Haskell code for a living, and I'm interested in the problem of program correctness generally, so I tend to enjoy using statically typed functional programming languages where possible.
</p>

## How would you describe *PureScript* to someone who has never heard of it?

PureScript is a purely-functional, strongly-typed programming language for the web. If you've seen Haskell before, many of the ideas will be familiar. However, unlike Haskell, PureScript is designed specifically for compilation to (straightforward) JavaScript, and compiled PureScript code can run in any environment where JavaScript runs.

PureScript allows developers to identify errors at compile time, instead of at runtime, by using its expressive type system. At a simple level, this means no more `undefined is not a function` or similar errors, but we can use the type system to validate more interesting things like `this function reads from (but does not write to) the filesystem`.

## How does *PureScript* work?

The PureScript compiler takes PureScript source files as input, parses and checks them, and turns them into either a collection of CommonJS modules, or a single JavaScript bundle for the browser. You can run the compiler on source files directly, but in practice, most users prefer to use additional tools to integrate PureScript into their existing JavaScript workflow.

One of the most popular tools is [Pulp](https://github.com/bodil/pulp), which is a build (and general automation) tool for PureScript projects. Like many PureScript tools, Pulp is written in PureScript itself, and can be installed and run using NPM.

Another essential tool for PureScript development is [Pursuit](https://pursuit.purescript.org), which is our package database.

## How does *PureScript* differ from other solutions?

The three main features which distinguish PureScript from other similar transpilers are:

- Strong, expressive types
- Compatibility with the JavaScript ecosystem
- Minimalism

### Expressive Types

Other languages have strong type systems - [Elm](http://elm-lang.org/) is probably the most notable example of a language with an ML-like type system, compiling to JavaScript - but PureScript provides many advanced type system features which those languages lack: higher kinded types and type classes are two examples of advanced type system features which PureScript takes from Haskell. These features can enable a high level of code reuse.

### JavaScript Compatibility

There are other projects with advanced Haskell-like type systems. [GHCJS](https://github.com/ghcjs/ghcjs) is a great example - where PureScript is inspired by Haskell, GHCJS is actually full Haskell compiled to JavaScript.

This is powerful, since you get to reuse lots of existing work from the Haskell community. However, what separates PureScript from projects like GHCJS is that PureScript aims for strong compatibility with existing JavaScript tools, as opposed to using existing Haskell tooling.

Also, compiled PureScript code is readable, and code generation is predictable. By comparison, compiling the full Haskell language to JavaScript (along with its non-strict semantics) can result in large, unreadable code.

So PureScript sits in an interesting niche between languages like Elm and GHCJS, providing some of the more advanced type system features from Haskell, but keeping very close ties to the JavaScript platform.

### Minimalism

PureScript tries quite hard to assume as little as possible about your development workflow. The compiler itself ships with no libraries, although we do provide a comprehensive suite of core libraries which most larger projects will use. This means that users are free to build their own standard libraries if they like. With this approach, compiled PureScript code can be very small and fast.

Also, many things which would be implemented as language or compiler features in other programming languages are implemented in either external tools or PureScript libraries.

Consider language features like generators or promises in JavaScript. Those are implemented with special support in the language itself, but in PureScript they can be implemented as user libraries, which means we don't need to maintain those additional features in the compiler.

I think this sort of approach is essential if we want to continue to apply PureScript to projects of all sizes, from small single-module projects, to full-application development. If you choose to write a single application module in PureScript, you shouldn't have to pull in an array of tools or a large standard library of unrelated code.

Another important benefit of a minimalist approach is that it allows the community to try out several ideas at once. For example, PureScript isn't limited to only one approach to user interface development - instead, we have several libraries - all experimenting with novel applications of functional programming techniques to UI development.

> In fact, pretty much every part of the PureScript library ecosystem can be replaced with some alternate implementation. That wouldn't be possible with a batteries-included compiler distribution.

## Why did you develop *PureScript*?

A few years ago, I was writing TypeScript for a living, and for the most part I enjoyed it. Coming from a Java/C# background, the type system concepts were familiar. However, I had been reading about and practicing Haskell at the time, and the benefits of things like immutable data and the pure functional approach generally were becoming more obvious. So I knew I wanted a language which could enable pure, typed functional programming.

At the time, there were a few options. Elm was relatively new, and at the time, it was focused on FRP and certain types of UI applications. I knew I wanted something a bit more general purpose. GHCJS was very interesting, but might have been difficult to sell to the rest of the team, given that we were used to reading JavaScript and using JavasSript tools.

The [Roy programming language](http://roy.brianmckenna.org/) was very close to what I wanted, but I had a few relatively minor concerns about that too, mostly around the treatment of side-effects in code.

So, these were all great options, but there was no language exactly like the one I wanted. I had some bits and pieces of code from my experiments with Haskell: parsers, simple type checkers, optimizer passes, these sorts of things. So I decided to put together a prototype of the language I wanted, and a few months later, I posted version 0.1 to Reddit.

It turned out that plenty of people were interested and wanted a language with similar features, so I quickly found contributors to help work on the project after that. Now, we have a great group of contributors working on the compiler and its libraries and tools.

## What next?

In the short term, we have contributors actively working on different things - I'm working on some new type system enhancements, and others are working on a range of interesting things, such as pretty printing source code, new optimizer passes, new backends (Lua, Erlang, Python and C++ backends exist right now), and novel editor plugins.

In the longer term, we continue to work towards a 1.0 release. Along with fixing various bugs, and adding features in the compiler, that means that we'll be working on tools to ensure a complete developer experience: package management, tools for easier integration with JavaScript, continued work on editor tooling, and so on.

## What does the future look like for *PureScript* and web development in general? Can you see any particular trends?

I hope to see more adoption of PureScript, and functional programming generally in industry. Functional programming is gradually becoming more popular for both backend and frontend JavaScript, both in terms of functional languages like PureScript, but also in the form of ideas from functional programming making their way into regular JavaScript libraries (React, Redux, etc.).

PureScript has been adopted successfully and put into production at several companies now, and I'd like to see that trend continue. To make that possible, I'd like to work on lowering the barrier to adoption, so that PureScript becomes a more obvious choice of programming language for more people.

Other than that, I think the future for PureScript looks like more of the same - a group of contributors trying to build the programming language that they want to use. :)

## Conclusion

Thanks for the interview Phil! Learning to use new languages is always a worthwhile idea. I've found it puts the ones you know well already into a perspective. You can [try PureScript](http://try.purescript.org) online. Phil has also written a free book, known as [PureScript by Example](http://leanpub.com/purescript/read), about the topic.

See also [PureScript Website](http://purescript.org) and [Pursuit Package Database](http://pursuit.purescript.org) for further information.
