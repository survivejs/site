---
title: 'Webpack UI - Configure webpack with a UI - Interview with Even Stensberg'
date: 2019-05-31
headerImage: 'assets/img/wpui/newproject.jpg'
keywords: ['interview', 'webpack']
---

Webpack is infamous for being a bundler that's not entirely easy to configure. That's one of the main reasons why I wrote [the webpack book available on this site](/webpack/). To be fair, webpack doesn't require as much configuration as it did before.

To overcome this issue, [Even Stensberg](https://twitter.com/evenstensberg) and a group of developers are currently creating a user interface for webpack. In this post, you'll get an idea of what the tool will be like and the early preview version will be available in August 2019.

## Can you tell a bit about yourself?

![Even Stensberg|100|100|author](assets/img/interviews/even.jpg)

Growing up playing World of Warcraft, I initially wanted to make games that I created myself. I was fortunate as a kid, and I'm thankful for growing up in Norway for that. I got a Packard Bell Computer early on, around the age of six, but the internet we had was too slow to do anything meaningful except gaming on high latency.

At that age, I spent a lot of time learning English and read fluently when starting school because I had been playing WoW for about three years (sorry mom). The experience came handy when I was tipped to check out C++ by my uncle in 5th grade. I went to the local library and got hooked immediately.

### Serious Programming Starting from High School

Professionally, I didn't start doing serious programming until high school when I wanted to create a mobile app. By then I had taken a lot of courses in Computer Science, but I didn't know a language fully. I ended up developing in JavaScript using Meteor to cross-compile the application to different platforms and figured out that React was a better starting point.

### 0CJS

Before starting to develop anything, I had to set up configurations, and it took me one month to set up my initial webpack build that compiled a simple Hello World website. After becoming fluent in front-end I figured out that no one should use that much time on tooling, so I began making an automation library to automate this, now commonly known as 0CJS.

I was lucky, Sean Larkin from Microsoft reach out to me about improving webpack, so I got the opportunity to implement this in webpack itself, which was great. It turns out that Google also was interested in this, so I got a gig to continue to improve webpack-cli for Progressive Web Applications, performance and to make it easier for new users to use the tool.

### webpack-cli

Since then, I've been actively maintaining webpack-cli, and we're releasing the final piece of the puzzle that we have been working on for a few years. I'm excited about this. The team has put a lot of effort making this happen over a long period of time, and we have many contributors that I can't all thank at once, but I want to thank everyone involved in making this happen.

## How would you describe _Webpack UI_ to someone who has never heard of it?

![New project](assets/img/wpui/newproject.jpg)

_Webpack UI_ is like creating a new game on Pokemon. You create a game, choose your desired player and Pokemon, then you are all set to explore.

With webpack UI, you can import a project (game) or create a new one, choose your preferred libraries (player) and additional utilities; then you are all set to begin developing.

The tool is intended to make webpack easier to use by having a Graphical User Interface for webpack and thereby making it easier to understand how to configure your project and get started more quickly.

## How will _Webpack UI_ work?

![Dashboard](assets/img/wpui/dashboard.jpg)

It's nice that you asked, cause I've been thinking about making it as easy for users as possible for some time. As a developer, most developers are known with how the terminal works. You will need to run a command like `webpack ui` and then a local server will open on your machine and start the application. From there, you will enter the dashboard, where you will have the opportunity to create a new front end application or to import an existing project.

After doing so, you can compile a web application, add more things to your application such as offline support, other file formats, or analyze your project for performance issues. The team has a lot in mind, but we need to implement features gradually because we are an Open Source Organization, and we develop this tool in our spare time.

## How will _Webpack UI_ differ from other solutions?

![Starter packs](assets/img/wpui/starterpack.jpg)

There aren't so many features as _Webpack UI_ because this trend of Graphical User Interfaces for libraries have just started, even though there are some. _Webpack UI_ is much alike Vue UI, but it is different in many ways.

This tool is intended to enrich an already cumbersome process of configuration files, and Vue doesn't have that. We have a Vue member helping out in webpack-cli with this project, and I'm glad that there are so many people that want to dedicate their time to develop this tool.

For instance, with _Webpack UI_, you will have a full overview of a project, and you will be able to implement new features rapidly. As a developer, you will have the chance to view compilation stats, add libraries, measure performance, and learn about webpack without having to use a lot of time in the terminal.

Most developers would argue that GUI's are bad because they slow down productivity, but we have figured that with webpack this isn't the case. Webpack is a tool that is hard to get a complete understanding off, and in particular new users get affected by this. We want to make the web better by providing a good baseline for developers to start building from.

## Why are you developing _Webpack UI_?

![Scaffolds](assets/img/wpui/scaffolds.jpg)

The end game of _Webpack UI_ and what the team has been working on for so long is that developers have a lot of power adjusting advanced webpack configurations and front end projects, but still has a solid foundation to start from.

Performance is a vast field in web development, mostly because this was recently being invested in. It is hard for new users to start with webpack, and that is what we are tackling here.

After releasing _Webpack UI_, new users would be able to start developing front-end applications with no prior experience, which is suitable for educating new developers in the industry. We will see that reasonable defaults are set by default (by webpack), which allows applications to have the right performance metrics and clean project infrastructure.

**To condense**: The hurdle of using webpack is going to be removed.

## What next?

_Webpack UI_ is the last thing we are adding interface-wise to webpack for a while. After this project is done, we are focused on proper documentation with examples and tutorials and to help developers with any problems they might have using the tool.

When a project is in maintenance mode, it is often a good sign, because we are not adding any new features and we are focused on having a project that works well without having to explain how it works. If we can make users use webpack without having to tell them what it is, we have done a great job.

That is a double-edged sword because we want people to know how webpack works so that they can understand how web development works. First of all, we want to make webpack better to use without having to study it for weeks.

## What does the future look like for _Webpack UI_ and web development in general? Can you see any particular trends?

The future of this looks bright. We've seen people quite happy with how Vue turned out and we expect the same for _Webpack UI_. In general, I'd like to emphasize that we will see more tools going to adjust to a 0CJS notion, which means that users will only have to install the tool to benefit from it. GUI tools and 0CJS have been a positive experience for a lot of people, so I expect nothing less in 2019 and beyond.

## What advice would you give to programmers getting into web development?

My advice is to use sandboxes and boilerplates a lot at the start. When you are confident in the language, you will be better prepared for a whole front-end environment with Docker, webpack, SASS, and everything that comes between actually creating a web application. We are doing a lot of things to make this easier in 2019 with webpack, but an understanding of the platform is the best way to get into web development.

Above means that you are creating web applications in the old JavaScript format with a single html file, by adding styles in CSS and having fun. After being comfortable with this, one could start beginning to look at boilerplates and guides on how to configure a modern web application.

## Who should I interview next?

I advise you to interview someone from Vue.

## Any last remarks?

Sure! The early preview version will be available in August 2019 and the aim is to launch a new look for webpack-cli as well. We have high hopes that what we are soon about to release will positively help developers with their work and projects. We are actively looking for contributors, so feel free to send me a message if you are interested in helping out with any of this!

## Conclusion

Thanks for the interview, Even! It will be exciting to try out _Webpack UI_ once there's a preview version to play with so I can't await for a public release. The UI combined with the goodies included in webpack 5 should bring bundling to a new level.

T> [You can check out the initial UI and provide feedback on it already.](https://github.com/rishabh3112/webpack-ui)
