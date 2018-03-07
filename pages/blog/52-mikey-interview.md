---
title: 'Mikey - React/Redux CLI/Framework - Interview with Michael Farrell'
date: 2016-06-06
headerImage: 'assets/img/mikey.jpg'
keywords: ['interview', 'boilerplate', 'react', 'redux']
---

It is tedious and boring to do the same thing over and over. That's where generator tools come in as they take some grunt work out of coding. [Mikey](https://github.com/Mikeysax/mikey) by [Michael Farrell](https://twitter.com/MichaelMFarrell) is a tool like that for React and Redux. To learn more about the tool, read on.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://secure.gravatar.com/avatar/5549c6f94f271b3cedd522e6b9d930b1?s=200" alt="Michael Farrell" class='author' width='100' height='100' />
</span>

I am Michael Farrell, a musician and music educator turned developer. I decided to pursue my love and passion for programming by diving into online resources for coding and attending The Firehose Project to learn all I can about programming and related computer science topics. Currently, I am looking for work in the Metro New York area.
</p>

## How would you describe *Mikey* to someone who has never heard of it? How does it differ from other solutions?

*Mikey* is a CLI/Framework for React/Redux applications. *Mikey* was designed to be simple, intuitive to use, and increase development speed and productivity of React/Redux applications.

*Mikey* can generate React/Redux projects and files, saving the developer valuable time that can be spent building features. *Mikey* can also be used in any React/Redux project and is intended to be a broad solution.

### Project Generation

With `mikey new projectName`, you can immediately start with a fully functioning application with testing integration, source mapping, linting, hot reloading, and any other key dependencies and features a developer would expect from a React/Redux application.

*Mikey* generated projects are also very minimal in dependency integration, unlike a lot of boilerplates, and strike a good balance between features and bloat.

### File Generation

What really makes *Mikey* extra special are the CLI commands for file generation. When you generate a file, *Mikey* will look through your working project directory and dynamically find the folder for the corresponding file type.

This feature is very important and allows *Mikey* to be used with other React/Redux projects with different file trees. These file paths are stored in a generated `.mikeyPath` folder for performance and automatically added to `.gitignore`. On file generation, a test file is also created and setup for immediate use within the project test directory.

Another useful feature is the ability to add import statements to the top of the file on file generation. Imports are stored as defaults for corresponding file type and allow you to include them in the next file generation instead of typing out each import over again.

## Why did you develop *Mikey*?

When I started learning React and Redux I was coming from a background of primarily using Ruby on Rails. During this period, I became rather annoyed that I had to keep typing the same thing, over and over again. A lot of time was spent just configuring and setting up basic project dependencies and components.

Out of annoyance and my background with Ruby on Rails, I saw a need for a CLI tool to easily generate files and projects. *Mikey* was inspired by the `rails generate` command and sees to make React/Redux development more enjoyable, productive, and faster.

## What next?

I am constantly looking for feedback from the community and hope that other developers find enjoyment in using *Mikey*. My goal is to make *Mikey* the most robust CLI / Framework that the community would be proud to support and back. If anyone wants to get in touch about an idea for *Mikey* you can [email](mailto:michaelfarrelldev@gmail.com) me directly as well; I would love to hear from you.

Here are just some ideas and I haven't contemplated if some are good or bad just yet. Some possible features for the future might include... API user authentication (like devise), automatic import dependency installation, more templates, plain React project generation, and MobX integration.

## What does the future look like for *Mikey* and web development in general? Can you see any particular trends?

I hope that as React/Redux matures (and the JavaScript community as a whole), we will see an adoption of better practices.

What I realized when developing *Mikey* is that there are two arguments to be made:

### Convention Over Configuration

This means that applications should follow the same structure, the configuration can happen automatically.

**The pros:** Write fewer lines of code.

**The cons:** People don't often understand how to configure their application.

**Example:** Most Rails developers don't know what every single configuration line means. I know I don't, but I am an effective Rails developer. Learning one or two configuration options is easy because it is well documented, and you already have a reference built for you.

### Configuration Over Convention

Instead of having one "right" way to do things, learn the configuration and then build the configuration that's right for you.

**The pros:** If you've explicitly configured every aspect of your application, you fully understand it all.

**The cons:** All applications will be different and jumping into a new code base won't be familiar. In the real world, projects are built by teams. On most teams different people have different expertise.

That means projects built by multiple people's configuration will likely be the result of a single person who fully understands the configuration. If this person were to leave the project, people would be left with a working configuration that they don't know how to use.

### The Facts

People don't want to learn how to configure their code. In the current React ecosystem, rather than learning how to configure their application, people use boilerplates that they don't understand. This is a problem for multiple reasons.

**1.** Since there are no conventions, people can not specify how to fix their application, because each application is different.

**2.** People want to extend beyond the limitations of a limited boilerplate but, they are stuck because they don't understand the configuration.

**3.** This leads to trying to hack something they don't understand to work, and often results in failure.

Other people are making new boilerplates that have different configurations after saying "it shouldn't take 15 hours to craft the perfect webpack config! Let me share mine with the world so someone else doesn't need to feel my pain". Currently, there are around 100+ different React boilerplates. (**Editor's note**: there are actually far more!)

**This makes the matter only worse.**

### The Solution:

> The problem will continue to get worse until the react community unites behind a standard, robust, CLI implementation; Even if it isn't *Mikey*.

As for the future of web development, there will definitely be a movement towards pushing more responsibilities on to the server and removing them from the client. We are already seeing this with isomorphic React applications, which gives you the ability to render components on both client and server which offers a better user experience and improved SEO.

## Who should I interview next?

You should interview the very opinionated and wise [Ken Mazaika](https://twitter.com/kenmazaika)! He has a lot to say on this topic of convention over configuration, among other things.

## Conclusion

Thanks for the interview Michael!

If you want to check out Mikey and learn more about the tool, [head to GitHub](https://github.com/Mikeysax/mikey).
