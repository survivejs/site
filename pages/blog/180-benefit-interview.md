---
title: "Benefit - utility CSS library - Interview with Chad Donohue"
date: 2019-06-03
headerImage: "assets/img/road.jpg"
headerAuthor: "Patrick Tomasso"
headerSource: https://unsplash.com/photos/5hvn-2WW6rY
keywords: ["interview", "styling", "react"]
---

One of the developments that has began to change the way we style our applications and sites is the introduction of utility classes. [Tailwind](https://tailwindcss.com) is an example of a popular framework that has adopted the approach.

To learn more about the approach, I am interviewing [Chad Donohue](https://twitter.com/chaddonohue) about his library called _Benefit_. It's designed particularly React developers in mind and makes Tailwind a perfect fit with React.

## Can you tell a bit about yourself?

![Chad Donohue|100|100|author](https://www.gravatar.com/avatar/4d096a44b3a989fa2dfb75ea9b989730?s=200)

My name is Chad Donohue. I enjoy creating user experiences and talking about design systems. I've written computer software as a Full Stack Engineer for a little over ten years. When I'm not in front of a computer screen, I spend time with my beautiful wife and three amazing kids.

## How would you describe _benefit_ to someone who has never heard of it?

[benefit](https://github.com/cdonohue/benefit) is a [Tailwind](https://tailwindcss.com)-compatible utility CSS library powered by [_emotion_](https://emotion.sh/docs/introduction). It is framework agnostic, has a file size of `5kB`, and it **only ships the CSS styles that you use**.

## How does _benefit_ work?

Here we have a `Button` component:

```jsx
import React from "react";

export default function Button() {
  return <button>Click Me</button>;
}
```

We'll add a few lines to include _benefit_ and add some [Tailwind](https://tailwindcss.com) class names:

```jsx
/** @jsx jsx */
import { jsx } from "benefit/react";

export default function Button() {
  return (
    <button
      className="
        px-8
        py-2
        bg-blue-600
        text-white
        font-bold
        tracking-wide
        uppercase
        rounded-full
        border-2
        border-blue-700
        shadow-lg"
    >
      Click Me
    </button>
  );
}
```

By adding two lines and some additional class names, we have accomplished two things:

- We now have the power to style with all available utility classes (`~10,000`) at just a `5kB` inclusion cost
- Only the styles associated with those class names were added, **which happens only to be `~350 bytes`**

T> Check out this [CodeSandbox](https://codesandbox.io/s/small-wildflower-ckbhj) to explore this example more.

At the point of inclusion within your project, _benefit_ takes its default configuration (or your own if you need to [customize it](https://benefit.netlify.com/customization/overview)), then it generates CSS declarations in memory.

As you use these generated class names in your markup, the styles are looked up in _benefit_'s cache, auto prefixed, and injected into the document.

## How does _benefit_ differ from other solutions?

On the client, _benefit_ generates and injects styles for class names only when they are used. On the server, _benefit_ pairs with _emotion_’s built-in SSR support and inlines CSS with the markup.

Since _benefit_ is powered by _emotion_ in both scenarios, you also can tap into the power that it provides, like nested declarations and deterministic style composition.

Also, being framework agnostic, _benefit_ can be used alongside any JS framework. It can be introduced at the component level or at the root of an application. And, dead-style elimination is built-in.

## Why did you develop _benefit_?

I help build and ship 3rd party components. It is for sure an edge-case, but it brought on problems to solve for:

- [x] **Style isolation** - We needed the ability to normalize values (`margin`, `padding`, etc.) and sandbox the elements that made up our shipped components and not have to duplicate those normalized styles with every new component.
- [x] **Dynamic branding** - When our components are requested, we need to support different branding colors and typefaces, which means we are responsible for generating design system rules based on several incoming variables.
- [x] **Rapid prototyping** - Once these design system rules are decided, we need them to be reused throughout our component library.
- [x] **No extra build step to generate styles** - Since every request is different, we need to ship a runtime that is small and can handle dynamic style injection. Also, we need only to inject what we use.

_benefit_ started as an internal idea to solve these issues and has been through a few iterations. As it matured a bit more, we began to see how this could be a solution for both isolated components and full-blown sites alike.

## What next?

We are working to remove the runtime altogether for SSR. Soon, we'll have some examples put together for how this would work with something like [Next.js](https://nextjs.org/).

We're also working on the way to generate custom documentation based on a configuration. So, it will be easy to share visually what different _benefit_ configurations look and behave.

## What does the future look like for _benefit_ and web development in general? Can you see any particular trends?

As digital experiences increase in complexity, we have more of a responsibility as makers to take a look at what we are shipping to the end user. In the future, I see this getting better through the use of code-splitting and rendering on the server before shipping to the browser.

The use of utility classes for styling will continue to gain popularity thanks to the great work over at [Tailwind](https://tailwindcss.com). Utility classes are a great pattern that DRYs up a lot of the view layer. I'm not saying that every page/application will _only_ have utility classes, but the individual one-off styling needs will go down considerably.

T> [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) by Adam Wathan is an excellent read that talks about some of the benefits to be gained from styling with utility classes.

## What advice would you give to programmers getting into web development?

Make it a goal to learn something new every day and share your knowledge with others. This industry moves fast, and it helps tremendously to be able to step out of your comfort zone often.

It is a gratifying profession that allows you to produce your best work while simultaneously learning something.

## Who should I interview next?

- [Andy Bell](https://twitter.com/andybelldesign) creates excellent experiences with simple, solid foundations. I'm always impressed with his work and his fondness for progressive enhancement.
- [Sarah Drasner](https://twitter.com/sarah_edo) can always find an untapped topic and find a way to share it with everyone while also making it easier to understand. Her contributions to open source and teaching make this community so special.
- [Eric Clemmons](https://twitter.com/@ericclemmons) has been a mentor to me for some time now. I think people could learn tremendously from the viewpoints that he provides around developer experiences and building remote teams.

## Any last remarks?

Thank you for your time and interest! I've enjoyed sharing my thoughts here and am always around on [Twitter](https://twitter.com/chaddonohue) and [GitHub](https://github.com/cdonohue). Ask me anything 😄!

## Conclusion

Thanks for the interview, Chad! I can immediately see how adopting the utility class approach would help my in my daily development and I might have a project in mind that's a perfect fit for it!

T> To learn more about _benefit_, [check out the homepage for more examples](https://benefit.netlify.com) and [star the project on GitHub](https://github.com/cdonohue/benefit).
