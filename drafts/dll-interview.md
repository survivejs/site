---
title: 'd-l-l - Easy, automatic, optimized DLL config handler for webpack - Interview with James Wiens'
date: 2017-xx-xx
headerImage: '/assets/img/XXX.jpg'
keywords: ['interview', 'webpack']
---

TODO: Feel free to suggest a header image. Otherwise I'll figure out something.

TODO: I'll fill this up and link to your Twitter (https://twitter.com/aretecode)

![whatif](https://user-images.githubusercontent.com/4022631/27426209-bb8791ba-56ef-11e7-9ee9-a68d52728f84.jpg)

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://lh4.googleusercontent.com/--1tse4VUPhM/UQRkGi9R0RI/AAAAAAAAACI/iY5biQNKSuI/w601-h600-no/Wiens-128-2web-vh.jpg" alt="James Wiens" class="author" width="100" height="100" />
</span>

👋 I'm a flow state enthusiast and crafting code is my life's passion. I'm from Vancouver, Canada, eh.
</p>

## How would you describe *d-l-l* to someone who has never heard of it?

<!-- ![0-100](https://i.ytimg.com/vi/iFhma3zUcLs/hqdefault.jpg) -->
![so much time](https://i.redd.it/pdvejjrcz1zy.jpg)


*d-l-l* makes your webpack build faster in just a few lines, without having to waste time on the tedious manual configuration steps required to use the [DllPlugin](https://webpack.js.org/plugins/dll-plugin).

The DllPlugin lets you pre-build the parts of your code that don't change often (such as library code). This means when you change the parts that do change more often, webpack only needs to build these parts, which makes builds exponentially faster.

*d-l-l* adds some helpful utilities for finding and adding dependencies and files that do not often change.

## What's a minimal example using *d-l-l*?

```javascript
const dll = require('d-l-l')

module.exports = dll
  .init()
  .dir(__dirname)                    // Directory to resolve paths from
  .config(config)                    // Pass in webpack config
  .pkgDeps((deps, dev, all) => deps) // Filter to only use non-dev dependencies
  .find('src/**/*.+(js|jsx)')        // Find all src files
  .lastModifiedFilter({days: 1})     // Filter to files last modified at least a day ago
  .toConfig()                        // Return an array of webpack configurations
```

## How does *d-l-l* work?

![magic](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

> What if I told you that you could make a webpack build go from 1 minute to 1 second?

*d-l-l* creates an array of webpack configuration consisting of a DLL-only webpack config followed by the existing config from your webpack.config.js.

Cache files are created in a `.fliphub` folder, which allows some smart-ish checks such as:

1. Analysis of your webpack config
2. Extraction of important parts from it, such as the output path
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
    // Ignore dependencies that have `dev` in them, such as dev tools
    return deps.filter(dep => !/dev/.test(dep))
  })

  // finds files matching a provided glob
  .find('src/**/*.+(js|jsx)')
  .lastModifiedFilter({days: 1})

  // takes the config from connected Maps into an object webpack can understand
  .toConfig()

```

## How does *d-l-l* differ from the other solutions?

There are no other solutions. The only other option is do everything *d-l-l* does... yourself. This means maintaining the DLL file and then having configuration to point to it. The point of *d-l-l* is to avoid all that complexity.

## Why did you develop *d-l-l*?

I was developing <details><summary>[fliphub](https://github.com/fliphub/fliphub), </summary>

  <p>made to be an incredibly easy solution for allowing a unified syntax across all bundlers, with a large translation layer.</p>
  <p>able to be used in only 1 line (dozens of examples work for the proof-of-concept)...</p>
  <code>require('fliphub').init({entry: './src/index.js'}).build()</code>
  <h2>Depreciated...</h2>
  <p>it turned out to be much too big of a project with endless and very high maintainability since it would have to stay up to date with the changing api of those external bundler dependencies</p>

</details>and found there was no webpack documentation for the [DllPlugin](https://webpack.js.org/plugins/dll-plugin), so as I researched, experimented, wrote the documentation, I discovered how powerful it was, but also how extremely clunky the config required to use it was.

To expand on what I mean by clunky, you have to have two separate webpack configurations! The DLL config has to be built first, and then the normal config has to be built. If the normal config uses the [DLLReferencePlugin](https://webpack.js.org/plugins/dll-plugin), and the dll config wasn't built first... it just breaks.

Adding even more commands to the build process wasn't going to happen, and so *d-l-l* was born.

## What next?

First things first: it will get an update with some more features. In the future, in an ideal world, the core solution it provides will be integrated into webpack core.

The minimum most effective plan would consist of trimming down dependencies, tightening up the logic, boiling down the code domain, extracting the solution that enables the ease of use, covering all corners with air-tight tests, then merge it so that the whole community can benefit from the functionality.

### chain-able

All of the libraries I create use [chain-able](https://github.com/fluents/chain-able), which enables me to easily crate interfaces that describe their intentions, and make simple solutions for complex problems.

### webpack-wrap

I plan to add a wrapper library to webpack (webpack-wrap), allowing easy and smart configuration.

- Abstract the [d-l-l](https://github.com/fliphub/d-l-l) wrapper
- Easy splitting [webpack-split-plugin](https://github.com/aretecode/webpack-plugin-split)
- Webpack merging, using [neutrino](https://github.com/mozilla-neutrino/neutrino-dev) presets in your webpack config
- Finishing [happypack2](https://www.npmjs.com/package/happypack2) and [chain-able-webpack](https://github.com/fluents/chain-able-webpack) which allows automatic wrapping of configs in a similar fashion, automatic traversable path resolving (resolving all relative paths in your config), integrating with [webpack-cli](https://github.com/webpack/webpack-cli) and adding hints for common misconfigurations

## What does the future look like for web development in general? Can you see any particular trends?

- Better tools and language support. people want to use the coolest hottest sugar syntax which requires still a whole set of sub-skills for the tools required to provide compatible software
- Companies competing in open source for developers to use their particular flavor of the latest greatest
- Easier to use and more widespread AI use in open source alongside private code

## What advice would you give to programmers getting into web development?

I couldn't fit it reasonably in this block, so I put it into a repo on [awesome-advice](https://github.com/aretecode/awesome-advice)

- **15 minute rule (proverbial)**
  - If you ask for help on a problem before doing at least 15 minutes of work researching, debugging, and defining your problem, you're doing the other person a disservice.
  - If you wait longer than 45 minutes and you are stuck, you are doing yourself a disservice.
- #1. most important thing in programming is knowing how to research
- #2. is research
- #3. is research
- The better the problem is defined, the better the solution will be
- Have [variable names describe their intention](https://twitter.com/svensauleau/status/856424137493008384)
- Premature optimization is the root of all evil
- Make it debuggable
- Join in the community

## Who should I interview next?

1. [eliperman](https://github.com/eliperelman)
2. [nchanged](https://github.com/nchanged)

## Conclusion

TODO: I'll fill this up, thank, and link. Feel free to add resources here.

Thanks for the interview James!


### Resources (TODO: integrate these above)

- [d-l-l](https://github.com/fliphub/d-l-l)
- [chain-able](https://github.com/fluents/chain-able)
- [official webpack dll example](https://github.com/webpack/webpack/tree/master/examples/dll)
- [Robert Knight's article on the dll plugin][dll-article-robertknight]
- [invisionapp on optimizing webpack builds with dll plugin](http://engineering.invisionapp.com/post/optimizing-webpack/k)
- [medium caching assets long term with dll plugin](https://medium.com/connect-the-dots/caching-assets-long-term-with-webpack-5ad24a4c39bd#.58yunf3an)
- [dll plugin on stackoverflow](http://stackoverflow.com/questions/36986460/selecting-webpack-dll-bundle-via-scope-mode)
