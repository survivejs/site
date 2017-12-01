---
title: 'Fastify - Fast and low overhead web framework, for Node.js - Interview with Tomas Della Vedova'
date: 2017-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter, https://twitter.com/delvedor

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/1db56707b818ace550da1123a8ad1304?s=200" alt="Tomas Della Vedova" class="author" width="100" height="100" />
</span>

</p>

I am an enthusiastic software engineer, who spend most of his time programming in Javascript and Node.js. I am constantly forward the enrichment of my knowledge and the exploration of new technologies. Moreover, I truly believe in the open source philosophy and I will always be passionate about technology, design, and cinema.

## How would you describe *Fastify* to someone who has never heard of it?

[Fastify](https://github.com/fastify/fastify) is a very opinionated web framework for Node.js, it is highly focused on performances and low overhead,the architectrural pattern that we used to built it enables microservices ready applications.
The core is very small, but it expose very powerful apis to extend it with all the functionalities that are needed.

## How does *Fastify* work?

Fastify is just the handler function that you pass to the http core module, nothing more.
We started building it from scratch, adding one feature at a time. For every new feature we worked a lot on the optimization and lowering the overhead of the feature, trying to reach the "almost zero" overhead.

We have extracted from Fastify all the code that could be separated from the framework itslef and used in other situations, for example our [router](https://github.com/delvedor/find-my-way), the [serialization library](https://github.com/fastify/fast-json-stringify) and the [middleware engine](https://github.com/fastify/middie) and we released them as separated libraries that don't need Fastify as dependency, so you can use the in your current framework as well, or even build one just for you needs!

## How does *Fastify* differ from other solutions?

One of the core goals of the project is performances, we do not land any feature if the implementation isn't well optimized and the cost that we pay is as low as possible.

Fastify has a powerful plugin system, it guarantees the load (and close) order of the plugins and creates a zero cost encapsulation to help the users maintain a clean and ordered code.  
The plugin system creates a direct acyclic graph, in this way it is impossibile create cross dependecies and you can use different version of the same plugin in different parts of your application.  
Thanks to this architecture it will be very easy split your application in multiple microservices, because we'll help you with the creation of a system where separation of concerns and cohesion are two important keys of your application.

## Why did you develop *Fastify*?

A little bit more than one year ago me and Matteo, the coauthor of Fastify, started working on a nice project, [fast-json-stringify](https://github.com/fastify/fast-json-stringify). By doing different performances analysis we discovered that serialize JSON is very expensive, se we asked to ourtself, can we make it faster? We worked for 2-3 months and we built fast-json-stringify, which is 2x-3x times faster than the native method (spoiler alert, we use JSON schema).

We were very happy about the results so we started optimizing other parts that usually are pretty expensive. Routing, hooks, middlewares and so on.
After some time we putted all together and Fastify was born. We wanted to challenge ourself to build an extremely fast web framework, with the goal to get very close to the performcanes of a plain node http server.

## What next?

Currently we are very close to the version 1.0.0. We are focusing on fixing the last bugs and we are listening for feedbacks from our early adopeters, in this way we can try to meet their needs and handle breaking changes, we are also updating the API plugin to allow the users to declare their dependencies and provide a better support for async-await.

We want our community to continue to grow, so every time a plugin creator sends it work to us, before adding it to our "official" plugin list we help them to improve their code (if needed), and enforce a correct use of our API.
We are also costantly updating the documentation with all the hardest part or ours architectural decisions, for example we wrote the [hitchhiker's guide to plugins](https://github.com/fastify/fastify/blob/master/docs/Plugins-Guide.md) to help users understand the architecture of the framework and how use correctly the apis that we expose and we have just updated our [getting started guide](https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md).

## What does the future look like for *Fastify* and web development in general? Can you see any particular trends?

I hope looks shine!
Joke apart, one of our core design decision, is that Fastify should provide a very lightweight and small core that is very easy to extend with plugins. Probably most of the work we'll do in the future will be in this direction, expose new (and low overhead) apis to the plugins crerators and help them to create valuable plugins.

Regarding the future of web development I think that progressive web apps, AI and internet of things will play a very important role. This is why with Fastify we created a "batteries not included" framework, we want to help developers build the applications they need by using the code they need. I hope that the open source world will continue to grow massively as its doing now, and that developers and companies will release their work, in a way that everybody will continue to grow as a group, where we all help each other make valuable code to help people.

## What advice would you give to programmers getting into web development?

Try. The better way to learn new things is to try them.

A book or a workshop can help until a certain point, but if you want to really understand how something works, just write it. Get you hands dirty.
If you have some problem with a library or have a question on how approach to a pattern or technology, ask.
But remember to be always kind with others, we are all human beings and the way we interact each other is very important.
If you open an issue be kind, thank for the work that has been done, explain your problem and if you can, propose a solution. It will be appreciated.

Contribute to open source, even with small things. The open source world is amazing and as much you give as much you get.  
It's very hard to measure how much the open source world gave to me, it helped me do be a better developer and a better person.
Do not be discouraged by others experienced developers, everyone has been young and everyone will help you, as well as you will help other young developers in the future.

## Who should I interview next?

[Yoshua Wuyts](https://twitter.com/yoshuawuyts), creator of [Choo](https://github.com/choojs/choo) and many other cool things.

## Any last remarks?



## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.
https://www.fastify.io/
Thanks for the interview Tomas!