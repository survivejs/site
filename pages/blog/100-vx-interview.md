---
title: 'vx - The Power of D3 with the Benefits of React - Interview with Harrison Shoff'
date: 2017-06-12
headerImage: 'assets/img/vx.png'
keywords: ['interview', 'react', 'visualization']
---

Data visualization is a big topic itself. When it comes to the web, [D3](https://d3js.org/) is perhaps the most well-known solution. Even though you can wrap it with React quite quickly, there is value in having specific solutions.

This is where [vx](https://github.com/hshoff/vx) by [Harrison Shoff](https://twitter.com/hshoff) comes in.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/96383e1a07b37e9d5d0360416f81dbf9?s=200" alt="Harrison Shoff" class="author" width="100" height="100" />
</span>

I've been doing frontend at Airbnb since 2010. Along the way, I've helped make [wish lists](https://techcrunch.com/2012/06/27/airbnb-wish-lists-redesign/), [reviews](https://www.airbnb.com/help/article/1257/how-do-star-ratings-work), [referrals](https://thenextweb.com/apps/2011/06/21/airbnbs-new-referral-program-could-double-its-member-base/#.tnw_aooztlbz), [experience marketplace](https://techcrunch.com/2014/05/16/airbnb-experiences/), the [professional photography tool](https://thenextweb.com/apps/2011/10/06/airbnb-launches-its-photography-program-with-13000-verified-properties/#.tnw_ISpMS8RO), customer support chat, and the old m.airbnb.com.</p>

Regarding open source, I created the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and worked on [Airpal](https://gigaom.com/2015/03/05/airbnb-open-sources-sql-tool-built-on-facebooks-presto-database/) with Andy Kramolisch, and [Chronos](https://techcrunch.com/2013/03/15/airbnb-open-sources-its-chronos-scheduler-a-more-flexible-cron-replacement-with-a-web-based-gui/) with Florian Leibert and Andy again.

Currently, I'm on the Observability team at Airbnb, working on monitoring tools, data visualization, and a new open source project called [vx](https://github.com/hshoff/vx).

Outside of work, I enjoy playing golf poorly, reading programming books I don't understand, and going on adventures with my beautiful wife.

## How would you describe *vx* to someone who has never heard of it?

*vx* is a library of low-level react components that can be used to build up reusable charts, those one-off requests, or that particular idea you had for a visualization that you’ve never seen done before.

*vx* combines the power of [D3](https://d3js.org/) with the joy of [React](https://facebook.github.io/react/). It's mainly unopinionated, and the idea is that you build on top of it, keep your bundle sizes down and use only the packages you need. You don't need to know D3 to use *vx*, but it helps.

*vx* stands for visualization components.

Below is a flow diagram that illustrates how *vx* could fit in at your organization:

![vx flow diagram](assets/img/vx/diagram.png)

## How does *vx* work?

Under the hood, *vx* is using D3 for the calculations and math. D3 is the visualization kernel used to generate the data that flows to your components. If you’re creating your chart library on top of *vx*, it’s easy to create a component API that hides D3 entirely. Because of this you and your team could set up and share charts as quickly as using reusable React components.

## How does *vx* differ from other solutions?

To create a complete charting library, you would need to anticipate the needs of every chart out there. Instead of doing that, you tell *vx* what you want to make, and away you go. You only need to pull in the packages you need.

No matter how you handle styling your components, how you store your state, or how you update your data, *vx* should feel familiar in any React codebase.

## Why did you develop *vx*?

Charting libraries are great until they’re not. And mixing two mental models for updating the DOM is never a right time. Copy and pasting D3 code into `componentDidMount()` is just that. The *vx* collection of components lets you easily build your reusable visualization charts or library without having to learn d3.

I wanted to make my D3 code feel at home in my react codebase, keep filesize down, and not predict all of the different charts I would have to make in the future.

## What next?

We're on the road to a production ready `v1` release, and it includes the following features:

* Accessibility.
* Increased browser support.
* More shapes.
* Animations and transitions.
* Easy interactions.

Follow our progress here: https://github.com/hshoff/vx/projects/1

## What does the future look like for *vx* and web development in general? Can you see any particular trends?

For *vx*: *vx* should work on the web, native, vr, everywhere. The current implementation depends on react-dom which means it's only available on the web. I'd like to explore using [react-primitives-art](https://github.com/lelandrichardson/react-primitives-art) for cross-platform support. Check out this talk by my colleague [Leland Richardson](https://twitter.com/intelligibabble) about [React as a Platform](https://www.youtube.com/watch?v=hNwQPJy-XZY).

In general: the world continues to shift towards browsing the internet on their phone. Most of the world isn't on wi-fi and doesn't have latest phone hardware. We should start to see more companies treat performance as a feature and not an afterthought.

It's never been more exciting to be working on the frontend.

## What advice would you give to programmers getting into web development?

You don't need a computer science degree.

You'll throw away 99% of the code you write over the first few years.

There are no shortcuts. You just have to show up and put in the work.

It's a lot of fun.

## Who should I interview next?

My colleague [Jon Gold](https://twitter.com/jongold)! He's working on the future of design tools at Airbnb. Check out his latest work [React Sketch.app](https://airbnb.design/painting-with-code/). It melts minds. And it's well made.

## Any last remarks?

vx stands on the shoulders of giants. Special thanks to:

* [Mike Bostock](http://twitter.com/mbostock) + the d3 community and the react team + community for all of their lovely work!
* All of my colleagues at Airbnb for reviewing my code over the years!

Shoutout to Issaquah, WA and the University of Washington.

Thanks for having me on the blog!

## Conclusion

Thanks for the interview Harrison! I have a soft spot for computer graphics due to my background and combining React with D3 through *vx* seems like a fantastic idea to me.

To learn more about the project, see [vx GitHub page](https://github.com/hshoff/vx) and [study the online demos](https://vx-demo.now.sh/).
