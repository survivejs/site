---
title: 'Express Gateway - A microservices API Gateway built on top of Express.js - Interview with Vincenzo Chianese'
date: 2019-04-22
headerImage: 'assets/img/gateway.jpg'
keywords: ['express', 'interview', 'microservices']
---

If you are dealing with microservices, you get questions like how to manage and orchestrate them.

[Vincenzo Chianese](https://twitter.com/D3DVincent) has come up with a solution designed for the popular Node.js web framework [Express.js](https://www.npmjs.com/package/express). Learn more about [Express Gateway](https://www.npmjs.com/package/express-gateway) in this interview.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/4e6423770e850520261e06ea30d5afa2?s=200" alt="Vincenzo Chianese" class="author" width="100" height="100" />
</span>

My name is Vincenzo Chianese — I am an Italian Software Developer (but I've been living away from my country for the last five years). I'm currently based in Madrid, working for [Stoplight.io](https://stoplight.io) where I help to develop tools for API Developers. Formerly, I've been working for other API-tooling companies.

</p>

I also organize the [API Meetup in Barcelona](https://www.meetup.com/API-Meetup-Barcelona/) that we're bringing it to the next level this year by turning in in a conference: [API Days Barcelona](https://apidays.co/barcelona)

I'm a Google Developer Expert in Web Technologies as well as an Auth0 Ambassador.

## How would you describe _Express Gateway_ to someone who has never heard of it?

[Express Gateway](https://express-gateway.io) is an open source API Gateway written in JavaScript and running on NodeJS. It leverages the vast existing middleware ecosystem for Express.js

An API Gateway is a centralized middleware that encapsulates the internal system architecture and provides an API that can be shaped based on real client needs rather than merely returning what the particular microservice is sending you back. These gateways are effectively implementing the facade pattern in the microservices world.

API Gateway can have other responsibilities such as authentication, monitoring, load balancing, caching, request shaping and management, and static response handling.

## How does _Express Gateway_ work?

Express Gateway is a bunch of components which declaratively build around Express to meet the API Gateway use case. Express Gateway’s power is harnessed the vibrant ecosystem around Express middleware.

Express Gateway transforms Express into a dynamic runtime engine. For example - you can easily hardcode routes statically through Express’ API. In Express Gateway, however, those values can continually change and are dynamically injected as parameters without having to alter the underlying code.

Essentially, all of the core components within Express Gateway make Express more dynamic and declarative.

For instance, a Gateway that's proxying all requests to [httpbin](https://httpbin.org) with a `key-auth` check is just 20 lines away.

```yaml
http:
  port: ${EG_HTTP_PORT:-8080}
apiEndpoints:
  api:
    host: *
serviceEndpoints:
  backend:
    url: https://httpbin.org
policies:
  - proxy
  - key-auth
pipelines:
  adminAPI:
    apiEndpoints:
      - api
    policies:
      - key-auth:
      - proxy:
            action:
              serviceEndpoint: backend
```

In contrast — an imperative approach for this would require the following lines of code:

```js
const express = require("express");
const app = express();
const hostapp = express();
const passport = require("passport");
const HeaderAPIKeyStrategy = require("passport-headerapikey")
  .HeaderAPIKeyStrategy;
const vhost = require("vhost");

passport.use(
  new HeaderAPIKeyStrategy(
    { header: "Authorization", prefix: "Api-Key " },
    false,
    function(apikey, done) {
      console.log(apikey);
      done(null, {});
    }
  )
);

hostapp.get(
  "/api/authenticate",
  passport.authenticate("headerapikey", {
    session: false,
    failureRedirect: "/api/unauthorized",
  }),
  function(req, res) {
    res.json({ message: "Authenticated" });
  }
);

app.use(vhost("domain.com", hostapp));

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
```

Even though the lines of code are almost the same, Express Gateway offers:

1. A wide array of ready to use [policies](https://www.express-gateway.io/docs/policies/)
2. Integrated error handling (which has not been taken into consideration in the code example)
3. A minimal identity server to store your users, applications, and keys as well
4. Hot reloading capabilities
5. Container native software

## How does _Express Gateway_ differ from other solutions?

When it comes to an API Gateway, rest assured that there are **tons** of alternatives; but when I was building Express Gateway I had the following principles in mind that probably are the key differentiation factors:

1. **Declarative file-based configuration:** although the gateway can be configured using a bunch of API Calls, Express Gateway is usually defined with a yaml based file that can be versioned and it's easy to inspect/understand. Moreover, the Gateway's hot reload mechanism will automatically reload the configuration when the target files are changed/saved.
2. **Easy:** The gateway is not inventing any new rocket science concepts. If you ever wrote an Express.js application, you can use, extend and read Express Gateway's source code literally within hours. The whole ecosystem of Express Middlewares can be installed in minutes. Spinning up an instance is a _single command_ away.

## Why did you develop _Express Gateway_?

The spark was the frustration related to setting up all the other solutions I found so far in the market. Some of these require database instances; some require complicated configuration steps to get the minimal use case working. On the other hand, I wanted something that could accomplish 80% of the use cases with 20% of the efforts. And so the main principles were:

1. I want to be able to spin up a gateway instance with **no external dependencies** with a single command
2. I do not wish to have a database to store my configuration
3. I want to be able to iterate/develop my gateway configuration without having to make 3000 protected API calls

To keep it short, Express Gateway is an API Gateway written from a developer, for developers.

## What's next?

A lot is going on — even though right now I'm the only active maintainer on the project. We're looking to finalize the Ingress Controller integration for Kubernetes as well as support for OpenAPI 3.0 (importing documents). I also gave a [presentation](https://youtu.be/IkfhudP2v7U?t=9814) on the topics about how this integration could look like.

## What does the future look like for _Express Gateway_ and web development in general? Can you see any particular trends?

I hope to get more contributors. Although we have different Fortune 500 companies using Express Gateway in production, nobody has ever contributed or even allowed me to publicly announce their Express Gateway usage, which is a little bit sad; therefore beyond the development efforts I'd like to focus on lowering the contribution barrier as well as mentoring people willing to work on the gateway.

## What advice would you give to programmers getting into web development?

Refrain the hype. Web development is changing, and it is very confusing even to get started. Shall I use webpack? Parcel? GraphQL? REST API? My advice: you're writing an application on purpose, focus on that.

## Who should I interview next?

I think you should get in touch with [Stephen Mizell](https://smizell.me). He's been working on very cool stuff for a very long time, and it's worth voice some of the good things he's been doing.

## Any last remarks?

This has been great. Thanks a lot for the invitation and please keep going with this. I've discovered at least two good open source project to look at because of this interview series!

## Conclusion

Thanks for the interview, Vincenzo! It was great for me to learn about API gateways as I haven't seen the need or value before. Now it's clear to me how using one such as yours can cut some code while keeping functionality understandable.

T> Learn more at [Express Gateway site](https://express-gateway.io) and [consider starring the project on GitHub](https://github.com/expressgateway/express-gateway).
