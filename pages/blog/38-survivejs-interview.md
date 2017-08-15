---
title: 'SurviveJS - Learn Webpack and React - Interview with Juho Vepsäläinen'
date: 2016-02-29
headerImage: 'assets/img/survivejs_cover.jpg'
keywords: ['interview', 'react']
---

There is always some level of tension between getting things done and learning new technologies. A lot of the recent JavaScript fatigue stems from that. A year ago I decided to take some preemptive moves against it. The whole point of the SurviveJS effort is to smoothen the way, and quite literally, survive JavaScript and its growth.

The effort reached an important milestone as my first book, *SurviveJS - Webpack and React*, reached its [2.0 version](./survivejs200). As a part of the release, [a paper version](http://www.amazon.com/SurviveJS-Webpack-React-apprentice-master/dp/152391050X) became available. This wouldn't have been possible without the awesome community around me of course. The support during this little journey has enabled me to continue.

As it's a good idea to recover a bit after a major release, I've had time to reflect and scheme. Even though I have taken it easier when it comes to writing, I found time to pay off some technical debt and update the site. Now that this has been done, it's easier to progress again.

In order to give you more background on the effort, this felt like a good time to interview myself. It's not perhaps the most original thing to do, but I hope you learn a thing or two about me from it.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/b26ec3c2769168c2cbc64cc3df9cdd9c?s=200" alt="Juho Vepsäläinen" class='author' width='100' height='100' />
</span>
I am Juho Vepsäläinen, the person that maintains this little effort. My background is academic (<abbr title="Master of Science">MSc</abbr>), and before delving into the world of books, I spent a few years subcontracting and working with startups. The whole point of the current effort was to find a more sustainable direction.
</p>

It feels like the work hasn't been in vain. It has definitely taught me a lot about technology, authoring, and business in general. That said, there's still plenty to learn.

All I can hope is that I can learn from my mistakes and manage to push the effort forward. Fortunately not a lot of pushing is needed as community often literally pulls the content from me. Better this way.

## How would you describe *SurviveJS* to someone who has never heard of it?

Imagine you found yourself in the middle of a jungle. What would you love to have with you? A machete obviously. It's easy to get lost with JavaScript. My goal here is to provide tools that help you to navigate this jungle. *SurviveJS - Webpack and React* was my first stab towards this overall vision.

## Why did you develop *SurviveJS*?

I was somewhat frustrated with my current situation. My main gripe with contracting is that it's often an hour's pay for an hour's work. I am simply not that great at it. So I thought maybe I could apply my skills at something else while helping the community.

The common wisdom is that you shouldn't write technical books. In retrospect, disregarding that wisdom was a good move for me. There are easier ways for a programmer to make money.

Writing isn't a problem, actually marketing and selling the books is. You will need to get a lot of things right to make it work. These problems are pronounced for a first time author as you might need to figure it out as you go.

## What next?

After getting the physical edition to my hands, I realized one thing. The book is actually pretty chunky! The format, letter (about ~A4), is big. It's more like a textbook. I'm not sure if that's the vibe I want from a book. Fortunately, this is something that's quite easy to fix.

As the book title says, the book covers both [Webpack](https://webpack.github.io/) and [React](https://facebook.github.io/react/). But what if you don't want to learn the both?

This is the reason why I will be splitting up the book in two in the near future. Instead of *SurviveJS - Webpack and React* you will have *SurviveJS - Webpack* and *SurviveJS - React*. The great thing about this move is that it allows me to focus better on both topics while allowing to serve you better.

The idea is that the current book will be rebranded as *SurviveJS - React*. The current Leanpub readers will receive *SurviveJS - Webpack* for free. The total cost of both books will go up while the price of an individual book might go down a notch. So if you want to save a bit, this might be a good chance to pick the current offering.

There's [an early draft of the Webpack book](/webpack/preface/) online. It is based on the Webpack cookbook I wrote with [Christian](http://www.christianalfoni.com/) a year ago. I will still have to dig through the content and modernize it. During the process I will also port the Webpack bits from the current book there and implement a lighter setup for the React project.

The model will remain the same. A part of the content will remain closed to motivate people to pay for it. Obviously I cannot force anyone to buy it, but for now this seems like a good way to go.

Over longer term I want to provide something subscription based. This supporter scheme would give you early access to new content and private Slack. It would start at $20 per month. If this is something you would like to participate in, [sign up to the supporter mailing list](http://eepurl.com/bQAeuH). Signing up doesn't bind you to anything. It's more about measuring potential interest.

## What does the future look like for React and front-end in general? Can you see any particular trends?

We are going to see consolidation. Architectures and tooling will move towards something more standard. [Ben Alpert discussed the former](https://www.youtube.com/watch?v=-RJf2jYzs8A) at his recent React.js conference talk. Architecture-wise the goal is to end up with something that combines the best ideas of Flux, Redux, and Relay into one.

Tooling-wise we'll end up with something more opinionated. Currently we have an amazing amount of boilerplates. Boilerplates help you to get started, but they don't resolve issues related to maintenance. At worst they are actually counter-productive as you need to alter them to fit your purposes. Incidentally this is the reason why we have so many boilerplates. It's hard to agree technically on everything.

I think we'll find ways to alleviate this problem. We will still have boilerplates, but they will have less boilerplate in them. Particularly the amount of direct dependencies will decrease. We will push a lot of complexity elsewhere and end up with more standard ways of doing things. Not every React developer should know how to set up something like hot loading for instance.

Perhaps a tool like [kotatsu](https://github.com/Yomguithereal/kotatsu) or [nwb](https://github.com/insin/nwb) will grow popular and solve the problem once and for all. I have a little idea of my own in the form of [webpack-presets](https://github.com/survivejs/webpack-presets) (think Babel presets but for Webpack). There's definitely room for innovation in this space.

Thinking outside of React, perhaps we will end up with [better ways of sharing components](./towards-common-components) as I discussed earlier. It doesn't feel particularly smart to re-invent the wheel for every single ecosystem. We should be able to share more. Perhaps we will see more convergence as the web platform matures and we can integrate the most important ideas to it. The less layers we need on top of it, the better.

## Who should I interview next?

I know who I am going to interview next. You have to wait till the next interview for that.

## Conclusion

This was a weird interview to write. I hope it gave you some insight on what runs inside my head and how I think about technology. Web development is at the same time awesome yet frustrating. At least you will never run out of things to learn.

If you haven't checked out the current book, consider starting out [the online edition](/react/introduction/). Even if you know the technology well, there could be some nuggets of information you could put into good use at your work. I hope you find the effort useful!
