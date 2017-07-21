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

👋 I'm a flow state enthusiast & crafting code is my life's passion from Vancouver, Canada, eh.
</p>

## How would you describe *d-l-l* to someone who has never heard of it?

<!-- ![0-100](https://i.ytimg.com/vi/iFhma3zUcLs/hqdefault.jpg) -->
![so much time](https://i.redd.it/pdvejjrcz1zy.jpg)


*d-l-l* makes your webpack build faster, in just a few lines, without having to waste time with the tedious manual configuration steps required to use the [DLLPlugin][DLLPlugin].

It lets you _pre-build_ the parts of your code that _don't change often_, so when you change the parts that do, it's exponentially faster. It adds some helpful utilities for finding and adding dependencies & files that do not often change.

## What's a minimal example using *d-l-l*?

```javascript
const dll = require('d-l-l')

module.exports = dll
  .init()
  .dir(__dirname)                    // like context in webpack, very important
  .config(config)                    // webpack config
  .pkgDeps((deps, dev, all) => deps) // easily filterable arrays
  .find(`src/**/*.+(js|jsx)`)        // glob to find old files
  .lastModifiedFilter({days: 1})     // find files that haven't changed > 1 day
  .toConfig()                        // returns the values for webpack to use
```

## How does *d-l-l* work?

![magic](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

> What if I told you that you could make a webpack build go from 1 minute to 1 second?

<!-- https://media.giphy.com/media/8sDQ7nUXrGktG/giphy.gif -->

When required, a DLL-only webpack config is created and is prepended to the webpack.config.js exports.

<!-- Note> It would a little simpler if webpack allowed synchronous building of config files. -->

Cache files are created in a `.fliphub` folder, which helps provide means for some smart-ish checks as below:

1. *d-l-l* analyzes your webpack config
2. Extracts </abbr title="output path">important pieces</abbr> from it
3. Takes the <abbr title="see above example">configuration given to it</abbr>,
4. Checks the available information like this:

- a. When no cache folder/files exists or
- b. When there are no <abbr title="the .json files that keep a record of what was built & where the files are">manifest files</abbr>
- It will add the decorated dll config, otherwise, it will safely leave it out.

Another option:

- a. When <abbr title="(configurable, defaults to *package.json*, *webpack.config.js*, require.main.filename)">[cache-busting-files][docs-cache]</abbr> are modified or
- b. [Every X (default 33) builds][docs-everyx] or
- c. [A day or more has passed since the last build][docs-staletime]
- The cache is cleared and built again

## More advanced example?

Now that the bases are covered, a more advanced use case is more easily digestible:

```js
const dll = require('d-l-l')

const configs = dll
  .init()
  // good to play with - very verbose debugging
  .debug(true)

  // forces building of d-l-l
  .shouldBeUsed(true)

  // returns original config, makes it easy to swap side-effect free
  .og(true)

  // same as earlier
  .dir(__dirname)
  .config(config)

  // can provide resolved dep paths here manually
  .deps(['lodash', 'inferno'].map(dep => require.resolve(dep)))

  // or filter package json deps
  .pkgDeps((deps, devDeps, allDeps)) => {
    // ignore deps that have `dev` dev in them, such as dev tools
    return deps.filter(dep => !/dev/.test(dep))
  }

  // finds files matching a provided glob
  .find(`src/**/*.+(js|jsx)`)
  .lastModifiedFilter({days: 1})

  // takes the config from connected Maps into an object webpack can understand
  .toConfig()

```

## How does *d-l-l* differ from the other solutions?

There are no other solutions. The only other option is do everything *d-l-l* does... yourself. This means maintaining the DLL file and then having configuration to point to it. The point of *d-l-l* is to avoid all that complexity.

## Why did you develop *d-l-l*?

I was developing <details><summary>[fliphub][fliphub], </summary>

  <p>made to be an incredibly easy solution for allowing a unified syntax across all bundlers, with a large translation layer.</p>
  <p>able to be used in only 1 line (dozens of examples work for the proof-of-concept)...</p>
  <code>require('fliphub').init({entry: './src/index.js'}).build()</code>
  <h2>Depreciated...</h2>
  <p>it turned out to be much too big of a project with endless & very high maintainability since it would have to stay up to date with the changing api of those external bundler dependencies</p>

</details>and found there was no webpack documentation for the [DLLPlugin][DLLPlugin], so as I researched, experimented, wrote the documentation, I discovered how powerful it was, but also how extremely clunky the config required to use it was.

To give a taste of what I mean by clunky, you have to have two separate webpack **files**! The DLL config has to be built first, and then the normal config has to be built. If the normal config uses the [DLLReferencePlugin][DLLPlugin], and the dll config wasn't built first... it just breaks.

Adding even more commands to the build process wasn't going to happen, and so *d-l-l* was born.

## What next?

First things first: it will get an update with some more features. In the future, in an ideal world, the core solution it provides will be integrated into webpack core.

The minimum most effective plan would consist of trimming down dependencies, tightening up the logic, boiling down the code domain, extracting the solution that enables the ease of use, covering all corners with air-tight tests, then merge it so that the whole community can benefit from the functionality.

### Plan

I have a plan to add a wrapper library to webpack (webpack-wrap), allowing external easy & smart configuration of internal functionality.

### chain-able

All of the libraries I create use [chain-able][chain-able], which enables me to easily crate interfaces that describe their intentions, and make simple solutions for complex problems.

### webpack-wrap

- Abstract the [d-l-l][d-l-l] wrapper
- Easy splitting [webpack-split-plugin][webpack-split-plugin]
- Webpack merging, using [neutrino][neutrino] presets in your webpack config
- Finishing [happypack2][happypack2] & [chain-able-webpack][chain-able-webpack] which allows automatic wrapping of configs in a similar fashion, <abbr title="resolving all relative paths in your config">automatic traversable path resolving</abbr>, integrating with [webpack-cli][webpack-cli] & adding hints for common misconfigurations

## What does the future look like for web development in general? Can you see any particular trends?

- Better tools and language support. people want to use the coolest hottest sugar syntax which requires still a whole set of sub-skills for the tools required to provide compatible software
- Companies competing in open source for developers to use their particular flavor of the latest greatest
- Easier to use and more widespread AI use in open source alongside private code

## What advice would you give to programmers getting into web development?

I couldn't fit it reasonably in this block, so I put it into a repo on [awesome-advice][awesome-advice]

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

[webpack-src-dll-example]: https://github.com/webpack/webpack/tree/master/examples/dll
[dll-article-robertknight]:  https://robertknight.github.io/posts/webpack-dll-plugins/
[dll-article-medium]: https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7#.qh2wt3gr9
[dll-article-invision]: http://engineering.invisionapp.com/post/optimizing-webpack/k
[dll-article-medium-cache]: https://medium.com/connect-the-dots/caching-assets-long-term-with-webpack-5ad24a4c39bd#.58yunf3an
[dll-stackoverflow]: http://stackoverflow.com/questions/36986460/selecting-webpack-dll-bundle-via-scope-mode

- [d-l-l][d-l-l]
- [chain-able][chain-able]
- [official webpack dll example][webpack-src-dll-example]
- [Robert Knight's article on the dll plugin][dll-article-robertknight]
- [invisionapp on optimizing webpack builds with dll plugin][dll-article-invision]
- [medium caching assets long term with dll plugin][dll-article-medium-cache]
- [dll plugin on stackoverflow][dll-stackoverflow]

<!-- webpack -->
[DLLPlugin]: https://webpack.js.org/plugins/dll-plugin
[webpack-cli]: https://github.com/webpack/webpack-cli
<!-- from d-l-l -->
[d-l-l]: https://github.com/fliphub/d-l-l
[docs-resources]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%94%97-resources
[docs-config]: https://github.com/fliphub/d-l-l/wiki/%E2%9A%99-configs
[docs-how]: https://github.com/fliphub/d-l-l/wiki/%E2%9A%A1%F0%9F%A4%B8-d-l-l#-how
[docs-ss]: https://github.com/fliphub/d-l-l/wiki/%E2%9A%A1%F0%9F%A4%B8-d-l-l#%EF%B8%8F-screenshots
[docs-auto]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#auto-static
[docs-find]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#find
[docs-lastmodified]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#lastmodifiedfilter
[docs-how]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#find
[docs-pkg]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#pkgdeps
[docs-cache]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#cachebustingfiles
[docs-everyx]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#everyx
[docs-staletime]: https://github.com/fliphub/d-l-l/wiki/%F0%9F%8C%90-api#staletime
[src-shouldBuildDLL]: https://github.com/fliphub/d-l-l/tree/master/index.js#449
[happypack-cache]: https://github.com/amireh/happypack#cachepath-string
<!-- other -->
[fliphub]: https://github.com/fliphub/fliphub
[webpack-split-plugin]: https://github.com/aretecode/webpack-plugin-split
[happypack2]: https://www.npmjs.com/package/happypack2
[chain-able]: https://github.com/fluents/chain-able
[chain-able-webpack]: https://github.com/fluents/chain-able-webpack
[neutrino]: https://github.com/mozilla-neutrino/neutrino-dev
[awesome-advice]: https://github.com/aretecode/awesome-advice
