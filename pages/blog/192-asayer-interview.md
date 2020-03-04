---
title: "Debugging JavaScript - Interview with Mehdi Osman"
date: 2020-03-04
headerImage: "assets/img/debugging.jpg"
keywords:
  [
    "interview",
    "javascript",
    "react",
    "redux",
    "debugging",
    "frontend",
    "devops",
    "asayer",
  ]
---

Debugging JavaScript is one of those topics where people tend to be divided into two camps - those that `console.log` and those that use a debugger.

In this interview, I am learning more about the topic from [Mehdi Osman](https://twitter.com/MehdiOsman), the CEO of a company called Asayer.

## Can you tell a bit about yourself?

![Mehdi Osman|50|50|author](assets/img/mehdi.jpg)

My name is Mehdi Osman, and I'm the founder of [Asayer](https://asayer.io), a frontend monitoring tool. Before that, I spent a few years as a frontend programmer working with C# and something called Silverlight - a deprecated framework for building rich internet applications - before it was taken by storm by HTML5 and JS frameworks.

## How would you approach _debugging JavaScript_?

First and foremost, I try to reproduce the issue. Then I apply three simple techniques for hunting the bug:

- Avoid using `console.log()` unless it's necessary
- Pause the JS debugger on caught exceptions then walk through my code one line at a time
- Test all my assumptions in `Console` for a potential fix before applying it to my codebase

You can learn more on this subject by reading [How to debug a ReactJS application](https://medium.com/asayer/how-to-debug-reactjs-applications-94ffb1aa068c) on Medium.

## How do you prefer to _debug JavaScript_?

I use Chrome DevTools. It has everything I need for debugging and auditing my application, and it comes shipped with your browser.

## Is _debugging JavaScript_ any different than debugging other languages?

Contrary to a backend, debugging frontend applications is a multidimensional problem. Your code may run differently from one browser to another. The rendering of your pages can be broken on mobile devices.

Your application's overall performance depends on many factors - such as CDN, client device, third-party APIs, slow backend, and CPU/memory load - which can significantly affect your user experience.

## Why did you develop a service to help with debugging JS applications?

DevTools are useful, but it's applicable only locally in your development environment. Reproducing and fixing issues in production is another story and requires a different approach. That's why we built [Asayer](https://asayer.io), a monitoring tool _by, and for_ frontend developers.

Asayer shows you a video replay of your user session synchronized with all technical details you need to reproduce the issue: network activity, JS errors, console logs, store actions/state, backend logs, and more. In other words, it's like having your browser's inspector open while looking over your user's shoulder.

![Asayer Application](assets/img/asayer.png)

## What next?

We want to capture performance-related metrics such as memory usage, framerate, CPU load, speed metrics, crashes, and more. These issues are hard to understand, and most of the time go unnoticed since only very few users would bother to report them.

We'll also release:

- New plugins for capturing the state from NgRx, MobX, and VueX stores.
- GraphQL support for troubleshooting queries.
- Integrations with Log Management tools such as Datadog or Sumo. This way, we make bug reproduction even easier by synchronizing backend logs with user session replay.
- Support of Github Issues, Jira and Trello, for easy reporting of tickets without leaving Asayer.

Our goal is to capture the full context of every user session so developers can easily measure the impact of technical issues on their user experience, and proactively fix them.

## What does the future look like for _debugging JavaScript_ and web development in general? Can you see any particular trends?

The demand for rich and high-performing interfaces will continue to increase. Complexity is shifting--from once monolithic backends--to frontend applications and there's a lack of tools when it comes to shipping quality code and monitoring applications in production.

The frontend is the last frontier when it comes to productivity and observability tools. I bet we'll see exciting initiatives over the next few years.

## What advice would you give to programmers getting into web development?

Start with the basics (JS, HTML, CSS) as you can reuse them with any framework. Think about performance from day one as it'll force you to follow best practices. Pick any JS framework, but make sure to master it enough before getting hyped up about the newest one. Keep learning and contribute to the open-source community whenever possible.

## Who should I interview next?

I can think of:

- [Pierre Burgy](https://twitter.com/pierre_burgy) - Founder of Strapi (Headless open-source CMS).
- [Stéphane Chopin](https://twitter.com/Atinux) - Creator of NuxtJS (a meta framework on top of VueJS).

## Any last remarks?

Thanks for having me and excellent job with SurviveJS. :)

## Conclusion

Thanks for the interview, Mehdi! I agree there's a lot we can still do when it comes to debugging frontend. There's a surprising amount of complexity, and especially the amount of devices and platforms we have to support as developers is immense.

You can [learn more about Asayer](https://asayer.io/) online, and it's free to try in personal development to get an idea of how the service works.
