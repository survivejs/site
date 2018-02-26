---
title: 'WebpackBin - Webpack Code Sandbox - Interview with Christian Alfoni'
date: 2017-05-09
headerImage: 'assets/img/bin.jpg'
keywords: ['interview', 'webpack']
---

Online tools are great for prototyping ideas and even workshops. You avoid the pain of setup while giving up some degree of control. Often this is a good trade-off, though.

The interview series covered [CodeSandbox, an online React playground](/blog/codesandbox-interview) earlier. This time around it's time to look into another alternative, WebpackBin by [Christian Alfoni](https://twitter.com/christianalfoni).

T> If you have been following the series, you might remember an earlier interview of Christian. That time around we [discussed his state management solution, cerebral](/blog/cerebral-interview).

T> **Editor's note:** WebpackBin isn't online anymore. You can still read the blog post but don't expect the service to work!

## Can you tell a bit about yourself?

<p>
  ![Christian Alfoni|100|100|author](assets/img/interviews/christian.jpg)

  For sure! :) I am a 33-year-old JavaScript hacker, developer, OSS enthusiast and due to that an emotional wreck. Living in Trondheim, Norway. I spend my days at Ducky, a startup I joined last year.
</p>

We are trying to save the planet, and my part in that is making technology choices and informally running a small development team to support the constant changes and ambitions of the company.

Related to this I do a lot of open source. The [cerebral](http://www.cerebraljs.com) project, which we have talked about before, is about to hit 2.0 release and has been a great tool to handle the complexity and constant changes in our project.

I also have other smaller projects, like [marksy](https://github.com/cerebral/marksy), I write articles from time to time on [www.christianalfoni.com](http://www.christianalfoni.com), and I have built a bin service that uses webpack bundling on the server side. My biggest project these days though is my six months year old daughter, Emma.

## How would you describe *WebpackBin* to someone who has never heard of it?

You have probably heard about bin services like JSBin, Codepen, etc. These are certainly excellent services, but the way we write our code has changed a lot the last few years. We transpile pretty much everything we write.

The JavaScript code itself to a more modern syntax, JSX, templates, CSS, etc. We do not add libraries as script tags anymore either; we install them from npm. Lastly, we bundle all this together using a build tool, like webpack, using a single entry point. Webpackbin does its best to be a bin service that gives you these features directly in the browser.

## How does *WebpackBin* work?

Webpackbin is split up into different services.

- Webpackbin Client
- webpack-sandbox
- webpack-dll
- webpack-packager

### Webpackbin Client

The client itself is just a JavaScript application that is served from Firebase and connects directly to it. It is built with Cerebral and Inferno. When the client loads up, it will contact the **webpack-sandbox** service.

### webpack-sandbox

The request contains information about the files, npm packages and Webpack loaders that have to be activated on the bin. The **webpack-sandbox** will spin up a webpack middleware on your personal session based on these details, much like the webpack-dev-middleware. What is unique about this middleware though is that it runs entirely in memory.

### webpack-dll

If the request contains npm packages, the **webpack-sandbox** service will make a request to **webpack-dll**. The request is specifically for a *manifest.json* file. If the compilation of packages has been requested before, this file is either returned by the CDN or the database of the **wepback-dll** service. If it is a new compilation of packages **webpack-dll** will contact one of multiple **webpack-packager** instances.

### webpack-packager

The **webpack-packager** takes the list of packages, runs them with Yarn, uses Webpack to bundle up a DLL bundle, cleans up after itself and responds to the **webpack-dll** service. The **webpack-dll** service now puts the bundle into a database and also responds with the requested manifest.

T> A DLL bundle is a JavaScript file that your app file can hook into to load modules, typically packages from npm.

Now **webpack-sandbox** has a manifest it bundles together with your middleware instance and any loaders configured. It responds with an OK, and the webpackbin client will now refresh an iframe also pointing to **webpack-sandbox**, but now it is a get request.

The session is picked up, points to the middleware, extracts the bundled files and injects a script in the *index.html* to the *dll.js* file related to the manifest that was requested earlier. The iframe loads the returned index.html which grabs the dll file, your particular bin app bundle and voilà your bin is displayed.

### Design - The Hardest Part

Now, it was not like I took a shower or woke up one night and had a clear picture of this. There have been many showers and many sleepless nights thinking about and tweaking this. And what I just explained now is the easy part. The hardest part will most certainly come as a surprise, and it is two-fold.

**1. Webpack DLL bundles are not as straightforward as you might think**

They require the npm packages to be installed locally to resolve entrypoints, but there is no local install in the browser. So the way this is solved is by analyzing the npm packages and finding relevant entrypoints beforehand. These entry points are then defined as *externals*, so your code grabs the correct module when asked.

**2. npm packages are a complete mess**

It feels like every single npm package out there has their little tweak on **package.json** property names, directory names, file names and what is included in the published npm package.

The **webpack-packager** service has a lot of logic to figure out what should be included, mostly by figuring out what should **not** be included. Doing this is still a challenge, but it is under control.

## How does *WebpackBin* differ from other solutions?

When it comes to features, Webpackbin has a cool LIVE feature. You can just hit a button and share your URL and others can see your code live. You can give control to your participants, and the idea is to provide a teaching tool.

Another beautiful thing is that you can download your BIN at any time as a zip file, ready to be npm installed and npm started. It includes the packages, loaders and a webpack config based on that.

But where it is rather unique is its ability to configure Webpack loaders. Which means you can use css-modules, Vue templates, handlebars, etc. pretty much any loader that transpiles can be used.

That said, this has to be pre-configured on the server, due to the nature of running it in-memory with middleware. But if you can not find your loader a PR is always welcomed.

I am not sure about other bin services, but Webpackbin is [completely open source](https://github.com/cerebral/webpackbin). All the parts of the architecture is up for grabs.

## Why did you develop *WebpackBin*?

Yeah... why did I... hm. First of all, it was a huge technical challenge, and I had somewhere to start, I had an idea, and the webpack-dev-middleware project would very likely help me produce a proof of concept, which it did.

I do not have grand plans with the stuff I do, I just like to follow my obsessions and intuition, and in this case, it resulted in something that could help people... which is the ultimate reward for me.

And working on these kinds of projects usually opens up new doors. Like the **webpack-dll** and **webpack-packager** service is now being used by Codesandbox.io as well, allowing me to meet and work together with a guy who is just as enthusiastic as me about open source, the community, creating things...

Ives makes me feel incredibly old though. Can you believe he is like 20 years old and has built Codesandbox.io? It is pretty crazy. In my defense, and anyone else reading this who is also feeling old now, the web was pretty different 13 years ago.

## What next?

I worked on a project a while back, using Cerebral, where I was able to record audio and interaction together in the browser allowing you to replay code interactions, pause it, change it, continue where it left off, etc.

### Webpackbin as a teaching tool

I hope to find some time to implement this into Webpackbin, making it a teaching tool. You can just create a bin, hit the record button, start talking and coding. When opened by others it is completely transparent what is recorded and what you do as a user, I think that could be a powerful thing.

### npm package analysis

Other than that Ives and I are tightening the screws on **webpack-packager**, creating a webpage for **webpack-dll** that shows the status of packagers, instructions to contribute or fire up your set of services, etc. We also want to build a service that analyzes your npm distribution, giving you hints about things you should not have there like tests, the source code, docs, benchmarks, etc. and also naming conventions, package.json properties etc.

T> **Editor's note:** I hope npm can take the clue and integrate some of these features to npm client itself!

We want to help to force some conventions on these things. We are also collaborating on other features that both our services can use. And who knows, maybe a path opens where we can combine forces on all parts of the stack.

## What does the future look like for *WebpackBin* and web development in general? Can you see any particular trends?

I am a bit sick and tired of listening to: "Use a type system, prevent runtime exceptions". "Use immutable data structures, prevent unwanted mutations". These are not good arguments in my opinion.

When I discovered that immutability gives you a history of state changes which could help me debug my app, or it allows you to verify with shallow checking to optimize rendering that is when immutability made sense.

I think the same about type systems. Like runtime exceptions are not the problem. That is not what we spend time on. But I can see self-documenting, safe refactoring and enhanced IDE experience are good arguments for type systems.

### Managing Increasing Complexity

But my point is that these are not my primary pain points. What I think we struggle with is handling the increase of complexity in our applications. Compare what we did three years ago to what we do now, regarding animations, interaction, data and new technologies.

To handle all this stuff we need abstractions. We need abstractions for UI, animations, state management, flow control, etc. Even the technology itself, like CSS, service workers, etc. There are tons of projects working on improving their usability.

### More Abstractions, More Tooling

So I think we are going to see a massive increase in abstractions to help us handle all this complexity. We are not going to write more code; we are going to write less. We are going to use a lot more tools, and they are going to be visual tools.

Just take a look at the significant innovations in dev tools for frameworks, Chrome dev tools, bundle analyzers, etc. I think we have only seen the beginning of this.

## What advice would you give to programmers getting into web development?

You only need two things:

1. A subscription on [www.frontendmasters.com](https://frontendmasters.com/)
2. A mentor

Some people like to say: "Learn the language". I do not agree with that. I think "Get productive and have fun" is more important. You can be insanely productive without understanding the inner workings of JavaScript, and getting into that stuff will come naturally to you as you take on more and more complex concepts.

## Who should I interview next?

I think you should get a hold of Amy Knight from [JavaScript Jabber](https://devchat.tv/js-jabber). As I understand she is relatively new to programming and I believe it would be interesting, especially here in Europe, to listen to what resources she had available to her and how she got going with programming. Maybe we can learn something over here.

We are trying to get to a place where we do not ask questions like "As a woman....", but the state of our community is that we severely lack women, and we need to understand what we are doing wrong. Like my old boss said, you need at least 30% women at the party because then the men behave.

## Any last remarks?

Well, I guess I should encourage you to check out [Cerebral 2.0](http://www.cerebraljs.com) which is closing in on release. It is a JS framework that goes head on with handling side effects and has a pretty excellent debugger.

## Conclusion

Thanks for the interview Christian! I remember using WebpackBin on my early workshops and it was particularly great to see the recent upgrades made to the service. If you haven't tried it in a while, it's worth another look.

If you want to check out the source, see [webpackbin on GitHub](https://github.com/cerebral/webpackbin). The service itself isn't online anymore.
