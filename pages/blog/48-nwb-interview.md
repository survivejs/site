---
title: 'nwb - CLI for React Applications and Components - Interview with Jonny Buchanan'
date: 2016-05-09
headerImage: 'assets/img/clock.jpg'
keywords: ['interview', 'react', 'boilerplate']
---

Boilerplate code is perhaps one of the leading causes of JavaScript fatigue. You often have to go through certain motions to set up a project or maintain a boilerplate of your own. In [the previous interview about kotatsu](./kotatsu-interview) we saw one possible solution.

[nwb](https://github.com/insin/nwb) is another similar project with its own ideas. To understand better what it's about, I am interviewing the author of the project, [Jonny Buchanan](https://twitter.com/jbscript).

### Can you tell a bit about yourself?

<p>
  <span class="author">
    <img src="https://www.gravatar.com/avatar/98d0816016ba9c3bfafbd9cf433aeaa4?s=200" alt="Jonny Buchanan" class='author' width='100' height='100' />
  </span>

I've been working as a full-stack web developer for about 12 years, mostly on enterprise intranet apps. The main app I'm currently working on has a React-based frontend and makes use of nwb for development.
</p>

My wife and I live just outside Brisbane with our 3 kids after upping sticks in February this year and emigrated away from Northern Ireland.

## How would you describe *nwb* to someone who has never heard of it?

nwb is a tool for running live development builds, unit tests and production builds for various types of JavaScript projects without the `devDependency` and configuration file boilerplate those tasks usually require.

It's a bit like a meta-package which not only owns the dependencies for Babel, Webpack, Karma and other common development tools for you, but also generates configuration for them on the fly and handles the details of using them all together.

It allows you to get that ES6, hot-reloading, style-including, code-splitting, live unit-testing developer experience we've become accustomed to without adding umpteen `devDependencies` to every project and either having to have the initial configuration fight with these tools yourself or copying and pasting configuration files into your project.

## What can *nwb* offer for React projects and components?

For React projects, nwb can run a hot-reloading development server (with some extra development niceties), run unit tests and create a production-optimised build (including extracting stylesheets and creating a separate vendor bundle).

If you're running your own local development server, nwb also provides middleware (currently only for Express) you can drop in to serve its hot-reloading development build.

For React components and other npm modules, nwb can also create ES5 (for Node), ES6 module (for Rollup) and UMD (for `<script>` or AMD usage) builds ready for publishing to npm, as well as doing hot reloading and building of a demo app for your React component.

## How does *nwb* do it?

To provide a workflow around these capabilities, nwb can generate very basic skeleton projects. For example, `nwb init react-app && nwb serve --auto-install` will initialise a simple React app in the current directory and start a hot-reloading development server which will automatically install new dependencies as you import them.

If you need to tweak the default configuration, you can add an `nwb.config.js` file to your project which I've tried to keep as declarative as possible. For example, if you want to tweak configuration of the default set of Webpack loaders, each loader has a unique id associated with it. e.g. to enable [CSS Modules](https://github.com/css-modules/css-modules) in the `css-loader` which is part of the default style pipeline nwb sets up:

```js
{
  webpack: {
    loaders: {
      css: {
        query: {
          modules: true
        }
      }
    }
  }
}
```

## What makes *nwb* different compared to other solutions?

Compared to other solutions, nwb is focused almost entirely on reducing tooling boilerplate for common tasks and making the config it generates tweakable, whereas others get deeper into how you architect your React apps.

nwb probably has the most similar "why?" story to the one on the Formidable Labs' [Builder](http://formidable.com/open-source/builder/) homepage and shares Builder's ability to deal with multiple project types, but limits itself to a small number commands in the core and simple skeleton projects versus Builder's extensiblity and richer project archetypes.

Ryan Florence's [React Project](https://github.com/ryanflorence/react-project) has the same philosophy to be "a dependency - not a boilerplate", but it's also concerned with owning some of the details of creating React apps for you, such as how you create a server configured for server rendering with React Router.

Both of these are probably better bets than nwb if you want to get started with a production-ready React app with routing, server rendering etc. ready to go, whereas nwb was extracted from the experience of frequently building React apps from scratch which didn't always need those capabilities.

## Why did you develop *nwb*?

It's one of those "scratch your own itch" projects - I was getting tired of copying the same `devDependencies` and configuration files around when creating new projects, then having to deal with updating dependency versions and making sure the latest configuration tweaks were present when maintaining projects.

The initial `0.0.x` versions were a prototype: copy the various configuration files I was using into a new module, install all the necessary development dependencies next to them and figuring out how to run the tools with the config against a different project.

This worked fine for most of my projects which were using the same vanilla config, but others had some very specific needs which would need configuration to be dynamic beyond the usual `dev`/`test`/`prod` logic people tend to have in their Webpack config to avoid repitition.

As I was still scratching my own itch, I could have hardcoded special cases for the other config I needed in the prototype, but that didn't feel right, while making everything properly dynamic felt like a lot of work when the  benefit to my apps was relatively small.

I used the knowlege I'd gained about running tools in a different context to do for [ESLint configuration](https://github.com/insin/eslint-config-jonnybuchanan) (which was also getting copied around) what I'd done for my build tooling and thought that would probably be the last time I'd touch nwb.

A few days later, the video of [Yehuda Katz's keynote from EmberCamp London 2015](https://www.youtube.com/watch?v=gk-xyLM7R4g) got posted to YouTube, in which he gives an accelerated demo of building a GitHub issues browser from scratch using Ember CLI. I'd looked at Ember CLI to see what the API was like and played about with it a bit, but I'd never seen a complete example of someone using it from scratch to a working app.

Seeing the convenience of that workflow in action put a picture in my mind of exactly what I'd need to implement to be able to do a similar demo with nwb and React (with HMR instead of full page refreshes, which felt really strange to see again) - it'd need to be able to create skeleton apps for a start, and in order to be able to add extra style loaders via plugin modules (for the Sass styles used in the demo), Webpack config generation would need to be much more dynamic...

## What next?

Generally just keeping up to date with what's happening in the JavaScript ecosystem - the major benefit I get from nwb is only having to deal with the details of staying up to date in once place, and easily being able to update individual projects when I'm good and ready by bumping the dependency and following any upgrade steps in the release notes.

Some of the planned next steps are:

**Babel 6** - nwb still uses Babel 5 due to Babel 6 effectively depending on npm3's deduplication at install time, and I'm still using Node v4 and npm2 at home and taking Babel 5 into consideration anymore. nwb needs to catch up and either explicitly drop support for npm2.

Alternatively I need to figure out an alternative way to consume Babel 6 plugins which doesn't disadvantage people who are using npm2. Node v6 enters active LTS in October this year, after which npm3 becomes the default version for people waiting for the next active LTS to upgrade.

**PostCSS** - nwb is using the now-deprecated `autoprefixer-loader` as a part of its default Webpack style pipeline and will need to switch to using PostCSS directly instead. I've not personally used it before, so that's something else for which I need to figure out a way to make configurable.

**Proper cachebusting** - using Webpack to generate builds where all output filenames have a content hash which is stable when nothing has changed proved to be tricky without a working mental model of how Webpack operates under the hood.

I have a possibly-working implementation of this in a branch which feels like it works by coincidence, with at least 2 places where I couldn't begin to explain why it works, so I'm holding off on that for now.

**Extensibility?** - nwb is currently set up a bit like Babel 5 in that all the different types of projects it can handle are baked into the `nwb` module. These could possibly be extracted into modules like `nwb-react-app`, `nwb-npm-module` etc., but the current implementation wasn't designed with this in mind.

I might try to make it more extensible if I ever need new project types which need a substantially different set of development dependencies, but I like the simplicity of things for now.

## What does the future look like for nwb and web development in general? Can you see any particular trends?

I hope a blessed CLI tool for React will emerge from the React community or Facebook so we can all direct our time and effort in the same direction. The approach react-project takes to avoiding boilerplate feels right to me - figure out which bits of plumbing will be the same and use them as dependencies instead of copying them into your project.

If you have dependencies which enforce some base conventions, that also opens up the possibility of using code generation to speed up repetitive processes, but I'd like to see that coupled with codemods which help you upgrade later so we don't end up with the same problems boilerplates and code generators leave us with today.

I think Progressive Web Apps are going to become common once tooling and browser support catch up - I've been getting a closer glimpse of the bleeding edge recently because Addy Osmani has been using [react-hn](https://github.com/insin/react-hn) for some PWA experimentation.

Maybe that's something which could be extracted out into a higher level tool, eh?

## Who should I interview next?

I'd like to read what a Ryan has to say about JavaScript tooling and webapps, be they a [Florence](https://github.com/ryanflorence) or a [Roemer](https://github.com/ryan-roemer).

But definitely a Ryan.

## Conclusion

Thanks for the interview Jonny! nwb definitely fills a niche. It's interesting to see if/when the situation becomes stable. I would love to see a blessed solution as well as it would bring stability especially to the React ecosystem known for its churn.

The easiest way to get started with nwb is to [head to the project site](https://github.com/insin/nwb) and go from there. There is also specific [documentation](https://github.com/insin/nwb/tree/master/docs) available explaining the system in greater detail.
