---
title: 'Glamor - Inline CSS for React et al - Interview with Sunil Pai'
date: 2016-10-17
headerImage: 'assets/img/glamor.jpg'
keywords: ['interview', 'react', 'styling', 'cssinjs']
---

If you ask multiple React developers their styling approaches, you will also get multiple different answers. One trend is clear, though, the movement towards inline styling.

This is something that was considered an anti-pattern before React, but as React has become more popular, we are also more open to question our earlier beliefs.

I've [discussed various approaches](/react/advanced-techniques/styling-react/) myself. Each solve similar problems in different ways. Today I'm interviewing [Sunil Pai](https://twitter.com/threepointone), the author of an inline CSS solution known as Glamor. Read on to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/6eadce66e218b83b484c5e1ee293f5b9?s=200" alt="Sunil Pai" class="author" width="100" height="100" />
</span>

Hi! My name's Sunil Pai, and I wrote the css-in-js library [Glamor](https://github.com/threepointone/glamor). In the past, I have built a bunch of websites for Myntra, Yahoo, Visa etc. I now write JavaScript libraries for fun and/or world domination.

</p>

## How would you describe _Glamor_ to someone who has never heard of it?

The official line is Inline CSS for Components, but in my opinion it's THE missing CSS piece for React. I wrote a longer piece on how [React solves 'writing' web pages](https://gist.github.com/threepointone/c382856fd2e2c325f8d230e85d85499b) in a natural way, and Glamor is the css companion to that piece.

## How does _Glamor_ work?

First the developer defines inline CSS rules as JavaScript objects. Something like `<div {...style({ color: 'red' })/>` or with the `createElement` replacement `<div css={{ color: 'red' }} />`.

In the background, Glamor treats CSS rules as 'values', generates an identifier corresponding to that rule (similar to Clojure hashes for their data structures). It attaches this id to a DOM element with a data-attribute, while also adding the rule to a **real** stylesheet. Glamor also dedupes rules, manages universal shims, adds vendor prefixes, all the boring stuff you don't want to do by hand.

## How does _Glamor_ differ from other solutions?

I really like this _css-as-values_ abstraction. It enables a bunch of nice properties, like not having to _name_ a rule unless preferred, and letting the developer choose how to compose/modularize their code. Glamor also tries hard to allow _all_ possible CSS features, with no compromises on selectors and what not. And it works hard at being efficient, so you shouldn't worry about it being a part of your stack.

I'm also happy with the abstraction this library offers; it's low level enough that it's mostly invisible, but allows for some higher order programming. Indeed, Glamor itself ships with shims for [Aphrodite](https://github.com/Khan/aphrodite) and [jsxstyle](https://github.com/smyte/jsxstyle) APIs, and I'm totally on the lookout for other interesting options.

There's some other technical stuff like super efficient css _insertion_, **precise** server side rendering, a plugin system, etc, but I think the css-as-values abstraction is the nicest.

## Why did you develop _Glamor_?

It started off as an exploration of [a browser API I'd never used](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet). I was also checking out other css-in-js libraries at the time, and none of them really ticked off all the things I wanted from such a library.

One week of furious coding later, Glamor was born, tests and all. Since then, I've been tweaking and polishing away at the thing, with help from some nice online folks who are using it as well. There might be many css-in-js libraries, but this is the one I like.

## What next?

Well, there a bunch of [fun enhancements](https://github.com/threepointone/glamor/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement) planned. React Native support would be nice too, I guess? In the slightly more distant future, I'm curious to see how React itself deals with CSS / alternative styling systems (like terminals, WebGL, etc).

## What does the future look like for _Glamor_ and web development in general? Can you see any particular trends?

I think React has really ignited this discussion around rethinking _best practices_, even if not directly connected with using React itself; as an example, I can't imagine writing another `className` by hand after having used something like Glamor. I think this trend will continue, particularly around using 'components'/JSX to represent other _stateful_ parts of your **system**.

I also see some movement towards micro-transpilation; adding a plugin or two to get some compile time powers for your code. This already exists for most compile-to-js languages, and it's also how devs use _new_ JavaScript features in places without support for the same.

I think developers will further add their own tiny compiler transforms with Babel/whatever to their apps and unlock new functionality (I'm told the LISP folks have had this for decades with macros).

## What advice would you give to programmers getting into web development?

I think the internet is really noisy right now; trying to listen to everybody and doing everything will probably overwhelm most (all?) people. Don't get distracted by them, and don't try to learn everything at once. Focus on what you want to build, and having some fun while doing so. Otherwise, it's really not worth it, no matter what your stack looks like.

## Who should I interview next?

Could you find \_why for me? I think the world could use him right now. I'd love to hear what @jingc's working on, and how @tjholowaychuk's startup journey's going.

## Conclusion

Thanks for the interview Sunil! It's cool to see innovation around this area. Incidentally I had to work with the [StyleSheet API](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) as well and I ended up writing some [helpers to make it easier](https://www.npmjs.com/package/stylesheet-helpers) to use. StyleSheet API might not be the most developer friendly API, but the performance is there. Let the browser do what it does the best.

To learn more, check out the [GitHub project page of Glamor](https://github.com/threepointone/glamor). The API is beautifully simple.
