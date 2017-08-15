---
title: 'Mostly Adequate Guide to Functional Programming - Interview with Brian Lonsdorf'
date: 2016-08-01
headerImage: 'assets/img/mostly.jpg'
keywords: ['interview', 'functional programming']
---

You might have heard about [Mostly Adequate Guide to Functional Programming (in JavaScript)](https://github.com/MostlyAdequate/mostly-adequate-guide) by [Brian Lonsdorf](https://twitter.com/drboolean). It's one of the better known free books discussing JavaScript.

Today I'm bugging Brian about the topic. Functional programming is close to my heart so I'm very curious to hear what he has to say.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/eace1736cd5e31e6c5288e363ed669ea?s=200" alt"Brian Lonsdorf" class="author" width="100" height="100" />
</span>

I'm a software developer at Salesforce working on dev-ops stuff like build servers and css analyzers. Like many, I cut my teeth on Rails, then started to wander out into the world of different languages.
</p>

I was an object-oriented fanatic for about 5 years, then grew to strongly prefer the functional paradigm despite my lack of academic prowess. In my spare time, I like to create learning content with a little spice and whimsy.

## How would you describe *Mostly Adequate Guide to FP* to someone who has never heard of it?

Serious functional programming taught through vanilla JavaScript from the perspective of a grumpy British badger.

## What was it like to write *Mostly Adequate Guide to FP*?

Fun! The moment it became excruciating, I ceased to work on it. Easy as that. When the passion is gone, it probably shows in the work.
I’d hate for people to waste time reading uninspired rubbish (only the inspired rubbish…).

In fact, I think that might be the key to great work. Or perhaps that’s just a way to end up with an unfinished book…

## How does *Mostly Adequate Guide to FP* differ from the other available books?

Well, it is not very long. I use excessive metaphor. I think the main difference is that I wanted to teach the paradigm as seen in languages like Haskell or PureScript. With that in mind, I didn’t have to apologize for using point free style, IO, or other unconventional, unidiomatic js. Haskell style FP actually works quite well in JS and I haven’t hit any real issues programming in it despite the lack of laziness.

## Why did you develop *Mostly Adequate Guide to FP*?

I’d give these talks about FP here and there at JS conferences or meetups - preaching FP at a Haskell meetup seemed redundant. Anyways, after the talk I’d get folks asking me where to learn more and I’d have to tell them to read [Learn You a Haskell](http://learnyouahaskell.com/) or [PureScript by Example](https://leanpub.com/purescript/read). This had the side effect of immediately extinguishing any spark of interest I had going with my talk.

So yeah, it was to hopefully get more folks writing functional code in general, JavaScript or otherwise. I feel really good when I hear people were inspired to write Elm after reading my book or if they had the confidence to pick up PureScript afterwards.

## What next?

I’ve been working on a stop motion video series for egghead.io that teaches the Scala-esq style. I’m giving some workshops at Strangeloop, and Connect.tech. When I’m feeling like writing again, I have a few new chapters started about monoids, traversable, and foldable to throw into the guide.

Those are really important because when you start working with “containers”, you end up having to swap them around or remove values from them and I feel as though the book is almost a full guide, but certainly leaves the reader hanging without those tools.

## What does the future look like for *Mostly Adequate Guide to FP*? Are you planning to write more books?

There is an amazing community effort to keep the book going and port it to es2015. Shout out to Matthias Benkort, Christian Takle, Chet Harrison and so many other contributors I won’t, but should name drop here. So once it’s ported to the new style, I’ll put those final chapters in and call it a book. There’s also talk of a limited edition publish after that, but we’ll see.

Not to get the cart ahead of the horse here, but as far as new books go, I’m interested in practical use cases and patterns for abstractions in FP. Things like using the Env Comonad to pass along meta information or Profunctor for temporary type conversions or Monoids for tracing. It’s very hard to find this kind of material; most is scattered throughout the internet, casually mentioned amongst the clamor in forums or tiny gems in the grab bag of Stack Overflow.

The other interest of mine is computer science guided decision making. Every decision one makes in programming comes with a drawback and I think there should be a book out there that spells these out. Just little stuff like “want more modularity? Invert control, but beware that the caller must now assemble the pieces” or “event handlers making control flow hard to follow? Introduce streams, but remember, you’ll end up wrapping all your standard callback functions.”

Anyways, maybe these books already exist. I’d rather just read them if they did.

## Who should I interview next?

Bianca Gandolfo who is crushing it when it comes to teaching JavaScript in an approachable way or Michael Ficarra who's on TC39, an open sourcerer, and committed to fixing the front end.

## Conclusion

Thanks for the interview Brian! Remember to [check out his book](https://github.com/MostlyAdequate/mostly-adequate-guide) to level up your functional programming skills.
