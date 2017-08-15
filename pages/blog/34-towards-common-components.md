---
title: 'Towards a Common Component Definition'
date: 2016-02-02
headerImage: 'assets/img/bridge.jpg'
keywords: ['react', 'opinion']
---

There has been talk of JavaScript fatigue. It's true the field is progressing fast. And as you move fast, it can be tiring for sure. Fortunately, as we understand better what we are doing, we can actually standardize our ways of doing. That should take away some of the pain.

Eventually development made in frameworks and libraries tends to flow back to the web platform itself. I believe one of the key advances will be a movement towards common component definitions.

## Solving **JavaScript in HTML** or **HTML in JavaScript**

There are two main ways to approach components in the web. You can either try to solve **JavaScript in HTML** or **HTML in JavaScript**. This doesn't mean there won't be any JavaScript. It's more about how it's being treated. In the former approach you leave structural aspects to HTML side of the fence while in the latter you push them to JavaScript.

*JavaScript in HTML* relies on templating. There's standardization for the approach in form of [Web Components](http://webcomponents.org/) (example: `<x-gif src="probably_cats.gif"></x-gif>`). Frameworks, such as [Angular](https://angularjs.org/) or [Ember](http://emberjs.com/), implement a templating solution of their own. Both have made moves that will allow you to consume Web Components from both frameworks, though.

Libraries like [React](https://facebook.github.io/react/), [Deku](https://github.com/anthonyshort/deku), and [Cycle](http://cycle.js.org/), fall to the *HTML in JavaScript* category. Here we can use a format, such as [hyperscript](https://github.com/dominictarr/hyperscript) (plain JavaScript) or [JSX](https://facebook.github.io/jsx/) (XMLish syntax compiled to JavaScript). In this approach you will perform possible templating operations (for example if, looping) using JavaScript itself.

It is possible to [use the approaches together in React](https://facebook.github.io/react/docs/webcomponents.html). At the moment the match isn't ideal as the programming models differ and that causes friction. React documentation suggests that you wrap your Web Components within React components of their own. That is the same approach you would use with a library such as jQuery. In short, you can use Web Components with a library like React, but it might not be very fun yet.

## The Challenge for Component Authors

During the past few years it has become apparent component oriented approach fits the web and web applications well. We're still paying a price from the fact that the web is a content oriented platform by design. That said, developing full blown web applications is far easier these days than it was ten years ago. There are still plenty of issues to resolve, though.

Even though [npm](https://www.npmjs.com/) makes it almost ridiculously easy to share your components, we aren't quite there yet. It might be easy to consume JavaScript through it, but aspects like styling are still partially unresolved. As a result we have CSS conventions, processors, and a lot of many other solutions like [CSS Modules](https://github.com/css-modules/css-modules).

It is quite telling that [Bootstrap](https://getbootstrap.com/), a popular HTML, CSS, and JavaScript framework, has its own implementations for [Angular](https://angular-ui.github.io/bootstrap/), [Ember](https://kaliber5.github.io/ember-bootstrap/), and [React](https://react-bootstrap.github.io/). Even though I appreciate the efforts of the people behind the projects, surely we must be able to resolve these kind of things better. Perhaps that's something Web Components could provide us?

## Sharing Components at the **HTML in JavaScript** Domain

Although Web Components might be the longer term solution, there could be something that could be achieved for **HTML in JavaScript** type libraries like React, Deku, or Cycle. After all, even a small win is a win. And anything we can do to battle unnecessary fragmentation is good in my eyes.

Currently any component I develop for React is useful only within React context. I find this a little problematic as I would love to share my work with a larger amount of people. I am sure this applies to other component authors too, and this would benefit the JavaScript community on the whole.

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a feature known as stateless functional components. To give you an example, consider the one from their release notes (slightly modified for readability):

```javascript
// A functional component using an ES2015 (ES6) arrow function:
const Aquarium = (props) => {
  const fish = getFish(props.species);

  return <Tank>{fish}</Tank>;
};

// Or with destructuring and an implicit return, simply:
const Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);

// Then use: <Aquarium species="rainbowfish" />
```

If the definition looks simple, that's because it is. A function based component like this cannot do much, but they are still highly useful! The best feature is that the syntax can be seen as something React agnostic! You could compile that JSX to Hyperscript and use that as an intermediate format to mediate between libraries.

Components like this don't require a direct dependency on React thanks to [babel-plugin-react-require](https://www.npmjs.com/package/babel-plugin-react-require). The plugin injects `import React from 'react';` so that the JSX transpilation process works. It would be possible to pull this off with other libraries as well.

There are proposals that would allow you to write [stateful functions](https://github.com/reactjs/react-future/tree/master/07%20-%20Returning%20State). Deku implements something like [React context](https://github.com/anthonyshort/deku/blob/master/docs/advanced/context.md) (read-only within the tree). Adopting ideas like these would give more room for potential sharing.

Even though you cannot do absolutely everything with function based components, they allow you to achieve quite much! I believe adopting the core ideas would allow larger scale sharing of components between libraries. Currently solutions like Deku or Cycle feel like islands of their own compared to the continent of React. Building bridges wouldn't hurt.

> There have been interesting developments in the React world itself. Libraries, such as [react-lite](https://github.com/Lucifier129/react-lite) and [Preact](https://developit.github.io/preact/), provide much lighter ways to achieve the same results as using vanilla React might.

## Conclusion

I think we'll begin to see adoption of Web Components this year especially as frameworks like Angular and Ember allow you to consume them. The biggest benefit of following the standards is that you shield yourself from some of the churn. And of course you avoid vendor lock-in!

I hope we see a similar movement within the React world. That would benefit the community as a whole and give more freedom for component authors. Even though having more standard ways of defining basic components would benefit libraries other than React initially, I believe this development could flow back to the React ecosystem as well.
