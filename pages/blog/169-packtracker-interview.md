---
title: 'packtracker.io - Webpack bundle analysis, for every commit - Interview with Jonathan D. Johnson'
date: 2019-02-22
headerImage: 'assets/img/packtracker/header.png'
keywords: ['interview', 'webpack']
---

When using webpack to bundle your project, it's important to keep an eye on the output. [There are multiple tools for this purpose](/webpack/optimizing/build-analysis/). Now there's also a service.

In this interview with [Jonathan D. Johnson](https://twitter.com/jondavidjohn), you'll learn about [packtracker.io](https://packtracker.io/?utm_source=jster&utm_campaign=links&utm_medium=interview).

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://www.gravatar.com/avatar/91f3c86d471f089ca2b3ec5093832ccb?s=200" alt="Jonathan D. Johnson" class="author" width="100" height="100" />
  </span>

Loving my wife, my sons, and my work. Full stack developer building [CodeShip](https://codeship.com) by day and _packtracker.io_ by night, otherwise you can probably find me outside. 🧗🏻‍♂️🏕

</p>

## How would you describe _packtracker.io_ to someone who has never heard of it?

It is a tool to help teams using webpack bundling, monitor and analyze they're overall JavaScript and CSS footprint.

We report that information right in your GitHub pull requests, **before** they make it to your users. Ever accidentally added the whole _lodash_ library when you meant to add a single helper? We'll catch that for you, and let you know your bundle size grew significantly right inside your GitHub pull requests.

Another primary feature is the ability to set asset budgets to help your team stay within configured limits. We'll fail any pull request that brings your assets outside those budgets.

## How does _packtracker.io_ work?

1. [You sign up and create a project](https://packtracker.io/?utm_source=jster&utm_campaign=links&utm_medium=interview)
2. [Install and configure our webpack plugin](https://github.com/packtracker/webpack-plugin)
3. We take care of the rest

## How does _packtracker.io_ differ from other solutions?

No other solution provides historical tracking and out-of-the-box pull request reporting. By this I mean, you can analyze your bundle history over time, helping to quantify optimization efforts and prevent slow size creep over time.

![Build status](assets/img/packtracker/pack-01.png)

We also allow you to introspect the makeup of every commit, allowing you to explore your bundle helping you to identify redundant chunk contents and large dependencies.

![Bundle composition](assets/img/packtracker/pack-02.png)

## Why did you develop _packtracker.io_?

I saw a need! We were using webpack in my day job and quickly realized we had never audited our webpack output. After taking a look, it had gotten out of control, delivering megabytes of javascript and css to our users.

Using _packtracker.io_, we were able to quantify optimization efforts and trim our asset output way down. Day to day, _packtracker.io_ helps us make sure we never get in that situation again.

## What next?

I am looking forward to GitHub Actions! We currently have [a GitHub Action](https://github.com/packtracker/github-action) developed that will significantly simplify the onboarding experience for our customers.

## What does the future look like for _packtracker.io_ and web development in general? Can you see any particular trends?

JavaScript is eating the world, and I don't see that changing. Even popular non-JavaScript platforms like Ruby on Rails will be adopting the webpack/npm ecosystem starting with 6.0. I think the future is bright for JavaScript developers.

## What advice would you give to programmers getting into web development?

Don't skim over JavaScript! Even if your primary web application is not written with JavaScript, take the time to dig in and learn the language. Don't assume you know it because it looks familiar; that's how people develop a negative view of the language.

## Conclusion

Thanks for the interview, Jonathan! I can definitely see the need for a service like [packtracker.io](https://packtracker.io/?utm_source=jster&utm_campaign=links&utm_medium=interview), and I hope people find it!
