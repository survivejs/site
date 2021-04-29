---
title: "Blitz.js - The Full-stack React Framework - Interview with Brandon Bayer"
date: 2021-04-12
headerImage: "assets/img/fractal.jpg"
keywords: ["interview", "react"]
---

Although React is a UI library, that doesn't mean you couldn't write full-stack applications around it. Frameworks, such as [Next.js](https://nextjs.org/), have appeared to make it easier.

To learn more about one such framework, Blitz.js, I am interviewing [Brandon Bayer](http://twitter.com/flybayer).

## Can you tell a bit about yourself?

![Brandon Bayer|100|100|author](https://www.gravatar.com/avatar/60898d6da82fd77abfd4f3838bda2ece?s=200)

I'm the creator and full-time maintainer of Blitz.js. I have been a professional developer since 2010. In 2017 I quit my job to do full-time consulting. That was one of the best decisions I have ever made. When I started Blitz, I cut back my consulting hours to 20 per week or less. That allows me to work on Blitz while still making a living.

Outside of work, I love aviation. I got my pilot's license right after I turned 17 years old. I haven't flown in a few years, but I'm hoping to get back in the air as soon as possible.

## How would you describe _Blitz.js_ to someone who has never heard of it?

It's the equivalent of Ruby on Rails or Laravel but for JavaScript and React. It's built on top of Next.js so that you get everything excellent about Next.js plus everything else you need for building a full-stack app.

T> To learn about Next.js, [read the interview with Arunoda Susirapala](/blog/nextjs-interview).

## How does _Blitz.js_ work?

Fundamentally it works the same as Next.js. However, Blitz adds a novel new "zero-API" data layer, which abstracts the API layer into a compile step. As a developer, you don't need to mess with REST or GraphQL APIs. Blitz lets you write functions that run on the server, import them into your React components, and they will work like magic.

![Server and client](assets/img/blitz.jpg)

## How does _Blitz.js_ differ from other solutions?

[RedwoodJS](https://redwoodjs.com/) is the only other alternative trying to solve the same problems. They take a different approach. Instead of abstracting away the API, they keep the GraphQL API layer and double down on making it easy to use.

Also, Blitz has built-in user email/password authentication, and it's already set up for you by default out of the box. So you never have to set up auth again if you use Blitz.

## Why did you develop _Blitz.js_?

I developed Blitz because I was so frustrated with having to manage APIs and data fetching. It's incredible how much the API layer slows you down and causes problems. People are saying Blitz makes you 5-10x more productive because of this. And then also the headache of choosing libraries and getting them all to work together. I wanted a battery-included framework like Ruby on Rails.

## What does the future look like for _Blitz.js_ and web development in general? Can you see any particular trends?

Full-stack development with JavaScript/TypeScript and React is going to continue to get easier and faster. We've already made such a difference with Blitz. But there's a TON more we can and want to do. It's still early days for full stack web dev.

Serverless full stack with Blitz is still the wild west right now. But I fully expect this to improve over the next couple of years dramatically.

## What advice would you give to programmers getting into web development?

I recommend working at an agency at some point, so you get more varied experience than working on a single enterprise product. Also don't stay at the same job for too long. Ideally, switch jobs every couple of years, so you gain more experience and because you can raise your salary much easier by changing companies.

## Who should I interview next?

[Colin McDonnell](https://twitter.com/colinhacks).

## Any last remarks?

Go to [blitzjs.com](https://blitzjs.com/) to learn more about Blitz and take it for a test drive. TLDR is run `npm i -g blitz` and then `blitz new myAppName`, and in just a couple minutes, you'll have a new Blitz app running, complete with user sign up, log in, log out, and forgot password all working!

If you want to keep up with what I'm working on, follow me at [@flybauer](http://twitter.com/flybayer).

## Conclusion

Thanks for the interview, Brandon! I agree the full-stack experience with React can be improved further, but it's pretty impressive what you've done so far.

To get started with Blitz, consider the following resources:

- [Video: Complete intro to Blitz](https://www.youtube.com/watch?v=UHyx8MtCVVk)
- [Blitz Discord](https://discord.gg/blitzjs)
- [@blitz_js](https://twitter.com/blitz_js)
- [Blitz on GitHub](https://github.com/blitz-js/blitz)

**React Finland Vodcast #3 - Full Stack React (featuring Blitz.js)**

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/ee3riQ0aVbs" frameborder="0" allowfullscreen></iframe>
