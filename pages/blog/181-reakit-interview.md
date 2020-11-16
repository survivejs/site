---
title: "Reakit - Build accessible rich web apps with React - Interview with Diego Haz"
date: 2019-06-10
headerImage: "assets/img/reakit.png"
keywords: ["interview", "react", "ui"]
---

When building web applications and sites using React, you have to think carefully about the user interface. You might either go with an established user interface library, develop your own, or try a bit of both.

One of the aspects that often is forgotten in UI design is accessibility - how can you make sure as many people as possible are able to use your creation? That is where using a user interface library that's accessible out of the box can come in handy.

To learn more about such an option, I am interviewing [Diego Haz](https://twitter.com/diegohaz), the creator of [Reakit](https://reakit.io).

## Can you tell a bit about yourself?

![Diego Haz|100|100|author](https://www.gravatar.com/avatar/e0675d18aada9669f5db696e50f2f0d0?s=200)

My name is Diego Haz. I'm 29, and I've been programming for about 17 years. I started building Open Source Software (OSS) four years ago.

I often say I don't like to code. I want to build things for humans and to impact their lives positively. Code is just the way I found to do that. I could be a dancer, but I'm terrible at dancing, so it's code. 😄

OSS is fantastic for achieving this. I can build one solution so many humans (developers) can use it to create many other solutions for even more humans.

Besides that, I'm married to [Grace Kelly](https://twitter.com/gracekrodrigues) with a five years old stepson. I'm autistic (Asperger), I love astronomy, and I hope someday I'll help solve hunger in the world by automating all the processes from the production of the food to its distribution. Automation is the key.

## How would you describe _Reakit_ to someone who has never heard of it?

[Reakit](https://reakit.io) is a low-level component library for building accessible high-level UI libraries, design systems, and applications with React. It provides components like [`Dialog`](https://reakit.io/docs/dialog/), [`Menu`](https://reakit.io/docs/menu/), [`Tab`](https://reakit.io/docs/tab/), [`Tooltip`](https://reakit.io/docs/tooltip/), [`Form`](https://reakit.io/docs/form/), among others that [follow all the WAI-ARIA recommendations](https://reakit.io/docs/accessibility/).

You could design a dialog using _Reakit_ as below:

```jsx
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
} from "reakit/Dialog";

function MyDialog() {
  // dialog exposes `visible` state and
  // methods like `show`, `hide` and `toggle`
  const dialog = useDialogState();

  return (
    <>
      <DialogDisclosure {...dialog}>
        Open dialog
      </DialogDisclosure>
      <Dialog {...dialog} aria-label="Welcome">
        Welcome to Reakit
      </Dialog>
    </>
  );
}
```

If accessibility matters to you (and there's only one correct answer to this), you should use _Reakit_ components as your foundation.

T> [You can play with the example on CodeSandbox](https://codesandbox.io/s/m4n32vjkoj).

## How does _Reakit_ work?

You can install _Reakit_ through `npm`:

```bash
npm install reakit
```

And then, use it like this:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";

function App() {
  return <Button>Button</Button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Components can be imported directly from `reakit` or using separate paths like `reakit/Button`. The latter is preferred if your bundler doesn't support [tree shaking](https://reakit.io/docs/bundle-size/#tree-shaking).

```jsx
import { Button } from "reakit";
import { Button as Button2 } from "reakit/Button";

if (Button === Button2) {
  console.log("They point to the same file");
}
```

T> If you use Babel, you can rewrite the imports using [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports). This way you can use `import { Button } from "reakit";` while gaining tree shaking. The idea works with other packages too.

### Components

The highest level API (which is still low level for most use cases) of _Reakit_ exports React components. They receive two kinds of props: **options** and **HTML props**.

Options are just custom props that don't get rendered into the DOM. They affect internal component behavior and translate to actual HTML attributes:

```jsx
import { Hidden } from "reakit/Hidden";

// `visible` is an option
// `className` is an HTML prop
<Hidden visible className="class" />;
```

Besides that, all components can be augmented with the [`as` prop](https://reakit.io/docs/composition/#as-prop) and [render props](https://reakit.io/docs/composition/#render-props).

```jsx
<Hidden as="button" />
<Hidden>{hiddenProps => <button {...hiddenProps} />}</Hidden>
```

### State hooks

_Reakit_ provides state hooks out of the box and you can also plug in your own. They receive some options as the initial state and return options needed by their respective components:

```jsx
import { useHiddenState, Hidden } from "reakit/Hidden";

function Example() {
  // exposes `visible` state and
  // methods like `show`, `hide` and `toggle`
  const hidden = useHiddenState({ visible: true });

  return (
    <>
      <button onClick={hidden.toggle}>Disclosure</button>
      <Hidden {...hidden}>Hidden</Hidden>
    </>
  );
}
```

### Props hooks

As the **lowest level** API, _Reakit_ exposes props hooks. These hooks hold most of the logic behind components and are used heavily within _Reakit_'s source code as a means to compose behaviors without the hassle of polluting the tree with multiple components. For example, [`Dialog`](https://reakit.io/docs/dialog/) uses [`Hidden`](https://reakit.io/docs/hidden/), which in turn uses [`Box`](https://reakit.io/docs/box/):

```jsx
import {
  useHiddenState,
  useHidden,
  useHiddenDisclosure,
} from "reakit/Hidden";

function Example() {
  const state = useHiddenState({ visible: true });
  const props = useHidden(state);
  const disclosureProps = useHiddenDisclosure(state);
  return (
    <>
      <button {...disclosureProps}>Disclosure</button>
      <div {...props}>Hidden</div>
    </>
  );
}
```

### Styling

_Reakit_ doesn't depend on any CSS library and components are without styling by default. You're free to use whatever approach you want. Each component returns a single HTML element that accepts all HTML props, including `className` and `style`.

T> [Learn more about styling](https://reakit.io/docs/styling/).

## How does _Reakit_ differ from other solutions?

The main difference is that it's entirely focused on accessibility. It's also low level enough so other solutions (like **Material UI**, **Ant Design**, **Semantic UI React**, etc.) could use it underneath.

A similar library that also focuses on accessibility is [Reach UI](https://ui.reach.tech) by [Ryan Florence](https://twitter.com/ryanflorence). It is a fantastic library, but the design choices make it harder to compose and customize. A good example of this is the use of implicit React Context.

I prefer to give specific pieces so users can build new things without being tied to my design choices. They have more control over what they're making. You can always go from explicit to implicit (for example, you can build a React Context component API using _Reakit_ API). But the other way around is hard.

Here's an example of a high level [`Tooltip`](https://reakit.io/docs/tooltip/) API built upon the low level _Reakit_ API:

```jsx
import {
  Tooltip as BaseTooltip,
  TooltipReference,
  useTooltipState,
} from "reakit";

function App() {
  return (
    <Tooltip title="Tooltip">
      <button>Reference</button>
    </Tooltip>
  );
}

function Tooltip({ children, title, ...props }) {
  const tooltip = useTooltipState();

  return (
    <>
      <TooltipReference {...tooltip}>
        {(referenceProps) =>
          React.cloneElement(
            React.Children.only(children),
            referenceProps
          )
        }
      </TooltipReference>
      <BaseTooltip {...tooltip} {...props}>
        {title}
      </BaseTooltip>
    </>
  );
}
```

If you want something composable and low level, you should choose _Reakit_. If you're looking for something already abstracted, with less boilerplate, easier to use, and with restrictions that make it harder to make mistakes, I recommend Reach UI.

## Why did you develop _Reakit_?

I started building _Reakit_ in 2017 to ease my team's job as we were creating most of our components from scratch, and they weren't accessible at all.

As an autistic person, I don't have any disability that makes the web inaccessible to me. But I do have disabilities that cause a part of the world to be unavailable to me. I know how it feels not to be able to do what most people do. And this motivates me even more to work on Reakit.

## What next?

I'm currently talking with a few companies so I can work with them and possibly use _Reakit_ on real-world projects. Doing this will help me find real use cases and improve the library.

Once v1.0 gets out of beta, I'll start building some paid products and services around it. The goal is to make _Reakit_ self-sustainable, with, at least, one developer dedicated to it full-time.

## What does the future look like for _Reakit_ and web development in general? Can you see any particular trends?

In 20 to 30 years, I believe that websites — and software in general — will not be made by humans anymore. Companies will upload their business requirements and their audience data into an AI, which, after testing infinite versions of the software with unlimited versions of simulated people, will respond with the best ready-to-use application based on the available data.

Code and design will be fully automated. After all, there's no subjectiveness on this: the version which better performs is usually the best version.

It's hard to see now, but _Reakit_ and all the products I'm planning to build around it are my first step into this direction.

## What advice would you give to programmers getting into web development?

Learn to learn. Web development and front-end development specifically are evolving fast, and knowing how to learn things is the best ability one can have. Get used to watching videos in 2x speed (or quicker), learn how to search effectively, etc.

## Who should I interview next?

- [Pedro Nauck](https://twitter.com/pedronauck) - Creator of [Docz](https://www.docz.site/)
- [Bruno Lemos](https://twitter.com/brunolemos) - Creator of [DevHub](https://devhubapp.com/)

## Any last remarks?

Don't forget to [support us on Open Collective](https://opencollective.com/reakit). ❤️

## Conclusion

Thanks for the interview, Diego! I think Reakit hits a good balance between providing functionality while letting developers to customize it to their own use cases.

The greatest benefit of the approach is that it allows people to bootstrap their own UI libraries without having to develop everything from scratch while gaining functionality and avoiding some of the maintenance cost.

T> To learn more about the project, [take a look at Reakit website](https://reakit.io) and [star Reakit on GitHub](https://github.com/reakit/reakit).
