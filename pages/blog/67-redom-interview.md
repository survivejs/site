---
title: 'RE:DOM - Tiny but Super Fast DOM Library - Interview with Juha Lindstedt'
date: 2016-10-31
headerImage: 'assets/img/eagle.jpg'
keywords: ['interview']
---

Sometimes small is beautiful. [Juha Lindstedt](https://twitter.com/pakastin)'s FRZR, a 4kB view library, was a nice example of that [as we saw earlier](/blog/frzr-interview). This time we'll discuss evolution of Juha's work - a solution known as *RE:DOM*.

## How would you describe *RE:DOM* to someone who has never heard of it?

<p>
  ![RE:DOM|100|100|author](assets/img/redom.svg)

  [RE:DOM](https://redom.js.org) is a tiny UI library (~2 kB gzipped), handling only the hardest parts of managing the DOM. You could think of it as a vanilla JavaScript tool, but it's actually really useful in almost any kind of projects – even bigger ones.
</p>

I create all my projects with it, even large single page applications. You can also render it on server-side with [NO:DOM](https://github.com/pakastin/nodom).

## How does *RE:DOM* work?

I gave a more detailed explanation in my [talk in HelsinkiJS / Frontend Finland](https://www.youtube.com/watch?v=0nh2EK1xveg), but basically it allows you to create HTML elements and components really easily with HyperScript syntax. Another thing it does is it helps you to keep a list of components in sync with your data. Check out examples at the [RE:DOM website](https://redom.js.org).

The basic idea is to use HyperScript to create HTML elements:
```js
import { el, mount } from 'redom'

const hello = el('h1', 'Hello world!')

mount(document.body, hello)
```

You can also create components by defining an object with `el` property, which is the HTML element:
```js
import { el, text, mount } from 'redom'

class Hello {
  constructor () {
    // how to create a component
    this.el = el('h1',
      'Hello',
      this.name = text('world'),
      '!'
    )
  }
  update (name) {
    // how to update it
    this.name.textContent = name
  }
}

const hello = new Hello()

mount(document.body, hello)

setTimeout(() => {
  hello.update('RE:DOM')
}, 1000)
```

Keeping lists in sync is also really easy:

```js
import { el, list, mount } from 'redom'

// create some data
const data = new Array(100)

for (let i = 0; i < data.length; i++) {
  data[i] = {
    id: i,
    name: 'Item ' + i
  }
}

// define Li component
class Li {
  constructor () {
    this.el = el('li')
  }
  update ({ name }) {
    this.el.textContent = name
  }
}

// create <ul> list
const ul = list('ul', Li, 'id')

mount(document.body, ul)

// shuffle it every second
setInterval(() => {
  data.sort((a, b) => Math.random() - 0.5)
  ul.update(data)
}, 1000)
```

## How does *RE:DOM* differ from other solutions?

RE:DOM doesn't use Virtual DOM, but still allows you to define components and how to update them. For me it's the best of both worlds: mutability gives great flexibility and performance, but defining a one-directional flow of updates is very close to VDOM-approach.

It's also really tiny, but still does quite a lot of work. Not to mention it's really fast. The source is also really [easily readable](https://github.com/pakastin/redom/tree/master/src).

## Why did you develop *RE:DOM*?

I actually first developed FRZR, which eventually got renamed to RE:DOM. RE:DOM is a bit more clever with element creation from queries, and better designed lists. Originally I created FRZR because I was one of the Riot 2.0 early contributors and wrote a HTML element reorder method for it, which Riot lacked.

Riot's original idea was to be a really simple UI library, which I think have got a bit out of hand. RE:DOM is basically my view of the simplest possible UI library. RE:DOM is also much more performant than Riot at the moment.

## What next?

There's some things in RE:DOM I need to think through. For example, `mounted` and `unmounted` "events" happen when attached/detached related to the parent component/element. They might be better if called when attached/detached to the DOM instead. But that's something that needs careful approach, so it doesn't affect the performance that much. There's also a possibility to use Web Components instead, let's see.

## What does the future look like for *RE:DOM* and web development in general? Can you see any particular trends?

I think web standards will eventually make frameworks and UI libraries quite obsolete. That's something recently discussed a lot in the [Polymer Summit](https://www.polymer-project.org/summit). That's a good direction, because I think frameworks are actually the source of most of the "JavaScript fatigue" and frustration in general.

Web standards are more thought through and also a safer choice, because they will (almost) always be backwards compatible – you can't say the same about frameworks. Abstraction usually also comes with a vendor lock-in: if you start a project with Angular for example, it's really hard to convert the project to some other framework.

## What advice would you give to programmers getting into web development?

Be open-minded about web standards and the DOM. It's not as scary and complex as many say it is. You don't always need a framework and you don't always have to follow the crowd. Less is more. I recently wrote [a Medium post about the subject](https://medium.com/re-dom/master-the-dom-bc1a2a06089b). Even if you use some framework, you should learn how the DOM work.

## Who should I interview next?

You should interview [Tero Piirainen](https://twitter.com/tipiirai), the original author of Riot.js. Ask about web standards and simplicity in web development :)

## Conclusion

Thanks for the interview Juha! RE:DOM looks great to me. Especially that Web Component direction sounds interesting. I think you are right in that given enough time, web standards will make a lot of the current solutions obsolete (a good thing!).

To get started with, head to [RE:DOM website](https://redom.js.org). Check out also the [GitHub project](https://github.com/pakastin/redom).
