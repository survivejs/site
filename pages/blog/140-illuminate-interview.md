---
title: 'Illuminate - Syntax highlighter for Node - Interview with Vivek Bansal'
date: 2018-01-30
headerImage: 'assets/img/city-lights.jpg'
keywords: ['interview', 'nodejs']
---

One of the core features of this site is custom syntax highlighting. I had to figure out ways to deal with custom syntax provided by Leanpub. Initially, I implemented a solution based on [PrismJS](http://prismjs.com/), but I wasn't entirely happy with it, and the frustration led me to look into alternatives. That's how I found [Illuminate](https://github.com/vkbansal/illuminate-js/) by [Vivek Bansal](https://twitter.com/_vkbansal).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://secure.gravatar.com/avatar/57d10b8c8d537e8517f6a3c324679da5?s=200" alt="Vivek Bansal" class="author" width="100" height="100" />
</span>

My name is Vivek Kumar Bansal, and I work as a UI Engineer at [Flipkart, India](https://flipkart.com). I started as a PHP developer and later switched to JavaScript/NodeJs full-time and I have nearly five years of professional experience. I firmly believe in open source philosophy and try to contribute to open source projects regularly.</p>

## How would you describe *Illuminate* to someone who has never heard of it?

Illuminate is a syntax highlighter which can be used to highlight code snippets in HTML files. It is based on already popular syntax highlighter [PrismJS](http://prismjs.com/). It can be easily integrated with tools like [markdown-it](https://github.com/markdown-it/markdown-it). It can also be used with [ReactJS](https://facebook.github.io/react/) via [react-illuminate](https://www.npmjs.com/package/react-illuminate).

## How does *Illuminate* work?

Similar to PrismJS, It works by creating a **Token** tree, by matching the code string to a given set of Regular Expressions, called a **Language definition**. Later, The Token tree is again converted to a string by wrapping the code in `span` tags and add appropriate class names.

## How does *Illuminate* differ from other solutions?

Illuminate was re-written from the ground up in ES6, so that it can be used in NodeJS and browser with the help of tools webpack, rollup, etc., With [react-illuminate](https://www.npmjs.com/package/react-illuminate), it can also be used with ReactJS in the "react way", without using `dangerouslySetInnerHTML`.

## Why did you develop *Illuminate*?

While working on [my website](https://vkbansal.me), which is statically generated, I wanted something that can be used with [markdown-it](https://github.com/markdown-it/markdown-it) on NodeJS. I was already familiar with PrismJS and its inner workings. I had proposed the change in PrismJS itself, but the maintainers were not interested in it. Hence, I started working on my alternative.

## What next?

Make it stable and add support for other frameworks/tools like Gatsby, Vue, etc.

## What does the future look like for *Illuminate* and web development in general? Can you see any particular trends?

I believe that compile-to-javascript languages like TypeScript, ReasonML, Flow, etc., will see broad adoption. Type safety will become the first-class citizen of the web world.

## What advice would you give to programmers getting into web development?

Do not limit yourselves to a particular framework/paradigm. Keep pushing your limits.

## Conclusion

Thanks for the interview Vivek! I have been happy with Illuminate so far and hope others find it useful as well. It's a great little project that deserves kudos.

See [Illuminate on GitHub](https://github.com/vkbansal/illuminate-js/).
