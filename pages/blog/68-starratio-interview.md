---
title: 'StarRatio - Compare JavaScript Projects - Interview with Dmitry Zaets'
date: 2016-11-14
headerImage: 'assets/img/starratio/header.png'
keywords: ['interview']
---

Comparing different JavaScript projects is surprisingly tough. This is a problem encountered by many developers daily. Most often it's the easiest to go and pick the solution with the most GitHub stars, but that's not always the whole story.

[Dmitry Zaets](https://twitter.com/dmitryzaets) has decided to tackle this particular problem with a solution known as StarRatio. Read on to learn more about it.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/b1a049347f659b8455244bc50ac45ef9?s=200" alt="Dmitry Zaets" class="author" width="100" height="100" />
</span>
My name is Dmitry Zaets. I am a Full-Stack Web Developer from Ukraine, living in Barcelona. Learning and sharing my knowledge with people are the things I enjoy to do. In a free time, I'm mentoring at NodeSchool Barcelona and helping to organize local ReactJS and .NET meetups.
</p>

My developer's journey started when I was 10 years old. Father showed me how to code with Basic and we've created a tiny chat bot. At that point, I understood that programming is a huge universe without boundaries. Currently, I'm interested in software design and architecture.

## How would you describe *StarRatio* to someone who has never heard of it?

Usually, when you need to choose a library or component and you have a couple of the competitors - it's easy, you just check them one by one, looking at the code, examples, issues. But what to do when you have a bunch of options, let's say 8 or even 10?

For sure you would like to check which of them are still maintained, how popular they are and how actively they are maintained. So you will go to npm to see download stats, to github to check stars, issues, a number of contributors. Would be cool to have a tool for this?

As I say, StarRatio is a *handy tool to compare JavaScript open source projects*.

![Basic comparison](assets/img/starratio/star-ratio-01.png)

## How does *StarRatio* work?

From the user perspective it is really easy to use, you just to go [StarRatio site](http://starratio.js.org), enter a couple of GitHub repos and see the comparison by multiple interesting stats. Here are couple of examples:

* [State Containers (Flux-like)](http://starratio.js.org/#/compare/tiles?keys=reactjs%2Fredux%2Cfacebook%2Fflux%2Cgoatslacker%2Falt%2Creflux%2Frefluxjs%2Freflux)
* [Testing Frameworks](http://starratio.js.org/#/compare/tiles?keys=facebook%2Fjest%2Cmochajs%2Fmocha%2Cjasmine%2Fjasmine%2Csubstack%2Ftape)

From technical perspective it is a client-server web application. On the client side it is a react application, built with [react-create-app](https://github.com/facebookincubator/create-react-app). On the server side, it is a simple Express app, which gathers the data from the different sources. Currently, we support npm and GitHub, but planning to extend a number of supported package managers.

Under the hood, StarRatio API is really simple. It is just aggregating data from npm and GitHub, processing it and caching the results.

![Card view](assets/img/starratio/star-ratio-02.png)

## How does *StarRatio* differ from other solutions?

StarRatio tries to gather and calculate stats that are really important from a developer point of view.

It is quite unique as it doesn't try to solve the problem of choice, it just helps to simplify it by showing all needed information on one page in a way that is easy to compare.

![Chart view](assets/img/starratio/star-ratio-03.png)

## Why did you develop *StarRatio*?

I've found a problem and haven't found a good solution, isn't it a reason for any developer to build new tool?

So I've planned to develop simple, usable tool over a weekend and ship it within less than a week. And here it is.

## What next?

Currently, we are actively discussing different possibilities and directions in which this tool can grow. In the near future, we are going to release a version for .NET-based projects. Also, we are developing a way to save comparison sets, so users will be able to add useful comparisons to the tool.

## What does the future look like for *StarRatio* and web development in general? Can you see any particular trends?

One of the biggest trends right now is JavaScript and especially different approaches, frameworks, libraries and tooling around JavaScript.

The is even a term - "JavaScript fatigue", that becomes really popular these days. You always need to choose on which subset of JavaScript to write, which framework/library/component/tool/bundler to use.

You can see that people are already really tender because of this and they already starting to think how to solve it.

StarRatio is one of the tools that helps to solve at least one problem from the whole "fatigue" set. I hope that in near future there would be more tools that help to rescue from that problem of choice.

## What advice would you give to programmers getting into web development?

I will not be unique and will advise to never stop learning.

But I will suggest one cool way of learning - prototyping.

Prototyping is an amazing way to learn and trying new things!

You can set a goal, as I did with StarRatio - create an app over a weekend. This will allow you to focus on the result and build a small but functional product.

Believe me, you will face a lot of real problems and you will learn how to solve them in a short period of time.

## Who should I interview next?

I would suggest to interview [Andrew Nesbitt](https://github.com/andrew), the creator of [Dependency CI](https://github.com/DependencyCI), [Libraries.io](https://github.com/Librariesio), [24 Pull Requests](https://github.com/24pullrequests) and [Split](https://github.com/splitrb).

## Conclusion

Thanks for the interview Dmitry! You should check out the [StarRatio site](http://starratio.js.org) to learn more. Be sure to visit [GitHub](https://github.com/StarRatio/star-ratio) too.
