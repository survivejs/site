---
title: 'Kotatsu - Less Boilerplate for Modern JavaScript - Interview with Guillaume Plique'
date: 2016-05-02
headerImage: 'assets/img/japanese-maple.jpg'
keywords: ['interview', 'react', 'boilerplate']
---

npm alone has more than three thousand JavaScript boilerplates. Often it's easier to maintain your own than to use one designed by someone else. Everyone has their own preferences. At best boilerplates work as inspiration for your own work. The question is, can the amount of boilerplate be reduced?

Guillaume Plique thinks so. You might remember him from the [Baobab interview](./baobab-interview). If not, look that up if you want to know more about him. Let's let him tell us more about a tool known as [kotatsu](https://github.com/Yomguithereal/kotatsu) and his ideas behind it.

## How would you describe *kotatsu* to someone who has never heard of it?

*kotatsu* is a straightforward CLI tool enabling JS developers to start working on a new project very fast and with as few boilerplate as possible. This means the tool will out of the box handle ES2015 for you, bundle, serve your code and handle *Hot Module Replacement* (HMR) without forcing you to write complex configuration files or tweaking your own dev express server.

And all of this can be as easy as the following command:

```bash
kotatsu serve --es2015 ./js/main.js
```

## Why did you develop *kotatsu*?

Initially, I started developing *kotatsu* because I wanted to have HMR in Node.js. The thing is, after HMR started being a thing in the browser, I grew quite fond of it and, as a result, I was infuriated by the time needed to reload node.js scripts such as my express server. And even tools like [nodemon](https://github.com/remy/nodemon) were too slow and were furthermore wiping the state of my server application.

So the first goal was indeed to make [webpack](https://webpack.github.io/)'s HMR a thing also on the server side. This was already possible, but really tiresome to setup on your own. So I developed *kotatsu* to abstract the problem and be able to setup it more quickly on some other projects.

But after some time using the tool, I found that it could also solve some issues related to the client-side and so I extended the tool to this related universe.

The thing is nowadays, JS dev environment has become quite complex if you want to beneficiate from the latest advances: ES2015, ES2016, browser bundling, HMR etc. My point is not to say I regret ye old times - you won't find me saying that - but just to note that it is quite tedious a task to setup your dev environment. Because you need a lot of boilerplate, a lot of complex configuration files etc. And, what's more, in a lot of projects you always end up needing the same things.

So, the philosophy of *kotatsu* is the following: setup your project in a modern JS dev environment as fast as possible without boilerplate nor configuration, just the CLI tool, and only add/replace more specific parts of the stack on the fly when you start needing them.

## What next?

First of all, I need to do some maintenance work on the tool to ensure it works on every platform consistently etc. and remain sure it stays up to date with JS tooling (Babel, webpack etc.). I must also ensure that one is still able to forfeit parts of the tool, or even drop the tool altogether, without any difficulties when customizing the stack very specifically to meets one's needs.

I also want to add some new features but I must not go too far lest it would become another complex tool on the scale of the tools I currently abstract away for the user.

Finally, I would love being able to write some unit tests for the tool but I find it very difficult to do so because of the amount of IO, system etc. the tool relies upon (any help on the subject would be gladly accepted :) ).

## What does the future look like for build tooling and boilerplates in general? Can you see any particular trends?

I think we are going to observe quite an interesting trend: On the one hand, specialist tools (Babel, webpack etc.) will become more refined, powerful, and customizable. But, on the other hand we will likely see a lot of more abstract and simple tools using the former ones as foundation making JavaScript development more accessible to everyone.

This means, we'll see more HMR goodies, more developer tools such as the one we can already see for frameworks & libraries and not only for the JS language itself etc.

## Who should I interview next?

I guess that, to stay on topic, you should probably interview [Jonny Buchanan](https://github.com/insin) (@insin) about [nwb](https://github.com/insin/nwb) which is a perfectly good example of the higher-level tools coming our way.

## Conclusion

Thanks for the interview Guillaume! I will definitely keep an eye on Kotatsu. I have some ideas of my own on how to get rid of some of that boilerplate baggage we are carrying around. Most likely our ideas will converge somehow at some point.

If you want to try out the tool, check out [kotatsu project page on GitHub](https://github.com/Yomguithereal/kotatsu). You should find enough information there to get started. And I'm sure Guilllaume will value feedback!
