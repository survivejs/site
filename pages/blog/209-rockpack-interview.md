---
title: "Rockpack - Skip config, code React - Interview with Sergey Aleksandrov"
date: 2020-11-02
headerImage: "assets/img/rocks.jpg"
keywords: ["interview", "webpack"]
---

As you might know, configuring webpack isn't the most fun thing in the world and that's exactly the reason why I wrote [a thick book about it](/webpack/).

For many React users, either [Create React App](https://create-react-app.dev/) (CRA) or framework such as [Next.js](https://nextjs.org/) hides a lot of the complexity.

In this interview, we'll learn about a new solution called [Rockpack](https://www.rockpack.io) from its creator Sergey Aleksandrov.

## Can you tell a bit about yourself?

![Sergey Aleksandrov|100|100|author](assets/img/sergey.jpg)

Hi, my name is [Sergey Aleksandrov](https://www.gooddev.org/), and I live in Kharkiv, Ukraine. Since 2010 I've become interested in web development. I started my journey with PHP and HTML markup, and after a year, switched to JavaScript. I am currently working as a full-stack developer.

In my free time, I develop my project, [Rockpack](https://www.rockpack.io), and other open source tools.

## How would you describe _Rockpack_ to someone who has never heard of it?

The main goal of Rockpack is to reduce project setup time from weeks to five minutes.

Rockpack allows you to create a React project with a correctly configured webpack, ESLint, Jest, and related tools.

You get a project with server-side rendering support, CSS (SCSS, LESS) Modules, **@loadable**, SVG as React Component, TypeScript or Babel, support for many file formats, performance optimizations, and so on. Rockpack provides powerful tools for [logging](https://www.rockpack.io/log-driven-development) and [localization](https://www.rockpack.io/localization-true-way).

## How does _Rockpack_ work?

![Rockpack](assets/img/rockpack.png)

There are several cases where Rockpack is useful:

- **Beginners** - With the help of Rockpack, any newbie to React can deploy a project of any complexity in a few minutes. Applications can be either regular single page or with a project structure, [server-side rendering](https://www.rockpack.io/ssr-1-creating-simple-ssr-application), etc.
- **Large projects from scratch** - Rockpack supports most of the webpack best practices and scales to big projects.
- **Startup** - If you need to quickly check an idea without wasting time on unfolding and setting up the project.
- **Library or React component** - If you want to write a UMD library or React component, there's support for the ESM/CommonJS builds as well as the minifying.
- **Legacy projects or modular use.** - You can for example [migrate a legacy application to SSR using Rockpack](https://www.rockpack.io/ssr-2-migration-legacy-app-to-ssr).

## How does _Rockpack_ differ from other solutions?

Rockpack was built on three ideas: extensibility, modularity, and ease of use.

### Extensibility

Let's assume we have created an application with [rockpack/starter](https://github.com/AlexSergey/rockpack/blob/master/packages/starter/README.md) and we want to extend the configuration. Instead of ejecting, like you would do in CRA, you can override any webpack property while still having the possibility to keep your configuration up to date.

### Modularity

If you have an existing application, but you need to add server-side rendering, you can add [rockpack/ussr](https://github.com/AlexSergey/rockpack/blob/master/packages/ussr/README.md) and [rockpack/compiler](https://github.com/AlexSergey/rockpack/blob/master/packages/compiler/README.md) to your project. Doing this converts your application for SSR.

### Ease of use

Rockpack doesn't decide for you how to design an application. You can use any solution for state management, use any libraries, make any project structure, design any architecture approach, and so on.

## Why did you develop _Rockpack_?

It took a long time to develop Rockpack. It all started in mid-2017 when my friend and I decided to create our product - [Cleverbrush](https://www.cleverbrush.com/). It is an online vector photo editor and collage builder. It consists of 5 applications:

- Landing page
- Editor
- Collage
- Admin
- API

Initially, we had to create our **webpack.config** for each application and monitor dependencies. The duplication meant we had to fix issues in five places and each time we added features, we had multiple places to modify.

We endured it until we found customers. Customized versions for them required all the same actions, and the routine grew exponentially. Then I thought, what if I write the config once "correctly" to correspond to most types of projects, and we won't have to edit it every time, update dependencies, etc.

To save money, we test through logging as described the [Log Driven Development](https://www.rockpack.io/log-driven-development) article.

Rockpack proved to be excellent in solving our project's problems, and I thought that it might be useful not only for us but for the community in general.

## What next?

I want to cover the compiler module with end-to-end tests and add more articles to [the official site](https://www.rockpack.io) and Q&A.

T> Read the [interview about end-to-end testing](/blog/e2e-interview/) to learn more about the topic.

## What does the future look like for _Rockpack_ and web development in general? Can you see any particular trends?

The long term goal is migration to webpack 5. The process will not be easy since many plugins haven't been adapted to the new version at the time of writing.

Speaking about the overall state of web development, currently, I can claim it's relatively stable. The development of the language and frameworks is much smoother than before. We have reached a plateau of productivity, where we are ready to solve real problems.

## What advice would you give to programmers getting into web development?

Set achievable goals for yourself. Start with something simple, so that encourages and motivates you.

One more thing that helps me is creating a plan for the day. I use a large whiteboard on the wall to create a todo list with tasks. Seeing real goals in front of you makes it harder not to achieve them.

Do not be afraid of not knowing something and making mistakes. We are not robots. We are humans - and humans make mistakes, and that's okay.

## Who should I interview next?

Our Ukrainian community is very diverse and vibrant. But among all, my top three are:

1. Illya Klymov is a Rockstar who makes tons of useful content and has invested titanic efforts in developing the Russian-speaking community. He is an easy-going, erudite person, communication with who will be very interesting. He has his own [YouTube channel](https://www.youtube.com/channel/UCW9pyonagDWGMCy7V_Kro6g) with unique content

2. Vladimir Agafonkin is a creator of a trendy library [Leaflet](https://github.com/Leaflet/Leaflet)

3. Yuri Artyukh - he also has [YouTube channel](https://www.youtube.com/channel/UCDo7RTzizoOdPjY8A-xDR7g). The creativity of this person impresses everyone!

## Any last remarks?

SurviveJS is a considerable contributor to the React community; thanks a lot for promoting projects like Rockpack!

## Conclusion

Thanks for the interview, Sergey! It's going to be interesting to see how the community adopts the project. I know CRA and Next.js are the standard starting points for many but at the same time there's still room for innovation and improvement.

T> [Learn how to get started fast with Rockpack](https://www.rockpack.io/fast-setup). See also [the projet on GitHub](https://github.com/AlexSergey/rockpack).
