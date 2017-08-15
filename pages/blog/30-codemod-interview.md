---
title: 'Codemod - Refactoring Code Programmatically - Interview with Ramana Venkata'
date: 2016-01-01
headerImage: 'assets/img/codemod.jpg'
keywords: ['interview', 'react']
---

Performing big changes to a codebase is always a little daunting. Doing each change by hand is time consuming and generally leads to errors, unless you have a good test suite in place.

[Codemod](https://github.com/facebook/codemod) is a tool that has been designed to help in this problem. In this interview, Ramana Venkata describes the tool in detail.

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://www.gravatar.com/avatar/641693d5a45d1cd8b698aa96cebb3178?s=200" alt="Ramana Venkata" class='author' width='100' height='100' />
  </span>
My name is Ramana Venkata. I am front-end developer from India. I have been following the React Community since a year and half or so. I wanted to contribute to this community from that but I couldn't due to my commitments at college and lack of experience I guess. But now that I have started working, I have a good amount of free time and I am trying to put good use.
</p>

We have plethora of tools but very little documentation. Sometimes the documentation exists but you can hardly learn anything from it. Sometimes the examples are there but they are not explained. So currently, my main focus is on improving tooling and the documentation around it. I want to make them more accessible.

## How would you describe Codemod to someone who has never heard of it?

Codemod is snippet of code which transforms JS code. It is one-time transformation that you apply on your code base to change an API or to change the style of your code etc., Under the hood, it turns your js code into an Abstract Syntax Tree (AST), applies transform on the AST and then convert it back to JavaScript. This is different from Babel because the codemod changes the original file where as babel doesn't change the original file.

## Who should use Codemod?

I think every library author, that wants to make a breaking changes to their API, should at least consider the possibility of writing a codemod. You can potentially run codemods in the postinstall lifecycle hook of npm to update your code for any breaking changes that library introduces. This will probably make library authors worry less about breaking changes and spend more time on implementing great stuff.

But it's always not possible to write a codemod for breaking changes sometimes because of the change itself. Also, you have be to very defensive in the way you write a codemod to avoid false positives. This is partly is because of the dynamic nature of JavaScript itself and people use varying styles to write their code and structure their application.

## Are there other similar tools you should be aware of?

As a natural next step, you can learn about [Babel plugins](https://babeljs.io/docs/plugins/). It is very easy to write them with the help of [AST Explorer](https://astexplorer.net/). I think it's possible to write a plugin that provides auto-completion engine like [Tern](http://ternjs.net/), but a little more advanced.

Imagine auto-completing a React component with all the required props and we can show type of props when you hover over it etc.,. You can use it for compile time transforms also. For example, I think the [classnames](https://www.npmjs.com/package/classnames) package by Jed Watson (which is amazing btw) can be replaced by a simple Babel transform.

I don't know how much value it has or whether its good thing or bad thing. This approach feels similar to having macros where we write code using custom syntax and at compile time we just transform them to JavaScript.

I think there are is a lot of untapped potential there. We just need more time for the tools to mature and for that we need more contribution, adoption and feedback from the community.

## What does the future look like for Codemod and JavaScript development in general? Can you see any particular trends?

I think Codemod are just getting started (in the jscodeshift sense to make breaking changes to the API, etc.,). It is still a new tool the community even though it has been there for sometime. I have heard about it a lot of times but never really cared about it. It is [Christoph Pojer's talk on Codemods](https://www.youtube.com/watch?v=d0pOgY8__JM) which gave me the really inspiration to try it out.

We have seen a lot of people complain about burnouts because fast moving landscape of JavaScript and library are making breaking changes all over the place, etc., We definitely can't stop innovating, but we should do invest time in tools that help us upgrade smoothly for this every breaking API changes situation.

For example, Ember provides new releases on a six week cycle. If you have a large code-base in Ember, getting rid of all the deprecation warnings can be a nightmare and doing it every six weeks is not fun at all. Codemods can ease some of that pain.

## Who should I interview next?

I think you should either interview Felix Kling or Christoph Pojer.

## Conclusion

Thanks for the interview Ramana! I think Codemod is one of those tools that has great potential in taking some edge of development. I hope it becomes more popular and we see more adoption.

From a library consumer's point of view this can help a lot. I feel people aren't just that aware of the tool yet but perhaps that will change during this year.

If you are interested in the topic, I recommend checking out Ramana's [in-depth tutorial](https://vramana.github.io/blog/2015/12/21/codemod-tutorial/). I've listed various other resources below:

* [Christoph Pojer's talk - Evolving Complex Systems Incrementally](https://www.youtube.com/watch?v=d0pOgY8__JM)
* [Effective JavaScript Codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) - A related blog post
* [facebook/codemod](https://github.com/facebook/codemod) - The project itself
* [facebook/jscodeshift](https://github.com/facebook/jscodeshift) - A toolkit for running codemods over multiple JavaScript files
* [reactjs/react-codemod](https://github.com/reactjs/react-codemod) - Codemods for updating React
* [cpoject/js-codemod](https://github.com/cpojer/js-codemod) - Codemods for transforming old JavaScript to a newer standard
