---
title: "Tomo - Like CRA but more flexible - Interview with Jason Wohlgemuth"
date: 2019-09-04
headerImage: "assets/img/kermit.jpg"
keywords: ["interview"]
---

Although tools like create-react-app (CRA) are great, they can at times be inflexible. They might provide great defaults but at the same time you lose some power and room for experimentation.

To learn more about an alternative tool, I'm interviewing [Jason Wohlgemuth](https://twitter.com/jhwohlgemuth), the author of Tomo.

## Can you tell a bit about yourself?

My name is Jason Wohlgemuth. I am a principal software engineer working for BAE Systems in Omaha, Nebraska. I am a Jesus follower, husband, and father of 3 boys (two of which are identical twins). I am a progressive polyglot that prefers the front-end and likes to think that I can improve just about anything using science and software. In my free time, among other things, I want to make stuff...like tomo.

## How would you describe _Tomo_ to someone who has never heard of it?

Tomo is a friendly command-line tool that you can use to quickly craft and customize sustainable software using the latest and greatest web technology. Not sure what build tools to use? Great. Tomo allows you to compare apples to apples and go deeper after you have made an informed decision.

As an example, you can use tomo to scaffold a React web app that builds with webpack. Then you can swap out webpack for Parcel and quickly compare the benefits of both (hint: Parcel HMR is much faster for small projects). By the way, HMR (or live-reload for Marionette.js based apps) is included by default. Tomo can scaffold new web apps, native apps, libraries, and servers and can add testing, linting, CSS-support, and more to existing projects.

## How does _Tomo_ work?

Tomo starts with an intuitive command-line interface. Don't know what to make? [Use Tomo's menus](https://github.com/jhwohlgemuth/tomo-cli#select-what-you-want-to-add-via-the-tomo-cli-add-menu). Make a mistake while typing? Take comfort in Tomo's [friendly automatic error correction suggestions](https://github.com/jhwohlgemuth/tomo-cli#made-a-mistake-while-typing-tomo-has-your-back-).

Tomo is built with Node.js and leverages the React API using [vadimdemedes/ink](https://github.com/vadimdemedes/ink). Behind Tomo's declarative UI is a collection of modular commands (like "create source directory" or "add ESLint support").

The UI pieces together the desired commands to be executed and keeps the user updated as the process progresses. The [index file for Tomo's commands](https://github.com/jhwohlgemuth/tomo-cli/blob/master/src/commands/index.js) reads like a checklist for building things. In short, the UI is rendered declaratively using ink, and the commands are executed using Sindre Sorhus's library, [execa](https://github.com/sindresorhus/execa).

## How does _Tomo_ differ from other solutions?

Tomo does not seek to hide the complexity of modern web technology build chains - Tomo does not need an `eject` command. Tomo does not try to replace your build chain either. It allows you to build with what you know, compare what you do not know, and augment what you already have.

From my personal experience exploring the web, I have not found such a tool. With Tomo, you can easily compare apps with nearly identical architecture and run them side by side - one with webpack and one with Parcel.

Tomo allows you to create web (and native) apps using [Marionette.js](https://marionettejs.com). You can create apps with Marionette.js or directly compare "template interpolation rendering" (using Marionette.js) and "component rendering" (using React).

Finally, Tomo can _augment_ existing projects. That is, tomo can do things like add ESLint support, switch out Webpack with Parcel (and vice versa) and add integration testing with Cypress. Being able to create, add, and remove makes tomo very versatile. Tomo can be used for exploring new technology and exploiting known technology.

## Why did you develop _Tomo_?

Tomo is the spiritual successor to a Yeoman generator I made a couple of years back called `generator-omaha`. My "omaha" generator allowed one to make various choices of technology and create projects, web and native apps, and servers. The generator had a hard dependency on yeoman, limited UI options, and did not cleanly allow one to _augment_ existing projects.

I decided to re-write the generator and eventually I decided to re-write it _from scratch_, not as a generator, but as a stand-alone CLI app. I had taken an interest in "React for the CLI" and had seen the success of projects like [emma-cli](https://github.com/maticzav/emma-cli). Furthermore, I wanted to have finer-grain control of the UI and desired a pleasant DX while building it...this is why I decided to give [ink](https://github.com/vadimdemedes/ink) a try.

Around that time, I found myself in Africa for a year at the behest of the United States Navy. With nothing but my wits and my trusty Surface Pro 6, I spent most of my year creating what I now call tomo. More generally, tomo (and its predecessor, omaha) is how I codify my learning. That is, every pattern and best practice I know is encoded into Tomo.

You could say tomo is my **dynamic digital living codex of web tech knowledge that I use to build, share, and remember**. Lastly, as I found myself dipping my toe in other languages such as Rust, ReasonML, ClojureScript, and Elm, I had the need for adding CSS support (`tomo add postcss`)...or the desire to integrate ReasonML into an existing JS project (`tomo add reason`).

## What next?

That is a tough one. As for Tomo improvements and new features, I catalog my plans on a public [Trello board](https://trello.com/b/keq2Bc4R/tomo-cli). Other than new features, I intend to make things with tomo to prove its worth (both to me and others). I will continue to update Tomo as I learn and will use it in my projects.

A couple of stand-out features high on my list are enhanced native app creation, stdin support for using config files to run tomo, and codemod integration for doing things like transitioning from AMD to ES6. My long term vision is to include Tomo as part of a more significant effort to create a voice-enabled emotive digital assistant.

I have a multi-tiered plan for getting there, but the next step might be adding voice support to tomo. The general idea is to have tomo running and listening to your voice as you develop. During your development, tomo would respond to commands like "lint this file", "run my tests", or "create a server".

Unrelated to voice support, I just added `tomo new app --with-cesium [--use-react]`, so I will probably be making an app using [CesiumJS](https://cesiumjs.org/), [resium](https://resium.darwineducation.com/), and [Uber's H3](https://github.com/uber/h3-js) soon...ish (tomo makes it really [easy to deploy](https://github.com/jhwohlgemuth/tomo-cli#install-and-deploy) a Cesium app to surge or now :wink:)

## What does the future look like for _Tomo_ and web development in general? Can you see any particular trends?

Tomo's future is bright: as long as I am making things with web technology, I will be codifying my knowledge into tomo.

Web development, in general, is a horse of a different color. AMD seems dead, WebAssembly will continue to gain popularity and React will stay relevant and remain more than a UI library. It is a pattern that crosses the language barrier (ex: [reason-react](https://reasonml.github.io/reason-react/) and [reagent](https://reagent-project.github.io/)) (note: I love React hooks).

As far as what I would like to see - I am a big fan of [#usetheplatform](https://twitter.com/hashtag/usetheplatform?src=hashtag_click) (**#usetheplatform** is a driving force behind tomo). That is, tools like Babel and frameworks, in general, are like scaffolding around the building that is your web application. As the "platform" (browser) evolves and gains functionality (like web components), the scaffolding will be removed. Maybe one day, Babel and PostCSS will no longer be needed (frameworks in one form or another will probably persist).

With the availability of universal support for ["module type" scripts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), even bundlers may one day be a thing of the past (especially if projects like [pika](https://github.com/pikapkg/web) have anything to say about it).

I really want to believe web components have finally arrived, but I have had that thought several times in the past few years...despite my pessimism, I love [lit-element](https://lit-element.polymer-project.org/) and even integrate [lit-html](https://github.com/polymer/lit-html) into tomo Marionette.js apps (`tomo new app [--native]`). Finally, I LOVE functional programming. I hope it continues to gain traction (neither of us has the time in the day for me to convey _all_ my thoughts/emotions on functional programming 🤓).

## What advice would you give to programmers getting into web development?

Other than "use tomo"? 😁

I might say something like:

> Become comfortable with math and try to stay "implementation agnostic".

It hurts my heart when I read articles that espouse beliefs like "math is not important for web development". Perhaps you can avoid math if you stick to making simple landing pages with GatsbyJS or so. If you are going to make things of notable complexity or going to move the field forward, you will need math.

Now, I do not mean to say a Masters in Mathematics is the cost of entering the field of web technology. Whether it is purposeful or otherwise, good developers use math regularly.

Example: Have you ever seen something like `!(!A || !B)` and re-wrote it as `A && B`? It is called [De Morgans laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws), and I use it at least weekly. I am aware that this may not be a pleasant topic for some, but as a lifetime lover of math, to me, it is just spreading the joy of the ["...most colossal metaphor imaginable"](https://www.goodreads.com/author/quotes/88990.Norbert_Wiener) 😁. Also, the functional programming paradigm is based on concepts such as lambda calculus so...math.

By "implementation agnostic", I mean to say avoid being an "angular developer" or even a "react developer". Instead, strive to be a "web developer that understands the underlying concepts of [angular|React|whatever] and is familiar with its usage]". If you discover the underlying patterns of widespread technology, you will find that the web technology deluge is not as deep as some might lead you to believe.

## Who should I interview next?

I have three suggestions:

* [Chris Maltby](https://github.com/chrismaltby) - He created [GB Studio](https://www.gbstudio.dev/), an unbelievably cool project that allows one to create Gameboy games! GB Studio consists of an Electron game builder application and a C based game engine using GBDK. Super fun. I would love to hear more about its creation and development (and want to see it gain popularity).
* [RangerMauve](https://github.com/RangerMauve) - RangeMauve created a [local-first-cyberspace manifesto](https://github.com/RangerMauve/local-first-cyberspace). I would be interested to hear more on the topic from the source.
* [Jacob Jackson](https://jacobjackson.com/) - He created an intelligent code completion engine using a deep learning model trained on GitHub data. It is available as extensions for Atom, and VSCode called [TabNine](https://tabnine.com/). It is written in Rust. I would be interested to know more details on how he made it and what he sees in store for the future of TabNine and deep learning-powered code tools.

## Any last remarks?

Standards matter. Pick one and stick to it. [This is the ESLint part of mine](https://github.com/omahajs/eslint-config-omaha-prime-grade).

My favorite functional programming quote is by Michael Feathers:

> Objected oriented programming makes code understandable by encapsulating moving parts. Functional programming makes code understandable by minimizing moving parts.

[My favorite comment](http://benalman.com/news/2012/08/why-grunt/#comment-704079936) about web tech is from Jon Schlinkert:

> I guess we're just stuck in this downward spiral of continuous improvement. By the way, how's that job search for a dedicated Makefile engineer going?

Most of all: **Thank you!** I sincerely appreciate the chance to speak on some of my favorite things.

## Conclusion

Thanks for the interview, Jason! It's great to see when developers create tools for their own need out of sheer passion for creation and codify what they've learned.

T> [Learn more about Tomo at GitHub](https://github.com/jhwohlgemuth/tomo-cli).
