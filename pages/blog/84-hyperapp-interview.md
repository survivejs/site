---
title: 'Hyperapp - Tiny Library for Frontend Applications - Interview with Jorge Bucaran'
date: 2017-03-13
headerImage: 'assets/img/fractal.jpg'
keywords: ['interview']
---

Micro-sized JavaScript libraries are a niche of their own. Often the idea is to use modern JavaScript APIs and expose them in an easier way. The earlier [RE:DOM interview](/blog/redom-interview) discussed one option.

This time around I am interviewing [Jorge Bucaran](https://twitter.com/JorgeBucaran), the author of [Hyperapp](https://github.com/hyperapp/hyperapp).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/1823e8f81a08dbbdd59a19382c5c5af9?s=200" alt="Jorge Bucaran" class="author" width="100" height="100" />
</span>

I'm an engineer at Increments, Inc, based in Tokyo, Japan. We build [Qiita](https://qiita.com/), Japan’s technical knowledge sharing and collaboration platform for programmers. I was born and raised in Venezuela.

</p>

I started making simple web pages when I was around 15 years old, but I still need to look up how to link CSS with HTML. How I wound up in Japan is quite the story, but not for today.

## How would you describe _Hyperapp_ to someone who has never heard of it?

Hyperapp is a JavaScript library for building frontend applications. In this way, it's similar to others like React, Vue or Ember.

Hyperapp supports IE10+ out of the box, it's `1KB`-ish minified and gzipped; it's fast and has an exciting community supporting it.

## How does _Hyperapp_ work?

We have [documentation](https://hyperapp.js.org/) to help newcomers get started and learn how to get started with Hyperapp.

A typical Hello World example looks like this:

```jsx
import { h, app } from "hyperapp"

const state = { title: "Hi." }
const actions = {}
const view = state => <h1>{state.title}</h1>

app(state, actions, view, document.body)
```

[CodePen](https://codepen.io/hyperapp/pen/Qdwpxy?editors=0010)

And here is a bound text input:

```jsx
import { h, app } from "hyperapp"

const state = {
  text: "Hello!"
}

const actions = {
  setText: text => ({ text })
}

const view = (state, { setText }) => (
  <main>
    <h1>{state.text.trim() === "" ? "🤯" : state.text}</h1>
    <input
      autofocus
      value={state.text}
      oninput={e => setText(e.target.value)}
    />
  </main>
)

app(state, actions, view, document.body)
```

[CodePen](https://codepen.io/hyperapp/pen/qRMEGX?editors=1010)

Hyperapp offers a single, immutable model. The state is always a plain JavaScript object and can contain anything that makes sense to your application.

Users interact with your application to trigger actions. Actions can be used in a variety of ways, but their ultimate goal is to update the state. They do this by returning a new state (or partial state) that gets merged with the current one and replaces it. When the state changes as a result of calling an action, Hyperapp re-renders your application, and that's the circle of life in a wrap.

Hyperapp also advocates using stateless components. Stateless components are pure functions that only know how to render themselves and what actions they are allowed to trigger. As a result, they are framework agnostic and easy to debug and test.

## How does _Hyperapp_ differ from other solutions?

### Hyperapp is opinionated about state management

Hyperapp is inspired by [The Elm Architecture](https://guide.elm-lang.org/architecture/) and does not rely on external libraries such as Redux, enabling you to create almost pure functional applications out of the box.

### Hyperapp is easy to grasp

If you can read the 300-ish lines of code, you'll have seen everything you needed to know about Hyperapp. That feeling you get when you are done going through the code base, and got it all down and still can walk away with your sanity intact is liberating. It is at that moment that the project is no longer someone else's mad science experiment, but something familiar and yours truly.

### Hyperapp is good enough

I am not trying to science out every single aspect of the virtual DOM engine, and as a result, Hyperapp is approximately 1 KB. Attention is still paid to performance, and the [latest benchmarks](https://github.com/hyperapp/hyperapp/issues/499) suggest we are not far behind the big ones like React or Vue.

### Not a one-man-effort

Despite the tremendous success of heavily optimized engines like Mithril and Inferno, they remain at large a one man's project. They have burgeoning communities helping triage issues and maintain the ecosystem, but core development still answers to a single individual.

I want Hyperapp to be more a people's project. We've already seen substantial contributions from the community, and I think this is in part due to the brutal approach and simplicity of the project.

## Why did you develop Hyperapp?

I needed to build a web client for a project at work. My first choice was React and Redux since that's what we use to develop Qiita, but I wanted something lightweight and without the frameworkyness of React.

I looked at other options too: Elm, Choo, and yo-yo, were the ones closest to my heart, but none of them delivered the mix of simplicity and works-out-of-the-box-ness I was looking for.

Elm is undoubtedly otherworldly. It's probably the best attempt to popularize functional programming that I've seen in recent years. However, I found that it was quite challenging to integrate third party libraries with Elm.

Choo and yo-yo were lovely too. Both projects were a big source of inspiration for me, but I wanted something ⅓ of the size and less opinionated about JavaScript and how it should be written. If you are not sure what I mean by this, shoot me a tweet at [@JorgeBucaran](https://twitter.com/JorgeBucaran), and I'll be happy to elaborate.

## What next?

* Server side rendering (SSR). There have been a few [SSR prototypes](https://github.com/hyperapp/hyperapp/pull/28) developed by members of the community so far, but I'd like to offer this out of the box. Hyperapp offers SSR re-hydration out of the box as of 1.0.

* More examples. We currently lack an official website or a REPL. All are coming near you soon!

## What does the future look like for Hyperapp and web development in general? Can you see any particular trends?

I'm very excited about Hyperapp and the community that has started to congregate around the project. If I can add my two cents to popularizing functional programming in the frontend, I'll die a happy man. I hope I can create a stable framework that stays true to its original premise and can help people make elegant and pure functional websites.

My perceptions are largely biased by my likes and dislikes. I don't know what's going to become trendy next or what isn't, but I can tell you that I'd love to see more people embracing the wonders of [Fantasy Land](https://github.com/fantasyland/fantasy-land) and help make it more accessible for the rest of us.

## What advice would you give to programmers getting into web development?

* Reinvent the wheel. Otherwise, how are you ever going to learn anything?
* Learn functional programming. Then help communicate it effectively to others.
* Learn CSS. While some are already speaking about a [post-JavaScript world](https://developers.slashdot.org/story/17/03/04/0042218/douglas-crockford-envisions-a-post-javascript-world), CSS is not going away. Ever.

## Who should I interview next?

[Simon Friis Vindum](https://github.com/paldepind). He is the author of [Snabbdom](https://github.com/snabbdom/snabbdom), a virtual DOM engine and [Funnel](https://github.com/Funkia/funnel), a devoted, purely functional frontend framework.

## Conclusion

Thanks for the interview Jorge! I think it's time to do round two with Simon as we did a [Snabbdom interview](/blog/snabbdom-interview) earlier. :)

Learn more about Hyperapp from its [documentation](https://hyperapp.js.org/) and [examples](https://codepen.io/hyperapp/). Check out the [project at GitHub](https://github.com/hyperapp/hyperapp).
