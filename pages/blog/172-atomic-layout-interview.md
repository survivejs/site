---
title: "atomic-layout - Layout composition as a React component - Interview with Artem Zakharchenko"
date: 2019-03-15
headerImage: "assets/img/atom.jpg"
keywords: ["interview", "react", "styling"]
---

Often layouting a web page is an afterthought. Put a `div` here and there, sprinkle some CSS, and call it done. Perhaps you are more advanced and use CSS Grids to figure out exact positioning.

What if there was an alternative way to achieve the same while having more power as a developer? That is something that [Artem Zakharchenko](https://twitter.com/kettanaito) is exploring with **atomic-layout**, a layout solution designed for React.

## Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://pbs.twimg.com/profile_images/1105592812396007426/_LRKW9Gp_400x400.jpg" alt="Artem Zakharchenko" class="author" width="100" height="100" />
  </span>

Hi! My name is Artem, and I am a Full-stack JavaScript developer from Ukraine. I have graduated a medical university and decided to switch my occupation to programming because it's something I enjoy doing since I was a kid.

</p>

I'm grateful to find a job and turn my hobby into a full-time activity. That hasn't stopped me, however, from endeavoring into side projects and open source. Today I'd like to share with you one of such projects.

## How would you describe _atomic-layout_ to someone who has never heard of it?

[Atomic layout](https://github.com/kettanaito/atomic-layout) is a React library that provides you with a separate layer responsible for spacial distribution for your layouts. The layer decouples components and spacing, which opens vast opportunities to reuse layout units, as they are no longer bound to some context via specific spacing properties.

Practically speaking, it gives you a fast and maintainable way of developing responsive layouts that share global layout settings and create a unified system.

## How does _atomic-layout_ work?

It generates React components based on provided CSS Grid template areas and controls their spacial relation via props. It also supports a feature called _responsive props_, that allows applying prop values conditionally, based on a breakpoint.

I will demonstrate the workflow below, but we need to install the library first:

```bash
npm install atomic-layout
```

The current version of the library uses `styled-components`, so we need to install it too:

```bash
npm install styled-components
```

T> Would you like to use Atomic layout with another styling solution? [Join the discussion!](https://github.com/kettanaito/atomic-layout/issues/57)

### Basic example

Let's say we want to create a simple `Header` component that consists of three areas: logo, menu, and actions. First, we define a verbose areas definition of our `Header`:

```js
const areas = "logo menu actions";
```

T> Areas definition uses pristine [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) syntax.

That's all it takes to create a layout of three equally spaced areas positioned inline. Now we can provide this area string to the `Composition` component of the library:

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

// Layout areas definition
const areas = 'logo menu actions'

const Header = () => (
  <Composition areas={areas} gutter={10}>
    {({ Logo, Menu, Actions }) => (
      <>
        <Logo>
          <img src="logo.png" />
        </Logo>
        <Menu as="nav">
          <ul>{...}</ul>
        </Menu>
        <Actions>
          <a href="/login">Log in</a>
        </Actions>
      </>
    )}
  </Composition>
)
```

After passing our areas to the `areas` prop of the composition, it exposes a function as its children. That function accepts generated area components associated with the respective CSS Grid areas.

There are plenty of [props](https://redd.gitbook.io/atomic-layout/fundamentals/prop-aliases) to apply to the Composition and other components exported from the library to achieve the desired effect.

### Responsive layout

Atomic layout is mobile-first and responsive by default which means that it has rich support of **conditional rendering** and **responsive props application**.

#### Conditional rendering

To conditionally render one or multiple components, we can wrap them in the `Only` component, providing it with breakpoint constraints.

```jsx
import { Only } from "atomic-layout";

const Disclaimer = () => (
  <Only from="sm" to="lg">
    <p>
      Content displayed between small and large breakpoints.
    </p>
  </Only>
);
```

`Only` component supports `from`, `to` and `except` props, and any combination of those. You can pass breakpoint names as the values, or use an Object in case of a custom breakpoint.

T> You can use `Only` component just as any other React component. For example, you can render it nested within generated layout areas!

When using the `except` prop, the children will be rendered everywhere _except_ the given breakpoints range:

```jsx
import { Only } from 'atomic-layout'

const Disclaimer = () => (
  <Only except from="sm" to="lg">
    {...}
  </Only>
)
```

T> [Read more about the `Only` helper component.](https://redd.gitbook.io/atomic-layout/components/only)

#### Responsive props

Whenever a prop name is suffixed with a breakpoint name, its value is being applied only from that breakpoint and up. Take a look at how easy it is to have a per-breakpoint gap between the `Header`'s composites (areas):

```jsx
import { Composition } from 'atomic-layout'

const Header = () => (
  <Composition
    areas={...}
    gutter={10}
    gutterMd={20}
    gutterLg={30}
  >
    {...}
  </Composition>
)
```

Responsive props respect overrides, which means that would be applied as follows:

- `gutter={10}` on the `xs` breakpoint and up;
- `gutterMd={20}` on the `md` breakpoint and up;
- `gutterLg={30}` on the `lg` breakpoint and up.

> You can [define custom breakpoints](https://redd.gitbook.io/atomic-layout/api/layout/configure#breakpoints) and use them as the suffixes of your responsive props (i.e. `paddingRetina` or `alignItemsDesktop`).

The `areas` prop can be responsive as well! By providing different areas definitions on different breakpoints, we can alter the position and presence of our layout areas with a single prop.

```jsx
const areasMobile = `
  logo hamburger
`;

const areasTablet = `
  logo menu actions
`;

const Header = () => (
  <Composition
    areas={areasMobile}
    areasMd={areasTablet}
    gutter={10}
  >
    {({ Logo, Hamburger, Menu, Actions }) => (
      <>
        {/**
         * "Logo" is present in both area definitions,
         * and is always rendered.
         */}
        <Logo />
        {/**
         * "Hamburger" is present in "areas", but missing
         * in "areasMd". It's automatically rendered only
         * on "xs" and "sm" breakpoints.
         */}
        <Hamburger />
        {/**
         * "Menu" and "Actions" are present in "areasMd",
         * and are automatically rendered on "md" breakpoint
         * and up.
         */}
        <Menu />
        <Actions />
      </>
    )}
  </Composition>
);
```

Welcome declarative layouts: you describe what and when to render, and let Atomic layout handle media queries and conditions.

## How does _atomic-layout_ differ from other solutions?

### Spacing as a first-class citizen

Unlike other solutions, Atomic layout's purpose is to _distribute spacing_. Spacing effectively defines a layout composition. That's why there is no predefined `Col` or `Row` components, but a `Composition` that can be **anything** you want.

A grid is a composition of rows and columns, and a header may be a composition of logo and menu, and so on. There is no need to be specific when you are wielding the entire power of composition as a physical entity.

### Mentality shift

One of my favorite differences is that Atomic layout teaches you to think in terms of composition, which you can configure and render. Since its counterparts compose any layout element, you can get consistent components declaration throughout the entire application. Having a predictable way how components are defined makes their maintenance superb.

Instead of deciding what CSS properties I need to create a layout, I started asking myself: "_What does this layout consist of? What is the relation between its counterparts?_"

### Encouraging CSS Grid

We try to make an experience of working with Atomic layout a fun way to learn CSS Grid and gain the knowledge you could apply without any libraries whatsoever. To do so, we minimize the amount of library-specific transformations of the options you provide to your composition.

```jsx
<Composition
  areas="header footer"
  templateCols="1fr auto"
/>
```

```css
.composition {
  grid-template-areas: "header footer";
  grid-template-columns: "1fr auto";
}
```

Verbose prop names and no value transformations grant almost 1-1 compatibility with the emitted CSS.

### Fast

Needless to say that layout development becomes fast and efficient. You can develop production-ready components in a few minutes, without writing a single CSS line (if you want). And that involves responsive as well!

## Why did you develop _atomic-layout_?

During the work on one of the side projects, I've noticed that I repeat the same layout patterns over and over. So I've tried to abstract the logic that makes those patterns into a contextless layout unit.

My admiration of [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) came into play, and in no time I realized that atoms and molecules could be described using CSS Grid template areas. One proof-of-concept later Atomic layout has been open-sourced.

## What next?

The roadmap is to refine the existing API, improve server-side rendering, and listen to the community to evolve this library. The mission is to provide a great experience when implementing layouts.

## What does the future look like for _atomic-layout_ and web development in general? Can you see any particular trends?

I hope that CSS Grid will be getting more usage, as it's indeed a future of the web. There's also a lot of attention bound to TypeScript and GraphQL, and I believe they will be the main trends this year.

As of Atomic layout, I would love to see people creating layouts with it, and sharing their experience. I hope together we can improve our process, encourage us to use modern technologies, and teach developers to think in terms of composition.

## What advice would you give to programmers getting into web development?

I wish newcomers to find a balance between practical and theoretical knowledge and don't neglect to have a deeper understanding of a subject, even if it means spending more time. Don't be afraid to fail, and don't fear the unknown. In the end, programming is about challenging yourself every day.

## Who should I interview next?

I suggest interviewing Honza Javorek ([@honzajavorek](https://twitter.com/honzajavorek)), who is a person behind an API testing tool called [Dredd](https://github.com/apiaryio/dredd). I'm also excited to join his team full-time to work on that project.

## Any last remarks?

Thank you for the interview! I want to invite everybody to the upcoming [React Finland 2019](https://react-finland.fi/), where I will be giving a talk on Atomic layout. I will be glad to answer your questions there, or via [Twitter](https://twitter.com/kettanaito).

## Conclusion

Thanks for the interview, Artem! At least for me, it is a refreshing new way to look at how to develop and compose layouts. You can learn more about the approach in the video below:

<iframe width="100%" height="300px" src="https://www.youtube.com/embed/sx_jGuyhhhg" frameborder="0" allowfullscreen></iframe>

T> [Check out Atomic layout on GitHub](https://github.com/kettanaito/atomic-layout) and [read its documentation to grasp it better](https://redd.gitbook.io/atomic-layout).
