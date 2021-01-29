---
title: "Renderlesskit React - Collection of composable headless hooks - Interview with Anurag Hazra"
date: 2021-01-29
headerImage: "assets/img/toolkit.jpg"
keywords: ["interview", "react"]
---

When developing user interfaces with React, you often create a set of basic primitives. Another option is to consume them from a third-party library and perhaps build more complex components yourself.

To learn about a potential solution to the problem, I am interviewing [Anurag Hazra](https://twitter.com/anuraghazru).

## Can you tell a bit about yourself?

![Anurag Hazra|100|100|author](https://www.gravatar.com/avatar/ac875caed366acf3a501c47e66883a3c?s=200)

Hi! My name is Anurag, and I'm a frontend engineer from India currently working at [timelessco](https://timeless.co). I enjoy building interactive user interfaces and also love to do creative coding in my free time.

I love to contribute to open source projects and even created a few of my own.

## How would you describe _Renderlesskit React_ to someone who has never heard of it?

[Renderlesskit React](https://github.com/timelessco/renderlesskit-react) is a component library that's focusing on flexibility, reusability, and accessibility. We are developing the solution at timelessco and I have been working with my colleague [Navin Moorthy](https://twitter.com/navin_moorthy) on this project for the past six months.

It's a **renderless** component library. The solution handles behaviors, logic, and accessibility via React hooks. The approach enables the consumers to have full control over styling while tackling the other concerns.

T> [Check out our Storybook preview](https://renderlesskit-react.vercel.app)

## How does _Renderlesskit React_ work?

Under the hood, Renderlesskit uses [Reakit](http://reakit.io/) created by [Diego Haz](https://twitter.com/diegohaz). The toolkit comes with excellent base components and helpful utilities for handling accessibility and hooks based component systems.

There are two parts for creating any components in Reakit: component hook and state hook.

### Component Hook

The component hook handles all the logic which the component needs and returns the component's accesibility logic and HTML props. We can also add event listeners/refs/a11y props in this hook too.

Reakit provides a wonderful `createHook` function which is used to create the hooks. The cool thing is that we can even combine multiple hooks together to supercharge our components easily. It looks something like this:

```ts
export const useAccordionPanel = createHook<
  AccordionPanelOptions,
  AccordionPanelHTMLProps
>({
  name: "AccordionPanel",
  // We can compose with other hooks
  compose: [unstable_useId, useDisclosureContent],
  // Keys are generated automatically
  keys: ACCORDION_PANEL_KEYS,

  useProps(options, { ref: htmlRef, ...htmlProps }) {
    const accordionId = getAccordionId(options);

    // Add event listeners, do a11y logic, and other things
    return {
      "aria-labelledby": accordionId,
      ...htmlProps,
    };
  },
});
```

Reakit also provides a `createComponent` function that connects the hook to a React component.

### State Hook

The state hook is the main hook which handles all of the component state. It's a plain custom React hook:

```js
const useAccordionState = (props) => {
  // logic
  return { ...state };
};
```

Then we can create our components by combining those two hooks and use them in our app:

```jsx
const App = () => {
  const state = useAccordionState();

  return (
    <Accordion {...state}>
      <AccordionTrigger {...state}>
        Trigger 1
      </AccordionTrigger>
      <AccordionPanel {...state}>Panel 1</AccordionPanel>
      <AccordionTrigger {...state}>
        Trigger 2
      </AccordionTrigger>
      <AccordionPanel {...state}>Panel 2</AccordionPanel>
    </Accordion>
  );
};
```

With this approach, the benefit we get is that all our components are hook based and completely unstyled. The users can compose one or multiple hooks together to extend the system, just like Lego bricks.

T> You can [learn how Reakit works from the interview of Diego Haz](/blog/reakit-interview).

## How does _Renderlesskit React_ differ from other solutions?

The main difference is that unlike traditional component libraries, Renderlesskit does not have any styling opinions nor does it depend on any CSS frameworks while providing as much flexibility as possible.

It also differs from other libraries in the aspect of the core system. We are only extending the Reakit component ecosystem using [reakit-system](https://www.npmjs.com/package/reakit-system). It is similar to [react-aria](https://react-spectrum.adobe.com/react-aria/index.html) but uses reakit-system to achieve the same behaviors.

There are other similar hooks/component libraries out there that solve the issue nicely too. Consider the examples below:

- [Bumbag](https://bumbag.style/)
- [radix-ui](https://radix-ui.com/)
- [downshiftjs](https://github.com/downshift-js/downshift)
- [headlessui](https://github.com/tailwindlabs/headlessui)
- [react-spectrum](https://github.com/adobe/react-spectrum)

These are all amazing libraries which are very similar at core, but what we wanted is an in-house component library at timelessco to use as a foundation for our next design system.

T> You can [read more about our core concepts online](https://github.com/timelessco/renderlesskit-react/blob/master/docs/core-principles.md).

## Why did you develop _Renderlesskit React_?

Our CEO, [Sandeep Prabhakaran](https://twitter.com/_iamsandeep), came up with the idea as we needed an in-house component library which we can manage and support our requirements in the future. The hope is that we can build a UI library and ultimately to create a **nocode design system designer**.

## What next?

The next step is to create an in-house design system for our company using Renderlesskit itself.

We have already started working on it, and we are using [Tailwind](https://tailwindcss.com/) for styling and the solution as a base.

After finishing the design system, we plan on creating a system for our design tokens in Figma so that these tokens can be in sync with our code via a common theme specification. We are still researching this topic.

T> You can find the source code of our design system here: [@renderlesskit/react-tailwind](https://github.com/timelessco/renderlesskit-react-tailwind)

## What does the future look like for web development in general? Can you see any particular trends?

In general, I'm seeing a trend in web development which is "rediscovering lost patterns". We are now leaning towards making things less complicated and using the platform. For example:

- [Tailwind](https://tailwindcss.com/) rediscovered the way we use CSS.
- [React server components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) rediscovered the way we write server-side code.

I also think that tooling will become more and more sophisticated and faster in the future. We already have [Snowpack](https://www.snowpack.dev/), [swc](https://swc.rs), [Rome](https://rome.tools/), and [Vite](https://vitejs.dev/) doing excellent work on pushing the limits.

## What advice would you give to programmers getting into web development?

The only advice I can give them is to stay focused, don't feel overwhelmed, start slow, and keep trying! :)

Learn the fundamentals first and then jump to more advanced topics later. Grasping the fundamentals goes a long way.

## Who should I interview next?

[Kumar Abhirup](https://twitter.com/kumar_abhirup) is doing excellent work on his project [propagate.at](http://propagate.at/).

# Any last remarks?

From the past few month we worked on this project and learned a lot about accessibility and building a component library.

Renderlesskit would not have been possible without the following people:

- My colleague [Navin Moorthy's](https://twitter.com/navin_moorthy) excellent skills
- [Sandeep Prabhakaran's](https://twitter.com/_iamsandeep) ideas and logical thinking.
- Amazing [reakit](https://reakit.io) by [Haz](https://twitter.com/diegohaz)
- [chakra-ui](https://chakra-ui.com/) by [Segun](https://twitter.com/thesegunadebayo)
- [Devon Govett](https://twitter.com/devongovett) for his amazing work on [react-spectrum](https://github.com/adobe/react-spectrum) which we also took inspiration from.

## Conclusion

Thanks for the interview, Anurag! I like the approach you chose as it avoids the pitfalls of coupling styling to components. I've seen this cause trouble many times.

T> To learn more, [check out Renderlesskit React on GitHub](https://github.com/timelessco/renderlesskit-react).
