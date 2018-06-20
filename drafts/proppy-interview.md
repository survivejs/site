---
title: 'Proppy - Functional props composition for components - Interview with Fahad Ibnay Heylaal'
date: 2018-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview']
---

![ProppyJS](https://proppyjs.com/img/banner.png)

Image URLs:

* https://proppyjs.com/img/banner.png (wide)
* https://proppyjs.com/img/proppy-og.png (OpenGraph recommended resolution)
* https://proppyjs.com/img/proppy-square.png (for avatars)
* https://proppyjs.com/img/proppy-flow.gif (props flow animation)

Twitter handle: [@fahad19](https://twitter.com/fahad19)

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/19a3655e6ba9e5a496ee690ba03f2180?s=200" alt="Fahad Ibnay Heylaal" class="author" width="100" height="100" />
</span>

</p>

I am a software engineer, currently living and loving it in Amsterdam. For almost a decade I have been involved with open source activities, and really passionate about developer tooling. Lately I am focusing more on JavaScript both in the browser and the server-side.

## How would you describe *Proppy* to someone who has never heard of it?

[ProppyJS](https://proppyjs.com) is a tiny `1.5kB` library, which enables you to functionally compose your props for UI components. That's all that it does, nothing more.

It comes with additional integration packages for connecting it to other rendering libraries like React.js, Vue.js, and Preact. As well as packages for having interoperability with Redux and RxJS.

## How does *Proppy* work?

The goal of this project is to lift the state of your UI components one level up, and keep your components layer always stateless. Data can come from various sources (like Redux, RxJS, REST API, etc) and can be composed together, and that composition can later be connected to your stateless component.

![ProppyJS Flow](https://proppyjs.com/img/proppy-flow.gif)

All the logic and behaviour of your component can be expressed as props using the core [`proppy`](https://proppyjs.com/docs/packages/proppy/) package. Afterwards that composition can be connected to your rendering library of choice using the higher-order components that Proppy's integration packages provide.

(See [API docs](https://proppyjs.com/docs/api/) for learning more)

## How does *Proppy* differ from other solutions?

It has been only a few days since the release, and I am already getting a lot of similar questions like how it differs from Redux and Recompose.

I will explain it briefly below:

### Recompose

Recompose has been the original source of inspiration for this project. I really liked how they were composing props by just using React components in a very functional manner.

The primary difference between Proppy and Recompose is: Proppy is rendering library agnostic. Therefore, not tied to React.

Other key differences include:

- Proppy gives you access to application-wide dependencies anywhere in Components tree
- Proppy does not create one more Component in the tree per function's usage in the composition

### Redux

Redux on the other hand is used for application-wide state management. Not necessarily for individual components.

With the concept of [providers](https://proppyjs.com/docs/providers/) in ProppyJS, you can consider your Redux store to be one of them. Other providers in your application could be configuration, theme name, etc.

Proppy itself is unopinionated about what library you use for your application's state management. Although there is a [`proppy-redux`](https://proppyjs.com/docs/packages/proppy-redux/) package for convenience in case you already are using Redux.

## Why did you develop *Proppy*?

To be strictly honest, I submitted a talk proposal at [AmsterdamJS JSNation](https://amsterdamjs.com/) conference, which was about embracing RxJS in React and Vue.js. Once my talk was accepted, I had to experiment and come up with some solution to demonstrate in my presentation.

Initial feature that I had in my mind was to only support a "stream in" and "stream out" flow of props expressed via Observables. Which is done in [`proppy-rx`](https://proppyjs.com/docs/packages/proppy-rx/) package.

That experimentation ultimately ended up becoming ProppyJS.

## What next?

There is a sudden increase in interest about "Micro Frontend Architecture" lately. I think I would like to explore this a bit. I have done something similar in [FrintJS](https://frint.js.org) before, but I think there is room for a more unopinionated and smallery library that others would be more interested in adopting.

May be I can utilize ProppyJS for this (since it already works with React, Vue, and Preact), and build something that supports the wider ecosystem. 

## What does the future look like for *Proppy* and web development in general? Can you see any particular trends?

ProppyJS is still only a few weeks old. I will be writing a lot more documentation and share more examples so others can make better decisions regarding adopting this library in their projects. But it's really nice to see other developers mentioning via GitHub issues that they have already adopted it in their production applications.

Regarding general trends, I suspect a large group of developers will embrace a new transpile-to-javascript language soon. A lot of us used CoffeeScript before, then Babel came up, and then TypeScript. I think the next big thing is going to be ReasonML, and I am really excited about how the community responds to it over itme.

## What advice would you give to programmers getting into web development?

Don't get overwhelmed or distracted by every new framework or library (even [ProppyJS](https://proppyjs.com) :D) that pops up every other day. Pick something, and stick to it until you feel at home. Knowing your tools inside out pays off more in the long run. Learn to understand when you want a new tool, and when you actually need one :)

## Who should I interview next?

I am a big fan of Ives van Hoorne, and everything that he is doing with CodeSandbox. I would love to know what more exciting things he is working on.

## Any last remarks?

I would like to thank you very much for arranging this interview, and helping spread the word for [ProppyJS](https://proppyjs.com)!

For the readers, I would highly recommend you to go through the documentation and playground if this interview has sparked any interest in you at all :)

* Docs: https://proppyjs.com/docs/introduction/
* API: https://proppyjs.com/docs/api/
* Playground: https://proppyjs.com/docs/playground/
* GitHub: https://github.com/fahad19/proppy

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Fahad!
