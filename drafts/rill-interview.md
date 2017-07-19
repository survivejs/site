---
title: 'Rill - Universal web application framework - Interview with Dylan Piercey'
date: 2017-xx-xx
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/b61015f2b07ed0be4478713bed9348ef?s=200" alt="Dylan Piercey" class="author" width="100" height="100" />
</span>

</p>

I like to tinker. As a kid I enjoyed modding video games and got into programming when I was 12 years old.
I've programmed professionally for about 4 years now and fell in love with the massive community behind web development.

Open source software has been my peaceful haven since I learned git. For me programming is fun, especially on my own terms, and FOSS is exactly that.

## How would you describe *Rill* to someone who has never heard of it?
[Rill](https://github.com/rill-js/rill) is my 2 year old baby. In JavaScript terms that means it's just turned 21. Jokes aside [Rill](https://github.com/rill-js/rill) is a tool that allows you to learn less tools. It is [Koa](https://github.com/koajs/koa) designed and optimized from the ground up to work in the browser.

So how does this help? Well first you get one router for both the browser and Node, meaning you *can* drop react-router and [Koa](https://github.com/koajs/koa).

Second you get to think of building web applications as if you have a *zero latency node server* in every users browser. With this you can easily build fault tolerant, progressively enhanced websites with minimal effort.

Lastly it is a flexible abstraction, just like it is on the server-side already with [Express](https://github.com/expressjs/express) and [Koa](https://github.com/koajs/koa). With [Rill](https://github.com/rill-js/rill) I have been able to replace many tools including redux and it also supports many rendering engines with more on the way. [Rill](https://github.com/rill-js/rill) also plays nicely with all of the other libraries making upgrading a bit easier.


## How does *Rill* work?
Depends where you look. [Rill](https://github.com/rill-js/rill) on the server-side is more or less a rip off of [Koa](https://github.com/koajs/koa) with some careful forthought, but in the browser things get interesting.

[Rill](https://github.com/rill-js/rill) works by intercepting all `<a>` clicks and `<form>` submissions and pumping them through a browser side router with the same API as the server-side. It supports pretty much anything you can think of including cookies, redirects and [sessions](https://github.com/rill-js/session) all isomorphically (i.e. in both the server and browser).

There are a few huge wins here. Firstly you don't have to use any fancy `<Link>` tags or similar and aren't tied to [React](https://facebook.github.io/react). Second the server-side doesn't need to do anything fancy to handle links and forms. And lastly you already know how links and forms work, so just go use them.

If you'd like to take a look at Rill's link/form hijacking logic it has been separated out into [@rill/http](https://github.com/rill-js/http/blob/master/adapter/document.js), making the main [Rill](https://github.com/rill-js/rill) repository completely universal!


## How does *Rill* differ from the other solutions?
It's a unifying router. Whilst developing universal applications I often found myself writing routes twice. As if that wasn't bad enough the syntax for the routers were often vastly different - try comparing [react-router](https://github.com/ReactTraining/react-router) with [Express](https://github.com/expressjs/express) and you'll see what I mean.

[Rill](https://github.com/rill-js/rill) aims to simplify that and provides a consistent routing interface between the server and browser. It also works perfectly fine as a standalone router in either one.

Take for instance the following example:

```js
import rill from 'rill'
import bodyMiddleware from '@rill/body'
import reactMiddleware from '@rill/react'

// Setup app.
const app = rill()

// Use isomomorphic react renderer.
app.use(reactMiddleware())

// Use an isomorphic form-data/body parser.
app.use(bodyMiddleware())

// Register our form page route as normal.
app.get('/my-form-page', ({ req, res })=> {
 res.body = <MyForm/>
})

// Setup our post route.
app.post('/my-form-submit', ({ req, res })=> {
  // Analyze the response body (works in node and the browser)
  req.body //-> { email: ... }
  // Perform the business logic (typically calling some api)
  ...
  // Finally take the user somewhere meaningful.
  res.redirect('/thank-you')
})

// Start app.
app.listen({ port: 3000 })

// Simple full page react component with a form.
function MyForm (props) {
  return (
      <html>
          <head>
              <title>My App</title>
          </head>
          <body>
              <form action="/my-form-submit" method="POST">
                  Email: <input name="email">
                  <button type="submit">Subscribe</button>
              </form>

              <script src="/app.js"/>
          </body>
      </html>
  )
}
```

Notice how similar this looks to the server only code you are use to? You get to use middleware and routing in a way you are probably already familiar with. However the above example when compiled with [Webpack](https://webpack.js.org), [Rollup](https://rollupjs.org), or [Browserify](http://browserify.org) can also work in the browser!

For a more detailed example checkout the [TodoMVC](https://github.com/rill-js/todomvc) implementation with [React](https://facebook.github.io/react) and [Rill](https://github.com/rill-js/rill).


## Why did you develop *Rill*?
I've built 20+ websites/applications all of which needed strong SEO and good fallbacks for our users using legacy browsers. It became a constant struggle to enhance content for modern browsers while maintaining support for older ones.

Rather than building a server-side solution and then rebuilding a client side solution my goal was to make a framework that allowed me to do both at once. It was originally inspired by [koa-client](https://github.com/kentjs/koa-client) and [monorouter](https://github.com/matthewwithanm/monorouter) and it turned out to be a robust solution.


## What next?
Well that's largely up to what I build next and what the community asks for.
[Rill](https://github.com/rill-js/rill) has been pretty stable for the past year with most of the major work being done having no breaking changes.

One of the more recent changes is that [Rill](https://github.com/rill-js/rill) is now able to run in a service worker which I think could be interesting for offloading the router in another thread.

Another thing that I have meant to explore is a creating a [Rill](https://github.com/rill-js/rill) middleware that works something like [ViralJS](http://pixelscommander.github.io/Viral.JS/#.WW5GmsYZNP0) and would allow for distributed rendering of [Rill](https://github.com/rill-js/rill) applications.

Something that's been in the back of my head for a while now is making [Rill](https://github.com/rill-js/rill) work on other platforms. The code has been formatted in such a way that the document logic has all been extracted into a single file but I have limited experience with native applications and need a kick to get me going on this front.


## What does the future look like for *Rill* and web development in general? Can you see any particular trends?

For [Rill](https://github.com/rill-js/rill) the future is hard to see; Theres some of the obvious features mentioned above of course but the point of it as with any router is to be flexible. [Rill](https://github.com/rill-js/rill) in my eyes is a foundation for isomorphic/universal apps and what I've built with it so far is only the tip of the iceberg.

In general I think that things are going to get simpler, faster and smaller. It never seems that way while I'm riding the wave JavaScript frameworks but at the same time things are constantly popping up like [svelte](https://svelte.technology) and [choo](https://choo.io) which are all considerably simpler than there predecesors and also faster and smaller.

However the main reason I think this is the case is that the web will eventually bake in much more of the functionality that is needed for modern applications such as web components. I think the abstractions will get lighter and lighter until they fade away.

At least I hope this trend continues 😜.


## What advice would you give to programmers getting into web development?
Make a github/twitter account and follow everyone who's doing something cool. You have teachers all around you and excellent open source software as a standard to which you can eventually compare.

Don't sweat the stuff you don't know but try to be aware of it. Learn things when you need them and actively search out new solutions when you find that your's are lack luster.

Lastly find something fun to build. It's far too easy for your 9-5 job to ruin programming for you. Try to find truly interesting things that are fun to work on and pick away at them when you have time.


## Who should I interview next?

There are a huge number of people I'd love to hear more from.

I'd love to hear more from [Patrick Steele-Idem](https://github.com/patrick-steele-idem) on all of the crazy optimizations available with [MarkoJS](https://github.com/marko-js/marko) and where they thing it's going. I hope a stable [Rill](https://github.com/rill-js/marko) integration is coming soon 😄.

Also I'm constantly impressed by the quality of modules pumped out by [Yoshua Wuyts](https://github.com/yoshuawuyts) and would be interested in his approach to building them.


## Any last remarks?
[Rill](https://github.com/rill-js/rill) is a lesser known tool and I am always eager to receive community feedback. If anyone has any questions or just want to chat you can always find me on the [gitter](https://gitter.im/rill-js/rill).

Thanks SurviveJS for the interview and [Rich Harris](https://gitter.im/rill-js/rill) for the recommendation.


## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Dylan!
