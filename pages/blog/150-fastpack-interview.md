---
title: 'Fastpack - Pack JavaScript code fast and easy - Interview with Oleksiy Golovko'
date: 2018-05-29
headerImage: 'assets/img/builder.jpg'
keywords: ['interview', 'fastpack', 'bundling']
---

Tools like browserify and webpack popularized the idea of bundling. The idea is to transform your web application into a format that can be distributed to browsers. Bundlers operate on module level and can combine the assets in various ways.

[Fastpack](http://fastpack.io/) by  [Oleksiy Golovko](https://twitter.com/zindelzindel) is a new bundler that emphasizes performance. Read on to learn how it achieves this goal.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/8aa7fdc0b430eeed5724622e86a40c12?s=200" alt="Oleksiy Golovko" class="author" width="100" height="100" />
</span>
I am a freelance Software Developer living in Prague, Czech Republic. I have been working with various web technologies as of 2004 (PHP at that time!). I love solving challenging problems and working on the development tools.</p>

When not programming I read, play tennis/squash/badminton and spend time with my three kids and the beautiful wife. Also, I am passionate about tasting good beers – you cannot resist it here in the Czech Republic!

## How would you describe *Fastpack* to someone who has never heard of it?

*Fastpack* is a Javascript bundler. It can bundle other assets as well using webpack's loaders.

## How does *Fastpack* work?

*Fastpack* is written in OCaml and compiled into a binary executable. To start using it, you need to install it from npm: `npm install fpack`. If everything went fine, you should be able to run `node_modules/.bin/fpack --help`.

We are trying to maintain the minimum set of required configuration parameters. The only way to pass those is to submit them as command line arguments: entry points, output configuration, resolver settings and preprocessors.

Under the hood it works just like most bundlers do:

1. Resolve dependencies.
2. Collect modules.
3. Optionally apply transformations.
4. Produce the output.

*Fastpack* uses the [Flow](https://github.com/facebook/flow/) parser for JavaScript, so JSX and flow typings supported out if the box.

Consider the examples below to see how Fastpack can be used:

### Build development mode bundle

```bash
$ fpack --dev -o dist ./lib/index.js
```

### Apply transformations to all JavaScript files in the `lib/`

```bash
$ fpack --preprocess='^lib/.+js$' --dev -o dist ./lib/index.js
```

### Use `babel-loader` for transformations

```bash
$ fpack ./lib/index.js \
    --dev \
    -o dist \
    --preprocess='^lib/.+js$:babel-loader?filename=.babelrc'
```

T> You can find more examples and the documentation on the [fastpack.io](http://fastpack.io) site.

## How does *Fastpack* differ from other solutions?

Well, it is faster :) Speaking seriously, we are aiming for three primary goals:

1. Make bundling phase as fast as possible, ideally, disappearing.
2. Keep configuration approachable and straightforward.
3. Keep the *Fastpack*'s source code clean and logical, so that people can collaborate on it.

Naturally, we keep in mind other success parameters, like bundle size, which is very important too. But that's the second tier goal for now.

## Why did you develop *Fastpack*?

There were several reasons: First, I wanted to understand OCaml & ReasonML better. What do people do with it? What is the workflow? What are the hiccups? TodoMVC or even "Real World Example" didn't seem to be exciting use cases, so I decided to try something out of the compiler's side of things.

The second reason was the amount of the JavaScript code we had in my company. Our bundles are quite big and took a lot of time to rebuild. Of course, I could have configured webpack better, but I was never too successful in it.

## What next?

*Fastpack* is young, and there is a long road behind us until it matures enough. Right now, we are considering several directions, which are:

* Further speed improvements - there are still optimizations which are possible on this front.
* Improving the bundle size - more aggressive tree shaking using the control flow graph and elements of the symbolic computation.
* Getting the feedback, polishing existing functionality, fixing bugs - e.g., the usual things.

Overall, I am passionate about the development tools and would be happy to contribute to other related projects as well.

## What does the future look like for *Fastpack* and web development in general? Can you see any particular trends?

As far as I can say, we would still need bundler in short/medium term. Hence, *Fastpack* may have its niche and its users. On the other hand, the HTTP/2 and supporting ECMAScript modules in browsers will likely eliminate a lot of bundler use cases in a long run.

The other (unrelated to Fastpack, or partially related because of the language) trend going on right now is the ReasonML. I think this is the future of the web development alongside the Elm and PureScript.

Of course, I am biased, so take it critically, but writing, debugging & maintaining the OCaml/ReasonML code is so much more comfortable, safer & more pleasant than any other dynamically-typed language I have experienced before.

## What advice would you give to programmers getting into web development?

I am not feeling in a position to be giving advice, but I think something trivial like "learn, practice and communicate" should always work. And yes, **learn OCaml/ReasonML** :)

## Who should I interview next?

I would love to see an interview with Andrey Popp (@andreypopp), Patrick Stapfer (@ryyppy), Nik Graf (@nikgraf) and Vladimir Kurchatkin (@vkurchatkin) - really loved his talk on ReasonConf.

## Any last remarks?

Thank you for the interview!

## Conclusion

Thanks for the interview Oleksiy! Fastpack looks promising. I like the approach and now I'm tempted to try out the tool in a few projects of mine.

Learn more at [Fastpack documentation](http://fastpack.io/) or [Fastpack GitHub](https://github.com/fastpack/fastpack).
