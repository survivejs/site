---
title: 'Reactotron - A CLI and OS X App for Inspecting - Interview with Steve Kellock'
date: 2016-09-19
headerImage: 'assets/img/glow.jpg'
keywords: ['interview', 'react']
---

If there's one thing that has set React community apart, it's the focus on developer experience (DX). Historically developer tools haven't been the greatest, but this is slowly and surely changing. Reactotron by [Steve Kellock](https://twitter.com/skellock) is a good example of this trend. Read on to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/0fb48c7e9a462c7e6d312ef50d618e12?s=200" alt="Steve Kellock" class="author" width="100" height="100" />
</span>

Hi. I’m Steve. I live with my wife and 2 boys (4 and 2) in Tiny, Canada (2 hours north of Toronto). It’s pretty rural. Farms and tractors.  That sort of thing.  =)
</p>

Been a professional dev for 23(ish?) years. First computer was a TI 99/4A. First real language was Turbo Pascal, which turned in long love affair with Borland Delphi.

I’m currently working with the crazy-awesome folks at [Infinite Red](https://infinite.red) doing mobile dev. React Native to be specific.

## How would you describe *Reactotron* to someone who has never heard of it?

If the app you’re building had a Twitter feed, it’d be Reactotron. It streams to you information about your app’s state, API calls, benchmarks, exceptions, and other stuff.

If you love debuggers like gdb or lldb, [this isn’t for you](https://www.sadtrombone.com/?autoplay=true). If your debugging experience consists of well placed `console.log` calls, then, welcome home my friend.

## How does *Reactotron* work?

It plugs into your React JS or React Native app and relays info up to 1 of the 2 flavours of Reactotron running on your computer: Desktop or CLI.

If your app uses Redux, you can track state changes, subscribe to parts of your state tree, and even replay & dispatch actions. There are ways to pass data like you would `console.log` and even supports images.

![Reactotron in action](assets/img/reactotron/demo.gif)

## How does *Reactotron* differ from other solutions?

So, I consider `console.log` the “other solution”. There’s something magical about it, right?

It’s first tool that most people turn to when something goes sideways. With little effort, it is placed in (hopefully) the right place to lift up the answer to your problem. Maybe an API response? Maybe a piece of poorly-behaving state?

Now, there are wonderful tools out there that specialize in specifics like breakpoints & code stepping. There are fantastic add-ons for working with just Redux.

Continue to use them. They’re great. The harder problems will require these heavy hitters.

But for me, streaming a series of manually-placed debug logs or automatically-streaming API calls & state changes is a pretty pleasant experience.

## Why did you develop *Reactotron*?

Classic itch scratching.

The apps I was helping build exceed the limit working memory & attention capacity of my aging brain.

This pattern was becoming too common:

* you kick off an API call
* it returns some goodies
* you transform it for your app
* shotgun it through your reducers
* have it appear in your views
* and maybe trigger other workflows & sagas…

Well, I couldn’t follow it.

I mean, I could. But it involved focusing; which is not a strength of mine. Squirrel!

And I didn’t want to litter log statements everywhere.

I just wanted to see the final state.

Or better yet, the journey of actions & network calls it made along the way.

## What next?

I have a big list of candidates. The things that top that list are visualization problems.

* Filtering events within Reactotron
* Tracking redux-saga effects
* things like memory, cpu usage, and other perf issues

Windows compatibility is up there too.

MobX is coming. Reactotron is built with MobX but can only track Redux-based state. Awk....ward.

## What does the future look like for *Reactotron* and web development in general? Can you see any particular trends?

Reactotron will likely stay in JS and try to service that passive-debugging need that lives between `console.log` and a real debugger.

Reactotron started out as a CLI app.

But it wasn’t until I ported it to the desktop with Electron did I realize just how deep the web dev rabbit hole goes.

React Native feels more like web dev than mobile dev, but it wasn’t until I finished building the desktop version that it donned on me: this “way” to create apps is MUCH better.

Next few years will be a steamroller for “web” and compile-to-js.

## What advice would you give to programmers getting into web development?

The web isn’t just the web anymore. Web apps, mobile apps, and desktop apps are just apps, so try to focus on things that help you do one thing: ship.

Focusing only on the tech is a mistake. No stack will guarantee a successful product. There are always multiple right answers.

Don’t get hung up in the great “State Wars” of 2016 or the upcoming Battle of JS Compilers in 2017. You’ve got work to do.

## Who should I interview next?

I’d like to hear more about Ken Wheeler’s React adventures.  Behind the hilarious persona is a guy delivering some crazy awesome open source React-based projects.

Janic Duplessis, the unsung hero of React Native, would be another good pick.

## Conclusion

Thanks for the interview Steve! It's definitely one cool looking tool. To get started, head to [GitHub](https://github.com/reactotron/reactotron). Consider also following [@reactotron](https://twitter.com/reactotron) for fresh news related to it.
