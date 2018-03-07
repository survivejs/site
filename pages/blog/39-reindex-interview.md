---
title: 'Reindex - Instant GraphQL Backend for Your React Apps - Interview with Ville Immonen'
date: 2016-03-07
headerImage: 'assets/img/aurora.jpg'
keywords: ['interview', 'react', 'graphql']
---

More often than not, you are going to need a back-end for your application. Particularly RESTful APIs are popular. They are not the only choice, though. GraphQL is a specification that has been designed apps in mind. Rather than separating our API end-points by resource, we get something entirely different.

To understand the topic a little better, I am interviewing Ville Immonen of Reindex.

W> [Reindex has been discontinued as a service](https://www.reindex.io/blog/discontinuing-backend-as-a-service/). You can still read the post to gain insights, though.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img
    src="https://www.gravatar.com/avatar/e89d8e6912bf23525337395769e16505?s=200"
    alt="Ville Immonen" class='author' width='100' height='100' />
</span>
My name is Ville Immonen and I'm a co-founder at [Reindex](https://www.reindex.io/), where I work to make it simpler for developers to build web and mobile apps by using React and GraphQL.
</p>

## How would you describe *Reindex* to someone who has never heard of it?

Reindex is a GraphQL service you can use as a backend for your apps. It's very easy to setup and handles the data storage, authentication, permissions and other server-side tasks, so you can focus on building awesome apps for your users instead of managing servers and developing and maintaining APIs.

You use Reindex by defining your data model – the types you have and their fields. Then you just push that definition to the service and the API and data storage for your model is created automatically. The API uses [GraphQL](http://graphql.org/), data query language developed for building apps at Facebook that lets you write client-side queries for data fetching.

## What is GraphQL?

GraphQL is an efficient way to fetch data, because it lets you get just the data you need in a single request, instead of, for example, having to write a lot of plumbing code to patch everything together from numerous REST endpoints that return everything a client might need.

GraphQL fits very well with the way we as front-end developers think of and use data on the client. We have hierarchical components, or views, and GraphQL lets us get the data to populate those views in the same hierarchical fashion.

Another feature of GraphQL is that it allows introspection, the types available on the server can also be queried using GraphQL. This opens up possibilities for all kinds of smart tools and libraries.

One of the most interesting ones is [Relay](https://facebook.github.io/relay/), a JavaScript framework for data fetching that lets you decorate React components with GraphQL queries and it can handle fetching, caching and managing data for your app.

To sum up, we're very excited about the possibilities GraphQL has for efficient product development and aim to make Reindex the best way to build and host a GraphQL API for your app.

## Why did you develop *Reindex*?

We're product developers ourself, with experience building apps for startups and bigger companies alike. We've used React since 2013 and it's made a huge impact in productivity. But we always thought managing data in client-side apps was an unsolved problem that introduced a lot of plumbing and complexity in the code.

I previously worked on a project where the data layer went through many iterations, from a REST API built in house and plumbing for it with reactive programming on the client-side, to using Flux on the client and finally dropping the custom API server in favor of a Firebase to store the data. This was a big improvement for developer productivity, but it still required a lot of complex plumbing to manage on the client.

The answer came a year ago, when Facebook introduced GraphQL and Relay at React.js Conf 2015. The talk by Dan and Jing was enough to convince us that this was going to be something big and it addressed the problems we previously had in product development.

We wanted to build a server that would be as easy to setup as Firebase, but have the capabilities of GraphQL to make it work with Relay. This is how the idea of Reindex was born and we started to develop it.

## What next?

We continue to improve Reindex to make it work for various kinds of applications. It's really exciting to see what developers will build on top of it.

Here are some things we want to explore going forwards:

* Connecting to external data sources - This will allow Reindex to be used as a gateway to bring all your data sources together under one GraphQL API to build client-side apps on. We want to make Reindex the best way to build GraphQL APIs, regardless of where the data is stored.
* Developer experience - GraphQL opens up great possibilities for advanced integration with developer tools. We'll be working in collaboration with tool developers to imagine and realize a cohesive development experience of the future for apps using GraphQL.
* Real-time updates - There is an ongoing effort to bring subscriptions to GraphQL and Relay. We're following this progress and looking forward to making subscriptions easy to use with Reindex in apps that require them.

## What does the future look like for React and front-end in general? Can you see any particular trends?

React is not just a UI library anymore, it's an ecosystem, and it's becoming a cohesive platform for building apps both for the web and for proprietary mobile platforms. This platform consists of technologies like React, React Native, GraphQL, Relay, Babel and Flow, and this year we will see the ecosystem continue its huge growth, but also become more mature.

In 2015 we saw a number of new solutions emerge to problems with data management, including GraphQL and Relay, Redux, Om Next and Falcor. Although my bets are on GraphQL and Relay, it's not yet certain who will come out as a winner. What is certain though, is that we will continue to see a lot of new innovation and exploration in this space.

We will also see better tools that make developers more productive on the React platform and ease the growing pains around tooling felt by many, also known as the ["JavaScript fatigue"](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4). The whole experience of building apps with these technologies will become more integrated, and easier to setup by virtue of opinionated toolchains that "just work".

## Who should I interview next?

The possibilities are endless! You should have someone talk about React Native, like Brent Vatne. And ask Nick Cammarata or Nate Wienert from Motion what the React development tools of the future will look like.

## Conclusion

Thanks for the interview Ville! If Reindex or GraphQL sounds something that's in your alley, consider the following resources:

* [Reindex docs](https://www.reindex.io/docs/)
* [Reindex examples](https://github.com/reindexio/reindex-examples)
* [Relay docs](https://facebook.github.io/relay/)
