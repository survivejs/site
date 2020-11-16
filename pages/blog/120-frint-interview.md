---
title: "FrintJS - Build reactive applications with React and RxJS - Interview with Fahad Ibnay Heylaal"
date: 2017-09-06
headerImage: "assets/img/frint.png"
keywords: ["interview", "react", "rxjs"]
---

React gives a lot of freedom by default. You can choose which libraries to use to complement it. Freedom comes with responsibility, though. Now you are responsible for your decisions.

[FrintJS](https://frint.js.org/) by [Fahad Ibnay Heylaal](https://twitter.com/fahad19) and his company has developed a framework that brings certain opinions around React and helps to alleviate some of the problem.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/19a3655e6ba9e5a496ee690ba03f2180?s=200" alt="Fahad Ibnay Heylaal" class="author" width="100" height="100" />
</span>

Currently living in Amsterdam and working as a software engineer at [Travix](https://www.travix.com/). For the last few years, I have been focusing on JavaScript a lot. And never felt bored for a single day since!

</p>

I enjoy being involved with Open Source activities. Not just the coding part, but all the other opportunities it brings along with it too. I feel a lot of good things have happened in my life because of the people I got to know through Open Source. And whenever I can, I try to contribute meaningfully back to the community that's giving us all so much on a regular basis.

## How would you describe _Frint_ to someone who has never heard of it?

[FrintJS](https://frint.js.org) is ultimately a collection of packages that help you build reactive applications in a scalable way. It is modular by nature and helps provide your application structure. If you look at our [monorepo](https://github.com/Travix-International/frint), everything is broken down into small packages. You use only the packages you need to build your application - either in the [browser](https://frint.js.org/docs/packages/frint-react/), [server](https://frint.js.org/docs/packages/frint-react-server/) or [CLI](https://frint.js.org/docs/packages/frint-cli/).

## How does _Frint_ work?

FrintJS has this concept of [Apps](https://frint.js.org/guides/apps/). Everything is contained within an App. And Apps can contain various things in the form of [Providers](https://frint.js.org/guides/providers/), which is backed by a dependency injection system.

There has to be a single Root App, and then there can be multiple Child Apps registering themselves to the Root one:

![FrintJS apps](assets/img/frint/apps.png)

If they are meant for rendering, they can also pass options for targeting different [Regions](https://frint.js.org/guides/regions/) (areas where Apps are expected to be mounted) during registration.

Code splitting is another primary thing we needed to tackle, and you can see here how different Apps can be loaded targeting different regions, which are coming from separate bundles:

![FrintJS regions](assets/img/frint/regions.png)

It has a flexible dependency injection system, and rendering is entirely an optional thing. We use React, that's why we built [`frint-react`](https://frint.js.org/docs/packages/frint-react/) too in our monorepo so that we can connect our Apps with React nicely.

If someone wants to use a different library for rendering, they are completely free to do so. We tried hard not to lock ourselves in.

In fact, I recently released [`frint-vue`](https://github.com/frintjs/frint-vue) for Vue.js integration with Frint.

If you are working with components, then FrintJS encourages you to keep the logic outside of your components as much as possible, and only pass the props as a stream to it, so the component is only responsible for rendering and nothing else.

![props-stream](assets/img/frint/props-stream.png)

T> [You can read a blog series about RxJS and React to learn more.](https://medium.com/@fahad19/using-rxjs-with-react-js-part-i-introduction-4d027ef55aa6).

## How does _Frint_ differ from the other solutions?

It's hard to compare with any other solutions since FrintJS takes a simple and unique approach. It is not a full featured framework like AngularJS or EmberJS, but rather gives you a set of solid building blocks that you can grow your application up on. FrintJS provides tools that help you break your large applications into smaller apps, that you can assemble on demand.

You can say that it differs mainly from other frameworks, by not locking itself into any specific rendering or templating library. And also by not targeting any specific platform: browser, server or CLI. It just works everywhere.

## Why did you develop _Frint_?

At Travix, we already have our front-end application built with React. We were one of the early adopters of React, and things have grown big over the years.

There are multiple teams continuously working on the same repository, and it has resulted in a pretty large monolith over time.

We realized we have a scaling issue. Regarding distributing the work to individual teams, and also performance-wise when it comes to bundling the whole application in our CI-server in one go.

We did some proof-of-concepts for solving the various issues we had, and one of them ended up becoming FrintJS. Now that we have this concept of [Apps](https://frint.js.org/guides/apps/), each team can maintain their app in their repository. And from the server's perspective, we can load only the apps we want (targeting URLs, etc.) and render them in the browser.

There was also a need for control over what dependencies become available to all the teams. We want to ship as less code as possible to the browser, and we wanted to put a constraint on us by limiting ourselves to using FrintJS only. Besides Frint packages, we currently have a hard dependency on `lodash`, `react`, and `rxjs` only.

This control also gives us an advantage over backwards compatibility, and we do take it seriously. Whenever we make changes, we move the removed features to `frint-compat` package, and they are supported with deprecated warnings for at least one quarter. Doing this gives our teams enough time to migrate.

A lot of our particular problems have been solved by FrintJS for us, but we always made sure that we addressed them in as generic way as possible. So that it doesn't just help us in one single project, but in as many other projects by us and others outside of Travix too.

## What next?

It has been almost a year that we are running FrintJS in production. The project has evolved a lot based on our learnings from production experience. And it will continue to grow as we face new challenges. Since the release of v1.0 earlier this year, we consider the project to be stable enough, and now we are building new packages around the core of the framework as we need them.

Besides that, we feel that it could do better if others find out about it too, and give it a go. That way, it will help us make the project even better with fresh new ideas.

We always try to communicate what's coming next on our [Roadmap](https://github.com/Travix-International/frint/wiki/Roadmap) publicly.

## What does the future look like for _Frint_ and web development in general? Can you see any particular trends?

FrintJS is young, and so far it has mostly been guided forward by the production needs of Travix. But I feel as more people find out about it, it will continue to grow even stronger and build a community alongside the current group of [contributors](https://github.com/Travix-International/frint/graphs/contributors) too. Then things will happen that may even surprise us, positively :)

As for web development in general, it has never looked more exciting than now. And it just keeps on getting more and more exciting over time.

Currently, React, and its ecosystem seems to be winning. And it has done an excellent job at advertising functional programming more positively to a wider audience. But it is the ecosystem around it that excites me even more. So many experiments are being done by everyone, that just pushes the norm even harder every day, forcing us to think differently. And that's just amazing.

We are a big fan of reactive programming at Travix, and I feel RxJS could get a bit more boost from more influential developers in the community. We bet big on RxJS with FrintJS ourselves, and a lot of hard problems have become easier for us to solve once we started thinking reactively. And I think the next big shift we will see in web development is a majority of the developers adopting RxJS or similar libraries for doing reactive programming.

## What advice would you give to programmers getting into web development?

Web development has evolved a lot over the last 4-5 years. And it really can be overwhelming for anyone new going into it for the first time and trying to figure out what is happening at the moment.

My first advice would be to stay patient. You don't have to learn everything in one go. There are so many things to learn. The best way is to find something to build and enjoy doing it. Figure out what you need to learn to build it along the way. It can be a blog, a todo list, or a two-column layout. It can be anything, no matter how big or small, as long as you enjoy building it.

I have seen many suggest to newcomers to always focus on learning the basics first, then get into frameworks and advanced libraries to build stuff. While this is a pretty good advice, I think this can also bore away some newcomers.

If you are learning from absolute zero, and want to feel and stay motivated, you would want to reward yourself quickly with visible results too. Otherwise, you may just stop with all your efforts.

This is where I feel things like [Yeoman](http://yeoman.io/), [`create-react-app`](https://github.com/facebookincubator/create-react-app), and online code editors like [CodeSandbox](http://codesandbox.io/), etc. are doing a great job at least in the JavaScript scene.

These tools enable you to get started with advanced stuff, without having to spend too much time in just setting things up if you are only interested in trying things out. Newcomers would do better if they find out about these tools early on.

One advice that I received myself from others is to find influential developers in the community, and follow them on Twitter, read their blogs, and see what they are up to. Doing this has worked wonders for me myself at least. It's a great way to feel inspired every day and stay motivated by keeping track of the cool stuff they are talking about.

## Who should I interview next?

I have been using [alex](https://github.com/wooorm/alex), by [wooorm](https://github.com/wooorm) in FrintJS for helping us write better documentation by catching insensitive words early in an automated way. He has been working on some other natural language processing tools too with JavaScript. I would be curious to know more about his latest work.

## Any last remarks?

I must mention and thank all the [contributors](https://github.com/Travix-International/frint/graphs/contributors) who helped grow this project, and the teams working at Travix who are not on the GitHub contributors list directly but still kept providing valuable feedback to guide this project towards a better direction continuously. Because of those teams, FrintJS as an Open Source project had the good fortune of having production users from day one.

If you have any questions or feedback, feel free to [contact me directly](http://fahad19.com), and am pleased to hear what you have to say about FrintJS.

And many thanks to Juho for organizing this, and helping spread the word about [FrintJS](https://frint.js.org)!

## Conclusion

Thanks for the interview Fahad! I hope people find FrintJS and perhaps even adopt it in their work.

You can learn more at [FrintJS site](https://frint.js.org/). See also [FrintJS GitHub](https://github.com/Travix-International/frint).
