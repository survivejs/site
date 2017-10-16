---
title: 'unexpected-react - Test Full Virtual DOM - Interview with Dave Brotherstone'
date: 2017-09-29
headerImage: 'assets/img/unexpected.jpg'
keywords: ['interview', 'react', 'testing']
---

Testing React components is a constant topic. You can test through solutions like Jest or Enzyme. Or you could try something else like *unexpected-react*.

The solution by [Dave Brotherstone](https://twitter.com/bruderstein) builds on top of another testing library, Unexpected.

T> [Read the interview with Sune Simonsen to understand the ideas behind Unexpected better](/blog/unexpected-interview).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/4e1901d31a973187070a14522b55b47b?s=200" alt="Dave Brotherstone" class="author" width="100" height="100" />
</span>

I'm originally from the UK, but I've lived in Germany for the last seven years or so with my girlfriend, Tina. We were originally planning to come for two or three years, but I love it so much we've no plans to return now. I work for SoundCloud in Berlin where I get to work on a bunch of interesting problems with some amazingly talented people.
</p>

## How would you describe *unexpected-react* to someone who has never heard of it?

If you want to write tests for your React components, you can use *unexpected-react* to validate that the components render what they should, and respond to events in the right way. It's based on JSX, so you assert that a component renders to a certain JSX template, and any differences are highlighted in a JSX diff. You can render using the shallow renderer, render to the DOM or render using the test renderer - the assertions stay the same.

**A simple example:**

```javascript
expect(
  <MyButtonComponent />,
  'to render as',
  <button>Click me</button>
);
```

This example uses the [React shallow renderer](https://reactjs.org/docs/shallow-renderer.html) to render the `MyButtonComponent` and compares the output to `<button>Click me</button>`. If the output is different, you'll see something like the following as output:

```jsx
<button className="btn">
  -Click me!
  +Click me
</button>
```

By default, it ignores extra props and extra child elements, so your test still passes as your component functionality expands (unless of course, you break something!).

**A more complex example:**

```javascript
expect(
  <MyApp />,
  'when deeply rendered',
  'with event', 'change',
  {
    target: { value: 'foo' }
  },
  'on',
  <input />,
  'with event', 'click', 'on',
  <button>Submit</button>,
  'to contain',
  <LoadingSpinner />
);
```

This test renders the component to the DOM, triggers a `change` event with an argument on the `input` component, then clicks the `<button>` with the text `Submit`, and finally checks that the resulting render contains a component called `LoadingSpinner`.

That last assertion highlights one of my favorite features of unexpected-react, which is that when you use the DOM renderer, you can assert on the full virtual DOM (the same tree you see in the [React Developer Tools](https://github.com/facebook/react-devtools)), with all the HTML elements and all your custom components.

## How does *unexpected-react* work?

It's a plugin for the [unexpected](http://unexpected.js.org) assertion library, which is known for its great output and diffs. Most of the real work happens in a library called [unexpected-htmllike](https://github.com/bruderstein/unexpected-htmllike) which is a library that can perform diffing on any HTML-like structure.

You give it the actual value and the expected value, and two _adapters_, which are simple objects that can read the name, attributes, and children of the actual and expected values respectively, and it returns a whether there were any differences and the diff of the tree in object form. This diff can then be passed back to another method in *unexpected-htmllike* which can output the diff in syntax highlighted JSX form.

The diffing algorithm is, in fact, a bit more complicated than the React algorithm, as it optimizes for best output. For example, it uses heuristics to work out if an element is just a wrapper element and can be ignored. This property can be beneficial if you're testing components wrapped in (possibly multiple) layers of higher order components - *unexpected-react* will just see the higher order components as wrappers and gray them out in the output.

*unexpected-react* itself is mostly just a set of assertions based on calling the diffing algorithm in various ways and presenting the output to the user. Doing this has the significant advantage that it can be adapted to new targets with minimal effort - I've recently released [unexpected-preact](https://www.npmjs.com/package/unexpected-preact) for example, which has the same set of assertions for [Preact](https://preactjs.com)

## How does *unexpected-react* differ from the other solutions?

The main advantages are the JSX based syntax, so there's no big API to learn, and excellent output if something doesn't match. For instance, the `to contain` assertion, if it doesn't find a match, it will show you the closest match so you can probably go straight to solving the issue (maybe just a single class was missing).

> I think this is a vast improvement over Enzyme, where you'd typically end up with an `expected false to equal true` output if the output wasn't found.

When running Jest, it also supports [snapshot tests](https://facebook.github.io/jest/docs/en/snapshot-testing.html), but unlike Jest's native snapshot tests, the diffs are based on real objects not just string representations of the JSX.

Doing this means that if for example, a class is missing, the missing class will be named, rather than just highlighting the diffed line. If the classes appear in a different order, the test will still pass under *unexpected-react* as it understands classes, but fail under Jest. You can also snapshot out of the box using any of the renderers without any special add-ons.

## Why did you develop *unexpected-react*?

Back in 2015 the shallow renderer came out, and I was using it to write some tests, but asserting it was hard. You'd have to navigate your way through the children, and end up with assertions like `expect(component.props.children[0].props.children[1].props.className).toEqual('foo')`. I'd seen a lightning talk from [Peter Müller](https://github.com/munter) as JSUnconf in Hamburg on unexpected and had started to play around with it.

I was impressed with the output and began to use Peter's plugin [unexpected-dom](https://github.com/munter/unexpected-dom) to assert properties on the DOM.  One weekend I thought I might be able to adapt *unexpected-dom* to diff JSX trees, and so *unexpected-react-shallow* was born.

*unexpected-react* came a bit later when I realized how I could access the full virtual DOM by hooking into the devtools hooks, and how to separate the logic of diffing a XML-like tree from the actual objects.

## What next?

I expect we'll add support for [inferno](https://infernojs.org/) soon.  I'm also working on a bigger task to make *unexpected-htmllike* a bit smarter, so when it outputs diffs, it can skip sections of your render where there are no changes and only show the relevant differences.

There are also some incredible things being worked on in the [unexpected](http://unexpected.js.org) project - I don't want to say too much because they're very experimental at this stage, but I'm excited about the possibilities, especially when combined with *unexpected-react*.

## What does the future look like for *unexpected-react* and web development in general? Can you see any particular trends?

I think there's a bright future as it's the kind of project that once you've used it and got the output in your workflow, you can't ever go back to having to debug a test or open a browser to see where the problem lies.

There's a great trend, which I think Angular started, that the view layer is testable and writing unit-tests for views is both achievable and useful. I believe that we'll see view level tests becoming more commonplace as they have for the other parts of applications.

It wouldn't surprise me if there were some advances in browsers to support some fundamentals of the React model of just rendering from a given state, and let _the platform_ perform the necessary mutations. For me, this is the game changer with React - it speeds development time, reduces bugs, and makes testing easy.

## What advice would you give to programmers getting into web development?

I'd say to learn JavaScript as a language - for me, it was a couple of good books and a whole lot of experimentation, and then go to meetups if they're available in your area. Don't make the mistake of thinking "I need to know more before I can go". I started going to an Angular meetup before I knew pretty much anything about modern web development, and I always managed to learn something or meet people that could answer my questions.

## Who should I interview next?

Lauren Macarthy from p5.js - I've not done much with the project but she's managed to create a great inclusive community, and I'd love to know more.

## Any last remarks?

If you're using Enzyme for testing your React components, you should take a quick look at [my medium article comparing the tests and output in from the two libraries](https://medium.com/@bruderstein/enzyme-vs-unexpected-react-ee9cb099d12b).

## Conclusion

Thanks for the interview Dave! *unexpected-react* looks like a step to the right direction and the API feels intuitive to me.

To learn more, [study unexpected-react site](https://bruderstein.github.io/unexpected-react/) and [unexpected-react on GitHub](https://github.com/bruderstein/unexpected-react).
