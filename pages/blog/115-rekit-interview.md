---
title: 'Rekit - Toolkit for building scalable React applications - Interview with Nate Wang'
date: 2017-08-09
headerImage: 'assets/img/toolkit.jpg'
keywords: ['interview', 'react', 'redux', 'javascript']
editors: ['bebraw', 'karlhorky']
---

Perhaps the greatest thing about React is how flexible it is. It contains some opinions but not too many. You still have plenty of freedom. Sometimes this is a blessing, but it can also be a curse.

[Nate Wang](https://twitter.com/webows) realized the same, and as a result, he developed [Rekit](http://rekit.js.org/), a toolkit, around React, Redux, and other related technologies.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/9645266baa7fbac0823eee7dae06bbe4?s=200" alt="Nate Wang" class="author" width="100" height="100" />
</span>

My name is Nate Wang, and I live in Shanghai, China. I started writing JavaScript more than ten years ago and now enjoy my job building UIs for enterprise applications. I have created iOS apps, published books, and talked about React at QCon.
</p>

## How would you describe *Rekit* to someone who has never heard of it?

You can think of *Rekit* as an advanced *create-react-app*:

1. It defines an opinionated approach to creating scalable web apps using React, Redux and React Router.
2. It provides a powerful CLI and web-based interface to make sure the app always follows the Rekit way.

## How does *Rekit* work?

When starting a project, the first thing is to create a project folder structure and plan how to scale it when adding more features. *Rekit* can help to create such a project which scales well, following a [feature oriented architecture](https://medium.com/@nate_wang/feature-oriented-architecture-for-web-applications-2b48e358afb0):

![Rekit architecture](assets/img/rekit/architecture.png)

After creating the project and installing dependencies, you can use the powerful Rekit tools to manage the project and generate boilerplate code. Rekit portal, a web-based tool shipped with Rekit 2.0, works as an IDE for React development. Components, actions, and routes can all be created, moved and deleted by the Rekit portal.

![Rekit portal](assets/img/rekit/portal.png)

T> [You can find a live demo of Rekit portal online.](http://rekit-portal.herokuapp.com/)

## How does *Rekit* differ from other solutions?

There have been many boilerplates and scaffolding tools for React apps. Rekit may be the most complete solution, the key differences being:

1. It provides a production ready solution rather than a starter kit.
2. It provides powerful tools like the command line interface and the web interfaces to manage the project.
3. It may be the first tool that enables renaming and deletion of Redux actions, which is important for code refactoring.
4. It supports the latest versions of dependencies like React 15.6, webpack 3, React Router 4 and so on and will stay up to date.

## Why did you develop *Rekit*?

I like to create tools to automate my daily work. Rekit was originally a toolset for helping create boilerplates for another project, the goal being boilerplate reuse in other projects. I realized that it might be useful to share this with others and so I created Rekit. It helped my team a lot.

## What next?

I'd like to make Rekit more robust by adding more test cases. The docs can also be improved, and more tutorials can be written. It would be nice if Rekit could become more popular and be acknowledged by more people. I would like to create more Rekit plugins to add new capabilities to Rekit, such as support for React Native, server-side rendering, etc.

## What does the future look like for *Rekit* and web development in general? Can you see any particular trends?

I think "JavaScript/frontend fatigue" is still the main pain point for web development. There are too many options and best practices, and it's hard to make decisions about which are better.

Rekit is just a toolkit through which we share our best practices for creating web apps using React, Redux and React Router. We hope more people can benefit from it just like we do. To be honest, I can't see any particular trends, but I believe React will be the final winner.

## What advice would you give to programmers getting into web development?

Read specifications first, especially ECMAScript. It won't take long, and it's beneficial for understanding the foundations of web development. If you understand the specifications, you can know how React, Angular and any other library work. There is no magic behind them.

## Who should I interview next?

[afc163](https://twitter.com/afc163) if possible. He is one of the leading developers of [Ant Design](https://ant.design) which I think is the best UI library for React.

## Any last remarks?

Thanks to those who contribute to Rekit by reporting issues, asking questions and recommending Rekit to others! You all help to make Rekit better.

## Conclusion

Thanks for the interview Nate! It's nice to see solutions like this appear around React as they address specific pain points the community has.

Learn more about the project at [Rekit site](http://rekit.js.org/).
