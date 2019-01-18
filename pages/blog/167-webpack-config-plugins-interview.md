---
title: 'webpack-config-plugins - Best practices for webpack loader configurations - Interview with Jan Nicklas'
date: 2019-01-18
headerImage: 'assets/img/plugins.jpg'
keywords: ['interview', 'webpack']
---

Managing webpack configuration can get tough especially if you try to track best practices and optimizations.

To address this problem, [Jan Nicklas](https://twitter.com/jantimon) has come up with a solution in the form of webpack plugins.

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/bb6300b595a0853eaefeb5f9c78a4b31?s=200" alt="Jan Nicklas" class="author" width="100" height="100" />
</span>

As a child, my dad showed QBasic to me, and I got fascinated by the fact that my computer would do everything I told it to - even task which I would not be able to do by myself.

</p>

This fascination has never stopped, drove me into studying CS and somehow turned a hobby into my job. By now I have worked for nine years in Germany, Austria, Switzerland, and the US.

In 2015 I discovered that webpack would allow me to write an offline-capable web app, but I had to repeat some manual steps on every change. Because of this, I discovered [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and eventually became its maintainer.

## How would you describe _webpack-config-plugins_ to someone who has never heard of it?

Webpack provides already very powerful defaults, but to be flexible, it asks you to configure your loaders manually.

_webpack-config-plugins_ offers you multiple presets for your loader configuration to reduce the boilerplate part of setting up webpack.

## How does _webpack-config-plugins_ work?

During the plugin initialization phase, the _webpack-config-plugins_ presets will inject additional loader and plugin configurations to your webpack configuration.

Webpack provides a `mode` option which allows you to optimize it for development or productions. _webpack-config-plugins_ uses this mode to decide whether the presets should be optimized for development or production.

## How does _webpack-config-plugins_ differ from other solutions?

There are already excellent boilerplates available. Unfortunately, most of them are opinionated and add another layer of configuration on top of webpack and lock you into that.

_webpack-config-plugins_ is an attempt to break these boilerplates into smaller pieces to allow you to pick the presets you need and to keep you in control but still let you update your loader configurations.

The configuration of a preset is the same you would write into your webpack config manually. Because of this, users should be able to understand or even modify presets quite easily.

## Why did you develop _webpack-config-plugins_?

Our requirements often led us away from prebuilt boilerplates. However, after some month of development, it was costly to upgrade webpack, webpack plugins and webpack loaders because we didn't have tests for our webpack configurations.

The problem led to the idea of automatically tested webpack configurations to understand which loader or plugin upgrade would influence your build asset results or your build performance.

## What next?

The [automated performance tests](https://travis-ci.org/namics/webpack-config-plugins/builds/471694940) seem to provide a lot of value. However, the work on them has just begun, and there is more to be done.

## What advice would you give to programmers getting into web development?

Try to find a small design or app that YOU really would like to build and start.

Your first work doesn't need to be perfect, and you will learn a lot from your mistakes keep going until you reached your goal :)

## Who should I interview next?

Even Stensberg (**@evenstensberg**) works hard at the _webpack-cli_.

## Conclusion

Thanks for the interview Jan! I think packaging webpack best practices into plugins is a worthwhile idea. The approach is flexible enough to let users pick only the presets they find valuable while maintaining the rest on their own.

T> [Check out webpack-config-plugins on GitHub to learn more!](https://github.com/namics/webpack-config-plugins) See also [the online app that helps you to choose the right presets](https://webpack-config-plugins.js.org/).
