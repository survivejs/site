---
title: 'webpack-merge - Taming Webpack Configuration - Interview with Juho Vepsäläinen'
date: 2016-11-29
headerImage: 'assets/img/galaxies.jpg'
keywords: ['interview', 'webpack']
---

It's almost funny how far a simple idea can fly sometimes. When writing my first book, I ran into the problem of configuring webpack. I prefer to keep my configuration in a single file and duplication goes against my nature. As a result [webpack-merge](https://www.npmjs.com/package/webpack-merge) was born.

Given *webpack-merge* reached 1.0 milestone recently, I'm going to talk a bit more about the project.

## How would you describe *webpack-merge* to someone who has never heard of it?

It's easiest to understand *webpack-merge* in terms of input and output. If you give a standard `merge` function a structure containing arrays and objects, it will override them like this:

```javascript
const a = {
  entry: ['./main.js'],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ]
  }
};
const b = {
  entry: ['./other.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
      }
    ]
  }
};

// Avoid mutating a
// Object.assign({}, a, b);
{
  entry: ['./other.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
      }
    ]
  }
}
```

As you can see, the default output isn't that useful. If you wanted useful output, you would have to merge very carefully and apply `concat` here and there. That approach has potential to get messy very fast.

What if you could do just this?

```javascript
const a = {
  entry: ['./main.js'],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ]
  }
};
const b = {
  entry: ['./other.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
      }
    ]
  }
};

// merge(a, b);
{
  entry: ['./main.js', './other.js'],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
      }
    ]
  }
}
```

That looks far more useful. This is essentially what *webpack-merge* does. It concatenates arrays (append by default) and merges objects while creating a new object to play with.

*webpack-merge* implements also something known as *smart merging*. This process folds your webpack configuration into a smaller format (i.e., multiple loader definitions might become a single). There are also strategies available to allow you to control the merging process so instead of appending it might prepend or replace content.

Interestingly enough I've begun to find use for *webpack-merge* beyond webpack as configuration management is a common concern. Whenever you have configuration, you might want to *compose* it.

## How does *webpack-merge* work?

It uses [lodash](https://lodash.com/) internally. There are certain webpack specific portions, but I've left the heavy lifting to lodash. A recent rewrite by Kyle Herock gave it a little performance boost even while improving webpack 2 compatibility.

The rewrite was possible thanks to extensive tests in place. I've tested *webpack-merge* fairly thoroughly (over 200 tests and counting) given it's so critical piece of code to have right or else you start breaking people's projects.

## How does *webpack-merge* differ from other solutions?

There are quite a few solutions for managing webpack configuration. Just to mention a few, consider [webpack-config](https://www.npmjs.com/package/webpack-config) or [easy-webpack](https://www.npmjs.com/package/@easy-webpack/core). Using lodash `merge` is one option, but for the reasons outlined above I don't consider as a good long term way to handle it.

Compared to the other options, *webpack-merge* comes with a tiny API surface. There's not a lot to remember once you understand how it works. Composition allows you to begin to model fragments of configuration as you like and find the abstractions that make sense for you. Andy Wermke did something like this in [webpack-blocks](https://github.com/andywer/webpack-blocks) and I discuss one approach in my [webpack book](/webpack/preface).

A while ago I spent time with a client refactoring their webpack configuration to run through *webpack-merge* and once we were done, the difference was quite immense. A large amount of duplication was gone and we had something together that was possible to share across their projects.

Having less configuration to maintain is always good. You still have to understand what you are doing, but thanks to this approach you can push abstraction to the level you prefer. Maybe in the future we can find nicer configuration definition away and make *webpack-merge* redundant, but I see it as a necessity for my own projects right now.

## Why did you develop *webpack-merge*?

While developing the content of my first book, it quickly became apparent how painful it is to manage webpack configuration. I started from a naïve merge and realized that if it behaved a little differently, I would have a nice way to compose. As a result *webpack-merge* was born and it has been going forward since then.

It didn't get noticed early on, but as you can see from the graph captured from [npm-stat](https://npm-stat.com/charts.html?package=webpack-merge) below, it has become popular this year. It gets downloaded almost 20k times per day now so someone is definitely using it.

![webpack-merge popularity](assets/img/webpack-merge/popularity.png)

## What next?

Now that I have the 1.0 version of *webpack-merge* out there, I consider it ready for public usage. The API feels solid and the project is in maintenance mode. I will merge possible improvements, but I don't expect to develop new functionality to the project myself.

I want to explore the idea of configuration presets further. It's quite possible I'll collaborate with Andy of *webpack-blocks* here. Maybe we'll find something.

There's no one true solution to configuration management as that depends on your personal needs. That said, I believe webpack should come with better defaults. The current defaults are too development oriented and it's too easy to miss certain production specific functionality very easily early on. It's not an easy problem to solve, but you definitely don't solve it unless you give it a go.

## What does the future look like for *webpack-merge* and web development in general? Can you see any particular trends?

I expect more people will find *webpack-merge*. It's popularity will likely saturate at some point and perhaps it will become obsolete at some point as new approaches and tools become available. I think the core idea will remain valid, though, as it feels like something that goes beyond webpack.

Web development is in an interesting place right now. It feels like we are somewhere between two worlds as the standards try to keep up with the development. The constant innovation tells about the need to find better ways to develop for the web. We have made a lot of progress in the past few years alone, but I believe there's still a long way to go.

## What advice would you give to programmers getting into web development?

I think I have answered this before, but let's try again!

It's both harder and easier than it looks. It is harder in sense that we have to deal with legacy. It's easier in sense that the current tooling can be very powerful at best and enable huge productivity.

Focus on the fundamentals. Learning the language well will pay dividends as you learn about different solutions. Get exposed to a lot of technology. Instead of going "all in" with the framework of the day, spend time with alternatives as well. You'll see commonalities and also differences.

## Who should I interview next?

I have a couple of interviews at the pipeline. If you have some cool technology you want to discuss, get in touch.

## Conclusion

I hope you find *webpack-merge* useful! Check out the [npm page](https://www.npmjs.com/package/webpack-merge) and remember to give a star at [GitHub](https://github.com/survivejs/webpack-merge).

> We are running another round of [React Indie Bundle](http://www.reactindiebundle.com/) for a limited time. If you want a nice collection of React related content, it's a good time to invest.
