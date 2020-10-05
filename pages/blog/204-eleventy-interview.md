---
title: "Eleventy - A simpler static site generator - Interview with Jeremias Menichelli"
date: 2020-10-05
headerImage: assets/img/mountains.jpg
headerAuthor: "Szabolcs Papp"
headerSource: "https://unsplash.com/photos/T9uUo9CNTLk"
keywords: ["interview", "static-site-generation"]
---

Static site generation is a topic that is becoming increasingly popular due to the rise of [JAMStack](https://jamstack.org). Instead of maintaining a server, the idea is to generate static markup for the entire site. Depending on the use case, this can be a great fit that avoids the trouble of hosting.

To learn more about a modern, upcoming solution, I am interviewing [Jeremias Menichelli](https://twitter.com/jeremenichelli) about [Eleventy](https://www.11ty.dev/).

## Can you tell a bit about yourself?

![Jeremias Menichelli|100|100|author](https://www.gravatar.com/avatar/802b096bc7cef6843db036595503b559?s=200)

I still remember the morning I biked to my uncle's place because it was probably one of the first to have internet access at home. I remember writing down a URL, hitting the ENTER key, and waiting 20 minutes to see nothing.

I had such a bad first experience in the web when I was something like ten years old, that I told myself one day I will have a little tiny small place in the web industry, and I'll make sure what I work in doesn't create that sort of frustration to users.

That's probably the main reason why I'm so into progressive enhancement, static site generators, and accessibility now as a web developer. You can [read more about my complete journey at my website](//jeremenichelli.io/about).

## How would you describe _Eleventy_ to someone who has never heard of it?

Eleventy is a static site generator that took all the lessons learned from the ones we had since a decade ago and applied them now. I loved [Jekyll](https://jekyllrb.com/), but it was too slow even for not-so-big sites; other people love [Hugo](https://gohugo.io/) because it's fast, but as soon as you need to customize something, you have to touch the [Go programming language](https://golang.org/). Often front-end developers aren't used to it, so that's a definite obstacle.

Eleventy is a high-speed alternative and super close in features with Jekyll, and as soon as you have to extend it, you have JavaScript on your side. I found myself migrating my old Jekyll site, and not only was it fast but as soon as I found something was missing, it took me minutes to write a filter or a plugin to unblock me.

Starting with Eleventy is as easy as relying on its default and creating an `index.md` file and starting Eleventy's server.

```bash
echo "# Hello World" > index.md

npx @11ty/eleventy --serve
```

With that, you have a static generator pipeline and server in place. The next natural move is to begin with layouts and collections if you want blog posts or notes.

## How does _Eleventy_ work?

If you are familiar with Jekyll, I would say it's pretty much the same. You have a base folder, and Eleventy turns anything with the extension you marked on your config as a page. The main difference is that Jekyll uses an underscore to mark directories like `_posts` to crawl.

For example, Eleventy grabs anything with the `.md` extension. That means you have to configure some collections you want to iterate manually, but it's better because it gives you more freedom.

Also, it's template engine agnostic, you can use Nunjacks or Liquid, or both, even template literals and do asynchronous data injection at build time. It's like a powerhouse!

## How does _Eleventy_ differ from other solutions?

I think that Eleventy is less opinionated than other generators. Still, it has nice defaults that you can change later if you want, the chance to go _as complex as you need_ is ideal for developer experience.

## Why do you develop with _Eleventy_?

The main thing for me is that it's built in the same ecosystem I work. For Jekyll, I had to deal with all the setup of a [Ruby](https://www.ruby-lang.org/) environment, which I'm not familiar with and probably don't want to deal with (not bashing the Ruby ecosystem, I'm just not used to it and I don't need to). But Eleventy runs in Node, which I already use for my work and feel comfortable debugging.

## What does the future look like for _Eleventy_ and web development in general? Can you see any particular trends?

I don't know if I see a trend or _ I wish_ it becomes a trend, but it seems part of the web developers are becoming more aware we have a lot of different and more optimal options around tech stack for specific projects.

I understand why companies go for widely used frameworks; onboarding new people to a custom stack takes a lot of time (and money, I guess). Building on top of a broadly used and well-tested ecosystem gives a feeling of having a more stable foundation. Still, we need to see that not all cases fit the default technology.

There's a super good talk about game development called "Marvel's Spider-Man: A Technical Postmortem" by Elan Ruskin that's super exciting. As it became popular, you might have seen it already. In the talk, he says many times, fit technology to context. I feel we are trying to do the opposite with frameworks and try to match our technology context.

Because we as developers need to pay bills and feed a family too as everybody, we need to learn these tools to get a job, so I don't see things changing in the short or midterm. Still, I see more people trying new things and going with other options, like Eleventy, to start a new project. We do have a lot of options to begin now, which is a good thing.

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/KDhKyIZd3O8" frameborder="0" allowfullscreen></iframe>

## What advice would you give to programmers getting into web development?

Often more junior people reach out to me with career questions. They usually ask me if they need to write articles or give talks to be a web developer. What I tell to each of them is just, **no**. Writing _good_ articles takes a lot of time and energy, the same as preparing and delivering a _really good talk_, so you have to enjoy the process of making them.

Unless you are into writing or public speaking, explore, experiment, and enjoy your work. Focus first on learning what you need to be useful to the company paying you your salary, and helping the team work every day with you; the rest of us come after that.

## Who should I interview next?

[Cassie Evans](https://twitter.com/cassiecodes) or [Rachel Nabors](https://twitter.com/rachelnabors).

## Any last remarks?

Let's remember that though our job is vital in our lives, the most important thing and what defines us more is the impact we have on the people around us and the place we live in, so whatever we choose to do, let's be kind with people and with our planet.

## Conclusion

Thanks for the interview, Jeremias! Eleventy definitely seems like a nice step ahead particularly for Node developers. I remember using Jekyll in the past and experiencing similar issues with it.

T> To learn more, [head to Eleventy site](https://www.11ty.dev/).
