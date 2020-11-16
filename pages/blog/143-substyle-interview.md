---
title: "substyle - Build Styling Agnostic Components for React - Interview with Jan-Felix Schwarz"
date: 2018-02-08
headerImage: "assets/img/headers/taxi.jpg"
keywords: ["interview", "react", "styling", "cssinjs"]
---

One of the tricky things about writing React components meant for public consumption is making them compatible with [various styling approaches](react/advanced-techniques/styling-react/) used by the community. The problem exists because application styling isn't considered as a first-class citizen by React and it doesn't provide a strong opinion on how to solve it. As a result, the amount of available approaches has exploded.

[Jan-Felix Schwarz](https://twitter.com/jfschwarz) noticed the same problem. As a result _substyle_ was born.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/043c2f73dd7c170c8e616a8d87471b14?s=200" alt="Jan-Felix Schwarz" class="author" width="100" height="100" />
</span>

I work as front-end tech lead at Signavio in Berlin. We are building products that help large businesses to understand and transform the ways they work. I've been doing JavaScript SPA development for the best part of the past decade, so I guess when React came out it was a defining moment in my professional life. :)

</p>

## How would you describe _substyle_ to someone who has never heard of it?

_substyle_ is a utility for authors of open source React component libraries. It tries to make it easier to build components in a way that allows users to customize styles of every single element rendered by a component. Users will be able to do that through CSS, CSS Modules, many css-in-js libraries, or using inline styles. This way, the component integrates well into applications using any styling approach, without forcing an opinion about tooling.

## How does _substyle_ work?

_substyle_ provides a higher-order component that preprocesses whichever props the user passes for styling purposes so that they become more comfortable to consume. It injects a single, special `style` prop, which is used in the wrapped component's render function to derive the right styling props to forward to each of the rendered elements.

For example, a universally stylable `<Popover />` component could be written like this:

```javascript
import substyle from "substyle";

const Popover = substyle(({ style, children }) => (
  <div {...style}>
    <button {...style("close")}>x</button>
    {children}
  </div>
));
```

Now, users of the `<Popover />` component can pass their custom `className`, which will be used to derive classes for all the elements rendered by the component:

```javascript
// JSX                        // Rendered HTML

<Popover className="popover">
  {" "}
  // <div class="popover">
    <span>Hello world!</span> //{" "}
    <button class="popover__close"></Popover> // x //{" "}
  </button>
  // <span>Hello world!</span>
  //{" "}
</div>
```

If they want to pass some custom inline styles, they can do so by supplying a nested `style` object:

```javascript
// JSX                        // Rendered HTML

<Popover style={{             // <div style="background: white;">
  background: 'white',        //   <button style="right: 0;">x</button>
  close: { right: 0 },        //   <span>Hello world!</span>
}}>                           // </div>
  <span>Hello world!</span>
</Popover>
```

If they use css modules or some css-in-js lib, they will want to pass the unique, auto-generated classes to assign to the elements. They can do so via the `classNames` prop that is handled by substyle:

```javascript
// JSX                        // Rendered HTML

<Popover classNames={{        // <div class="1n3n1g">
  popover: '1n3n1g',          //   <button class="ew339k">x</button>
  popover__close: 'ew339k',   //   <span>Hello world!</span>
}}>                           // </div>
  <span>Hello world!</span>
</Popover>
```

## How does _substyle_ differ from other solutions?

I know of one other solution addressing the same problem called [react-themeable](https://github.com/markdalgleish/react-themeable). The general idea behind both, _react-themeable_ and _substyle_, is the same. However, during the development of a component library at Signavio I had to solve some additional practical challenges:

- How to define default styles for components?
- How to build composite components so that also all leaf elements of nested components can be styled by the user?
- If, depending on the passed props, there are different variants of a component, how to allow the user to define custom styles specifically for a particular variant?

Exploring solutions to these problems I finally ended up writing my utility.

## Why did you develop _substyle_?

I got the initial idea for it while developing an open source [React mentions input](https://github.com/effektif/react-mentions). As I was aiming to let users style this input widget with css and inline styles, I had to add quite a bit of code to my components just for this purpose. To keep my code DRY and the render functions clean, I extracted this repetitive styling logic into a helper function.

Later I realized that I could quickly add support for styling through css modules and css-in-js libraries, just by changing this helper function and without having to touch any of the components. And this is basically how _substyle_ came to be.

## What next?

I hope that the idea of supporting universal styling takes hold in the React community and that we can establish some best practices for writing reusable components. It would make app developers' lives better as they would not have to study docs, examples, or source code of every single component library to find out how to override styles of particular elements. Instead, they could just use the same familiar styling API for any open source component.

## What does the future look like for _substyle_ and web development in general? Can you see any particular trends?

_substyle_ is just my take on a universal styling API for React components and it demonstrates that it is quite easy to implement this. So I don't know if _substyle_ as a library will have a future, but I hope that we will continue the discussion about the styling of reusable components.

For web development in general, I see much more fundamental trends: One hot topic is the shift from frameworks to compilers. I believe this idea has enormous potential and it's exciting to see projects like Prepack and svelte pushing forward this frontier.

Another development I expect for the next years is that the architectural boundary between client and server will become more and more blurry as server rendering and GraphQL APIs become the norm. We will be able to share much more code between front and back ends, up to a point, where this distinction is rendered useless.

## What advice would you give to programmers getting into web development?

Be more passionate about what you are building than how you are making it. Don't choose libraries and frameworks just because they are hyped, but because they promise to solve a particular problem that you are feeling.

I think this helps to embrace that there is so much choice in the JavaScript ecosystem, rather than feeling overwhelmed by it. Also, don't be intimidated by unfamiliar, complex-sounding jargon. Usually, it's just fancy names for simple concepts.

## Who should I interview next?

I dig the stuff Brent Jackson (@jxnblk) is building. He's both, a great programmer and designer, and his work is right at the intersection of both disciplines.

## Conclusion

Thanks for the interview Jan-Felix! _substyle_ looks like an excellent fit for anyone wanting to write robust React components that are easy to consume.

You can [find substyle on GitHub](https://github.com/jfschwarz/substyle). See also [Jan-Felix's presentation (16 mins) on the topic](https://www.youtube.com/watch?v=CKPzyeX7nyA).
