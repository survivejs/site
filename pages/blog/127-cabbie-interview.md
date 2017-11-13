---
title: 'Cabbie - WebDriver for the masses - Interview with Forbes Lindesay'
date: 2017-11-13
headerImage: 'assets/img/cab.jpg'
keywords: ['interview', 'testing']
---

Testing is a lasting topic in software development. There are lots of tools, especially for JavaScript. In this interview, you'll learn about Cabbie, a WebDriver based browser automation library by [Forbes Lindesay](https://twitter.com/ForbesLindesay).

## Can you tell a bit about yourself?

<p>
<span class="author">
 <img src="https://www.gravatar.com/avatar/eb3e104452d654350a5d1a65caa2e49e?s=200" alt="Forbes Lindesay" class="author" width="100" height="100" />
</span>

I got interested in open source and JavaScript while I was at university. It was fascinating to see people using the software I built to build their things. I worked at Facebook as a front-end engineer for a couple of years and learned a lot about the challenges in scaling vast JavaScript applications.
</p>

Now I'm working on a startup called Changepage, which is a tool for sharing feature announcements and bug fixes. I'm also running training workshops on React and Node.

## How would you describe *Cabbie* to someone who has never heard of it?

Cabbie is a JavaScript library for automating browsers. The primary use case is end to end testing, but you can use it for any task that you would usually do by hand in a browser, and you want to automate. It lets you do all the things you would typically do by hand, but using JavaScript.

## How does *Cabbie* work?

Cabbie uses the [WebDriver](http://www.seleniumhq.org/projects/webdriver/) protocol to control browsers. It's a standard that all major browsers support that lets you interact with them via HTTP requests.

There are two versions of Cabbie:

* [cabbie-async](https://www.npmjs.com/package/cabbie-async) is a `Promise` based async library. `cabbie-sync` is automatically generated from the same source code by removing all the `await` and `async`. It uses the `spawnSync` API in Node to make the same library, but synchronous.
* [cabbie-sync](https://www.npmjs.com/package/cabbie-sync) is the synchronous version which is much easier to use.

## How does *Cabbie* differ from other solutions?

There are several different webdriver clients for Node. What differentiates Cabbie from most is that it has a synchronous mode, with the same API as the async mode. Normally when you're writing JavaScript, it's a bad idea to write synchronous IO, but for tests, it doesn't usually matter. Writing and debugging synchronous code is more comfortable.

The async mode can also be useful though when you're trying to run many tests in parallel. If you use Cabbie in async mode, you can run multiple tests in parallel in a single Node process. If you use it in sync mode, you need multiple Node processes to run multiple tests in parallel.

[webdriver.io](http://webdriver.io/), an another solution, also has a synchronous mode, but it works a little differently. To use the synchronous mode, you have to use their entire test framework. Because Cabbie is just a library, you can use your choice of the test framework. It works equally well with Jest as it does with Mocha.

Cabbie also has a real focus on developer experience. For example, if you use an online service like Sauce Labs or BrowserStack to run your end to end tests, you can configure Cabbie to use that service just by passing `cabbie("saucelabs")` or `cabbie("browserstack")` when constructing the driver.

We also normalize the methods for selecting a specific browser across all the major cloud platforms (see [Cabbie documentation on this](https://cabbiejs.org/browsers/)) so you don't have as much to remember or as much to change if you switch providers.

## Why did you develop *Cabbie*?

I was developing a large web app, and we needed a way to check that everything worked when we put it together. Unit tests are great, but it's tough to keep the coverage high enough to catch every bug. With an end to end test, one test can cover a considerable portion of your app. It's also almost impossible to check that your frontend code and backend code works together without end to end testing.

I tried webdriver.io and loved how they let you write synchronous end to end tests - it made things way more relaxed. At the time I needed it to work on Windows though because not all the developers I was working with were on apple. Once I dug into making it work on Windows, I found there were lots of other things I wanted to change and tweak the API.

## What next?

One of the difficulties in writing end to end tests can be the cryptic error messages you get back. The other thing is that it's straightforward to rely on your tests running quickly accidentally. What I'm starting to do with Cabbie is add detection for standard errors, and print more helpful error messages that provide suggested next actions for how to fix these problems. I'm also adding automated retries/timeouts to most of the methods as this makes it much easier to write stable, reliable tests.

The next big project will be a test runner, similar to Jest but with features to make it easier to run tests in parallel across many browsers.

## What does the future look like for *Cabbie* and web development in general? Can you see any particular trends?

I see a lot of renewed interest in testing and static type checking. I think this is exciting. For the web to succeed, we need web apps to be reliable. I've seen tremendous benefits from TypeScript and Flow, and the competition is helping to improve both tools. Jest has transformed what we feel able to expect from testing frameworks. I think end to end testing is the next thing that needs a big kick in this area.

The other big thing I think is improving is state management. We've just started to see the real problems that techniques like Flux and Redux cause, so the return to component-local state using `this.setState` and the upsurge of tools like GraphQL, Relay and Bicycle are changing things for the better.

## What advice would you give to programmers getting into web development?

I think if you're just starting out, the amount of stuff it seems like you need to learn about can be overwhelming. My advice would be to minimise what you learn from your first couple of apps. Just look for solutions to problems that you've experienced, and ignore the people saying you *need* to learn about this new technology or that new technology.

The other piece of advice that I've found useful is try to deploy to production on day one of any new project. It's much easier to deploy an app that is just a blank "hello world" than it is a full complex application with databases and authentication and so on. If you are continuously deploying things to production, you are always ready to start promoting your idea, as soon as you're happy for people to start using it.

## Who should I interview next?

Erik Rasmussen created the Redux Form project. Handling form input well is a deceptively complex problem, and I think Erik has done an awe-inspiring job of understanding those issues and building a sound API for dealing with them. I'd also be interested to hear from Jared Palmer who's been doing similar work with the Formik project.

## Conclusion

Thanks for the interview Forbes! Cabbie looks like a fantastic alternative for end to end testing.

You can [learn more about Cabbie at its site](https://cabbiejs.org/). See also [Cabbie on GitHub](https://github.com/ForbesLindesay/cabbie).
