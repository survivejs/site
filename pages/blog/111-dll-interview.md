---
title: 'd-l-l - Easy, automatic, optimized DLL config handler for webpack - Interview with James Wiens'
date: 2017-07-24
headerImage: 'assets/img/headers/library.jpg'
keywords: ['interview', 'webpack']
editors: ['bebraw', 'karlhorky']
---

Perhaps one of my favorite [webpack performance related tricks](/webpack/optimizing/performance/) is setting up DLLs so that you *avoid work*. The problem is that maintaining the setup requires time and effort. What if there was a better way?

[James Wiens](https://twitter.com/aretecode) has been exploring a  better solution with [d-l-l](https://www.npmjs.com/package/d-l-l).

## Can you tell a bit about yourself?

<p>
  ![James Wiens|100|100|author](assets/img/interviews/wiens.jpg)

  👋 I'm a flow state enthusiast and crafting code is my life's passion. I'm from Vancouver, Canada, eh.
</p>

## How would you describe *d-l-l* to someone who has never heard of it?

*d-l-l* makes your webpack build faster in just a few lines, without having to waste time on the slow manual configuration steps required to use the [DllPlugin](https://webpack.js.org/plugins/dll-plugin).

The DllPlugin lets you pre-build the parts of your code that don't often change (such as library code). This means when you change the parts that do change more often, webpack only needs to build these parts, which makes builds exponentially faster.

*d-l-l* adds some helpful utilities for finding and adding dependencies and files that do not often change.

![Webpack dinosaurs](assets/img/dll/dinosaurs.jpg)

## What's a minimal example using *d-l-l*?

```javascript
const dll = require('d-l-l')

module.exports = dll
  .init()

  // Directory to resolve paths from
  .dir(__dirname)

  // Pass in webpack config
  .config(config)

  // Filter to only use non-dev dependencies
  .pkgDeps((deps, dev, all) => deps)

  // Find all src files
  .find('src/**/*.+(js|jsx)')

  // Filter to files last modified at least a day ago
  .lastModifiedFilter({days: 1})

  // Return an array of webpack configurations
  .toConfig()
```

## How does *d-l-l* work?

![What if I told you that you could make a webpack build go from 1 minute to 1 second?](assets/img/dll/whatif.jpg)

*d-l-l* creates an array of webpack configuration consisting of a DLL-only webpack config followed by the existing config from your webpack.config.js.

Cache files are created in a `.fliphub` folder, which allows some smart-ish checks such as:

1. Analysis of your webpack config
2. Extraction of essential parts from it, such as the output path
3. Usage of the configuration passed via `.config()`

The cache files also allow *d-l-l* to add the decorated dll config if no cache folder or files exist or if there are no manifest files showing what was built and where.

When the cache should be cleared is configurable:

- when [cache-busting-files](https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#cachebustingfiles) are modified
- [every X (default 33) builds](https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#everyx)
- [a day or more has passed since the last build](https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#staletime)

## Advanced Example

Now that we've covered a bit of background, an advanced use case should be more understandable:

```js
const dll = require('d-l-l')

const configs = dll
  .init()
  // Verbose debugging
  .debug(true)

  // Force building of DLL
  .shouldBeUsed(true)

  // Return original config, makes it easy to swap side-effect free
  .og(true)

  // Same as in the simple example above
  .dir(__dirname)
  .config(config)

  // Provide resolved dependency paths manually
  .deps(['lodash', 'inferno'].map(dep => require.resolve(dep)))

  // Filter dependencies in package.json
  .pkgDeps((deps, devDeps, allDeps)) => {
    // Ignore dependencies that have `dev` in them.
    // Development tools are one example.
    return deps.filter(dep => !/dev/.test(dep))
  })

  // Find files matching a glob
  .find('src/**/*.+(js|jsx)')
  .lastModifiedFilter({days: 1})

  // Return an array of webpack configurations
  .toConfig()
```

## How does *d-l-l* differ from other solutions?

There are no other solutions. The only other option is do everything *d-l-l* does yourself manually. Doing this means maintaining the additional DLL configuration and referencing it in your code. The point of *d-l-l* is to avoid this complexity.

T> **Editor's note:** [autodll-webpack-plugin](https://www.npmjs.com/package/autodll-webpack-plugin) is a comparable plugin based solution.

## Why did you develop *d-l-l*?

I was developing [fliphub](https://github.com/fliphub/fliphub) and found there was no webpack documentation for the [DllPlugin](https://webpack.js.org/plugins/dll-plugin). As I researched and experimented with the plugin, I discovered how powerful it was but how clunky it was to configure it.

To expand on what I mean by clunky, the DllPlugin requires two separate webpack configurations! The order is important - the DLL config has to be built before the normal config. If the normal config uses the [DLLReferencePlugin](https://webpack.js.org/plugins/dll-plugin) before the DLL config has been built, the build will fail.

Adding even more commands to the build process wasn't going to happen, so *d-l-l* was born.

## What next?

*d-l-l* will be updated with more features. In an ideal future, the core solution it provides would be integrated into webpack core.

The minimum, most effective plan to integrate it into the core would involve the following changes for *d-l-l*:

- Trim down dependencies
- Improve focus in logic and the code domain
- Extract features enabling ease of use
- Cover edge cases with air-tight tests
- Merge to webpack core

Once that would be done, the whole community could benefit from the functionality.

### chain-able

All of the libraries I create use [chain-able](https://github.com/fluents/chain-able), which enables me to easily create interfaces that describe their intentions and make simple solutions for complex problems.

### webpack-wrap

I plan to create a wrapper library around webpack (webpack-wrap), allowing easy and smart configuration by following this plan:

- Abstract the [d-l-l](https://github.com/fliphub/d-l-l) wrapper
- Simplify splitting with the [webpack-split-plugin](https://github.com/aretecode/webpack-plugin-split)
- Enable webpack merging using [neutrino](https://github.com/mozilla-neutrino/neutrino-dev) presets in your webpack config
- Finish [happypack2](https://www.npmjs.com/package/happypack2) and [chain-able-webpack](https://github.com/fluents/chain-able-webpack) which allows for:
  - Automatic wrapping of configs in a similar fashion
  - Automatic traversable path resolving (resolving all relative paths in your config)
  - Integration with [webpack-cli](https://github.com/webpack/webpack-cli)
  - Hints for common misconfigurations

## What does the future look like for web development in general? Can you see any particular trends?

- Tools and language support can be improved. Developers want to use the coolest hottest sugar syntax which sometimes still needs advanced skills.
- Companies competing in open source for developers will promote their particular flavor of the latest and greatest tech.
- Artificial intelligence will be easier to use and more widespread in both open source and private code.

## What advice would you give to programmers getting into web development?

I couldn't fit it reasonably in this block, so I made it into a repo: [awesome-advice](https://github.com/aretecode/awesome-advice).

- 15-minute rule (proverbial)
  - If you ask for help on a problem before doing at least 15 minutes of work researching, debugging, and defining your problem, you're doing the other person a disservice.
  - If you wait longer than 45 minutes and you are stuck, you are doing yourself a disservice.
- The three essential skills in programming:
  - #1. how to research
  - #2. how to research
  - #3. how to research
- The better the problem is defined, the better the solution will be
- Have [variable names describe their intention](https://twitter.com/svensauleau/status/856424137493008384)
- Premature optimization is the root of all evil
- Make it debuggable
- Join the community and contribute

## Who should I interview next?

1. [Eli Perelman](https://github.com/eliperelman)
2. [nchanged](https://github.com/nchanged)

## Conclusion

Thanks for the interview James! I hope this work eventually finds its way to webpack proper. That would make the approach more approachable to a lot of people.

You can find [d-l-l on GitHub](https://github.com/fliphub/d-l-l).

See also the following resources for further information:

- [Official webpack DLL example](https://github.com/webpack/webpack/tree/master/examples/dll)
- [Robert Knight's article on the DllPlugin](https://robertknight.me.uk/posts/webpack-dll-plugins/)
- [InVision on optimizing webpack builds with the DllPlugin](http://engineering.invisionapp.com/post/optimizing-webpack/)
- [Caching assets long term with the DllPlugin](https://medium.com/connect-the-dots/caching-assets-long-term-with-webpack-5ad24a4c39bd)
- [DllPlugin question and answer on Stack Overflow](https://stackoverflow.com/questions/36986460/selecting-webpack-dll-bundle-via-scope-mode)
