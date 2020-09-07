---
title: "NoCode programming - Doing more with less code - Interview with Alex Moldovan"
date: 2020-09-07
headerImage: "assets/img/no-pressure.jpg"
keywords: ["interview"]
---

What if you could create programs without coding? If you've ever used something like Microsoft Excel or Google Sheets, you've already done this at one level.

NoCode programming is an emerging topic. To learn more about it, I am interviewing [Alex Moldovan](https://twitter.com/alexnmoldovan).

## Can you tell a bit about yourself?

![Alex Moldovan|100|100|author](assets/img/alexm.jpg)

My name is Alex, and I'm a software engineer based in Cluj, Romania. I work at a startup called [teleportHQ](https://teleporthq.io/), and I'm one of the founders of [JSHeroes](https://jsheroes.io/), one of the biggest JS communities in Europe.

I've been in tech for more than ten years now, and in the past four years, I dedicated a lot of time to organizing events and public speaking alongside my full-time job.

Lately, I started advocating for performance, accessibility, and ethical design. At teleportHQ, I'm fortunate enough to practice what I preach, as we're working at a product that can bring the NoCode revolution one step closer.

## How would you describe _NoCode development_ to someone who has never heard of it?

There's no clear definition for NoCode development. It is a generic term for any platform/tool that abstracts away _parts_ of the code you would typically write when building an app.

Tools like [Wix](https://www.wix.com/) and [Webflow](https://webflow.com/) are NoCode tools for frontend development, but modern serverless solutions or backend-as-a-service platforms are also NoCode, just for backend development.

## How does _NoCode_ programming work?

One thing which is crucial and often misunderstood is that NoCode is still development. It replaces the need to write code instructions with visual interfaces and configuration dashboards.

Your final application still runs on the same platform and pretty much using the same programming languages at the end of the day. But the process of building that application can be simplified a lot.

Additionally, a NoCode platform might have different ejection mechanisms, i.e., points after which you are on your own, and you continue developing on top of the skeleton they offer. The approach is often called LowCode development. In this case, you will have code generators that are creating the initial project and the UI/business/backend code that you can later modify or extend.

I see NoCode as the next layer of abstraction on top of existing frameworks and programming languages. You can think of it as the step we took from Assembly to C or from pure HTML/CSS/JS to modern frameworks.

With each step, it arguably became more comfortable to develop a more complex project, reusing the solutions others came up with for solving recurring problems (e.g., for the web platform: dom manipulation, reactivity, data flows, etc.).

## Why did you join _teleportHQ_?

I've been with the team for the past two years. During this time, I have worked both on the code generators and the playground. I feel privileged to have been in the open source world all this time and fine-tuning the user experience on the playground. Both areas align with my personal goals and interests.

One thing which made me interested in the company was the desire to open-source the code generators and the [OpenUIDL](https://dl.acm.org/doi/10.1145/3397874) (our format for representing UIs in a JSON structure).

![Creating in teleportHQ](assets/img/nocode-01.jpg)

## What is _teleportHQ_?

We are building a NoCode/LowCode platform (we call it the **playground**) for professional use cases. We target developers, designers, and content creators that want to streamline their UI creation workflows.

Our "secret" sauce is a set of [open source **code generators**](https://github.com/teleporthq/teleport-code-generators) with which you can export your work from our platform at any time and continue on your own in any of the most popular frontend frameworks today (e.g., React, Vue, Angular, etc.).

![Theming in teleportHQ](assets/img/nocode-02.jpg)

## How does _teleportHQ_ differ from other solutions?

There are plenty of tools and solutions for building static-_ish_ websites, so we are working more towards application development and integration with existing workflows.

Our long term vision is to bend technology towards humans, and we all strive to create a platform that makes it hard or impossible for content creators to offer bad experiences to their end-users. We want to bake in all the knowledge that the dev community has so that future users can rely on a solid bedrock when building applications, without even knowing it.

![Editing in teleportHQ](assets/img/nocode-03.jpg)

## What next?

We're still in beta at this point at [play.teleporthq.io](https://play.teleporthq.io/), but we have a massive roadmap ahead of us. Our main priority now is to bring all the features needed for our users to start working professionally and integrate the many experiments from our R&D team.

We would also love to engage with the community on our open source code generators and to get as much feedback on the tool as possible in the coming months.

## What does the future look like for _NoCode_ and web development in general? Can you see any particular trends?

There's a growing need for NoCode solutions, and it will only increase in the future because the demand for _software_ in general is growing exponentially. I'm hoping that with the rise of NoCode tools for UIs, the entry barrier will become lower, and the web platform more accessible to people.

There are many things to consider when building a website from scratch, so I would love to see concerns like performance and accessibility offloaded to these tools. That way, developers can focus on the functionality and business side of things.

## What advice would you give to programmers getting into web development?

I think they should embrace NoCode tools when the time comes, without fearing that the tools and automation will replace the need for their skills. Knowing the basics very well will allow you to switch from platform to platform or from framework to framework, without paying the cost of transition and re-learning everything from scratch.

## Who should I interview next?

[Jeremias Menichelli](https://twitter.com/jeremenichelli).

## Conclusion

Thanks for the interview, Alex! I find the idea of LowCode/NoCode highly interesting and I like your approach of using an intermediate UI definition to tackle the differences between platforms. It reminds me of programming languages which use an intermediate format during their compilation.

T> You can [find teleportHQ online](https://teleporthq.io/). [See also their GitHub](https://github.com/teleporthq) and [try their playground](https://play.teleporthq.io).
