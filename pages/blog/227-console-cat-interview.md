---
title: "Console Cat - Privacy-friendly CLI telemetry in less than five minutes - Interview with Matt Evenson"
date: 2022-07-28
headerImage: "assets/img/cat.jpg"
headerAuthor: "Lemonsandtea"
headerSource: "https://pixabay.com/photos/cat-paw-keyboard-playful-nasty-3695040/"
keywords: ["interview", "cli", "nodejs"]
---

As an open source developer of Node.js command line tools, you often have the question of which versions are being used and how.

To solve the problem, Matt Evenson developed a service called [Console Cat](https://www.consolecat.dev/). Read on to learn more about it.

## Can you tell a bit about yourself?

I'm Matt, one of the founders of Console Cat. I've been writing full-stack JS for a few years, including at companies like Robinhood and Retool.

## How would you describe _Console Cat_ to someone who has never heard of it?

Console Cat makes it easy to see how your Node.js scripts and command-line interfaces (CLIs) are being used.

## How does _Console Cat_ work?

After you sign up on [Console Cat's website](https://consolecat.dev/), we give you a short code snippet to paste into the entrypoint of your Node.js CLI. Console Cat's SDK then collects the telemetry for every execution of your CLI and visualizes it for you in a dashboard on our site.

Under the covers, the [Console Cat SDK](https://github.com/console-cat/sdk) works by accessing properties on Node's `process` object, such as `process.argv` for the flags and `process.exitCode` for the exit code.

Since we need to know the exit code and duration, the SDK adds an exit hook to the Node.js process so that we can run some code just before the CLI exits.

## How does _Console Cat_ differ from other solutions?

As far as we know, Console Cat is the first analytics product built from the ground up for CLIs.

Before Console Cat, if you wanted to collect usage information on your CLI, your best option was to retrofit a website analytics service like Google Analytics or Mixpanel to work for CLIs.

Of course, these services are meant for websites and mobile apps, not scripts, so you have to make your events and dashboards, which is a pain.

## Why did you develop _Console Cat_?

We built Console Cat because we love command line tools and think that command line interfaces would benefit from data-driven decisions like websites.

For example, I've written one-off, buggy scripts at work that became critical to my coworkers' workflows, but I didn't realize that until later. Had I known how much they were being used, I would have put in the effort to make the scripts more robust. That's the kind of insight that Console Cat provides.

## What next?

We launched with support for Node.js and are working on rolling out Python support very soon. Together, those two languages will allow us to support the majority of CLIs and scripts.

## What does the future look like for _Console Cat_ and web development in general? Can you see any particular trends?

I don't pretend to know the future, especially since we're an early startup, but I can tell you that we are passionate about bringing the type of tooling we have for web development to the command line.

If we're talking about general web development trends, I think Typescript will continue to gain popularity (Console Cat is a full-stack TS shop). I'm also very interested in the proliferation of WebAssembly and have toyed around with [Yew](https://yew.rs/), Rust's version of React.

## What advice would you give to programmers getting into web development?

Expect to spend a lot of time debugging. Google every error message you get until you know how to fix it.

As a beginner, it's easy to get discouraged because you try following a tutorial and something is wrong with your environment, and the code won't run as expected. I gave up a few times early on when I tried to learn programming because of that very thing. Just keep googling until it works. The prize is worth it.

The other thing I would recommend is to shorten your feedback loop as much as possible. For example, if you're learning HTML and CSS, make it so that you see your changes reflected in the browser immediately. The shorter the feedback loop, the quicker you will learn.

## Who should I interview next?

My friend Harshal wrote [a great article on WebAssembly](https://harshal.sheth.io/2022/01/31/webassembly.html). I think he'd be a great one to interview.

## Any last remarks?

[Drop me a line](mailto:matt@consolecat.dev) if you have any questions. I love talking to other devs about tools, learning, or anything else!

## Conclusion

Thanks for the interview, Matt! I can see the value of plugging in the service to a CLI as it provides insight into its use and can further motivate its development.

To get started, [head to Console Cat's website](https://www.consolecat.dev/). You can also [find the project on GitHub](https://github.com/console-cat).


