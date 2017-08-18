---
title: 'ES Modules - Interview with Bradley Farias'
date: 2017-05-22
headerImage: 'assets/img/modules.jpg'
keywords: ['interview', 'javascript']
---

Even though ES6 (ES2015) brought modules to the language, it missed one important thing - a loading method. Proper support is [currently being implemented for browsers](https://jakearchibald.com/2017/es-modules-in-browsers/).

To learn more about the topic, I'm interviewing [Bradley Farias](https://twitter.com/bradleymeck).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/0b22453288cedbe28d53e89e0e0b793d?s=200" alt="Bradley Farias" class="author" width="100" height="100" />
</span>

I am a Software Engineer at GoDaddy these days but have been at several startups before that. My childhood was mostly running around outside in the Texas heat and enjoying video games. At the end of high school, I started programming and have been doing it since then.
</p>

TiddlyWiki was the first open source project that I worked on in college. It was a single page wiki that could save to disk back in 2005. That is what got me interested in JavaScript. I spent many hours trying to recreate various things such as a spreadsheet editor and a polyfill for Range in IE6.

After college I have worked at different companies, eventually seeing Node at the end of 2009 and joining Nodejitsu in 2011 through 2013. Since then I have bounced around between front-end development with a focus on accessibility and lots of backend tooling workflows.

T> **Editor's note:** I used [TiddyWiki](http://tiddlywiki.com/) years ago as my personal wiki on a USB stick.

## How would you describe *ES Modules* to someone who has never heard of them?

They are a new mode of JavaScript code that allows you to link JavaScript variables between files. ES Modules are statically linked, meaning that when you import variables; the engine must link those variables before evaluating the module.

The nature of if ES Modules are async or sync is unspecified in the JavaScript specification; so even though all environments are targeting making async module systems, someone could make a sync module system using them.

Consider the example below:

**index.js**

```javascript
// Request the `foo` variable from `./foo` be put into scope
import { foo } from './foo';
```

**foo.js**

```javascript
const foo = 'foo';

// Mark `foo` as being exported
export { foo  };
```

## How do *ES Modules* work?

Being a new mode of JavaScript, the first thing is that you have to get your environment to parse ES Modules. In ES2015 the plans for how to use ES Modules was in the specification. However, with no loading mechanism, there was no clear plan for browsers or servers as to how to load modules.

It wasn't until sometime later that WHATWG proposed `<script type=module>` and Node proposed a new `.mjs` file extension to clarify to the environment how modules are loaded.

### Shared Variables Have to Be Linked Together

After being loaded, the engine needs to link together all the variables that are shared between modules. That means, all the modules in the dependency graph need to be available. The engine recursively reads each source text for the modules and finds all of the dependencies of the modules until there are none left.

### Throw an Error on Failure or Proceed and Hoist

If some modules cannot be found, the engine throws an error. Otherwise, it takes all variables marked with `export` and puts read-only views of them in the modules that `import` those exported variables.

At this point, JavaScript's hoisting takes place, and function declarations and variables are hoisted and allocated. These functions can be called before the module evaluating, but might encounter errors from other variables not being initialized.

### Linked Graph Will Be Evaluated

Now that the module graph is linked, it is time to start evaluating it. The engine takes a depth-first traversal from the entry module in the order which the import declarations appear in the source text and starts evaluating. If any module throws an error while evaluating, the engine stops evaluating modules and leaves them in the current state of evaluation.

## How do *ES Modules* differ from other solutions?

First and foremost, I need to preface this by stating transpilers don't implement ES Modules. They implement a transform of ES Modules *syntax* to CommonJS semantics and APIs. What I am talking about probably doesn't work the same as a transpiler.

### New Parser and Evaluation System

ES Modules use a new parser and evaluation system in the JavaScript specification. They automatically make your code have the same rules as `"use strict"`, reserve `await` as a keyword, and have some changes to how scoping works.

ES Modules are a statically linked module system. Unlike CommonJS or AMD, all dependencies must be known and parsed before *any* user code evaluating.

```javascript
console.log('Hello World!'); // Never evaluates
import './doesNotExist'; // Will error
import { doesNotExist } from './doesExist'; // Will error
```

### Variable Bindings, Not Value Bindings

ES Modules work with variable bindings, not values. Other module systems share values, ES Modules share variables. That means, if a variable is updated, all files sharing that variable see the update.

```javascript
// Every file will see `uptime` change over time
export let uptime = 0;
setInterval(() => uptime++, 1000);
```

ES Modules are being implemented as asynchronous. CommonJS is a synchronous module system that stops executing code while dependencies load.

To be compatible with performance concerns on the web, ES Modules are asynchronous in all future implementations. Due to this, you can have code executing while loading a module graph. It also means that ES Module graphs can be loaded in parallel, even if they overlap.

### Specifiers are URL Based Strings

ES Modules specifiers are being treated as URL based strings. In some module systems like CommonJS `./hello?world=earth` would be treated as a file path. These are now always URLs.

ES Modules always evaluate for each URL that is different. That means implementations would always load the file for `./hello` but then add the query string to the file metadata. `./hello?world=moon` would load a second time after `earth`!

```javascript
import './echo?msg=hi';
import './echo?msg=there';

// Prints:
// > hi
// > there
```

ES Modules are idempotent. Within a given source text, `import { foo } from "./foo";` will *always* return the same variable `foo`. Tools can treat multiple imports are referring to the same variable and it also means that even if someone uses `import('foo');` it will return the same set of variables every time.

## Why to use *ES Modules*?

Removing build steps. With ES Modules, people can write applications without needing to use a tool like **webpack** or **Browserify**. However, browsers are still figuring out how they want to import things like `import 'react';`; for now, use relative or absolute paths.

Code splitting. Having ES Modules be asynchronous and able to load in parallel, module graphs can have multiple entry points that only touch the parts of a codebase that are needed.

Enhanced tooling capabilities. Tools like **rollup** can combine ES Modules with a technique called "Tree Shaking" that removes unused code from a bundle's output. Editors can check if a variable is exported when a developer uses an `import` since  ES Modules use a new syntax.

## What next?

* `import()` is coming to both Module and Script modes of JavaScript and will allow Modules to be loaded dynamically.
* A way to get the URL of the Module for a source text [is being standardized](https://github.com/whatwg/html/issues/1013).
* Browsers are rolling out the `<script type=module>` ES Module loader allowing people to start testing ES Modules and figuring out workflows.
* Tools are landing `.mjs` support allowing interoperability with both Node and the web.
* Node is going to expose the `.mjs` based ES Module loader allowing people to start testing ES Modules and figuring out workflows.

## What does the future look like for *ES Modules* and web development in general? Can you see any particular trends?

It looks pretty exciting; there will be a definite transition time while bare URLs are figured out in the browser, and people start using `.mjs`. I think that one day, we will have development servers that can run ES Modules without any build step, but it is probably ways away.

Even in development, people may want to use code transforms for things like JSX or other templating. The web is moving towards a more tooling heavy ecosystem, and that has caused some difficulty.

I think that this trend is likely to continue as things like WASM become integrated with JavaScript. Tools should be embraced so that they can be improved to the point where they are not thought about when using them.

## What advice would you give to programmers getting into web development?

Do not despair! The web is one of the most challenging and complex programming environments out there. There are many ways to do things, so don't be afraid of your code looks different from any other code. Make your code work and enjoy what you have done.

## Who should I interview next?

This is a bit of a rough one; I would say Caridy Patiño is a good choice. He has a lot of involvement in places like internationalization and TC39.

## Any last remarks?

Try and stay true to yourself, whoever you are. People can get very heated on technical topics, but don't let them pressure you into anything. Stay open to criticism, listen to others, and become stronger in your beliefs.

## Conclusion

Thanks for the interview Bradley! I think we live in interesting times and pushing module loading to the browser level feels like one of the last missing bits. It will change the way people think about web development again.
