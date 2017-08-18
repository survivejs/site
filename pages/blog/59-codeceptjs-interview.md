---
title: 'CodeceptJS - Modern Era Acceptance Testing for Node.js - Interview with Michael Bodnarchuk'
date: 2016-08-15
headerImage: 'assets/img/wright.jpg'
keywords: ['interview', 'testing']
---

Testing is a complicated topic. Just peppering your code with unit tests isn't often enough. You'll need something more, especially if you are developing something user facing. That's where techniques like integration or acceptance testing come in.

Michael Bodnarchuk, an old friend of mine from the [JSter](http://jster.net/) era, is a testing specialist. He has developed a testing tool known as [Codeception](http://codeception.com/) for PHP. Today we will discuss [Codecept.js](http://codecept.io/), a tool focused on acceptance testing using Node.js.

## Can you tell a bit about yourself?

<p>
  ![Michael Bodnarchuk|100|100|author](assets/img/interviews/michael.jpg)

  My name is Michael, I live in Kyiv, Ukraine. What I do the most is open-source development, mountain trips, and exploring the world step by step.
</p>

To be honest, I didn't ever have a motivation to travel a lot (except for tracking) so I started to send my talks to conferences. After I started being accepted there, I visited Barcelona, Istanbul, Amsterdam. What would I do there without tech conferences? No idea. :)

My primary language is PHP but I'm also passionate about Ruby and JavaScript. We can't be bound to one language if we are web developers.

## How would you describe *CodeceptJS* to someone who has never heard of it?

*CodeceptJS* is a tool that makes acceptance testing fun and easy thing to do. Have you ever had a pain using various Selenium libraries or Protractor? How hard was it to create the simplest test, fight over asynchronous callbacks, and different API versions?

*CodeceptJS* provides an engine that allows to write test once and run it using library of your choice: webdriverio, Protractor, Nightmare, etc.

The API was designed to make tests easy to read, write, and develop. Actually the test is written in JavaScript DSL, which describes user's actions:

```js
I.amOnPage('/');
I.click('Login');
I.see('Welcome');
```

Those commands are written in synchronous manner and handled in a global promise chain. That makes tests clean, you can even write tests in your native language!

## Why did you develop *CodeceptJS*?

I had some experience developing [Codeception](http://codeception.com), a testing framework for PHP. It is my main product. I started to think If I have experience to share with JS community. And after some investigation I found that there is no good tool of such kind. Tool that could make tests elegant and use different running engines. I think it worked.

I know there are already many folks around using it in different projects, one of them is a Brazilian government organization. If you think of it, it may save a lot of time (and money) by just making testing easier.

I don't see reason why senior JavaScript developers should learn Selenium libraries to write test automation. The less time they spend on such tasks the more they can do for business part of applications. And *CodeceptJS* is a perfect time saver.

![In action](assets/img/codeceptjs/in-action.png)

## What kind of challenges have you experienced while developing it?

As a newcomer from the PHP world it was hard to get into the event loop. Especially when I had ambitious plan to fight the asynchrony. This also make me able to think in a different way. I wanted to see tests written without callbacks and chain of execution.

I wanted a tester to concentrate on a test itself and not on its implementation. So the implementation is hidden in the engine. I ended up with global promise chain and a my own interface working on top of Mocha. By the way, I learned Node.js by reading Mocha sources and I really liked how it is implemented.

It is really compact, simple, and powerful. I tried to make my library to be written elegantly as well, that's why I've chosen to use ES6. I don't use transpiler of any kind, as I'm perfectly fine with current ES6 support in Node. And nope, I'm not planning to migrate to TypeScript. :)

## What next?

Currently, *CodeceptJS* allows you to use webdriverio, Selenium, WebdriverJS, Protractor, Nightmare as a backend for running tests. Probably this can be extended with testing mobile and Electron apps. Yes, we plan to add support for Electron testing using its official Spectron library.

We also have localization for Russian and Portuguese, so you can write in it and see it in test reports. I think we will extend to more languages. One part of my global plan is to embrace Cucumber - to allow writing not only tests but business expectation as well. However, currently the focus is on stabilizing the product, getting more and more people on board, and making it not only fancy but reliable too.

![Interactive session](assets/img/codeceptjs/passed.png)

## What does the future look like for React and front-end in general? Can you see any particular trends?

I'm a backend developer, and *CodeceptJS* is a Node.js tool, so to be honest I don't deal with frontend heavily. However, I really like the paradigm shift in front-end. We stopped thinking in terms of pages, now we think everything as an autonomous component.

Nevertheless, components are still need to be grouped into a web pages, ensuring they play nicely together. Even they are unit tested this may not be enough. The more front-end JavaScript is written, the harder is to ensure everything works smoothly.

That's why I see that we still need acceptance tests with heavy tools like Selenium. They are slow, fragile, but they give us the real picture of web site. What can we do to speed up testing is to use libraries like Electron to recreate browser in own environment.

That what actually NightmareJS does, it use Electron for testing and this makes speed to be really fast. I think more development and more testing will be done in JavaScript just because we can't ignore fact that more and more apps are being built using React, React Native, Flux, Redux, etc.

> Testers should have understanding of those technologies to optimize test execution. I don't imagine writing such E2E tests in Java, it doesn't sound optimal to me.

## Who should I interview next?

I'd like to hear from [Christian Bromann](https://twitter.com/bromann). He maintains the best WebDriver library in JS - webdriverio. He knows much more about acceptance testing, not only in web but for mobile too. Ask him!

## Conclusion

Thanks for the interview Michael! CodeceptJS is one of those tools I should integrate to certain projects of mine. Unit testing takes you only so far after all and it's easy to end up with an application that has perfect test coverage but still fails to work the way it matters.

If you want to give CodeceptJS a go, check out [the quickstart guide](http://codecept.io/quickstart/). Only a couple of steps to get up and running.
