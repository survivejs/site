---
title: 'HyperApp - Tiny Library for Frontend Applications - Interview with Jorge Bucaran'
date: 2017-03-13
headerImage: 'assets/img/fractal.jpg'
keywords: ['interview']
---

Micro-sized JavaScript libraries are a niche of their own. Often the idea is to use modern JavaScript APIs and expose them in an easier way. The earlier [RE:DOM interview](/blog/redom-interview) discussed one option.

This time around I am interviewing [Jorge Bucaran](https://twitter.com/JorgeBucaran), the author of [HyperApp](https://github.com/hyperapp/hyperapp).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/84d2933d3d46ebe5f3a4983da4c73831?s=200" alt="Jorge Bucaran" class="author" width="100" height="100" />
</span>

I'm an engineer at Increments, Inc, based in Tokyo, Japan. We build [Qiita](https://qiita.com/), Japan’s technical knowledge sharing and collaboration platform for programmers. I was born and raised in Venezuela.
</p>

I started making simple web pages when I was around 15 years old, but I still need to look up how to link CSS with HTML. How I wound up in Japan is quite the story, but not for today.

## How would you describe *HyperApp* to someone who has never heard of it?

HyperApp is a JavaScript library for building frontend applications. In this way, it's similar to others like React, Vue or Ember.

HyperApp supports IE10+, it's `1kb`-ish minified and gzipped; it's fast and ships with a Router out of the box.

## How does *HyperApp* work?

We have extensive [documentation](https://github.com/hyperapp/hyperapp/wiki) to help newcomers get started and learn how to create a build setup from scratch using Browserify, webpack, and Rollup.

A typical Hello World example looks like this:

```jsx
import { h, app } from "hyperapp"

app({
  model: "Hello World",
  view: model => <h1>{model}</h1>
})
```

[CodePen](http://codepen.io/jbucaran/pen/Qdwpxy?editors=0010)

And here is a bound text input:

```jsx
import { h, app } from "hyperapp"

app({
  model: "",
  actions: {
    text: (_, value) => value
  },
  view: (model, actions) =>
    <div>
      <h1>Hi{model ? " " + model : ""}.</h1>
      <input onInput={e => actions.text(e.target.value)} />
    </div>
})
```

[CodePen](http://codepen.io/jbucaran/pen/qRMEGX?editors=0010)

HyperApp offers a single, immutable model. The model can be anything that makes sense for your application. It's usually an object or an array of objects, but it can be a JavaScript primitive type like a `Number` or a `String` too.

Users interact with your application to trigger actions. They can be used to do a lot of things, but their goal is to update the model. They do this by producing a new model which replaces the previous one. When the model changes as a result of an action, HyperApp renders the application one more time, and that's the circle of life in a wrap.

HyperApp also promotes the concept of stateless components. Stateless components are pure functions that only know how to render themselves and what actions they are allowed to trigger. As a result, they are framework agnostic and easy to debug and test.

## How does *HyperApp* differ from other solutions?

### HyperApp is opinionated about state management

 HyperApp embraces [The Elm Architecture](https://guide.elm-lang.org/architecture/) and does not rely on external libraries such as Redux, enabling you to create pure functional applications out of the box.

### HyperApp is easy to make your own

If you can read the 300-ish lines of code, you'll have seen everything you needed to know about HyperApp. That feeling you get when you are done going through the code base, and you've understood it all and still can walk away with your sanity intact is liberating. It is at that moment that the project is no longer someone else's mad science experiment, but something familiar and yours truly.

### HyperApp is good enough

I am not trying to science out every single aspect of the virtual DOM engine, and as a result, HyperApp is approximately 1kb. With the Router, it's still under 2kb. Attention is still paid to performance, and the [latest benchmarks](https://github.com/hyperapp/hyperapp/issues/75#issuecomment-282536055) suggest we are in the same range as React.

### Not a one-man-effort

Despite the tremendous success of heavily optimized engines like Mithril and Inferno, they remain at large a one man's project. They have burgeoning communities helping triage issues and maintain the ecosystem, but core development still answers to a single individual.

I want HyperApp to be more people's project. We've already seen substantial contributions from the community, and I think this is in part due to the brutal approach and simplicity of the project.

## Why did you develop HyperApp?

I needed to build a web client for a project at work. My first choice was React and Redux since that's what we use to develop Qiita, but I wanted something lightweight and without the frameworkyness of React.

I looked at other options too: Elm, Choo, and yo-yo, were the ones closest to my heart, but none of them delivered the mix of simplicity and works-out-of-the-box-ness I was looking for.

Elm is undoubtedly otherworldly. It's probably the best attempt to popularize functional programming that I've seen in recent years. However, I found that it was quite challenging to integrate third party libraries with Elm.

Choo and yo-yo were lovely too. Both projects were a big source of inspiration for me, but I wanted something ⅓ of the size and less opinionated about JavaScript and how it should be written. If you are not sure what I mean by this, shoot me a tweet at [@jbucaran](https://twitter.com/JorgeBucaran), and I'll be happy to elaborate.

## What next?

* Server side rendering (SSR). There have been a few [SSR prototypes](https://github.com/hyperapp/hyperapp/pull/28) developed by members of the community so far, but I'd like to offer this out of the box.

* More legit examples. We currently lack an official website or a REPL. All are coming near you soon!

## What does the future look like for HyperApp and web development in general? Can you see any particular trends?

I'm very excited about HyperApp and the community that has started to congregate around the project. If I can add my two cents to popularizing functional programming in the frontend, I'll die a happy man. I hope I can create a stable framework that stays true to its original premise and can help people make elegant and pure functional websites.

My perceptions are largely biased by my likes and dislikes. I don't know what's going to become trendy next or what isn't, but I can tell you that I'd love to see more people embracing the wonders of [Fantasy Land](https://github.com/fantasyland/fantasy-land) and help make it more accessible for the rest of us.

## What advice would you give to programmers getting into web development?

* Reinvent the wheel. Otherwise, how are you ever going to learn anything?
* Learn functional programming. Then help communicate it effectively to others.
* Learn CSS. While some are already speaking about a [post-JavaScript world](https://developers.slashdot.org/story/17/03/04/0042218/douglas-crockford-envisions-a-post-javascript-world), CSS is not going away. Ever.

## Who should I interview next?

[Simon Friis Vindum](https://github.com/paldepind). He is the author of [Snabbdom](https://github.com/snabbdom/snabbdom), a virtual DOM engine and [Funnel](https://github.com/Funkia/funnel), a devoted, purely functional frontend framework.

## Conclusion

Thanks for the interview Jorge! I think it's time to do round two with Simon as we did a [Snabbdom interview](/blog/snabbdom-interview) earlier. :)

Learn more about HyperApp from its [documentation](https://github.com/HyperApp/HyperApp/wiki) and [examples](https://HyperApp.gomix.me/). Check out the [project at GitHub](https://github.com/hyperapp/hyperapp).
