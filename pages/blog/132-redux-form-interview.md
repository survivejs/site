---
title: "Redux Form - The best way to manage your form state in Redux - Interview with Erik Rasmussen"
date: 2017-12-11
headerImage: "assets/img/crystal.jpg"
keywords: ["forms", "interview", "react", "redux"]
---

Forms are a frequent topic in web development as we saw in [the earlier interview about a-plus-forms](/blog/a-plus-interview). This time around, I'm interviewing [Erik Rasmussen](https://twitter.com/erikras) about a popular option, Redux Form.

T> Erik has published a library agnostic successor to Redux Form. See [Final Form](https://github.com/final-form/final-form) to learn more.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/7e86f7e41168df55b65e30cdda423e10?s=200" alt="Erik Rasmussen" class="author" width="100" height="100" />
</span>

I'm originally from North Carolina, but I hadn't lived in the US since late 2001, when I moved to Birmingham, England. I was there for four and a half years, and now I live in northern Spain with my Spanish wife and two bilingual kids. I'm a transatlantic telecommuter, working from home in Spain for my employer in the US.

</p>

I began using React immediately after it was open sourced in 2013, building side projects and ran into all of the state management problems that Flux was introduced to solve. I was active on the Reactiflux Slack channel as Redux was taking shape before its announcement in 2015, back when what is now called _reducers_ were still called _stores_.

## How would you describe _Redux Form_ to someone who has never heard of it?

Web forms have a _lot_ of state involved with them. It might seem like all you have to keep track of is the value of each field, but there is _so_ much more. For example:

- Which field currently has focus?
- Are all the fields valid?
- Which fields have errors?
- Are we currently submitting the form?
- Are we currently doing some sort of async validation as the user is filling out the form?
- Which fields has the user _visited_ (focused on)?
- Which fields has the user _touched_ (focused on and then left)?

_Redux Form_ manages _all_ of that state for you, providing each field with what it needs to render: its `value` and `onChange`, `onBlur`, `onFocus`, etc. props.

## How does _Redux Form_ work?

React prefers unidirectional data flow where a container component holds state and passes down the state and callbacks for its children to modify the state. Redux fits this model like a glove, keeping state globally and allowing mutations through dispatched actions. _Redux Form_ dispatches actions for every event in your form, and updates the global state accordingly, rerendering _only_ the components that need to be rerendered.

## How does _Redux Form_ differ from other solutions?

The most significant difference is that it uses Redux. Some other solutions also use Redux, but many do not. Like everything in engineering, this has its pros and cons. The main two benefits are: you can watch all of your state mutations go by in Redux Dev Tools and that you can listen to Redux Form actions in other reducers of your application, e.g., potentially updating some canonical local record when your form submission has succeeded.

The primary drawback is that you might not be using Redux at all in your application, but to use _Redux Form_ as your form solution, you will be forced to use it. However, Redux is so prevalent in the React community, the chance that you are already using it to manage state is pretty good.

## Why did you develop _Redux Form_?

Well, I was building an app that had several long forms. I asked Dan Abramov in the Reactiflux Slack channel, "Redux isn't fast enough so that I could dispatch an action on _every single keypress_ in a form, right?" He responded something along the lines of, "I don't see why not? Try it!" And _Redux Form_ was born.

I had published a few tiny niche libraries before but had never been The Maintainer of an open source project. The community was very supportive, and I worked hard with them to sculpt _Redux Form_ into what it is today. It has been a lot of work, but also fun and rewarding.

## What next?

Taking into account all that I have learned in maintaining _Redux Form_, I have recently created and released what I think might be the next generation of form state management. The solution does not depend on Redux or even React. It is a library that could potentially also be used by our brethren in the Angular, Ember, Preact, and Vue communities.

The library is called [🏁 Final Form](https://github.com/erikras/final-form#-final-form), and it's based on the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), where different form elements on the page _subscribe_ to different parts of the form state, and only update themselves when they need to. I would encourage your readers to check it out.

## What does the future look like for _Redux Form_ and web development in general? Can you see any particular trends?

The npm download charts for React, Redux, and _Redux Form_ look very similar: **GROWTH**. 📈

According to the npm download stats for October 2017, 46% of projects using React are using _react-redux_, and 24% of those are using Redux Form. That's **11.2% of React projects that are using _Redux Form_**. There are [**_1.6 million_** projects](https://www.npmjs.com/browse/depended/redux-form) on npm that depend on _Redux Form_. _Redux Form_ is here to stay.

As for web development in general, I think the declarative "UI as a function of State" paradigm that React has popularized is here to stay. From what I can tell, most of the frontline battles being fought today are attempting to drive a stake into the heart of CSS once and for all. Web Components and WebAssembly seem like promising future tech but aren't worth learning yet unless you lust for the bleeding edge.

## What advice would you give to programmers getting into web development?

As the author of [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example), one of the more popular early React, Redux, Webpack, Hot Reloading, Server-side Rendering boilerplate repositories, I have a pretty solid understanding of the immense learning curve just to get a React app off the ground.

Luckily, it's not 2015 anymore, and now we have projects like [Create React App](https://github.com/facebookincubator/create-react-app) and [Next.js](https://github.com/zeit/next.js) that make it orders of magnitude easier to get started with React.

I'm also old enough to remember the barbaric days of programming without StackOverflow, but now it's _exceedingly_ rare that programmers, even expert ones, run into a problem that someone has not already asked about, and gotten an answer for, on StackOverflow.

You just have to build something and ask questions when you run into problems, which you will. But the thrill of solving them and getting your thing to work, even if it's just a silly spinning "Hello World" text, is the fire that keeps us all going.

## Who should I interview next?

I think the person I'd most like to see gain exposure from a site like this is [Eric Berry](https://twitter.com/coderberry), the creator of [Code Sponsor](https://codesponsor.io), he's valiantly attempting to do the impossible: make open source sustainable and avoid developer burnout.

How much money would companies have to invest to update their code base if the sole developer of a popular OSS library were to quit and walk away? Thousands upon thousands of dollars worldwide.

And how much are they paying to use these libraries? Zero.

Donate buttons aren't worth the pixels they're rendered with. There are _some_ efforts, like OpenCollective, which are beginning to address this problem, but it's still a huge problem.

It never occurred to me that having such a popular library could be monetized through tasteful, subtle ads on the documentation pages.

How many hours a day do we coders spend looking at documentation pages? And how valuable are our eyes to get ads in front of?

If you have a product that plugs into the production stack at any place or even a product that you want to advertise to people with healthy salaries, library documentation is a great place to advertise. Anyone with an open source library with even a few dozen monthly downloads should look into CodeSponsor. `$3/month > $0/month`.

## Conclusion

Thanks for the interview Erik! If you are using Redux, it's hard to avoid using Redux Form. It's so handy.

To learn more, [check out Redux Form site](https://redux-form.com/) and [Redux Form GitHub page](https://github.com/erikras/redux-form).
