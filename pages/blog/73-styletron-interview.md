---
title: 'Styletron - Universal, high-performance JavaScript styles - Interview with Ryan Tsao'
date: 2016-12-26
headerImage: 'assets/img/highway.jpg'
keywords: ['interview', 'react', 'styling', 'cssinjs']
---

Styling is one of those topics that's under flux. My [React styling chapter](/react/advanced-techniques/styling-react/) alone covers quite a few approaches and [Michele Bertoli's list](https://github.com/MicheleBertoli/css-in-js) has a lot more.

There was [an interview on glamor](/blog/glamor-interview) earlier. It's time to continue on the theme and check out a solution known as [Styletron](http://styletron.js.org/) by [Ryan Tsao](https://twitter.com/rtsao).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/73f8205a10da6e826075fdaa42201055?s=200" alt="Ryan Tsao" class="author" width="100" height="100" />
</span>

I'm a software engineer living in San Francisco currently working at Uber on the Web Platform team. I first got into web development at the age of 12 when, for whatever reason, I decided that I wanted to build a website.

</p>

The immediacy and accessibility of web programming and its synthesis of coding and visual design and proved tremendously appealing to me and I've been hooked ever since. Most recently, I've been focused on building JavaScript tools and libraries to support Node.js web application development, particularly in the area of UI components and styles.

## How would you describe _Styletron_ to someone who has never heard of it?

Styletron is a small CSS-in-JS utility designed for server and client-rendered web applications with a focus on scalability and high performance. Like other CSS-in-JS libraries, it's designed to work in conjunction with component-driven web app frameworks.

This includes React where UI logic, markup, and styling are colocated in JavaScript and partitioned by component rather than separated into HMTL, CSS, and JS. Among other things, Styletron makes it easier to treat your views (styling included) as a pure function of state and not worry about side effects or global namespace collisions in CSS.

## How does _Styletron_ work?

Styletron produces CSS from styles defined in JavaScript. Many different APIs can be built on top of Styletron, but typically, styles are defined somewhere in the render function of a component in the form of object literals, which Styletron turns into corresponding class names.

```js
import Styletron from "styletron";
import { injectStyle } from "styletron-utils";

// Create a Styletron instance
const styletron = new Styletron();

const className = injectStyle(styletron, {
  color: "red",
  display: "inline-block",
  fontSize: "1.6em",
});
// Corresponding css is injected into the page
// and a class name is returned
```

During a page render on the server, Styletron accumulates the injected styles into a cache which is then serialized into a string of HTML which can inlined into `<head>` of the server-rendered markup. Since the styles came from the rendered components, the output has no non-critical or unused CSS!

In the browser, Styletron will hydrate its cache from the server-rendered styles (to avoid re-rendering these on the initial client render) and any additional styles rendered on the client will be injected into the page.

```js
import Styletron from "styletron";
import { injectStyle } from "styletron-utils";

// On the server:
function render() {
  // Create a Styletron instance
  const styletron = new Styletron();

  // Render the app, which results in several `injectStyle` calls
  const appHtml = renderApp();
  const stylesheets = styletron.getStylesheetsHtml();

  return `
    <html>
      <head>${stylesheets}</head>
      <body>${appHtml}</body>
    </html>
  `;
}

// On the client:
const serverRenderedStyles = document.getElementsByClassName(
  "_styletron_hydrate_"
);

// Create Styletron instance on the client,
// hydrating from server-rendered styles
const styletron = new Styletron(serverRenderedStyles);

// Inject new styles into the page
const newClassName = injectStyle(styletron, {
  color: "blue",
  fontSize: "24px",
});
```

## How does _Styletron_ differ from other solutions?

The traditional CSS-in-JS method involves a straightforward 1:1 conversion of style objects into corresponding scoped CSS classes. Instead, Styletron takes advantage of a novel approach to generating CSS from JavaScript styles.

This involves the generation of "virtual CSS classes" that are composed of several underlying atomic, single-declaration classes. As a result, any re-used declaration is shared between all classes, which effectively results in declaration-level deduplication, yielding much smaller CSS output than the traditional CSS-in-JS method.

For example, given styles for two buttons, we get the following class names and corresponding CSS:

```js
const redButtonClass = injectStyle(styletron, {
  color: "red",
  display: "inline-block",
  fontSize: "1.6em",
});
// redButtonClass is `a b c`

const blueButtonClass = injectStyle(styletron, {
  color: "blue",
  display: "inline-block",
  fontSize: "1.6em",
});
// blueButtonClass is `d b c`

// injected CSS is:
/*
.a { color: red }
.b { display: inline-block }
.c { font-size: 1.6em }
.d { color: blue }
*/
```

In addition, since Styletron operates on individual declarations rather than rules, it benefits from more granular memoization which it allows it to avoid extra work.

In large apps, the total number of declarations can dwarf the number of unique declarations, so the de-duplication that Styletron is able to perform can turn out to be quite significant.

## Why did you develop _Styletron_?

The original impetus for creating Styletron was the lack of unopinonated, low-level CSS-in-JS solutions. Many CSS-in-JS solutions provided some mechanism for rendering styles in both the browser and server, but they were tightly coupled with an opinionated, high-level API for defining and consuming styles in components.

I built Styletron to address this: in fact, the very first implementation of Styletron was essentially just the low-level rendering bits from Aphrodite decoupled from its high-level API and features. Soon after, my interest shifted towards performance and after having the realization of generating atomic CSS, I completely re-implemented Styletron from the ground up.

This version of Styletron was created for a mobile web application that was built specifically to perform well on smartphones in developing countries, where network performance is often slow and unreliable and every kilobyte of the application can make a difference for users. For this reason Styletron produces the smallest possible CSS output (while being small itself) and is extremely performant at runtime.

## What next?

Although in many ways I think CSS-in-JS is already superior to a conventional CSS/Sass workflow in terms of developer experience, I think the overall developer tooling hasn't quite caught up yet. So for me, an important focus is area is how to make working with CSS-in-JS even better.

One thing in particular that I think would be great is type definitions for style object literals, so authoring styles in JavaScript becomes a lot nicer and things like IDE autocomplete become possible. Aside from that, I'm planning further performance optimization and will look into ways to support more CSS features in Styletron. Chrome DevTools integration that makes working with the generated atomic CSS easier would also be awesome.

## What does the future look like for _Styletron_ and web development in general? Can you see any particular trends?

I think across the board, there's a been a renewed focus on application size and parse times, which can have an outsized impact on mobile devices. In the JS module bundler space, bundle-splitting and tree-shaking have been much-heralded features.

Lightweight and fast React alternatives such as Preact and Inferno have garnered massive amounts of traction recently. The Google AMP project, which places restrictions on page size and completely forbids external CSS assets to ensure fast load times on mobile devices, is also reflection of this greater trend of web page performance.

## What advice would you give to programmers getting into web development?

These days, amidst the ever-growing myriad of web frameworks and tools, I can see how choice paralysis or fatigue might set in, especially for folks new to web development. Everything seems to change so fast it's borderline impossible to stay on top of everything.

What I find helpful is to try and avoid a mindset of newer is automatically better. As with any abstraction, I think all web frameworks and libraries involve trade-offs to some degree; to get benefits in one area, usually there's something given up in exchange somewhere else. Seeking out and understanding what those trade-offs are is super valuable in deciding to use an abstraction.

Unfortunately, it's sometimes hard to find out what these may be because it's less fun to talk about problems and they aren't always published along with the usual bullet points of features/benefits. But ultimately, it's okay to stick with simple, tried-and-true stuff; newer things may even introduce unnecessary complexity.

I think part of the beauty of web development is you can just start building without much setup, all you really need is a web browser and a text editor. And in my eyes, you can't really go wrong since in my experience, just building things is the best way to learn and it's the mistakes made along the way that have often provided the most valuable experience.

## Who should I interview next?

Kyle Mathews, who has been working on Gatsby, a React-powered static site generator.

## Any last remarks?

Check out my blog post [Virtual CSS with Styletron](https://ryantsao.com/blog/virtual-css-with-styletron) if you're interested in learning more about how Styletron works and the benefits it provides. I'm excited that other libraries in the space have started to adopt similar strategies and am looking forward to seeing more innovation in the CSS-in-JS space.

## Conclusion

Thanks for the interview Ryan! It is cool to see innovation in the styling space and I agree with your observation about the general direction of the web. Mobile is becoming more and more important.

Remember to [check Styletron on GitHub](https://github.com/rtsao/styletron) to learn more about the approach and get started.
