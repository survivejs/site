---
title: "Minima - To-do lists done right - Interview with Alex Fedoseev"
date: 2019-06-17
headerImage: "assets/img/minima.png"
keywords: ["interview"]
---

If there's one thing that transformed my life, it's the adoption of the Getting Things Done (GTD) methodology. The key part for me was to begin what's to be done and then committing on doing it. I use OmniFocus and Google Keep for this and while it requires some discipline, it has definitely been worth it for me.

[Alex Fedoseev](https://twitter.com/alexfedoseev) has been developing a service, **Minima**, that achieves this online while aiming to provide functionality beyond personal usage. In this interview, we'll learn more about the solution and his technical approach for it.

## Can you tell a bit about yourself?

![Alex Fedoseev|100|100|author](https://www.gravatar.com/avatar/4946bcea2b14546bd390883bfb2585fe?s=200")

I got into development pretty late, when I was 30 or 31. My original background has nothing in common with neither Computer Science (CS) nor User Experience (UX), but the latter hooked me up somehow, and it's still my main point of interest.

For the past three years, I've been a frontend engineer at [ShakaCode](https://www.shakacode.com/), and for the past seven years, I've been working on [Minima](https://minima.app).

My current tools of the trade are ReasonML and Rust.

## How would you describe Minima to someone who has never heard of it?

Minima is a combination of personal task manager and project management solution for teams. But it’s not quite there yet. I kicked off MVP with the Personal Workspace only for now.

## How does Minima work?

For the users, Minima starts in the Personal Workspace—the place where they can manage their tasks: work, life, everything. In the future, they will be able to join Teams—one or many-to collaborate on projects.

App follows GTD principles, so if you are familiar with it, you should feel like home.

Here is the screenshot of the Project screen to give you a better idea:

![Minima project screen](assets/img/minima.png)

## How does Minima differ from other solutions?

Lacking personal space was my main concern for years with many solutions on the market. So one of the main goals is to provide private space for each team member, to make it genuine first-class part of the project management solution for teams.

## Why did you develop Minima?

I was passionate about the whole project management thing but had zero experience in development (at that time, I was a project manager at marketing space). I was heavily inspired by **Things**—native personal task manager for macOS. It’s the best GTD implementation in software, in my opinion. And I would love to have something like this built into the team project management tool.

Once I shaped up my vision of the app, I could stay on the product side of things and search for investors. But I always had a stance that you can’t efficiently manage the area that you didn’t master yourself. So I decided that it’s time to learn something new.

At first, I was worried that someone is already addressing this problem. Mainly, because people use “This problem is already solved by X” argument quite often these days. But if you think about it, it’s silly to stop developing something you care about just because someone else is trying to solve the same problem.

Take the car industry, there are dozen of vendors out there, and they co-exist just fine because customers choose different products for different reasons: price, features, design, etc. I don’t see how it’s different from the software solutions.

Anyway, my only goal is to build a great product, not to win the race.

## What kind of technical challenges have you encountered during the development of Minima so far?

The hardest part of developing a side project is that you can’t do this full time. I spent few years in the loop: after the pause, I come back to the app, don’t remember where I am at, spending few hours per day try to continue with a complex feature, things get randomly broken here and there because I’m hardly in context, depression, pause, repeat.

### Types Get You Into the Zone

I can’t stress enough about how types are helpful here. Even after weeks, it takes minutes to get into the zone because everything you do starts with the types and then compiler reminds you what it’s all about, immediately slaps you if you do something stupid and keeps you in context 100% of the time.

### The Platform™

The second pain point was The Platform™. One of my goals with Minima is to make the user experience as close as possible to the desktop apps. Neither platform nor npm didn’t help much here. Packages I tried either over-abstracted, or hard to bind to, or doesn’t do what I need in the way I need.

At some point, I stopped spending time on bindings and invested it in my solutions. At the time of writing, `quill` is the only UI related dependency used in production. Everything else—primitives, dialogs, focus/selection management—all internal implementations. It took time, but I mostly satisfied with the result, and owning your UI is a pleasure for many reasons.

### On Open Sourcing and Focus

Without a doubt, the most challenging UI part was drag-and-drop (and the most incomplete so far). One of my mistakes was that I open sourced it too early. Never do this. Implement internally → battle test in application context → abstract. Not the other way around.

As a result, I spent a lot of time implementing the functionality that was not critical at all and burned out. After some break, I pulled it back into the app, addressed app requirements, and moved on. It’s still far from perfect, but issues are localized and will be addressed along the way. I will open source it back, hopefully, soon.

### Offline Support

The offline story is also tricky but brings a lot of benefits to the user. I use a combination of PouchDb + CouchDB for storing app data, the former is running in the worker thread, and almost all operations are optimistic and happen in the background, so main thread should be fast, responsive and spinner-free. Service workers are giving me a lot of pain, though, especially in Safari.

I have an excellent infra manager implemented in Rust but guess it’s already long enough.

## What next?

The next big things in the pool are timed to-dos and mobile app. Lots of small/medium things. Once I feel comfortable with the app, I’ll finalize the pricing model.

In the background, I’m prototyping Team Workspaces; its implementation is going to be quite different from the Personal Workspace implementation on the tech side of things, so I need to thought out details here.

There is a [Roadmap](https://minima.app/roadmap) section on the site with a more detailed list.

## What does the future look like for Minima and web development in general? Can you see any particular trends?

Oh man, it’s all in flux. I was living on the bleeding edge for years, and I’m afraid of guessing what’s next.

The web platform is being used as an app platform for some time, but it’s not welcoming space in its current state, IMO. I’m glad that types are coming to the web though. Objectively, I wouldn’t get to this MVP unless I switched to Reason and Rust. These technologies were like nitro to my progress. I sincerely hope they will gain more adoption in the near future.

## What advice would you give to programmers getting into web development?

* Get a good starting point. If you target application development, something like OCaml/Reason, Elm, Rust, F#, Swift, etc. would work. I can’t imagine app development without sum types and pattern matching.
* Find a mentor, if possible. Self-teaching is slow and sometimes depressing.
* Learn to take breaks. If you tired and can’t grok something, it’s ok to let it go for some time.

The above is the list of my mistakes haha.

## Who should I interview next?

Lots of great folks in the Reason community. Mentioning just few of them (in alphabetical order):

* [BlaineBublitz](https://twitter.com/BlaineBublitz) — Gulp lead and contributor to Reason eco-system
* [bloodyowl](https://twitter.com/bloodyowl) — without his work, transition to the new `reason-react` would be significantly harder
* [bryphe](https://twitter.com/bryphe) — author of [Oni](https://github.com/onivim/oni2)
* [cknit](https://twitter.com/cknitt) — great contributor to the Reason eco-system and the author of the next version of `bs-react-intl`
* [DmytroGladkyi](https://twitter.com/DmytroGladkyi) — running [reasonml.online](http://www.reasonml.online)
* [leostera](https://twitter.com/leostera) — I heard he likes streaming & actors :)
* [MoOx](https://twitter.com/MoOx/) — maintainer of `reason-react-native`
* [Sander_Spies](https://twitter.com/Sander_Spies) — WASM hope of OCaml community
* [thangngoc89](https://twitter.com/thangngoc89) — author of [sketch.sh](http://sketch.sh)
* [UlrikStrid](https://twitter.com/UlrikStrid) — doing magic things with Reason native infra
* [wokalski](https://twitter.com/wokalski) & [rauanmayemir](https://twitter.com/rauanmayemir) — folks behind [Brisk](https://github.com/briskml/brisk)
* [yawaramin](https://twitter.com/yawaramin) — doing exceptional work on educating Reason community

There are a lot more on the list, but I needed to stop at some point, right?

## Any last remarks?

If you find Minima interesting, there are few places, where I’ll be happy to answer questions or help with the problems:

* [Slack](https://join.slack.com/t/MinimaHQ/shared_invite/enQtNjM2OTMzNDI3MjM2LTkzOGU2M2M4NDMyZmIzZWFmNDg2OTNkNWFmMzMyNmU4ZDRhNDlhZTk5ZjYzY2U5MzJlZDI3ZmNkNTJhMzRiZTE)
* [Twitter](https://twitter.com/MinimaHQ)
* [Github](https://github.com/MinimaHQ/minima.app)
* [Facebook](https://facebook.com/MinimaHQ)

## Conclusion

Thanks for the interview, Alex! It's great to see when someone decides to push for their idea even if it means working a lot and expanding your set of skills. For me, Minima is a project to keep an eye on. If you want to get into GTD flow on the web, it's definitely worth a look!

T> To get started, [check Minima online](https://minima.app) you can also [find parts of the project on Github](https://github.com/MinimaHQ).
