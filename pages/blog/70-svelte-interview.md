---
title: 'Svelte - The magical disappearing UI framework - Interview with Rich Harris'
date: 2016-12-07
headerImage: 'assets/img/svelte.jpg'
keywords: ['interview']
---

If jQuery gave us proper control over the DOM, and React brought components to the limelight, what's next? [Svelte](https://svelte.technology/) by [Rich Harris](https://twitter.com/Rich_Harris) might be an answer to this conundrum. You might remember him from tools such as [Bublé](https://buble.surge.sh) and [Rollup](http://rollupjs.org). Read on to learn what Svelte is about.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/329f9d32fe20b186838ee237d3eb2d43?s=200" alt="Rich Harris" class="author" width="100" height="100" />
</span>

I'm an interactive editor at [theguardian.com](https://theguardian.com), based in New York City. My background is in journalism, and my day job is to come up with new ways to use web technologies in the service of storytelling. A key part of that is building the tools that we need to create rich and performant applications on tight deadlines.
</p>

## How would you describe *Svelte* to someone who has never heard of it?

On one level, Svelte is a UI framework – if you've heard of tools like React, Vue or Ractive, it tackles the same problems they do. It allows you to build applications in a declarative, component-driven way, rather than creating a hairball of imperative DOM manipulation.

But on another way, it's a complete rethink of how we approach the problem: rather than being a piece of software that sits between you and the browser, giving you a set of abstractions to work with, it essentially *writes your app for you* in the most efficient way possible. The result is faster loading, faster running apps, with next to zero waste.

## How does *Svelte* work?

It's less magical than it sounds. You write components in HTML files, which can optionally include `<style>` and `<script>` elements to encapsulate CSS and behaviours. Svelte's template syntax takes a few minutes to learn.

These component files are converted into modules by Svelte's compiler, using the [command line interface](https://github.com/sveltejs/svelte-cli) or one of the various [build tool integrations](https://github.com/sveltejs/svelte/#svelte). These modules contain what you might call 'vanilla JS' – i.e. low-level DOM manipulation specific to your app – meaning there's no data-binding or DOM diffing or any of the other tricks frameworks have to use to render your UI.

**HelloWorld.html**

```html
<h1>Hello {{name}}!</h1>
```

**app.js**

```js
import HelloWorld from './HelloWorld.html';

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'world'
  }
});

app.set({ name: 'SurviveJS' });
```

## How does *Svelte* differ from other solutions?

To the end user, the biggest difference is speed. Svelte is lighter and faster than alternative solutions because the browser has a lot less work to do (benchmarks coming soon!). Our [TodoMVC implementation](https://svelte-todomvc.surge.sh/) is just 3.6 kB gzipped, which is tiny.

For the developer, the advantages are more subjective. Svelte has a very simple API and is designed to behave very predictably – for example, the DOM updates synchronously whenever data changes. It has some productivity-boosting features borrowed from Ractive, like scoped styles and computed properties.

One of the nice features about Svelte's approach is that it's inherently very easy to adopt incrementally, without a big bang rewrite. Ordinarily if you wanted to move from one framework to another there'd be a transition period during which your app depended on both, which is terrible.

## Why did you develop *Svelte*?

Guilt, partly. The JS community has become hyper-aware in the last two or three months about the cost of shipping too much JavaScript – it's not just about the download time, it's also about the parse/eval time, which on mobile has a real impact for a lot of people. As the creator of Ractive, I'd been unwittingly contributing to the problem, just like every framework author.

As soon as I had the idea for Svelte – 'what if the framework was actually just a compiler?' – I could barely sleep until I'd written the first proof-of-concept. I don't think I've ever been this excited about one of my projects.

## What next?

There's a huge amount of work still to do – server-side rendering and progressive enhancement, transitions, routing, plus all the documentation and examples that go along with it. We'll be very busy over the next few weeks.

I'm particularly keen to explore a couple of areas that Svelte opens up – statically analysing CSS in the context of the markup it's attached to, and WYSIWYG component editors that can create dependency-free widgets and applications. I think there are some tremendous opportunities that only really become practical when you have a zero-runtime framework and template-driven components.

## What does the future look like for *Svelte* and web development in general? Can you see any particular trends?

What Svelte does is an example of 'ahead-of-time' compilation, or AoT. (It's not the only framework doing AoT – Angular 2 has also embraced similar techniques – though as far as I know Svelte is the first to take the idea this far.) I've seen a huge amount of interest in AoT, and I think there's a lot of undiscovered territory, and not just in UI. I'm excited to see how that develops.

A lot of people have asked me if Svelte's techniques could be used with JSX. Unfortunately, other framework authors have reached the same conclusion that I did – because JSX is 'just JavaScript', no compiler could ever have the same guarantees about the shape of your app, meaning there will always need to be some runtime reconciliation process. So I think we might see a resurgence of interest in non-JSX approaches to building apps.

## What advice would you give to programmers getting into web development?

If you try to learn web development by reading blog posts about new technologies you will drown in information. Instead, find someone who is a bit further along on their programming journey and befriend them. Just build stuff badly – hack it together any way you can – and ask them for help when you need it. Both of you will become better programmers as a result.

## Who should I interview next?

[Dominic Gannaway](https://twitter.com/trueadm) – here's the author of Inferno, which is probably the fastest UI framework in the world. Until Svelte overtakes it, at least.

## Conclusion

Thanks for the interview Rich! It's cool to see how changing the axioms and identifying true problems can lead to new solutions that change the way we think about web development. There is always room for innovation.

You can [learn more about Svelte at their site](https://svelte.technology/). There's also a [REPL you can use to try out the syntax](https://svelte.technology/repl/). Remember to [star the project](https://github.com/sveltejs/svelte) as well as everyone likes stars.
