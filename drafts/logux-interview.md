---
title: 'Logux - Replace AJAX-REST - Interview with Andrey Sitnik'
date: 2017-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

My twitter: [@sitnikcode](https://twitter.com/sitnikcode), Logux twitter: [@logux_io](https://twitter.com/logux_io).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/cd32d17c95d3bfb352504c36462b98bd?s=200" alt="Andrey Sitnik" class="author" width="100" height="100" />
</span>

I was born in Vladivostok, a Russian city near Japan and China. I spent childhood in Yemen, Arabic country where my grandparents work.

Now I am a digital nomad and lead front-end developer at [Evil Martians](https://evilmartians.com/). Most of the readers will know me because of my open source projects: Autoprefixer and PostCSS.

</p>

## How would you describe *Logux* to someone who has never heard of it?

Logux is a JS library and Node.js server to replace AJAX requests. It synchronizes Redux/Vuex actions between clients and server (each, Redux actions on the server 😆) and between clients.

In Logux you don’t need to write Redux Saga, calling `fetch()`, show loader during a request, handling network errors and worry, that you don’t support offline-first and push updates. In Logux you just use `dispatch.sync(action)` instead of `dispatch(action)` and Logux will send this action to a server and other clients.

At least, we want to have simple API in Logux. In fact, it is still experiment (current version is just 0.2). I was inspired by ideas of CRDT and distributing computing. Right now we still need to understand how to present this awesome idea in a better way.

## How does *Logux* work?

Logux core is a JS library to synchronize actions log between two machines (there is no client and servers in Logux protocol, it is peer-to-peer protocol). By default, it uses WebSockets to keep a connection between machines (you can change connection mechanism) and could store actions in different stores (memory, IndexedDB).

This core also takes care about an important thing in distribution systems: the time. For example, Alice did not have Internet for 30 minutes (NY metro doesn’t have the network in trains). But good applications allow changing documents in offline. So she could change document and get a connection only 30 minutes later. It is long period. Other clients could change the same document during this period. So we need merge changes and fix conflicts. Don’t forget that Alice’s phone could have wrong time. Yeap, distributed system could be complex sometimes 😧.

Logux core will mark every action with special time mark. Also, it will calculate the time difference between client and server. So it will be sure what action was the last.

On top of this core, we have few packages with end-user API.

[Logux Redux](https://github.com/logux/logux-redux) will wrap all Logux Core magic to Redux-compatible API. At any moment Logux Server could send action and put it inside your history (for example, Alice finally got WiFi and sent her changes from the metro ride). Logux Redux will undo all Bob’s newest actions, add that Alice action “from the past” and replay all Bob’s actions again. Or in any moment server could send “undo” action (for example, you changed your login in offline, but this login was taken, and renaming could not be applied anymore) and Logux Redux will remove this action from history.

[Logux Vuex](https://github.com/nikolay-govorov/logux-vuex) does the same for Vue and Vuex.

[Logux Status](https://logux.github.io/logux-status/) contains widgets and UX best practice to show current synchronization process to the client. With Logux you can implement Optimistic UI. It updates UI immediately after “Save” button click. If a user doesn‘t have connection Logux Status will show the widget with “Your changes were not saved on the server, connect to the Internet to save them.”

And, of course, [Logux Server](https://github.com/logux/logux-server). Right now we have Node.js framework, but [Logux protocol](https://github.com/logux/logux-protocol) is open. Logux server will be similar to most of Node.js web servers. But instead of REST, URLs and forms, you will have Redux/Vuex actions. And some of this actions came from the past. You need to check action’s created time.

Right now, our main challenge is to provide better API to clean log. I told you about good shiny utopia about adding actions to the log. But we also need to clean old actions, which are not actual anymore. For example, if you renamed user from `Old name` to `New name` and saved this changes on the server, you don’t need old action with `Old name` anymore.

Current cleaning API is not so bad. But we could do it better in simpler way. Because we try to be focused on any modern developers. Not only on distributed system scientists.

## How does *Logux* differ from other solutions?

It is easy to compare Logux with AJAX 😋. With Logux you don’t need to hande network errors (Logux Status will show error widget, Logux Redux will save action until a user will get a good connection). Don’t need to make loaders during saving the changes (You can update UI right after “Save” button click). In many cases, we need Redux Saga for AJAX. In Logux you just dispatch action and Logux will take care of sending to the server and show synchronization process to the user.

But with less code, you will get more features. You will get push updates out-of-box. When one client dispatch action (like user renaming), a server will resent this action to other clients (Logux uses channels and subscriptions to control who is allowed to receive actions).

Also, you will get basic offline-first support. New actions will be applied immediately to client UI, but then they will wait for Internet connection in IndexedDB. Of course, for good offline-first support, you need to take care of merging conflicts (when two users changed the same document). And Logux could not fix all conflicts for you because it depends on business logic. But Logux will help you here by taking care of distributed time and Redux state time-traveling.

Of course, there is no sense you use Logux in simple web pages. With 2-3 requests, it is better to use AJAX. And of course, AJAX is still better for some unusual cases, like sending big files. But, I think, in big applications, AJAX is not a competitor for Logux.

It is more interesting to compare Logux with some modern solutions. For example, GraphQL and Apollo. It is great technologies with many great ideas inside. But GraphQL is more focused on requesting the data. Mutation doesn’t have correct distributed time marks. Optimistic UI and subscriptions need more code.

In contrast in Logux by default, your React components will be subscribed to data updates. Optimistic UI is out of the box. CRDT could be implemented much simpler.

But in another hand, GraphQL works better with PHP, Ruby or Python, because it does not require a WebSocket connection. Also, Apollo is much stable and ready-for-production solution. Right now I don’t recommend Logux for big projects. GraphQL will be much better for them. I am making Logux for future beyond GraphQL.

## Why did you develop *Logux*?

In one hand I tired to write 50+ lines of code to save simple React form 😧.

But also I believe in the better world. In the world when all web applications will have push updates and offline support. Wireless connection is always unstable. Especially for next billion of the users. I tired to press Reload button on any network problem during AJAX request.

We have bad networking in applications, not because developers are laze. My forms were bad too 😅.

So my dream was to have less code with better networking. When I saw talk about [Swarm.js](https://github.com/gritzko/swarm), I was so excited how simple and powerful is the idea of CRDT. But it was not so easy to combine CRDT with Redux because Redux and Swarm.js have separated actions logs. And when we drink with Dan Abramov in the bar, the simple idea was created. Logux idea is to use one actions log for everything: Redux, CRDT, networking.

## What next?

First, I need to write good docs and guides for Logux 0.2.

Next, I will think about Logux 0.3: more syntax sugar for log cleaning, improve API according to practice experience and users feedback.

## What does the future look like for *Logux* and web development in general? Can you see any particular trends?

I think GraphQL, Apollo, Firebase, gun.js show the simple trend: next revolution will be not on the client or the server. Next revolution will be in client-server communications.

Wego so many awesome things to client-side development. But, right now, when you need to write AJAX request you are going to the old jQuery-like world.

With PWA we will have more mobile web applications. But mobile users expect better networking from your web app. Push updates and offline support are very common in iOS/Android world. If we want to compete with native applications, we should make our web application smarter.

## What advice would you give to programmers getting into web development?

Software development should make people happy, not solving tasks. If you are making a tool, think about DX, not only about features. If you are making an app, user experience is more important than framework and technologies.

## Who should I interview next?

* [Andrey Popp](https://github.com/andreypopp) is one of the most underestimated React developers.
* [Victor Grishenko](https://github.com/gritzko) is one of the best distributed system scientists. His [Swarm.js](https://github.com/gritzko/swarm) was the main inspiration for Logux.
* [Nikita Prokopov](https://github.com/tonsky) is other great distributed systems engineer.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Sorry, we don’t have a single landing page for Logux right now. Here is your path  if you want to go deeper to Logux:

1. [My talk about Logux with code examples](https://www.youtube.com/watch?v=mv--1vRvCys&t=417s)
2. [Logux Redux](https://github.com/logux/logux-redux)
3. [Logux Server](https://github.com/logux/logux-server/)

Thanks for the interview Andrey!