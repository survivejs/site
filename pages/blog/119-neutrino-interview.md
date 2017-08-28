---
title: 'Neutrino - Create modern JavaScript applications with minimal configuration - Interview with Eli Perelman'
date: 2017-08-28
headerImage: 'assets/img/stars.jpg'
keywords: ['interview', 'webpack']
---

Setting up a project can require a significant amount of effort if you want to control every single detail. This might be one reason why there are so many boilerplates out there as people tend to have different tastes.

To make things easier, [Eli Perelman](https://twitter.com/eliperelman) has developed a solution on top of webpack.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8dc4af17fcbc9d8c1919462680e46c5a?s=200" alt="Neutrino" class="author" width="100" height="100" />
</span>

I started learning to program when I was 13 or 14, back in 1996. And yes, JavaScript was the first language I ever learned. It sparked a love of the web and development that continues to this day. All in all, I've been doing professional development for about 12 years.
</p>

## How would you describe *Neutrino* to someone who has never heard of it?

Neutrino is a tool that helps you build modern JavaScript applications without having to go through the initial configuration work of setting up webpack. You can install it along with a relevant preset and start writing an app or tool, but you can still customize your build process completely when the need arises.

## How does *Neutrino* work?

Neutrino utilizes webpack under the hood for building projects by augmenting it with knowledge about _build middleware_. Neutrino middleware are discrete pieces of webpack configuration that use a custom configuration API. You can compose many of these middleware together into custom presets, and each will modify the build accordingly.

Take Neutrino's [React preset](https://www.npmjs.com/package/neutrino-preset-react) as an example. This preset glues together
several other pieces of Neutrino middleware that do things like perform Babel compilation, Hot Module Replacement, add loaders for many different file types, development servers, and minification, just to name a few.

Each piece of middleware illuminates part of the possibilities inherent in a project based on the React preset. Additionally, anyone can augment the preset with their middleware, presets, and custom configuration to suit their tastes.

Getting started with Neutrino is easy, using either Yarn or npm. As an example, here's a quickstart for a React project (using Yarn for brevity):

```bash
yarn add react react-dom
yarn add --dev neutrino neutrino-preset-react

echo 'import React from "react";' >> src/index.js
echo 'import { render } from "react-dom";' >> src/index.js
echo 'render(<h1>hello world</h1>, document.getElementById("root"));' >> src/index.js

yarn neutrino -- start --use neutrino-preset-react

  ✔ Development server running on: http://localhost:5000
  ✔ Build completed
```

Open a browser to localhost:5000, and you are ready to go!

To make some of this possible, we had to create our webpack configuration API, called [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain). As you may know, webpack exposes a low-level configuration format, but this format isn't well-suited for merging configuration deterministically across middleware, or even across many projects. With webpack-chain, we expose a chainable or fluent API for aggregating a webpack configuration which is much more deterministic.

The above can be done by accessing the Neutrino API from a `.neutrinorc.js` file, which Neutrino can pick up automatically. You can also move the middleware Neutrino `use`s to this file to shorten up your command to `neutrino start`.

```js
// .neutrinorc.js
module.exports = {
  use: [
    ['neutrino-preset-react', {
      // Override the page title
      html: {
        title: 'Enterprise 2.0'
      },

      // Override the Babel configuration for the React preset
      babel: {
        presets: [
          ['babel-preset-env', {
            targets: {
              browsers: [
                'last 1 Chrome versions',
                'last 1 Firefox versions'
              ]
            }
          }]
        ]
      }
    }],

    // Even completely override the webpack configuration
    // using the webpack-chain API
    (neutrino) => {
      neutrino.config
        .entry('vendor')
          .add('react')
          .add('react-dom');
    }
  ]
};
```

At this point, you can start your app using `neutrino start` or add a script to your `package.json` to be able to more easily run it from your command line.

It's easy to add linting and testing to your project that also can consume Neutrino middleware and presets:

```bash
yarn add --dev neutrino-preset-airbnb-base neutrino-preset-jest
```

```js
// .neutrinorc.js
module.exports = {
  use: [
    'neutrino-preset-airbnb-base',
    ['neutrino-preset-react', {
      html: {
        title: 'Enterprise 2.0'
      }
    }],
    'neutrino-preset-jest'
  ]
};
```

When running `neutrino start`, you'll see linting errors, with no upfront configuration. If you create some tests, you can run those with `neutrino test` and they will be run using the same configuration, using the test middleware you have chosen. With `neutrino build` you can output compiled static assets for production deployment.

For advanced cases, Neutrino even supports running custom commands that can consume the same configuration that webpack does. It has proven for us to be a pretty robust solution.

## How does *Neutrino* differ from other solutions?

When I compare Neutrino to other tools, I usually break them down into either boilerplates or CLI tools, and I would like to contrast them separately.

First, while boilerplates are great for getting a project up and running quickly, over time, you may run into difficulties with the build system being tightly coupled to the application repository. As you make commits to your project, it is often hard or impossible to apply updates from the upstream boilerplate, which could include crucial bug fixes.

Every new project you start means you need to copy the build configuration from existing projects, and eventually, this becomes tough to maintain. We experienced this pain first-hand with several Mozilla projects.

Second, there are some fantastic projects out there like Create React App, preact-cli, nwb, and much more that avoid the boilerplate problem but at the expense of some other tradeoffs. Your configuration could be black-boxed and not able to be modified. They could force you to eject your configuration, making maintenance of the entire build dependency tree and configuration your responsibility again, and also preclude future configuration updates.

Each separate type of project needs its build configuration, and therefore you may need to install a different CLI tool for several different types of frameworks. The configuration you make for one type of project may not be usable in a different kind of project, leaving you to maintain these separately. Not to mention, creating a common and shareable configuration for all of these projects is not possible.

At Mozilla, we started down this route too and ran into these same problems. In the original implementation, I had created something *very* similar to Create React App, but found configuration very messy, and by putting dependencies like React behind our dependency, users couldn't update React without also updating our CLI tool.

Neutrino attempts to address all of these problems with minimal tradeoffs. Couple this with the fact that Neutrino is project *and* target agnostic, i.e. you can build web apps, libraries, and even Node.js projects with it, you hopefully can see its potential to solve many headaches some of us have been fighting against.

## Why did you develop *Neutrino*?

As I alluded to, creating some of our front-end projects as Mozilla ran into some problems. We wanted to use a modern JavaScript feature set and build toolchain across many projects, but webpack didn't easily allow us to share this across those projects while still allowing individual configuration along the way. At least this was not achievable in a very deterministic way.

Our first attempt at solving this ended up with a project that worked well enough for starting new React projects, but fell flat when integrating into existing projects, or if you wanted to keep its underlying dependencies up to date.

We had tightly-coupled the application dependencies along with those of our build chain, which seemed OK at first, but led to upgrading issues later. Neutrino was born out of this mistake, and manifests one of our core tenets: _don't mix application dependencies with those of the build system._

## What next?

webpack development moves quickly, and we want to keep up with that in Neutrino as well. We are moving to release v7 soon which will support webpack v3 and its improvements. We continue to refine our configuration API to make one-off changes and middleware easier for anyone to create and publish.

I also want to work more with some of the framework authors and contributors out there to see if Neutrino can be a good fit for their users, and reduce the proliferation of boilerplates and CLI tools into something more universal and reusable for everyone.

## What does the future look like for *Neutrino* and web development in general? Can you see any particular trends?

I think web development is in a fascinating place right now. The Web is trying to compete with native applications, and this is a battle I believe the Web will _eventually_ win. The rise of new JavaScript libraries and frameworks are pushing us into another period of discovery of what is and isn't possible for the Web right now.

I believe the work being done on Progressive Web Apps is shedding light here, and clarifying that the platform in incomplete but getting better. I also see WebAssembly as the long-term future of web development.

I can't predict the future of development, but I do believe that webpack and Neutrino are on the right course for a while to come. As long as developers want to use cutting edge features, integrated development workflows, and need a fully-featured build toolchain for the Web, I think webpack and Neutrino are well-suited to tackle these obstacles.

## What advice would you give to programmers getting into web development?

My spark in web development came when I found it fascinating that I could write some text and control my computer with it. If you have a passion for these technologies as well, build something. Anything. Tinker with the Web, with JavaScript, and see what you can create.

Don't let the complexity get to you. Don't let the vast breadth of content get to you. These things will come with time. What's important is to get your feet wet and learn. I try and learn something new every day, and as long as you strive to continue learning, you can only grow from here.

## Who should I interview next?

I think Guillermo Rauch would be a great person to interview. His work with Zeit, Next.js, now, and past projects is epic.

## Any last remarks?

Thank you for taking the time to read through my opinions and comments. I appreciate everyone in our community and hope I can push the Web forward, while it pushes me too.

## Conclusion

Thanks for the interview Eli! I think a lot of people share the same pain of configuration as you and Mozilla and Neutrino definitely seems like one way to solve it.

To learn more, [check out Neutrino site](https://neutrino.js.org/) and [Neutrino GitHub page](https://github.com/mozilla-neutrino/neutrino-dev).
