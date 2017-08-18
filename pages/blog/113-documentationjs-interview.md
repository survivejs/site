---
title: 'documentation.js - The documentation system for modern JavaScript - Interview with Tom MacWright'
date: 2017-07-31
headerImage: 'assets/img/document.jpg'
keywords: ['interview', 'documentation', 'javascript']
editors: ['bebraw', 'karlhorky']
---

When you are using a library seriously, you will spend a lot of time with its documentation. It's one of those things that sets good libraries apart from the rest. Even a fantastic idea can go overlooked if it's too difficult to get into and understand.

Writing good documentation isn't easy. [Tom MacWright](https://twitter.com/tmcw) has developed [documentation.js](http://documentation.js.org/) to help exactly with this.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?s=200" alt="Tom MacWright" class="author" width="100" height="100" />
</span>

At work, I'm a software engineer but also spend a lot of time writing, designing products, and so on. Until recently, that was in the mapping space at [Mapbox](https://mapbox.com/). I wrote lots of libraries that sliced and diced geospatial data, showed it on screens, and helped people design maps.
</p>

The last big project I worked on there was [Mapbox Studio](https://www.mapbox.com/mapbox-studio/). There are enough hard problems in the world of maps to spend a lifetime trying to solve them, but I decided to try out some new domains. I've been taking a few months off to relax, so recently I've been spending more time training a few bonsai trees and maintaining open source projects.

## How would you describe *documentation.js* to someone who has never heard of it?

*documentation.js* is a program that generates documentation from the source code of other programs. The documentation is a combination of things that you write, like paragraphs, explaining what a function does, and things that *documentation.js* itself can infer, like the types of parameters and return values.

## How does *documentation.js* work?

To infer facts about source code, we stand on the shoulders of a giant, which in this case is named [Babel](https://github.com/babel/babel). That project has an excellent JavaScript parser called [Babylon](https://github.com/babel/babylon), as well as lots of other tools for interacting with parsed JavaScript structures. Using these helpers, we can, for instance, find all functions declared in a file, ask them for parameter types, names, return values, and lots more.

Then there's the trickiest step: combining that automatically-derived documentation with explicit documentation, things that people write themselves as source code comments. That's all done by merging tree data-structures and so on, and is one of the parts I most want to refactor!

Then, finally, it has a significant output system that can generate JSON, Markdown, and HTML documentation. I want the output to be _great_ as a carrot for people to write documentation, so the project itself is responsible for at least the official theme.

## How does *documentation.js* differ from other solutions?

Documentation is a crowded space! There are lots of documentation generators out there, which is why I maintain a big list of them on a wiki page called [See Also](https://github.com/documentationjs/documentation/wiki/See-also).

The biggest player out there is [JSDoc](http://usejsdoc.org/), so I'll describe how *documentation.js* is different than it. First off, *documentation.js* has a system for automatically figuring out which files to document - doing the same trick as webpack or browserify to figure out what requires what and which functions are exported. I wanted that, so that code itself would be the authority that tells us what is a public interface and what is private.

The other big difference is that *documentation.js* aims to be universal and modern. We want to support new JavaScript features shortly after they're announced, and to use [Flow](https://flow.org/) types as information for automatic documentation. I was seeing so much information that previously fit into documentation, like property types, instead of fitting into type systems like Flow, and I want to embrace that trend by leveraging that type information for documentation too.

## Why did you develop *documentation.js*?

I was using JSDoc quite a bit - first for the [Turf](http://turfjs.org/) project, and then for [Mapbox GL JS documentation](https://www.mapbox.com/mapbox-gl-js/api/). JSDoc is a great tool and still in many ways better and more robust than *documentation.js*. But it's in a place where lots of people rely on its stability, and the JavaScript ecosystem has changed so much since it was designed. My thought was that building something from scratch could make new styles of documentation possible.

Plus, it's a lot of fun. Documentation generation might seem bland at first glance, but it's an adventure through parsing, generation, static analysis, and so much more.

## What next?

My highest priority is to grow the *documentation.js* community. I have lots of strategies for doing this, but nothing has worked so far. That's the most important thing to me, and I also think to most maintainers of large projects.

The other thing is learning from other projects. I've been amazed by the progress being made by projects like [ESDoc](https://esdoc.org/) and always think there are better ways I could structure *documentation.js*. Plus, there's an unending list of tasks that just entail keeping up with JavaScript itself: there are still some features like decorators that we don't support yet.

## What does the future look like for *documentation.js* and web development in general? Can you see any particular trends?

It's bright but uncertain: I love where the project is currently, but it's substantial and has many areas that could use their owners. In a perfect world we'd have a team of 4 or 5 and, for an example of the ownership, support for TypeScript could be "owned" by someone who needed and used that support on a daily basis. As it stands right now, I'm pumped when another project or company adopts the module, but the ratio of work to contributors continues to increase.

Web development is weird and crazy right now. I think the biggest, most exciting development we'll see in the next year is the effect of the bleeding-edge tech that was introduced two years ago becoming standard in all browsers. Native support for ES6 modules, for instance, will change the landscape.

## What advice would you give to programmers getting into web development?

First of all, stay patient. Coding is challenging and frustrating, and the single most reliable sign I've noticed of whether people will succeed is their ability to cope with frustration. You might need to laugh at yourself, or stop and breathe, or take a walk. But find something that works, because the feeling of being fooled by a program that _should_ work will never end.

Secondly, you can get far by only working on the surface level, but you really shouldn't. Dig in, learn what's under the hood, read the code, and you'll get better, faster.

## Who should I interview next?

[Titus Wormer](https://github.com/wooorm) has been doing for natural language what Babel has done for JavaScript. [Lea Verou](https://twitter.com/LeaVerou)'s [mavo](https://mavo.io/) project is incredibly fascinating. [Mary Rose Cook](https://github.com/maryrosecook)'s projects about gaming, programming languages, and entry points for new people to tech are amazing.

## Any last remarks?

Thanks for having me! Stay chill, and remember: the open source community is just some people, and it could be you too. Only you can fight maintainer burnout by being friendly and contributing code, documentation, or even just love to your favorite projects.

## Conclusion

Thanks for the interview Tom! I hope people find your tool and we get enhanced documentation as a result.

See [documentation.js site](http://documentation.js.org/) and [documentation.js GitHub page](https://github.com/documentationjs/documentation) to learn more about the project.
