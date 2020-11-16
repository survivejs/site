---
title: "react-styleguidist - Style guide generator for React - Interview with Artem Sapegin"
date: 2016-02-22
headerImage: "assets/img/styleguidist.jpg"
keywords: ["interview", "react", "styleguide", "ui"]
---

People have been developing style guides for their sites and applications for quite a while. They define basic building blocks and aesthetics. This is valuable as it helps you to keep your design consistent and communicate it to your developers better. Style guides can also help to bridge designers with developers.

Given React is component driven, the approach works beautifully here. Artem Sapegin has developed a tool known as [react-styleguidist](https://github.com/sapegin/react-styleguidist) for this purpose. It allows you to reach towards these ideals within the context of React. To understand the tool a bit better, read on.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://s.gravatar.com/avatar/16a1493bcecf09614c413e571c371e96?s=200" alt="Artem Sapegin" class='author' width='100' height='100' />
</span>
</p>

I’m a front-end developer at [Here](http://here.com/) in Berlin where I’m trying to make work of my colleagues easier by developing internal tools using React.

I like to spend my spare time making photographs, traveling, reading, drinking coffee and stroking my dogs.

## How would you describe _react-styleguidist_ to someone who has never heard of it?

It’s a style guide generator for your React components. Each component has a props table and documentation section that renders from Markdown file where every code sample transformed into a playground with rendered code and a code editor where you can change its code and see how component behave with different props.

You can also use react-styleguidist as a workbench to develop new components: it has a dev-server and hot-reloads any changes in components’ code and Markdown documentation.

## Why did you develop _react-styleguidist_?

Because I couldn’t find any good tool to make a style guide for my project at work.

Then I was trying to hack something and the idea of using Webpack loaders to load and hot-reload examples and Markdown documentation came to my mind.

## What next?

The biggest challenge with developing react-styleguidist is integration with users’ projects: Webpack loaders, styles and everything else should be isolated as much as possible and react-styleguidist’s code shouldn’t clash with project’s code. At the same time, it should be easy to integrate react-styleguidist to the user’s project and the user should be able to modify style guide as they like.

Most of the bugs at our GitHub issues are conflicts with users projects’ configuration. So there are still a lot of work in this area and any help is very appreciated.

## What does the future look like for React and front-end in general? Can you see any particular trends?

I think the React ecosystem will stabilize a bit and opinionated libraries, that wrap many smaller libraries, will emerge to make starting new projects for the beginners a lot easier.

I hope developers will find and document more best practices of developing React applications. I also hope that tools will be easier to configure or at least it will be easier to find out what’s wrong with your configuration.

Developing with React now has many benefits and very exciting, but requires you to answer too many questions and always be a bit unsure about your work.

I also think that in a few years we will have a common standard for components that would work in React as well as other frameworks like Angular 7 or Ember 9. Like we had jQuery plugins before.

## Who should I interview next?

[Sebastian McKenzie](https://twitter.com/sebmck), a Babel’s creator.

## Conclusion

Thank you for your interview Artem. I wish the best of luck to your project!

react-styleguidist just reached an important milestone with its [2.0.0 release](https://github.com/sapegin/react-styleguidist/releases/tag/2.0.0). See also [the GitHub repository](https://github.com/sapegin/react-styleguidist) of the project.

To get a better idea of what kind of style guides the tool is able to produce, check out [the example style guide](https://react-styleguidist.js.org/).
