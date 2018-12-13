---
title: 'webpack-plugin-serve - A Development Server in a webpack Plugin - Interview with Andrew Powell'
date: 2018-12-13
headerImage: 'assets/img/wps.jpg'
keywords: ['interview', 'bundling', 'webpack']
---

Usually, when you use webpack, you also have to set up its development server as well. Traditionally doing this hasn't been trivial and has required a certain amount of expertise. That is one of the reasons why I wrote [the webpack book](/webpack/) available on this site.

To learn about an alternative approach, I am interviewing [Andrew Powell](https://twitter.com/shellscape), the developer behind _webpack-plugin-serve_.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/f738f26dd1bba7ab3cf9f971ffed5cd0?s=200" alt="Andrew Powell" class="author" width="100" height="100" />
</span>
I reside in the U.S., in the great state of [Florida Man](https://www.reddit.com/r/FloridaMan/), have been a remote developer for ten years, and am pretty passionate about Fishing and Fishery + Ocean Conservation. There's a good chance I'm on a boat as you're reading this.
</p>

On the [nerdy](https://media1.tenor.com/images/38116553c1ba1b9f0e4fbc7673b22622/tenor.gif) side of things, I love me some Team Fortress Classic, have owned an N64 for forever, and my focus these days is squarely on Node.js for Backend and DevOps.

## How would you describe _webpack-plugin-serve_ to someone who has never heard of it?

I'd wager the conversation would go something like this;

**Sean Connery**: What in the bloody hell is a webpack-plugin-serve?

**Me**: Mr. Connery, you're drunk again. Relax. You know webpack, and how Webpack has plugins to do all kinds of different things right?

**Sean Connery**: I love me some bundles. Pass the Scotch.

**Me**: Right. So to test your bundles on your machine, you need to run a local web server. Something like Express, Koa, or Python's SimpleHTTPServer would do the trick if you just needed something basic.

**Sean Connery**: Pythons! Going to get my Walther PPK, will dispatch them with haste. BRB.

**Me**: <facepalm> Moving on. Now, if you didn't have to spin up your server and take care of all the setup so the server would know where your bundle is and which files to serve, for each bundle you work on, wouldn't that be swell?

**Sean Connery**: I am quite swole, yes.

**Me**: So that's where this plugin comes in. It'll create a web server that stays running for the duration of the webpack process and goes away once the build process has been ended. Leveraging webpack's `watch` option keeps the process running, so the server doesn't have to.

**Sean Connery**: This conversation is sobering.

**Me**: Indeed, mind-blowing. And to top it all off, there's no new CLI to learn, no avalanche of CLI flags to understand, and you can pretty much mold it to your environment's needs.

**Sean Connery**:

![](assets/img/seanc.jpg)

**Me**: Right?

## How does _webpack-plugin-serve_ work?

_webpack-plugin-serve_ is a self-contained development server triggered by a webpack build and part of the webpack process. Users must add an instance of the plugin to their webpack configuration. A configuration might look something like this:

```javascript
const { WebpackPluginServe } = require('webpack-plugin-serve');
const options = { ... };

module.exports = {
    // an example entry definition
    entry: [
        'app.js',
        // important: this is where the magic happens in the browser
        'webpack-plugin-serve/client'
    ]
  ...
  plugins: [
    new WebpackPluginServe(options)
  ],
  // important: webpack and the server
  // will continue to run in watch mode
  watch: true
};
```

With that, we're leveraging quite a bit of 3rd party packages to make it all work:

1. When a webpack build is initiated, the plugin sets itself up. That includes a [Koa](https://koajs.com) application, middleware is set up, and a few other static goodies that need to be ready to go down the line.
2. Once a build starts, the plugin leaps into action. A web server is spun up and attached to the Koa application, a [WebSocket server](https://github.com/websockets/ws) instance is connected to the web server, and the plugin begins listening to the compiler instance for notification of a refreshed build.
3. If **Hot Module Replacement** is enabled, it'll communicate changes via WebSocket to the client/browser, and you'll see changes based on the options passed to the plugin.

There are different ways to configure and use the server, and we've [prepared a few recipes](https://github.com/shellscape/webpack-plugin-serve/tree/master/recipes) so it's faster to get started, and we're keen to add more.

## How does _webpack-plugin-serve_ differ from other solutions?

First and foremost, it's a plugin. Before starting development, we searched quite a bit to try and find a pre-existing, similar solution and we believe this is a novel approach for Webpack. As a plugin, it doesn't have the learning curve of a separate Command Line Interface, and there are no subsets of flags to learn or understand to use it.

Plugins are one of the first things that new Webpack users learn about - a perfect entrypoint for a bolt-on development server. And by leveraging the compiler directly, the server can offload responsibilities, like file watching, to the compiler and can avoid reinventing the wheel, thus reducing complexity.

### WebSockets without a Second Server

Just as with webpack-serve, we chose to use WebSockets for server-client communication (the magic that enables Hot Module Replacement instructions in the client/browser). Unlike webpack-serve, we were able to leverage a new "serverless" WebSocket server implementation.

We learned from _webpack-serve_ that while the intention behind a secondary WebSocket server was good, it increased complexity and issues with minimal benefit.

### Simpler Usage Due to Simpler Architecture

We also took the approach of building in support for the most popular feature sets of the other two development server options. Only this time around, there's no getting fancy with it:

* User-defined and user-ordered middleware is available, though vastly simplified as compared to _webpack-serve_
* Features like HTML History API Fallback, Proxying, and Compression have support baked in, though we differ in that options are passed straight through to the underlying dependencies. That makes use and documentation much easier for the end user, as there's no intermediate layer to have to understand.
* Useful overlays for errors and warnings and progress are included out of the box, and were developed using a somewhat-standardized approach, and have a sexy, uniform look and feel for a consistent experience.

I'd also argue that this approach is far cleaner than the others that preceded it. We've given a lot of consideration to how the feature set might be expanded and have put an architecture in place that should allow for new features to be supported without adding the kind of complexity that cripples maintainability. We learned quite a bit from the shortcomings of both _webpack-dev-server_ and _webpack-serve_ and made an effort to improve upon them.

## Why did you develop _webpack-plugin-serve_?

After parting ways with the webpack org, I took up an interest in Rollup. Partly because of requirements for a new professional position, somewhat because I've always been fascinated by Rollup's approach, and partly because I wanted to continue contributing to the bundler space.

When I talked to those folks about joining on, we identified a few needs for the project. One of them happened to be a full-featured, robust, project-supported development server. And so I went about researching what already existed for Rollup and stumbled upon [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve).

Full credit where credit is due - I hadn't considered that a dev server could be self-contained in a plugin until I ran across rollup-plugin-serve. It is/was a brilliant concept.

While still researching how I wanted to go about a Rollup development server, I was approached by a cadre of talented Brazillian developers (**@matheus1lva**, **@sseraphini**) who were bummed about webpack's decision to shutter _webpack-serve_.

### Plugin Based Approach for webpack

Their idea was to, at the least, fork and maintain _webpack-serve_. For Matheus and Sibelius, _webpack-serve_ was a better choice than _webpack-dev-server_, despite its own set of quirks. And so they asked me if I'd like to help with this new effort.

At that point, I didn't have much interest in doubling back to webpack, given my new direction of focus. But after discussions, the idea quickly emerged that this could be a platform to launch a standard experience for _many_ bundlers, not just restricted to webpack. And at that point, I was hooked.

Targeting webpack was the most logical starting point. I had accumulated a lot of knowledge about how a server should and shouldn't interact with webpack compilers and bundles by maintaining _webpack-dev-server_ and authoring _webpack-serve_.

Between that and the real-world, day-to-day user perspective that Matheus and Sibelius were able to provide, we were able to create something great. Much of the plugin is just "plumbing," but it's how that plumbing is arranged that makes this project a stand-out in my mind.

## What next?

Concerning this space, we're abstracting the codebase for the plugin into [bundler-serve](https://github.com/shellscape/bundler-serve), which will act as a platform for bundler development servers.

Matheus and I have already started the abstraction work, and we'll be targeting Rollup in the coming weeks as the first project to bind to the new platform. Eventually, _webpack-plugin-serve_ will use webpack-specific bindings to _bundler-serve_ as well. It's an ambitious plan, but I feel we've positioned ourselves nicely for a smooth path forward.

Outside of the dev-server and bundler realm I have a giant list of npm modules that I'd like to release, for which there aren't existing or effective alternatives (**@sindresorhus** is my npm hero). And I'm going to continue to look to help out existing projects who need maintainers. _markdown-toc_ is queued up shortly.

## What does the future look like for _webpack-plugin-serve_ and web development in general? Can you see any particular trends?

I can see us adding more features, or developing the modules to provide pass-through features, as use-cases arise. The Node server space is so rich in functionality that we should be able to expand it quickly - or most importantly - provide excellent direction for how users can apply needed functionality, easily.

Aside from that, the stack is pretty solid. I'm sure the webpack userbase will surprise us with scenarios we haven't considered - they always do.

### Predictions Are Difficult

As for web development, making bold predictions tend to be little more than hot takes. The "How to stay relevant in N years" trend on Twitter is evidence of that. And I've been awful at making predictions - I thought Twitter was a fad, I thought MySpace would always own Facebook, I passed on Bitcoin at $100US.

If I had to make a somewhat educated guess, I would say that the rise of ES Modules will start to take off in 2019, and tools like Rollup will take more substantial roles, while tools like webpack will begin to be considered "legacy".

### The Rise of a New Generation of Bundlers

You can already see some evidence in that with the rise of projects like Fastpack and Parcel, and the continued, steady increase in popularity in Rollup. I also believe 2019 will be the year of GraphQL. While 2018 saw GraphQL gain wide acceptance, I see enough to suggest that it's going to spread like wildfire.

### pnpm, NestJS, Vue.js

I could also see projects like pnpm gaining a wider userbase, and influencing npm proper, just as Yarn has. NestJS is something to take a good look at, and I wouldn't be surprised if Vue.js made a more significant dent in the next year.

Hopefully, that was sufficiently vague and will age well :)

## What advice would you give to programmers getting into web development?

Man, I started in 1996, and the path forward is so much different now. The way you take does a lot to influence how you move forward, and starting now would put me on a much different path.

My path took me from platform/system development to (what we now call) full-stack to the front end to back end / devops. I'd that starting now is probably daunting. What you need to know these days as a front-end developer is staggering, and a bit ludicrous.

So strictly for folks _starting fresh_:

* Ignore the trends. Focus on established tech to get up to speed. Trends change daily, established tech sticks around.
* Find a good source of learning, and stick with it. Back in the day, my source was _HTMLGoodies_ and I still have a binder full of printouts (because nostalgia) that helped me to get going. Try to avoid a short attention span on information sources. That'll provide some consistency and continuity. Folks like [Wes Bos](https://wesbos.com/) genuinely care about teaching the people they're making content for.
* Choose a focus, don't try to do it all at once. There are legitimate geniuses out there, but I'm not one of them. It took me many moons to accumulate the bit of knowledge I have, and I did that by focusing, learning, and refocusing when I felt I had reached proficiency.
* Avoid "thought leaders" and anyone who calls themselves one. These folks are prolific on social media, and just like talking heads, they want to keep your mind spinning and stay in the forefront. They won't help you gain traction, but they will keep you context shifting.
* Start with the basics. If you're getting into JavaScript, really learn the basics first. Don't dive straight into frameworks like React, Vue, or Angular. The same goes for all languages.
* Adopt a code style. Your preferences will evolve, but it's good to use established patterns to get started.
* Learn _how_ and _why_ things work. When you understand the underpinnings, debugging becomes a touch less painful.

So those are my truths. There's no possible way they're truths for everyone, instead of lessons I've learned over time. If they help someone out, that's great!

## Who should I interview next?

**@matheus1lva**! Brazil is producing some notable talent in engineering and JavaScript.

## Any last remarks?

We're just a few devs hoping to provide a better experience for everyone and appreciate folks spreading the word about it. Please don't hesitate to open an issue or hit us up on Twitter.

## Conclusion

Thanks for the interview, Andrew! It feels like _webpack-plugin-serve_ fits a niche in the ecosystem. I like particularly the fact that the underlying architecture will enable collaboration across different bundlers.

T> To learn more, [check out _webpack-plugin-serve_ in GitHub](https://github.com/shellscape/webpack-plugin-serve).
