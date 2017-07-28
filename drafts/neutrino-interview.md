---
title: 'Neutrino - Create modern JavaScript applications with minimal configuration - Interview with Eli Perelman'
date: 2017-08-21
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview']
---

TODO: Feel free to suggest a header image. Otherwise, I'll figure out something.

If you would like to link to the Neutrino logo, it's located at https://raw.githubusercontent.com/mozilla-neutrino/neutrino-dev/master/docs/assets/logo.png

TODO: I'll fill this up and link to your Twitter

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8dc4af17fcbc9d8c1919462680e46c5a?s=200" alt="Neutrino" class="author" width="100" height="100" />
</span>

I started learning programming when I was 13 or 14, back in 1996. And yes, JavaScript was the first language I ever learned. It sparked a love of the web and development that continues to this day. All in all, I've been doing professional development for about 12 years.

</p>

## How would you describe *Neutrino* to someone who has never heard of it?

Neutrino is a tool that helps you build modern JavaScript applications without having to go through the initial configuration work of Webpack. You can install it along with a relevant preset and start writing an app or tool, but you are still afforded the potential to customize your build process completely when the need arises.

## How does *Neutrino* work?

Neutrino utilizes Webpack under the hood for building projects by augmenting it with knowledge about _build middleware_. Neutrino middleware are discreet pieces of Webpack configuration that use a custom configuration API. You can compose many of these middleware together into custom presets, and each will modify the build accordingly.

Take Neutrino's [React preset](https://www.npmjs.com/package/neutrino-preset-react) as an example. This preset glues together
several other pieces of Neutrino middleware that does things like perform Babel compilation, Hot Module Replacement, add loaders for many different file types, development servers, and minification, just to name a few. Each piece of middleware this preset uses helps to tell a fuller story of what is possible when creating a project based on the React preset. Additionally, anyone can augment the preset with their own middleware, presets, and custom configuration to suit everything to their own taste.

Getting started with Neutrino is easy, using either Yarn or npm. As an example, here's a quickstart for a React project (using Yarn for brevity):

```sh
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

In order to make some of this possible, we had to create our own Webpack configuration API, called [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain). As you may know, Webpack exposes a low-level configuration format, but this format isn't well-suited for merging configuration deterministically across middleware, or even across many projects. By creating webpack-chain, we can expose a chainable or fluent API for aggregating a Webpack configuration which is much more deterministic.

This can be done by accessing the Neutrino API from a `.neutrinorc.js` file, which Neutrino can pick up automatically. You can also move which middleware Neutrino `use`s to this file to shorten up your command to `neutrino start`.

```js
// .neutrinorc.js
module.exports = {
  use: [
    ['neutrino-preset-react', {
      // override the page title:
      html: {
        title: 'Enterprise 2.0'
      },

      // Override the babel configuration for the React preset
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

    // even completely override the Webpack configuration
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

From this point you can start your app using `neutrino start`, or add a script to your `package.json` to be able to more easily run it from your command line.

It's easy to add linting and testing to your project too that also can consume Neutrino middleware and presets:

```sh
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

For advanced cases, Neutrino even supports running custom commands that can consume the same configuration that Webpack does. It has proven for us to be a pretty powerful solution.

## How does *Neutrino* differ from the other solutions?

When I compare Neutrino to other tools, I usually break them down into either boilerplates or CLI tools, and I would like to contrast them separately.

First, while boilerplates are great for getting a project up and running quickly, over time you may run into difficulties with the build system being tightly coupled to the application repository. As you make commits to your project, it is often hard or impossible to receive updates from the upstream boilerplate, which could include crucial bug fixes. Every new project you start means you need to copy the build configuration from existing projects, and eventually this becomes tough to maintain. We experienced this pain first-hand with several Mozilla projects.

Second, there are a number of fantastic projects out there like Create React App, preact-cli, nwb, and much more that avoid the boilerplate problem, but at the expense of some other tradeoffs. Your configuration could be black-boxed and not able to be modified. They could force you to eject your configuration, making you maintain the entire build dependency tree and configuration, losing out on future configuration updates. Each separate type of project needs its own build configuration, and therefore you may need to install a different CLI tool for several different types of frameworks, and configuration you make for one type of project may not be usable in a different kind of project, leaving you to maintain these separately. Not to mention, creating a common and shareable configuration for all these projects is not really possible.

At Mozilla, we started down this route too, and ran into these same problems. In the original implementation, I had created something *very* similar to Create React App, but found configuration very messy, and by putting dependencies like React behind our own dependency, users couldn't update React without also updating our CLI tool.

Neutrino attemps to address all of these problems with minimal tradeoffs. Couple this with the fact that Neutrino is project *and* target agnostic, i.e. you can build web apps, libraries, and even Node.js projects with it, you hopefully can see its potential to solve many headaches some of us having been fighting against.

## Why did you develop *Neutrino*?

As I alluded to, creating some of our front-end projects as Mozilla ran into a number of problems. We wanted to use a modern JavaScript featureset and build toolchain across many projects, but Webpack didn't easily allow us to share this across those projects while still allowing individual configuration along the way, at least not in a very deterministic way.

Our first attempt at solving this ended up with a project that worked well enough for starting new React projects, but fell flat when integrating into existing projects, or if you wanted to keep its underlying dependencies up to date. We had tightly-coupled the application dependencies along with those of our build chain, which seemed OK at first, but led to upgrade issues later. Neutrino was born out of this mistake, and is one of our core tenent's: _don't mix application dependencies with those of the build system._

## What next?

Webpack development moves quickly, and we want to keep up with that in Neutrino as well. We are moving to release v7 soon which will support Webpack v3 and its improvements. We are continuting to refine our configuration API to make one-off changes and middleware easier for anyone to create and publish.

I also want to work more with some of the framework authors and contributors out there to see if Neutrino can be a good fit for their users, and reduce the proliferation of boilerplates and CLI tools into something more common and reusable for everyone.

## What does the future look like for *Neutrino* and web development in general? Can you see any particular trends?

I think Web development is in a very interesting place right now. The Web is trying to compete with native applications, and this is a battle I believe the Web will _eventually_ win. The rise of new JavaScript libraries and frameworks are pushing us into another period of discovery of what is and isn't possible for the Web right now. I believe the work being done on Progressive Web Apps is shedding light here, and making realizations that the platform in incomplete but getting better. I also see WebAssembly as the long-term future of the web development.

I can't predict the future of development, but I do believe that Webpack and Neutrino are on the right course for a while to come. As long as developers want to use cutting edge features, integrated development workflows, and need a fully-featured build toolchain for the Web, I think Webpack and Neutrino are well-suited to tackle these obstacles.

## What advice would you give to programmers getting into web development?

My spark in Web development because I found it fascinating that I could write some text and could control my computer with it. If you have a passion for these technologies as well, build something. Anything. Tinker with the Web, with JavaScript, and see what you can create. Don't let the complexity get to you. Don't let the vast breadth of content get to you. These things will come with time. What's important is to get your feet wet and learn. I try and learn something new every day, and as long as you strive to continue learning, you can only grow from here.

## Who should I interview next?

I think Guillermo Rauch would be a great person to interview. His work with Zeit, Next.js, now, and past projects is epic.

## Any last remarks?

Thank you for taking the time to read through my opinions and comments. I appreciate everyone in our community and hope I can push the Web forward, while it pushes me too.

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview Eli!
