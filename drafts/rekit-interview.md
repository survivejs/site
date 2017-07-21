---
title: 'Rekit - Toolkit for building scalable React applications - Interview with Nate Wang'
date: 2017-xx-xx
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/9645266baa7fbac0823eee7dae06bbe4?s=200" alt="Nate Wang" class="author" width="100" height="100" />
</span>

</p>
My name is Nate Wang, started writing JavaScript more than 10 years ago. I live in Shanghai, China, my job is building UIs for enterprise applications and I enjoy it. I have created iOS apps, published books, and talked about React at QCon.

## How would you describe *Rekit* to someone who has never heard of it?
You can think Rekit as an advanced "create-react-app":
1. It defines an opinionated approach to creating scalable web apps using React, Redux and React router.
2. It provides powerful CLI, web UI based tools to make sure the app always follows the Rekit way.


## How does *Rekit* work?
When starting a project, the first thing is to create porject folder structure and plan how to scale it when adding more features. Now Rekit can help to create such a project which is well scalable, following the [feature oriented architecture](https://medium.com/@nate_wang/feature-oriented-architecture-for-web-applications-2b48e358afb0):

<img src="https://cdn-images-1.medium.com/max/1600/1*3lSb1nwK8vEd2UMhW1opHA.png?raw=true" width="600">

After creating the project and installing dependencies, you can use powerful Rekit tools to manage the project, generate code boilerplate. Especially Rekit portal, a web based tool shipped with Rekit 2.0, is just like an IDE for React development. Technical code files are grouped as components, actions, routes, all these elements could be created/moved/deleted by Rekit portal, you could see a live demo at: http://rekit-portal.herokuapp.com/:

<img src="https://cdn-images-1.medium.com/max/1600/1*zWWRwAmfXzRjZ4cRwlqkuQ.png?raw=true" width="600">

## How does *Rekit* differ from the other solutions?
There have been many boilerplates, tools for initializing React apps. But Rekit may be the most complete solution, the key difference includes:

1. It provides a production ready solution rather than a starter kit.
2. It provides powerful tools like CLI, web based UIs to manage the project.
3. It may be the first tool that allows to rename/delete Redux actions, which is very important for code refactory.
4. It supports the latest tools like React 15.6, Webpack 3, React router 4 etc and will keep updated.


## Why did you develop *Rekit*?
I like to create tools to automate my daily work. Rekit was originally a toolset for helping create boilerplates for another project. The goal was to reuse boilerplates in other projects. I realized that it might be useful to share this with others and so I created Rekit. It helped my team a lot.


## What next?
Make the tool more robust by adding more test cases. Improve docs and write more tutorials. If Rekit could get more poplular and be acknowledged by more people. I would like to create more Rekit plugins to empower the capability of Rekit, such as supporting React Native, server side rendering etc.


## What does the future look like for *Rekit* and web development in general? Can you see any particular trends?
I think "JavaScript/Frontend fatigue" is still the main pain point for web development. There are too many wheels, best practices, it's hard to make decisions about which are better. Rekit is just a toolkit by which we share our best practice about creating web apps using React, Redux and React router. We hope more people could benifit from it just like we do. To be honest, I can't see any particular trends, but I believe React will be the final winner.


## What advice would you give to programmers getting into web development?
Read specifications first, especially ECMAScript. It won't take long time but it's very helpful for understanding the foundation of web development. Then you can understand how React, Angular works, no magic behind actually.


## Who should I interview next?
https://twitter.com/afc163 if possible. He is one of the key developers of https://ant.design which I think is the best React UI library.


## Any last remarks?
Thanks to people who conribute to Rekit by reporting issues, asking questions or recommending Rekit to others! You all help to make Rekit better.


## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Nate!
