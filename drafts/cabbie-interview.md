---
title: 'Cabbie - WebDriver for the masses - Interview with Forbes Lindesay'
date: 2017-xx-xx
headerImage: 'assets/img/XXX.jpg'
keywords: ['interview', 'testing']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/eb3e104452d654350a5d1a65caa2e49e?s=200" alt="Forbes Lindesay" class="author" width="100" height="100" />
</span>

</p>

I got interested in open source and JavaScript while I was at university. It was really exciting to see people using software I built to build their own things. I worked at Facebook as a front end engineer for a couple of years and learnt a lot about the challenges in scalling really big JavaScript applications.

Now I'm working on a startup called Changepage, which is a tool for sharing feature announcements and bug fixes.  I'm also running training workshops on React and node.js.

## How would you describe *Cabbie* to someone who has never heard of it?

Cabbie is a JavaScript library for automating browsers. The primary use case is end to end testing, but you can use it for any task that you would normally do by hand in a browser, and you want to automate.  It lets you do all the things you sould normally do by hand, but using JavaScript.

## How does *Cabbie* work?

Cabbie use the "webdriver" protocol to control browsers. It's a standard that all major browsers support that lets you interact with them via http requests.  There are actually two versions of cabbie.  `cabbie-async` is a promise based async library. `cabbie-sync` is automatically generated from the same source code by removing all the `await` and `async`.  It uses the `spawnSync` API in node.js to make the exact same library, but synchronous. The synchronous version is much easier to use.

## How does *Cabbie* differ from other solutions?

There are several different webdriver clients for node. What differentiates Cabbie from most is that it has a synchronous mode, with the same API as the async mode. Normally when you're writing JavaScript it's a really bad idea to write synchronous IO, but for tests it doesn't usually matter.  Writing and debugging synchronous code is generally much easier. The async mode can also be useful though when you're trying to run many tests in parallel.  If you use cabbie in async mode, you can run multiple tests in parallel in a single node process.  If you use it in sync mode, you need multiple node process to run multiple tests in parallel.

webdriver.io also has the synchronous mode, but it works a little differently.  To use the synchronous mode, you have to use their entire test framework.  Because cabbie is just a library, you can use your choice of test framework.  It works equally well with jest as it does with mocha.

Cabbie also has a real focus on developer experience.  For example, if you use an online service like sauce labs or browser stack to run your end to end tests, you can configure cabbie to use that service just by passing `cabbie('saucelabs')` or `cabbie('browserstack')` when constructing the driver.  We also normalize the methods for selecting a specific browser across all the major cloud platforms (see https://cabbiejs.org/browsers/) so you don't have as much to remember, or as much to change if you switch providers.

## Why did you develop *Cabbie*?

I was developing a large web app and we really needed a way to check that everything worked when we put it together. Unit tests are great, but it's really hard to keep the coverage high enough to catch every bug. With an end to end test, one test can cover a huge portion of your app.  It's also almost impossible to check that your frontend code and backend code works together without end to end testing.

I tried webdriver.io and really loved how they let you write synchronous end to end tests - it made things way easier.  At the time I needed it to work on Windows though, because not all the developers I was working with were on apple. Once I dug into making it work on Windows I found there were lots of other things I wanted to chagne and tweak about the API.

## What next?

One of the difficulties in writing end to end tests can be the cryptic error messages you get back. The other thing is that it's really easy to accidentally rely on your tests running really quickly.  What I'm starting to do with cabbie is add detection for common errors, and print more helpful error messages that provide suggested next actions for how to fix these problems.  I'm also adding automated retries/timeouts to most of the methods.  This makes it much easier to write stable, reliable tests.

The next big project will be a test runner, similar to jest but with featurs to make it easier to run tests in parallel across many browsers.

## What does the future look like for *Cabbie* and web development in general? Can you see any particular trends?

I'm seeing a lot of renewed interest in testing and static type checking. I think this is really exciting. For the web to succeed, we need web apps to be really reliable. I've seen huge benefits from typescript and flow, and the competition is really helping to improve both tools.  Jest has totally transformed what we feel able to expect from testing frameworks.  I think end to end testing is the next thing that needs a big kick in this area.

The other big thing I think is improving rapidly is state management.  We've just started to see the real problems that techniques like flux and redux cause, so the return to component-local state using `this.setState` and the upsurge of tools like GraphQL, Relay and Bicycle are really changing things for the better.

## What advice would you give to programmers getting into web development?

I think if you're just starting out, the amount of stuff it seems like you need to learn about can be overwhelming.  My advice would be to minimise what you learn for your first couple of apps. Just look for solutions to problems that you've actually experienced, and ignore the people saying you *need* to learn about this new technology or that new technology.

The other piece of advice that I've found really useful, is try to deploy to production on day one of any new project.  It's much easier to deploy an app that is just a blank hello world, than it is a full complex application with databases and authentication and so on.  If you are continuously deploying things to production, you are always ready to start promoting your thing, as soon as you're happpy for people to start using it.

## Who should I interview next?

Erik Rasmussen created the Redux Form project. Handling form input well is a really deceptively complex problem, and I think Erik has done a really impressive job of understanding those issues and building a sound API for dealing with them.  I'd also be really interested to hear from Jared Palmer who's been doing similar work with the Formik project.

## Any last remarks?



## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Forbes!
