---
title: 'unmarshaller - Toolbox for configuration - Interview with Sven Sauleau'
date: 2017-06-05
headerImage: 'assets/img/station.jpg'
keywords: ['interview']
---

Serialization, or the process of transforming data from a shape to another, is a common problem you encounter eventually when programming. Perhaps you want to store some state to the hard drive from memory or restore it. Or you may want to share it across the wire and consume it somehow on the other end. That's where a related concept, marshalling, comes in.

In this interview you will learn more about the topic as [Sven Sauleau](https://twitter.com/svensauleau) discusses the ideas behind his library, [unmarshaller](https://github.com/xtuc/unmarshaller).

T> Remember to check [Sven's previous interview about async-reactor](/blog/async-reactor-interview).

## How would you describe *unmarshaller* to someone who has never heard of it?

If you are not familiar with the term of marshalling, here is an [excerpt from Wikipedia](https://en.wikipedia.org/wiki/Marshalling_%28computer_science%29):

> In computer science, marshalling [...] is the process of transforming the memory representation of an object to a data format suitable for storage or transmission, and it is typically used when data must be moved between different parts of a computer program or from one program to another. Marshalling is similar to serialization and is used to communicate to remote objects with an object, in this case, a serialized object. It simplifies complex communication, using custom/complex objects to communicate instead of primitives. [...]

When you have a lot of configuration, it's not easy to maintain or even to understand.

*unmarshaller* enables you to **describe** your configuration in a **flexible** way. It also provides tools to improve configuration usage.

## How does *unmarshaller* work?

To use *unmarshaller*, you have to define lookups against your data. These can be custom, or you can use ones provided with *unmarshaller*.

### Lookup Function

During the unmarshalling process the lookup `function` will be called to get the value for a given key.

If you want to extract values from an object the lookup will look like this:

```javascript
const lookupFn = key => myObject[key];
```

How to provide the values is up to you. You could get them from the URL, looking for DOM nodes, network requests, and so on.

First, you need to declare your configuration in the unmarshaller object, here is an example:

**unmarshaller.js:**

```js
// The builder is a set of helper functions to build
// the unmarshaller object.
// It has the builtin types: `string`, `number`,
// `boolean`, `object` and `holder` that is used to
// nest configurations.
import { builder } from 'unmarshaller';

export const unmarshaller = {
  // `person_name` will be the key used as argument
  // in the lookup function
  name: builder.string('person_name', {
    // `description` is used for documentation
    // generation
    description: 'Name of the person',

    // If the lookup function didn't returned a value,
    // the default value will be used instead
    defaultValue: 'Sven',
  }),

  customProps: builder.object('custom_props', {
    description: 'Custom properties',
    defaultValue: {},
  }),

  showAge: builder.boolean('person_show_age', {
    description: 'Show age of the person',
    defaultValue: true,
  }),

  age: builder.number('person_age', {
    description: 'Age of the person',
    defaultValue: -1,
  }),

  backgroundColor: builder.string('background_color', {
    description: 'Background color of the card',
    defaultValue: '#69b0dc',
  }),

  textColor: builder.string('font_color', {
    description: 'Font color',
    defaultValue: 'black',
  }),
};
```

**index.js:**

```js
import { unmarshal } from 'unmarshaller';

// This is the unmarshaller object from the file above
import { unmarshaller} from './unmarshaller.js'

const lookupFn = (key) => myObject[key];
const config = unmarshal(lookupFn, unmarshaller);

// `config` is a regular JavaScript object containing your configuration:
//
// {
//   name: ...,
//   backgroundColor: ...,
//   textColor: ...,
// }
console.log(config);
```

### Custom types

To be able to use custom types you need to extend the default builder.

Here is an example of a `color` type:

```javascript
import {
  builder as defaultBuilder
} from 'unmarshaller';

export const builder = {
  ...defaultBuilder,

  color: (name, options) => ({
    name,
    parser: parseColor, // custom parser function
    type: 'color',
    ...options
  }),
};
```

You can find more information about custom types in the documentation in [the project repository](https://github.com/xtuc/unmarshaller).

### Error handling

In the case of a casting error, `unmarshaller` will always return the type you defined.

For example, if you pass an invalid JSON string in `builder.object` it will return `{}` unless you have defined a `defaultValue`.

## How does *unmarshaller* differ from other solutions?

I didn't find an alternative solution to *unmarshaller*. There are some libraries which also adopt the idea of declarative configuration, but they only focus on one usage.

For example, [ajv](https://www.npmjs.com/package/ajv) uses a declarative configuration, but it doesn't serve the same goal since it's only for validations.

T> To understand ajv better, [read the interview with Evgeny Poberezkin](/blog/ajv-interview/).

## Why did you develop *unmarshaller*?

I made *unmarshaller* while I was working for a company. On some projects, we would use highly customizable React components (up to 70 different parameters). The configuration needed to be able to be set both by developers (passing props) and remotely by non-developers.

Our *unmarshaller* lookup function got the configuration either from query parameters in the URL or by calling a function in our proprietary SDK.

## What next?

### Better syntax?

The `unmarshaller` could also be JSX based ([example for Webpack](https://webpack.js.org/concepts/configuration/#using-jsx)).
The configuration could look like this:

```html
<unmarshaller>

  <string
    name="name"
    defaultValue="Sven"
    description="Name of the person"
  />

  <holder name="colors">
    <color
      name="background_color"
      defaultValue="#69b0dc"
      description="Background color"
    />
    <color
      name="font_color"
      defaultValue="black"
      description="Font color"
    />
  </holder>

</unmarshaller>
```

### Most common lookup functions

Provide standard `lookup functions`, for example, to extract configuration values from URLs as this would allow users to use the functions that come with `unmarshaller` instead of having to write them themselves.

### Ahead of time processing

Create a Babel plugin to inline constant values in the *unmarshaller* object to avoid doing this at runtime.

## What does the future look like for *unmarshaller* and web development in general? Can you see any particular trends?

Since *unmarshaller* is flexible, I could imagine various tools built on top of it (for example, form validations).

## Any last remarks?

We have a few extra modules which are located in a second repository [unmarshaller-extra](https://github.com/xtuc/unmarshaller-extra):

**unmarshaller-generator-markdown**

Generate markdown documentation from a given unmarshaller object, containing the name, type, default value and a description of each configuration.

In our use case, we display the documentation of our React component on GitHub and in a panel in our Storybook.

The documentation will look like this:

|name|type|default value|description|
|---|---|---|---|
|`background_color`|`string`|`#69b0dc`|Background color of the card|
|`font_color`|`string`|`black`|Font color|
|`name`|`string`|`Sven`|Name of the person|

You can find an example [here](https://github.com/xtuc/unmarshaller/tree/master/examples/component-config-readme).

**unmarshaller-generator-storybook-knobs**

Generate Storybook [addons/knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) from the unmarshaller object.

T> There's an example showing how to do this [in the repository](https://github.com/xtuc/unmarshaller/tree/master/examples/component-config-storybook-knobs).

More extras to come soon. *unmarshaller* is a flexible tool, I'm excited to see tools built on top of it soon.

## Conclusion

Thanks for the interview Sven! *unmarshaller* seems to handle the problem of marshalling admirably. To learn more about the project, see [unmarshaller on GitHub](https://github.com/xtuc/unmarshaller).
