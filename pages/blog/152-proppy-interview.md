---
title: 'Proppy - Functional props composition for components - Interview with Fahad Ibnay Heylaal'
date: 2018-06-22
headerImage: 'assets/img/proppy.png'
keywords: ['interview']
---

You might be familiar with packages like [Recompose](https://www.npmjs.com/package/recompose) that make it easier to compose components. Recompose is React-specific solution. What if there was something broader available?

[Proppy](https://proppyjs.com/) by [Fahad Ibnay Heylaal](https://twitter.com/fahad19) is such a solution.

T> I interviewed Fahad earlier about [FrintJS](/blog/frint-interview), a framework designed to combine React with RxJS.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/19a3655e6ba9e5a496ee690ba03f2180?s=200" alt="Fahad Ibnay Heylaal" class="author" width="100" height="100" />
</span>

I am a software engineer, currently living and loving it in Amsterdam. For almost a decade I have been involved with open source activities, and passionate about developer tooling. Lately, I am focusing more on JavaScript both on the browser and the server-side.

</p>

## How would you describe _Proppy_ to someone who has never heard of it?

[Proppy](https://proppyjs.com) is a tiny `1.5kB` library, which enables you to compose your props for UI components functionally. That's all that it does, nothing more.

It comes with additional integration packages for connecting it to other rendering libraries like React.js, Vue.js, and Preact. As well as packages for having interoperability with Redux and RxJS.

## How does _Proppy_ work?

The goal of this project is to lift the state of your UI components one level up and keep your components layer always stateless. Data can come from various sources (like Redux, RxJS, REST API, etc.) and can be composed together, and that composition can later be connected to your stateless component.

![Proppy flow|951](assets/img/proppy-flow.gif)

All the logic and behavior of your component can be expressed as props using the core [`proppy`](https://proppyjs.com/docs/packages/proppy/) package. Afterward, that composition can be connected to your rendering library of choice using the higher-order components that Proppy's integration packages provide.

## How does _Proppy_ differ from other solutions?

It has been only a few days since the release, and I am already getting a lot of similar questions like how it differs from Redux and Recompose.

I will explain it briefly below:

### Recompose

Recompose has been the source of inspiration for this project. I liked how the package was composing props by just using React components in a very functional manner.

The primary difference between Proppy and Recompose is: Proppy is rendering library agnostic. Therefore, not tied to React.

Other key differences include:

* Proppy gives you access to application-wide dependencies anywhere in Components tree.
* Proppy does not create one more Component in the tree per function's usage in the composition.

### Redux

Redux, on the other hand, is used for application-wide state management. Not necessarily for individual components.

With the concept of [providers](https://proppyjs.com/docs/providers/) in Proppy, you can consider your Redux store to be one of them. Other providers in your application could be configuration, theme name, etc.

Proppy itself is unopinionated about what library you use for your application's state management. There is a [`proppy-redux`](https://proppyjs.com/docs/packages/proppy-redux/) package for convenience in case you already are using Redux.

## Why did you develop _Proppy_?

To be strictly honest, I submitted a talk proposal at [AmsterdamJS JSNation](https://amsterdamjs.com/) conference, which was about embracing RxJS in React and Vue.js. Once my talk was accepted, I had to experiment and come up with some solution to demonstrate in my presentation.

A first feature that I had in my mind was to only support a "stream in" and "stream out" flow of props expressed via Observables which is done in [`proppy-rx`](https://proppyjs.com/docs/packages/proppy-rx/) package.

That experimentation ultimately ended up becoming Proppy.

## What next?

There is a sudden increase in interest in "Micro Frontend Architecture" lately. I think I would like to explore this a bit. I have done something similar in [FrintJS](https://frint.js.org) before, but I think there is room for a more unopinionated and smaller library that others would be more interested in adopting.

Maybe I can utilize Proppy for this (since it already works with React, Vue, and Preact), and build something that supports the broader ecosystem.

## What does the future look like for _Proppy_ and web development in general? Can you see any particular trends?

Proppy is still only a few weeks old. I will be writing a lot more documentation and share more examples so others can make better decisions regarding adopting this library in their projects. But it's nice to see other developers mentioning via GitHub issues that they have already chosen it in their production applications.

Regarding general trends, I suspect a large group of developers will embrace a new transpile-to-javascript language soon. A lot of us used CoffeeScript before, then Babel came up, and then TypeScript. I think the next big thing is going to be ReasonML, and I am excited about how the community responds to it over time.

## What advice would you give to programmers getting into web development?

Don't get overwhelmed or distracted by every new framework or library (even [Proppy](https://proppyjs.com) :D) that pops up every other day. Pick something, and stick to it until you feel at home. Knowing your tools inside out pays off more in the long run. Learn to understand when you want a new tool, and when you need one :)

## Who should I interview next?

I am a big fan of Ives van Hoorne and everything that he is doing with CodeSandbox. I would love to know what more exciting things he is working on at the moment.

T> [I interviewed Ives about CodeSandbox earlier](/blog/codesandbox-interview).

## Any last remarks?

I would like to thank you very much for arranging this interview, and help spread the word for [Proppy](https://proppyjs.com)!

For the readers, I would highly recommend you to go through the documentation and playground if this interview has sparked interest in you at all :)

## Conclusion

Thanks for the interview Fahad! It's great how you ran with the idea and pushed it to a polished state.

To learn more about Proppy, consider the following resources:

* [Docs](https://proppyjs.com/docs/introduction/)
* [API](https://proppyjs.com/docs/api/)
* [Playground](https://proppyjs.com/docs/playground/)
* [GitHub](https://github.com/fahad19/proppy)
