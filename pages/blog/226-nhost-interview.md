---
title: "Nhost - Backend-as-a-Service with GraphQL for modern app development - Interview with Johan Eliasson"
date: 2022-01-27
headerImage: "assets/img/japanese-maple.jpg"
keywords: ["interview", "baas", "javascript", "graphql"]
---

Developing a full-blown web application, including a backend, can be quite an undertaking for a single developer or a small team. Several solutions have appeared in the market during the last few years that make this less daunting.

To learn about one, I am interviewing [Johan Eliasson](https://twitter.com/elitasson), the founder of [Nhost](https://www.nhost.io/).

## Can you tell a bit about yourself?

Hey, I'm Johan, Co-Founder & CEO of Nhost. I am from Sweden and love the intersection between business, engineering, and web development. I'm amazed about the optimization that can be done with technical tools and services in the real world.

Ever since I learned to program 14 years ago, I've always been building projects both in my day job and with side indie hacker projects, which I love.

I also like working out (gym & running), gaming, reading books, and spending time with friends and family.

## How would you describe *Nhost* to someone who has never heard of it?

Nhost is Backend-as-a-Service (BaaS). We're doing for the backend what Netlify and Vercel are doing for the frontend.

Nhost is especially suitable for developers who want to move fast and focus on their core business rather than spending time on setup and configuration.

## How does *Nhost* work?

We manage thousands of backends for our customers. Every backend consists of:

- Database (Postgres)
- GraphQL (Hasura)
- Authentication
- Storage
- Functions

That is the core of our offering.

We've been very thoughtful when choosing the different parts of the stack to ensure they are as productive, timeless, and scalable as possible.

On top of that, we provide JavaScript, TypeScript, and Dart SDKs to make it easy to integrate our services. We also have specific libraries to make it easy to use Nhost with React, Next.js, Vue, Nuxt, Flutter, and Apollo.

I mentioned earlier that Nhost is for the backend, what Netlify and Vercel are for the frontend. Many developers have fallen in love with pushing code and letting the platform take care of deploying everything automatically with services like this.

We do the same but for the backend, which means we have a GitHub integration that automatically deploys your backend, database migrations, and functions.

T> We also have a good summary of our offering in a repository on Github: [https://github.com/nhost/nhost](https://github.com/nhost/nhost).

## How does *Nhost* differ from other solutions?

There are three options if you don't use Nhost for your backend:

1. Building your own backend
2. Stitch together different services to your own backend (ex, ElephantSQL + Auth0 + Fauna + S3 + AWS Lambda)
3. Using another BaaS

If we start with the first one, building your own backend takes a lot of time and requires technical expertise in infrastructure, security, and maintainability. Developers can spend weeks just setting up a backend for a new app while still not providing any value for end-users or the business.

Stitching together different services is another option but is very time-consuming, and every combination of services is different, making it hard to do. In theory, it sounds good, but in reality, you end up with siloed services with different pricing, different SDKs, and different level of maturity. What you'll miss is the unified experience across your backend.

The third option has gained a lot of traction lately — using a BaaS to manage your backend that includes the building blocks that almost every app needs. [Firebase](https://firebase.google.com/) has been dominant lately, but we have begun to see more modern and open source alternatives appear: [Supabase](https://supabase.com/), [8base](https://www.8base.com/), [Appwrite](https://appwrite.io/), and more.

Compared to all of these alternatives, Nhost is different in at least one of the following:

- Hosted offering
- Relational database (PostgreSQL)
- GraphQL API
- Open Source
- CLI
- GitHub integration with automatic deployments to production

We see other BaaS alternatives only being focused on hosting the backend. Nhost hosts the backend for customers as well, but we're more focused on solving end-to-end problems for developers related to local development, deployments, preview environments, and more.

![Nhost comparison](assets/img/nhost-comparison.png)

## Why did you develop *Nhost*?

Simply, I wanted it myself.

I love building - but not just building in general. Instead, more specifically, I love creating things that add value for customers.

I realized building a new backend for every app was not time well spent. When looking for the perfect backend, I found out it didn't exist. Now, this is the beauty of being an engineer. If you want something that does not exist, you can build it yourself, which I did.

In the early days of Nhost, I received a lot of traction from other developers who also wanted to have a ready-to-use backend. The feedback kept me motivated to build a fantastic experience for other developers who, just like me, love to develop.

## What next?

We just [launched Nhost v2 in beta](https://www.nhost.io/blog/nhost-v2-the-beginning-of-something-big) at the end of January 2022. Nhost v2 is everything we've learned over the past 18 months while building Nhost and talking to customers. We have focused on developer experience, CLI, and productivity for our customers.

We recently raised $3M from, among others, the founders of GitHub and Netlify, which means we're also focusing a lot on hiring. We will be expanding the team in 2021 and 2022.

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/5WTetOgDGLk" frameborder="0" allowfullscreen></iframe>

## What does the future look like for *Nhost* and web development in general? Can you see any particular trends?

The frontend has gone through an innovation cycle for the last five years with excellent tools and frameworks like TypeScript, React, Vue, Next.js, Nuxt, GraphQL, and more.

In the next five years, we'll see the same innovation happen for back-end and full-stack app development.

Generally, developers will be more focused on picking tools and services that make them productive to provide value for their customers and business. Here, I think it's essential that companies providing these tools focus on developer experience.

## What advice would you give to programmers getting into web development?

Always be building! You can read and watch tutorials, but it's in the process of creating that you learn!

I also recommend paying for courses when you want to learn more about a specific topic, a framework, software, or tool. This way, you get a structured way to learn and quickly expand your understanding of the topic you're studying - instead of jumping between different youtube videos and blog posts. I regularly buy courses on [udemy.com](http://udemy.com), which I've found helpful.

But in short: build, build, build!

## Who should I interview next?

[Urigo](https://twitter.com/UriGoldshtein), the founder of The Guild, is always interesting to listen to, and they are building excellent tools for GraphQL!

## Any last remarks?

Thank you so much for this interview. It was a lot of fun!

## Conclusion

Thanks for the interview Elias! It's great to see offerings to emerge in the BaaS space as the development will make it faster, and most importantly, more fun to develop web applications.

T> To learn more about Nhost, [head to their site](https://www.nhost.io/). You can also [find the project on GitHub](https://github.com/nhost/nhost).
