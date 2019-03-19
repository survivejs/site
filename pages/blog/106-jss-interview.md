---
title: 'JSS - Author CSS Using JavaScript as a Host Language - Interview with Oleg Slobodskoi'
date: 2017-07-07
headerImage: 'assets/img/clock.jpg'
keywords: ['interview', 'react', 'styling', 'cssinjs']
editors: ['bebraw', 'karlhorky']
---

If there's one thing that divides web developers, it's styling. A part of this has to do with the different requirements of websites and web applications. What is good in another domain, is an anti-pattern in another.

To understand the topic better, I am interviewing [Oleg Slobodskoi](https://twitter.com/oleg008), the author of [JSS](http://cssinjs.org).

## Can you tell a bit about yourself?

<span class="author">
  <img src="https://avatars1.githubusercontent.com/u/52824?v=3&s=200" alt="Oleg Slobodskoi" class="author" width="100" height="100" />

Working on web UIs for over a decade, I have realized there are two significant challenges in frontend engineering: understanding the state and styling its representation. Unidirectional data flow has made managing state much easier, but styling components is still painful. </span>

To improve the situation, I started JSS back in 2014 and haven't stopped learning and developing the project since. Currently, I am working at [Chatgrape](https://www.chatgrape.com/) where we are building a sophisticated client using NLP and deep services integration. All CSS is managed using JSS. Also, I try to talk at conferences from time to time, even if I know I suck at this haha.

## How would you describe JSS to someone who has never heard of it?

In general, "CSS in JS" libraries are authoring tools which allow you to generate CSS. The paradigm is similar to Sass, Less or Stylus in this regard, the difference being that the host language JavaScript is well-standardized.

JSS is a set of libraries for writing CSS in JavaScript. They address a wide spectrum of issues. The most significant features are class names scoping, critical CSS extraction, significantly improved maintenance, code reuse and sharing, theming, co-location and state-driven styles.

It is important to understand though that not every product has all of the issues that these features address, so not every developer can relate to them or even confirm that they are real. If you don't get it - don't worry, the time for you just hasn't come yet.

One general truth you could take away from this is that JSS is a more powerful abstraction over CSS, which is good and bad at the same time. Less powerful abstractions may be of benefit for less experienced developers because less can be done incorrectly, but they certainly have limitations.

## How does JSS work?

The essential libraries in JSS are core, React-JSS, and Styled-JSS. Low level and library-agnostic, the core is responsible for compilation and rendering of a stylesheet.

The core is used by both React-JSS and Styled-JSS internally. React-JSS is a higher-order component providing an interface for React. Styled-JSS is an alternative interface for React which implements the styled primitives factory.

Styled primitive or styled component is a component which has initial styles applied when created. There is no need to provide class names when you use it. It has been very actively promoted by the [Styled Components](https://www.styled-components.com) library and is worth looking into as an alternative to other interfaces. Our implementation, in fact, combines both styled primitives and a classes map in one solid interface.

The general process goes like this:

1. Declaration: Styles are described by the user in JavaScript. By default we use [JSON Syntax](http://cssinjs.org/json-api).
2. Processing: Styles are processed by JSS plugins. Plugins do vendor prefixing, implement syntactic sugar for user styles and can be made to do any other transformations, similar to PostCSS.
3. Injection: Once you call the `.attach` method, styles are compiled to a CSS string and injected into the DOM using a `style` element.

### Examples

**Example using the low level [core library](https://github.com/cssinjs/jss)**

```js
import jss from "jss";
import preset from "jss-preset-default";

// One-time setup.
jss.setup(preset());

const styles = {
  button: {
    color: "red",
  },
};

// Compile and render the styles.
const { classes } = jss.createStyleSheet(styles).attach();

document.body.innerHTML = `
  <button class="${classes.button}">
    My Button
  </button>
`;
```

**Example using [React-JSS](http://cssinjs.org/react-jss)**

```js
import injectSheet from "react-jss";

const styles = {
  button: {
    color: "red",
  },
};

const Button = ({ classes }) => (
  <button className={classes.button}>My Button</button>
);

// Function injectSheet generates a HOC, which uses JSS and passes `classes` to the `Button`.
const StyledButton = injectSheet(styles)(Button);
```

**Example using [Styled-JSS](http://cssinjs.org/styled-jss)**

```js
import styled from "styled-jss";

// Produces a button which has the styles already applied.
const MyButton = styled("button")({
  color: "red",
});
```

## How does JSS differ from other solutions?

There are too many differences to name them all. To name a few:

### It is not one monolithic library

JSS is a set of libraries, each designed to solve a specific set of tasks strongly decoupled from each other. As a result, the user enjoys greater flexibility and cleaner abstractions. For example, the core is not coupled to React, which means it can be used with any framework.

### [Plugin API](http://cssinjs.org/plugins)

The plugin API allows you to manipulate sheets, rules and react on updates. In fact, most features are implemented internally as plugins as well.

### Focus on performance

Focus on performance has always been of the highest importance. JSS is one of the most performant libraries available. That said, it is hard to compare accurately because some features and implementation details differ a lot between libraries. We benchmark every possible small detail, and we track regressions for each change.

### [Function values](http://cssinjs.org/json-api/?v=v8.0.0#function-values)

Function values are now widely supported by other CSS in JS libraries. However, JSS differs in that it allows for high-performance JavaScript controlled animations like in the [function value example](http://cssinjs.org/function-values).

It is possible because JSS doesn't generate new CSS rules for each animation step. It is updating CSS values, the same way it would be done using inline styles. I wrote [an article to give you more implementation details](https://medium.com/dailyjs/high-performance-dynamic-styles-db28c873940).

### Counter based class names generation by default

The main problem with auto-generated class names is that they need to be deterministic. In case you generate HTML and CSS from the server and then want to update both at runtime dynamically, you need to make sure the class names generated at runtime will always match those on the server.

To solve these most libraries use hashes, though they have limitations:

1. **Performance:** To create a hash the CSS rule declaration needs to be stringified and a hashing algorithm run, incurring overhead.
2. **Source order specificity:** A number of equal CSS rules will be generated with identical class names, which will override each other. The problem is that application logic might expect the CSS rules in a certain order in the case that one rule is designed to override another rule based on the order of occurrence in the source code. In this case, source order can't be guaranteed and will result in rare but very unpleasant bugs.
3. **High-performance function values:** these wouldn't be possible, because after update of any values, the hash would need to be recreated and the class name on the DOM node updated, leading to an unacceptable degradation in performance.
4. **Payload:** Counter-based class names include a simple number which is incremented by each added rule. The number is the most compact, unique identifier available. Hashes are long and bloat the overall CSS size.

### No Inline Styles

JSS does not use any inline styles. Inline styles are slow if you overuse them. They are particularly slow in React.

## Why did you develop JSS?

It is funny because initially I just wanted to use JavaScript as a language to describe styles because I didn't want to learn Sass. Secondly, I didn't want to think how to name my classes in the global scope, because enforcing BEM is hard.

Also, I wanted to eliminate the fear of changing any CSS and breaking unexpected things. Now it has become way more than that, but to put it in one sentence: it is the right abstraction for my tasks, and I enjoy using it.

## What next?

The foremost focus is on making the DX better: better documentation, auto-completion, syntax highlighting, React Native integration, a better CLI tool. The team has done a lot in the past, but a significant amount of work is still ahead of us, and we need highly skilled, motivated contributors to tackle all the challenges.

I am trying to establish a distributed team of people responsible for different parts of this story. To give you an idea, consider the following contributions:

* Styled-JSS was written mostly by [@\_lttb](https://twitter.com/_lttb) and theming support is being added now by [@iamstarkov](https://twitter.com/iamstarkov).
* [@wikiwi_io](https://twitter.com/wikiwi_io) is working on the next version of our vendor prefixer and documentation site and the jss-expand plugin was developed by [@typical001](https://twitter.com/typical001).
* Our logo was created by [@okonetchnikov](https://twitter.com/okonetchnikov).

I would love to continue this with more people on board with more dedication. I am seeing all the time how much they struggle to find time to work on it. For this reason, we recently started [open source sponsor initiative](https://github.com/ossfriendly/open-source-sponsors) to shape our industry.

## What does the future look like for JSS and web development in general? Can you see any particular trends?

One problem **all** CSS solutions have in common but that is especially problematic for CSS in JS is the lack of interoperability between the libraries. All CSS in JS solutions use a slightly different DSL to express the styles, which means that the styles are tightly coupled with the library which can parse them.

The big picture looks quite bad right now. Upon installation any package from npm which uses any CSS in JS library different than what's used in the project already, one more library will be installed. Given the fact that currently there are 5-10 well-known CSS in JS solutions, the chances are good that your build will contain all of them at some point.

To solve this, we started to work on [the ISTF (Interoperable Styling Transfer Format) standard](https://github.com/cssinjs/istf-spec). The specification describes a CSS notation designed for high-performance parsing and will serve as an intermediate format for publishing. It is a layer between the consumer library and the authoring library/tool.

Publishers will be able to transpile styles to this format before publishing a package to npm similar to what we do with Babel for ES6. Consumer libraries will then be able to use this format to render CSS most efficiently.

I think this format is the future not only for all CSS in JS libraries but also for well-established languages like Sass. For the end-user, it means that they will be able to use any interface with any syntactic sugar they like to produce CSS, and the result can still be processed by just one library of their choice implementing ISTF, no matter whether it's on the server or the client.

To those who prefer static CSS, don't worry, this case is on top of our priorities. We are not going to force you to generate CSS at runtime.

## What advice would you give to programmers getting into web development?

Take open source seriously. I learned 90% of what I know about computers and programming from it. Also, it is the best way to share the knowledge and become a better engineer and ultimately a better person. I am still learning and trying to become better. It is a lifelong process, so it is important to choose the way we do it wisely.

## Who should I interview next?

* [@iamstarkov](https://twitter.com/iamstarkov) created a [unified theming solution](https://github.com/iamstarkov/theming) for React which will be soon used by all the key CSS in JS libraries.
* [@olivtassinari](https://twitter.com/olivtassinari) is doing a great job persistently maintaining Material UI library.
* [@\_developit](https://twitter.com/_developit) is pushing the boundaries of what is possible within 3Kb.
* [@iamsapegin](https://twitter.com/iamsapegin) created a tool called [React Styleguidist](https://react-styleguidist.js.org/) which provides the best dev environment to write components.

T> **Editor's note:** I [interviewed Artem earlier about Styleguidist](/blog/styleguidist-interview/).

## Conclusion

Thanks for the interview Oleg! I share your sense of design when it comes to plugin systems. Composition seems like a strong way to solve a lot of problems even if you get certain news in return.

You can [learn more about JSS in GitHub](https://github.com/cssinjs/jss) and [the official site of JSS](http://cssinjs.org/).
