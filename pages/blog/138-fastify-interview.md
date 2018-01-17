---
title: 'Fastify - Fast and low overhead web framework for Node.js - Interview with Tomas Della Vedova'
date: 2018-01-17
headerImage: 'assets/img/mustang.jpg'
keywords: ['interview', 'nodejs']
---

Servers, servers, servers. I've written a lot of Node.js servers since I began using it. Initially, I went through the API it provides but after a while most of the community settled on using [Express](https://expressjs.com/).

In this interview you'll learn about an alternative by [Tomas Della Vedova](https://twitter.com/delvedor). Fastify has been designed performance in mind.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/1db56707b818ace550da1123a8ad1304?s=200" alt="Tomas Della Vedova" class="author" width="100" height="100" />
</span>

I am an enthusiastic software engineer, who spends most of his time programming in JavaScript and Node.js. I am constantly forward the enrichment of my knowledge and the exploration of new technologies. Moreover, I truly believe in the open source philosophy, and I will always be passionate about technology, design, and cinema.
</p>

## How would you describe *Fastify* to someone who has never heard of it?

[Fastify](https://github.com/fastify/fastify) is an opinionated web framework for Node.js; it focuses on performance and low overhead. The architectural pattern that we used to build it enables microservice ready applications.

The core is small and it [exposes powerful APIs to extend it](https://github.com/fastify/fastify/blob/master/docs/Ecosystem.md) with all the functionalities that are needed.

## How does *Fastify* work?

Fastify is the handler function that you pass to the HTTP core module, nothing more.

We started building it from scratch, adding one feature at a time. For every new feature, we worked a lot on the optimization and lowering the overhead of the feature, trying to reach the "almost zero" overhead.

Fastify supports our of the box Hooks, express style middlewares, decorators, HTTP2 and async-await.

```javascript
const fastify = require("fastify")();

fastify.get(
  "/", async (request, reply) => ({ hello: "world" })
);

fastify.listen(3000, function (err) {
  if (err) {
    throw err;
  }

  fastify.log.info(
    `Server listening on ${fastify.server.address().port}`
  );
})
```

We have extracted from Fastify all the code that could be separated from the framework itself and used in other situations, for example in our [router](https://github.com/delvedor/find-my-way), the [serialization library](https://github.com/fastify/fast-json-stringify) and the [middleware engine](https://github.com/fastify/middie). We released them as separate libraries that don't need Fastify as a dependency, so you can use them in your current framework as well, or even build one just for your needs!

## How does *Fastify* differ from other solutions?

Given one of the core goals of the project is performance, we do not land any feature if the implementation isn't well optimized and the cost that we pay is as low as possible.

Fastify has a robust plugin system, it guarantees the load (and close) order of the plugins and creates a zero cost encapsulation to help the users maintain a clean and ordered code. It will also help the user to write decoupled code and use a different version of the same plugin (or maybe with different configurations) in a different subsystem of the application. A similar approach with Express would cause the performance to drop significantly for each nesting level.

Furthermore, the plugin model is based on [reentrant](https://stackoverflow.com/questions/1312259/what-is-the-re-entrant-lock-and-concept-in-general) locks and given it's graph-based, Fastify handles asynchronous code correctly while guaranteeing the loading order and the close order of the plugins.

The plugin system creates a direct acyclic graph, and in this way, it is impossible to create cross dependencies, and you can use a different version of the same plugin in different parts of your application.

![Directed acyclic graph](assets/img/fastify/dag.png)

Thanks to this architecture it is easy to split your application in multiple microservices because we'll help you with the creation of a system where the separation of concerns and cohesion are two essential keys of your application.

![Directed acyclic graph services](assets/img/fastify/dag-services.png)

## Why did you develop *Fastify*?

Almost one year and a half ago me and [Matteo](https://twitter.com/matteocollina), the coauthor of Fastify, started working on a nice project, [fast-json-stringify](https://github.com/fastify/fast-json-stringify). By doing different performances analysis we discovered that serialize JSON is very expensive, so we asked ourself, can we make it faster? We worked for 1-2 months, and we built `fast-json-stringify`, which is 2x-3x times faster than the native method (spoiler alert, we use [JSON Schema](http://json-schema.org/)).

```javascript
const FJS = require("fast-json-stringify");
const stringify = FJS({
  type: "object",
  properties: {
    user: { type: "string" },
    age: { type: "integer" }
  }
});

console.log(stringify({ user: "tomas", age: 24 }));
```

We were pleased with the results, so we started optimizing other parts that usually are pretty expensive. Routing, hooks, middlewares and so on.

After some time we put all together, and Fastify was born. We wanted to challenge ourselves to build an extremely fast web framework, with the goal to get very close to the performances of a plain node HTTP server.

## What next?

Currently, we are close to the version 1.0.0. We are focusing on fixing the last bugs, and we are listening to feedback from our early adopters. In this way, we can try to meet their needs and handle breaking changes. We are also updating the API plugin to allow the users to declare their dependencies and provide better support for async-await.

An example of how *async-await* works in Fastify:

**server.js**

```javascript
async function build (opts) {
  const fastify = require("fastify")(opts);

  fastify.register(require("fastify-helmet"));
  fastify.register(require("fastify-mongodb"), {
    url: "mongodb://mongo/db"
  });
  fastify.register(require('./lib'), { prefix: "/v1" });

  await fastify.ready();

  return fastify;
}
```

**lib/index.js**

```js
async function plugin (fastify, opts) {
  const { db } = fastify.mongo;
  const collection = db.collection("users");

  // you can reach this route with `/v1/user/:id`
  fastify.get("/user/:id", async (request, reply) => {
    try {
      return await collection.findOne({
        id: request.params.id
      });
    } catch (err) {
      reg.log.error(err);

      return new Error("Something went wrong");
    }
  })
}

module.exports = plugin;
```

We want our community to continue to grow, so every time a plugin creator sends it work to us, before adding it to our "official" [plugin list](https://github.com/fastify/fastify/blob/master/docs/Ecosystem.md) we help them to improve their code (if needed), and enforce a correct use of our API.

We are also constantly updating the documentation with all the hardest parts or our architectural decisions. For example, we wrote the [hitchhiker's guide to plugins](https://github.com/fastify/fastify/blob/master/docs/Plugins-Guide.md) to help users understand the architecture of the framework and how to use correctly the APIs that we expose, and we have just updated our [getting started guide](https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md).

## What does the future look like for *Fastify* and web development in general? Can you see any particular trends?

I hope it looks shiny!

Joke apart, one of our core design decision, is that Fastify should provide a lightweight and small core that is easy to extend with plugins. Probably most of the work we'll do in the future will be in this direction while exposing new (and low overhead) APIs to the plugins creators and help them to create valuable plugins.

Regarding the future of web development I think that progressive web apps, AI and internet of things will play a important role. This is why with Fastify we created a "batteries not included" framework, we want to help developers build the applications they need by using the code they need.

I hope that the open source world will continue to grow massively as its doing right now, and that developers and companies will continue to release their work, in a way that everybody will continue to grow as a group, where we all help each other make valuable code to help people.

## What advice would you give to programmers getting into web development?

Try. The better way to learn new things is to try them.

A book or a workshop can help until a certain point, but if you want to really understand how something works, just write it. Get your hands dirty.

If you have some problem with a library or have a question on how approach to a pattern or technology, ask.
But remember to be always kind with others, we are all human beings and the way we interact each other is important.

If you open an issue be kind, thank for the work that has been done, explain your problem and if you can, propose a solution. It will be appreciated.

Contribute to open source, even with small things. The open source world is amazing and as much you give as much you get.

It's hard to measure how much the open source world gave to me; it helped me to be a better developer and a better person.

Do not be discouraged by others experienced developers, everyone has been young and everyone will help you, as well as you will help other young developers in the future.

## Who should I interview next?

[Yoshua Wuyts](https://twitter.com/yoshuawuyts), creator of [Choo](https://github.com/choojs/choo) and many other cool things.

## Conclusion

Thanks for the interview Tomas! Fastify looks like something I should try on my servers.

You can [learn more from Fastify site](https://www.fastify.io/) or [Fastify GitHub](https://github.com/fastify/fastify).
