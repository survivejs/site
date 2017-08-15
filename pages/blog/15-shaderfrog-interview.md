---
title: 'ShaderFrog - Building a WebGL Shader Editor and Composer - Interview with Andrew Ray'
date: 2015-09-28
headerImage: 'assets/img/frog.jpg'
keywords: ['interview', 'react']
---

It's always impressive when people take an idea and turn it into a concrete service. [Andrew Ray](http://andrewray.me/) did this with his [ShaderFrog](http://shaderfrog.com/). It's a portal where you can design 3D shaders using WebGL. Most interestingly, it has been developed using React.

As building tools such as this isn't easy, I'm primarily curious to know why Ray picked React and what sort of challenges he faced during the development of his service.

## How did you discover Webpack and React? Can you provide a bit of background?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/b3a21f6147bcc6bd9d997d5cc5b5f87c?size=200" alt="Andrew Ray" class='author' width='100' height='100' />
</span>

The front-end ecosystem is constantly morphing, so we have to stay on top of front-end news. That's how I heard about React, most likely from Hacker News. The path to Webpack was natural from there. Many example projects use Webpack and there's a lot of Webpack and React development overlap in the community.
</p>

## Why did you develop ShaderFrog? How would you describe it to someone who has never heard of it? What next?

I built ShaderFrog to solve a problem that no one was aware existed. I was making a WebGL 3d browser game, where your character is a bubble in an underwater environment. To make a [bubble look convincing visually](http://shaderfrog.com/app/view/147) you have to have a few effects, such as reflection and refraction. The program that draws these effects is called a "shader."

It tells the computer how to "shade" a 3d object. I also had a [fireball powerup](http://shaderfrog.com/app/view/30), and I wanted to show the player getting the powerup by combining the fire effect (a shader) and the bubble effect (another shader).

That meant I had to take these two programs and combine them together by hand, and essentially add their output color together. It was quite tedious, and I thought I could build a tool to automate the process. That's how ShaderFrog was born.

ShaderFrog is a tool to design effects called shaders for 3d games and applications in a visual environment without writing code. There are still plenty of features to add, and it's still finding its place in the world. Right now I'm continuing to build out more features and doing some marketing.

## Why did you choose to use React for the project? Which alternatives did you consider?

As a front-end developer for most of my career, React feels like the first framework that got it "right." I had previously tried Angular and Backbone, and toyed with Ember, but none of them felt like they actually helped me solve complex UI problems.

One of React's biggest benefits is it stays as close to normal Javascript paradigms as possible. You don't have to understand `$scope` or learn a huge API like Backbone. It's just functions and Javascript classes. Even JSX is just HTML and Javascript.

Learning Flux was a steep hill for me, but in the end you're basically writing event listeners and plain Javascript objects. Server side rendering was very important to me too. I honestly feel like without React, I could not have built ShaderFrog.

## What sort of challenges did you encounter during development? What would you do differently?

React is a newcomer to the field and we're still figuring out how to do things correctly. CSS is the easiest target. React is teaching me that CSS is a fundamentally flawed concept and that our newest iteration of inline styles, or [CSS Modules](https://github.com/css-modules/css-modules), is a welcomed future. There is plenty of legacy CSS in ShaderFrog that I am embarrassed by, but at least I can see the light at the end of the tunnel.

I faced some challenges specific to making a 3d editor. I need to maintaining 60 frames per second constantly. For example, let's say I have three lights moving around my scene. Every time their position changes, I have to fire an action through Flux, which triggers many component updates.

If you do this three times per `requestAnimationFrame`, you get two unnecessary virtual DOM comparison checks. The solution to this problem was to "batch" the Flux calls until the last one, so my stores only emit once per loop, removing unnecessary work.

When I first started work on ShaderFrog, I didn't fully understand Flux, so I built a few things using event listeners binding to specific data properties. This code is still in my application, and it's often a source of bugs, and more difficult to reason about than the Flux code. If I could change things I would have stuck more closely to the Flux pattern, because every time I diverge, it causes me problems and increased cognitive load.

Server side rendering was also a big challenge. React has an unspoken idea that you get server side rendering for free, but this is very far from the truth. For static pages, yes, it's easy to render some components to an HTML string. For dynamic pages that require data pre-fetching that must be done differently on the client and the server, there are countless edge cases. I hope that in the future, Relay solves many of these problems.

## What does the future look like for React? Can you see any particular trends?

React has paved a bright future of front-end development, but React probably isn't the end of the road. A better virtual DOM library may come out. We've already seen the evolution of the Flux pattern with Redux, and the evolution of CSS with inline and CSS modules. I would definitely say we're moving towards more computer science principles boosting the productivity of the front-end.

We're moving towards more componentization, less coupling, and more portability. React has shown many front-end developers the true power of an entirely self contained component. I think these principles will continue to drive the productivity and enjoyment of front-end development forward.

## Who should I interview next?

I have no idea! :)

## Conclusion

Thanks for the interview Andrew! I wish you great success with [ShaderFrog](http://shaderfrog.com/).

I remember writing little shaders of my own in the past. If you've ever wondered what to use math for, well, here's a good application. You can actually put operations, such as `mod`, into use here! It's amazing how little operations can make nice patterns.

To get started, [pick up a shader](http://shaderfrog.com/app) you like and start modifying. If you want to dig into theory, you can't go wrong with NeHe's material. They've written [an introduction to GLSL](http://nehe.gamedev.net/article/glsl_an_introduction/25007/).

Feel free to share your shaders at the comments.
