---
title: 'Snabbdom - a Virtual DOM Focusing on Simplicity - Interview with Simon Friis Vindum'
date: 2016-07-11
headerImage: 'assets/img/mandelbulb.jpg'
keywords: ['interview']
---

If you have been using React, you have used one implementation of virtual DOM perhaps without thinking too much about it. It's one of those concepts that's worth understanding in greater detail, though.

There are specific virtual DOM implementations like [Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom) or [palpepind/snabbdom](https://github.com/paldepind/snabbdom). Today I'm interviewing [Simon Friis Vindum](https://twitter.com/paldepind), the author of the latter. Read on to learn more about the technology.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/894d95cf834e9c3b4966d10eaa52d610?s=200" alt="Simon Friis Vindum" class='author' width='100' height='100' />
</span>

My name is Simon Friis Vindum. I live in Aarhus, Denmark. I currently study computer science at Aarhus University and work as a JavaScript developer on the side. Programming was my hobby for many years. After secondary school I was looking for a job and I was lucky to get one as a JavaScript developer.
</p>

I realized that my hobby was probably going to become my profession. I worked for two years and then began studying CS last summer. I love programming and learning about programming. I have written quite a few JavaScript libraries that are published on my [GitHub account](https://github.com/paldepind).

## How would you describe *Snabbdom* to someone who has never heard of it?

Snabbdom is a virtual DOM library. You hand it two JavaScript representations of two DOM trees. These JavaScript representations are called virtual DOM trees. The first represents how the actual DOM currently looks and the second how you want it to look. Snabbdom then figures out the differences between the two and changes the real DOM accordingly.

The beauty of it all is that application code now never needs to manually make changes to the DOM. It only needs to produce a DOM representation of the application as a function of the application state and the virtual DOM library will then take care of making the correct changes.

## Why did you develop *Snabbdom*?

I wanted to use a virtual DOM library for a project of mine. I looked at the existing libraries available, but none of them was exactly what I was looking for. I found React to be too huge and I could see that other virtual DOM libraries where much smaller.

When I decide on libraries simplicity is a big deal to me. The more complex a library is the more opaque it is the its users. In the case of React I found its size, and thus complexity, to out of proportions to the functionality that I needed from it. However, when looking into the alternatives I found that they lacked certain features that I needed. Furthermore, I realized that it should be possible to create an even simpler virtual DOM implementation.

The original project was a spare time project so I chose to delay it and spend the time to create a virtual DOM library exactly after my head. In the end, I managed to implement one that was very simple and performant. I made the library modular and extensible so that new features can be implemented separately from the core. This made it possible for me to get the features that I wanted and for others to add theirs as modules.

## Why would you use *Snabbdom* over React or other solutions?

React is in many ways a great library and in some cases I would prefer it to Snabbdom. Especially in a professional setting since React is so ubiquitous. I would use Snabbdom because of its simplicity and flexibility. It is simple because it only concerns itself with the very essence of being a virtual DOM library. As a result it is many times smaller than React.

To me that makes the library more elegant and it suits my aesthetics with regards to libraries. I invite people to look at the implementation of Snabbdom and compare it is React. One has to ask why React is so huge when a virtual DOM library can be so small.

The other benefit of Snabbdom is its flexibility. Its modular nature makes it extensible and its simplicity makes it unopinionated. This should make it possible for people to use Snabbdom no matter what architecture they want to use in structuring their application.

## What next?

Snabbdom does everything I want. I continue to maintain it, albeit at a slow pace. An upcoming release will have some performance improvements and TypeScript support thanks to Tylor Steinberger.

Unrelated to Snabbdom I will probably release more libraries and continue to explore new approaches to front-end development in JavaScript.

## What does the future look like for *Snabbdom* and front-end in general? Can you see any particular trends?

I am very happy that the JavaScript community as a whole seems to be moving toward more functional and more reactive approaches. I think we can go further, but React and Redux are important steps in that direction.

I am also curious about what relevance virtual DOM will have in the future. Currently it is everywhere and for some very good reasons. But when I look at recent libraries, like Cycle.js and MobX, I wonder if these approaches really benefit much from virtual DOM. I am currently exploring that myself right now.

I am also excited about the future of static typing in JavaScript. I am a bit torn because I personally prefer Flow, but TypeScript seems to enjoy more mindshare. Fortunately TypeScript is catching up on features which is really great because I don't think having two competing solutions is beneficial to the community. Primarily because adding typings to existing libraries is a lot of work and duplicating that effort is wasteful.

## Who should I interview next?

Yassine Elouafi has been doing some very great work with redux-saga and some very innovative FRP libraries. I'd love to hear what he has to say.

An interview with Brian Cavalier author of the most impressive library Most.js (pun intended) and other libraries would also be very interesting.

## Conclusion

Thanks for the interview Simon! It's definitely interesting to see where the web will head. I don't expect we've seen it all just yet and virtual DOM is likely just one step amongst many.

If you want to dig deeper, check out [Snabbdom's GitHub repository](https://github.com/paldepind/snabbdom)!
