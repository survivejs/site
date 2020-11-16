---
title: "React Cosmos - A development environment for ambitious developers - Interview with Ovidiu Cherecheş"
date: 2020-02-13
headerImage: "assets/img/cosmos.jpg"
keywords: ["interview", "react", "styleguide", "ui"]
---

Developing user interfaces can be complex as you have to think about different ways it's going to be used and you have to design patterns and components to use for defining it. That's where tools like style guides come in.

Earlier, [I interviewed Artem Sapegin about react-styleguidist](/blog/styleguidist-interview). To continue the series, this time I'm interviewing [Ovidiu Cherecheş](https://twitter.com/skidding), the author of [React Cosmos](https://reactcosmos.org/).

## Can you tell a bit about yourself?

![Ovidiu Cherecheş|100|100|author](https://www.gravatar.com/avatar/b35f2b46ddb2eac3a8e4df3b1a0d63d6?s=200")

I'm Ovidiu, a web developer from Romania passionate about building user interfaces and making my tools. With React Cosmos, I married both together and created an open-source tool that makes React devs like me more productive.

## How would you describe _React Cosmos_ to someone who has never heard of it?

React Cosmos is a dev environment for building scalable, high-quality user interfaces. It enables you to develop React components in isolation and create UI component libraries.

![React Cosmos](assets/img/cosmos-01.png)

## How does _React Cosmos_ work?

React Cosmos works around component _fixtures_, which allows you to bookmark component states by defining sample component inputs. The sum of component fixtures creates your component library, which React Cosmos exposes under a beautiful UI designed to make you more productive.

```jsx
// buttons.fixture.js
export default {
  primary: <PrimaryButton>Click me</PrimaryButton>,
  primaryDisabled: (
    <PrimaryButton disabled>Click me</PrimaryButton>
  ),
  secondary: <SecondaryButton>Click me</SecondaryButton>,
  secondaryDisabled: (
    <SecondaryButton disabled>Click me</SecondaryButton>
  ),
};
```

React Cosmos needs to understand your source code to work, and it hooks into your build pipeline to do so. Technically this means that you can use React Cosmos regardless of how you write your code, be it ES20XX, TypeScript, Flow, etc. But it also means that sometimes you need to push a few options into a config or two to make the integration work.

![Example views](assets/img/cosmos-02.png)

## How does _React Cosmos_ differ from other solutions?

React Cosmos is detail-oriented and straightforward. It does only a few things, and it does them well. React Cosmos works exclusively with React. Unlikely other solutions, however, it can be integrated with other bundlers aside from webpack.

## Why did you develop _React Cosmos_?

I started working on my first single-page app back in 2014. The overwhelming complexity quickly drove me to want a dev tool that allows me to build, as well as test, one component at a time.

The team I was a part of created a prototype, a unique `/playground` route, where we hardcoded inputs for specific components. This workflow made us more productive, especially when debugging complex components. Today's React Cosmos is the evolution of that early prototype.

## What next?

So many things - automatic fixture generation, rich inputs for the props panel, showing multiple fixtures side by side, first-class support for other bundlers like Parcel, an official API for plugins, and the list goes on.

## What does the future look like for _React Cosmos_ and web development in general? Can you see any particular trends?

If we were to let our imagination go nuts, I'd say a full-blown _nocode_ UI builder. That's the dream, right? At least that's what everybody's talking about nowadays. But I lean more on the programmatic side. I look at the dev tools that sank in during the past years, and they're not groundbreaking tools that redesign how we work. They're slightly better versions of existing tools.

Without shifting paradigms, projects like TypeScript and VS Code are beyond popular in 2020. I see great potential in improving on known issues and delivering the best user experience to existing solutions.

For this reason, React Cosmos will focus on improving existing workflows first and creating new ones second. At the same time, if we can automate repetitive work, we should. And UI work is crazy repetitive. So I also believe we'll slowly abstract the boring parts of web development. Which part will be automated next? Well, that's a million-dollar question.

## What advice would you give to programmers getting into web development?

Choose your tools wisely, but don't focus too much on tools. They make all the difference, and you should carefully research the best tool for your project. But once you're productive with a set of tools, stick with them for a while. Keep sharpening that saw, but don't change it too often, as otherwise, you'll never discover its full potential.

## Who should I interview next?

[Alex Moldovan](https://twitter.com/alexnmoldovan).

## Conclusion

Thanks for the interview, Ovidiu! I like particularly the way it's possible to define variants to describe components in different states. In design it's about thinking through different options and figuring out good interfaces to capture the purpose of the given component or pattern.

You can [learn more about React Cosmos on the web](https://reactcosmos.org/). Consider also [starring the project on GitHub](https://github.com/react-cosmos/react-cosmos) and [following React Cosmos development on Twitter](https://twitter.com/ReactCosmos).
