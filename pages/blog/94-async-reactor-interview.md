---
title: 'async-reactor - Render Async Stateless Functional Components in React - Interview with Sven Sauleau'
date: 2017-05-15
headerImage: 'assets/img/reactor.jpg'
keywords: ['interview', 'react']
---

One common way to deal with asynchronous concerns (fetching for example) in React is to push the problem to a state manager or handling it through life cycle methods. Sometimes that can feel a bit much, though, and a lighter solution would be nice.

**async-reactor** by [Sven Sauleau](https://twitter.com/svensauleau) has been designed exactly for this purpose.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/414f1942b9cb139e430fa864c276646b?s=200" alt="Sven Sauleau" class="author" width="100" height="100" />
</span>

Hi, my name is Sven Sauleau, and I'm a French software engineer. OSS enthusiast and a member of the Babel team. I consider myself as a Vim master.
</p>

## How would you describe *async-reactor* to someone who has never heard of it?

**async-reactor** gives you the possibility to render async functional component in React. It has simple and concise syntax using `async`/`await` as illustrated below:

```js
async function Component() {
  await asyncA();
  await asyncB();

  return <html></html>
}
```

It's useful at least in the following ways:

- Code splitting with the `import()` function ([currently stage 3 of the TC39 process](https://github.com/tc39/proposal-dynamic-import)).
- Requesting using the `window.fetch()` function.
- Waiting for DOM event (for example using [p-event](https://www.npmjs.com/package/p-event) by **@sindresorhus**).
- Awaiting asynchronous browser APIs or your logic that returns a `Promise`.

T> You can find examples in the [GitHub repository](https://github.com/xtuc/async-reactor).

## How does *async-reactor* work?

async-reactor is a small library for React implementing the API below:

```js
asyncReactor(
  component: Function, // The `async` component you want to render
  loader?: Component,  // Shown until the first component renders
  error?: Component    // Shown when an error occurred
): Component
```

For better user experience you can show a loading component while waiting for your main component to render and an error component when an error occurs.

Components returned by async-reactor are just regular React components, you can use them across your app.

## How does *async-reactor* differ from other solutions?

I didn't find an alternative solution to async-reactor.

**@thejameskyle** made an excellent package named [react-loadable](https://www.npmjs.com/package/react-loadable). It's a higher order React component for remote loading components. You can have an equivalent behavior using async-reactor with a concise syntax and a simpler error handling:

```js
async function Component() {
  const DynamicComponent = await import('./DynamicComponent.js');

  return (
    <div>
      <DynamicComponent />
    </div>
  );
}
```

You can add a regular `try`/`catch` block around the import and a loader component using the async-reactor API.

## Why did you develop *async-reactor*?

I mentioned the boilerplate code that I needed to write to handle an HTTP request. The first solution was a high order component, but it wasn't simple to use.

Here is an example of one of my project that I refactored to use async-reactor.

**Before:**

```js
import React, { Component, cloneElement } from 'react';

export class FetchIssues extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  componentWillMount() {
    const issues = import(`../issues-${process.env.LANG}.json`);

    issues.then((data) => {
      this.setState({ data, isLoading: false });
    });
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return cloneElement(this.props.loader);
    }

    return cloneElement(this.props.children, { data });
  }
}
```

**After:**

```js
import { cloneElement } from 'react';
import { FetchLoader } from './FetchLoader';
import { asyncReactor } from 'async-reactor';

async function Component({children}) {
  const data = await import(`../issues-${process.env.LANG}.json`);

  return cloneElement(children, { data });
}

export const FetchIssues = asyncReactor(Component, FetchLoader);
```

## What next?

I'm using Preact a lot, and I would like to make an async-reactor version which would work out of the box with it.

I was also asked to make a Vue.js version.

## What does the future look like for *async-reactor* and web development in general? Can you see any particular trends?

async-reactor relies on the `async`/`await` syntax heavily. Major browsers support it already, and with the native support, transpilation and the overhead are not needed anymore. I expect the number of users will increase as the support increases.

## What advice would you give to programmers getting into web development?

I didn't learn development in school, I learned it by myself. The best advice I could give to a new developer is to read documentation about what they are using, reading books and watching conference videos.

Contributing to an open source project is also an excellent way to improve your skills and learn new things. You can find issues for a beginner on [contributor.ninja](https://contributor.ninja).

## Who should I interview next?

I have a few in mind:

- Federico Zivolo (**@FezVr4sta**) develops a library called [popper.js](https://www.npmjs.com/package/popper.js). Since recently Bootstrap uses his library for dropdown, tooltips or popover.
- Bradley Farias (**@bradleymeck**) is the one pushing ES modules since over a year.
- Henry Zhu (**@left_pad**) maintainer of Babel, he knows a lot about how OSS works.

## Any last remarks?

If you want, read more about [async functions](https://babeljs.io/docs/plugins/transform-async-to-generator/) and the [await operator](https://babeljs.io/docs/plugins/transform-async-to-generator/). I recommend using Babel's [async-to-generator transformation](https://babeljs.io/docs/plugins/transform-async-to-generator/) if your platform is missing this syntax.

T> If you are using [babel-preset-env](https://www.npmjs.com/package/babel-preset-env), you are set.

## Conclusion

Thanks for the interview Sven! **async-reactor** looks almost too easy to use. It definitely cuts down the amount of boilerplate related to performing asynchronous operations on component level.

Check out the [GitHub project](https://github.com/xtuc/async-reactor) to learn more.
