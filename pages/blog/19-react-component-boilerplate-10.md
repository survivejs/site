---
title: 'React Component Boilerplate v1.0'
date: 2015-10-22
headerImage: 'assets/img/boilerplate.jpg'
keywords: ['react']
---

If you [try searching GitHub for React boilerplates](https://github.com/search?utf8=%E2%9C%93&q=react+boilerplate), you'll find over thousand results. Nothing is harder than to agree on a standard boilerplate. As a result we have many to choose from.

Given I like to author React components, such as [Reactabular](http://reactabular.js.org/), I've developed a little boilerplate myself. [survivejs/react-component-boilerplate](https://survivejs.github.io/react-component-boilerplate/) incorporates a large amount of good practices. I'll go through some of them next. I cover many of them [at the book](..webpack_react/authoring_libraries/) but it doesn't hurt to dig deeper.

## Testing

I implemented my testing approach based on Cesar Andreu's [web-app](https://github.com/cesarandreu/web-app). It is based on [Karma](https://karma-runner.github.io) (test runner), [Mocha](https://mochajs.org/) (test framework), [Chai](http://chaijs.com/) (assertions), and [PhantomJS](http://phantomjs.org/) (headless browser). Code coverage reports are generated through [istanbul](https://gotwarlost.github.io/istanbul/) and [isparta](https://github.com/douglasduteil/isparta) (Babel compatibility for istanbul). Besides casual *npm test*, there's also a TDD mode (*npm run tdd*) so you can run tests automatically while you develop.

Not surprisingly this is where most of the complexity of my boilerplate lies. There's not much I can do about it, though. There are times when I wish npm allowed more granularity. If I could push test dependencies to something like `testDependencies` or define hierarchies below `devDependencies`, that would help me to communicate the intent better.

My earlier setup relied on Facebook's [Jest](https://facebook.github.io/jest/). Even though it's easier to hook it up, I find the current approach more developer friendly. I never could get into grips with Jest's auto-mocking behavior and performance was an issue even with small libraries. It is possible the situation will change but for now I'm sticking with Mocha myself. Keep an eye on Jest, though.

Linting is handled through [ESLint](http://eslint.org/). It's an amazing tool and will contribute towards the quality and consistency of your code. Read [my chapter about linting](..webpack_react/linting_in_webpack/) to get into it. There's *npm run lint* and Webpack triggers it as a pre-loader. This way I get linting warnings and errors during develop. In addition I have my editor set up to show them interactively.

## Handling Versions

An important part of developing libraries is actually publishing them. I've tried to keep this simple. I can get a release out simply by hitting:

```bash
$ npm version 0.2.1
$ npm publish
$ git push
$ git push --tags
```

I know this could be hidden easily behind a single command but it's not too bad as I might not want to push immediately always. A tool known as [semantic-release](https://www.npmjs.com/package/semantic-release) could simplify the workflow further but I haven't adopted it yet. 

To make sure I get the right build artifacts out there in the current approach, I've set up a couple of npm hooks like this:

```json
{
  ...
  "scripts": {
    ...
    "preversion": "npm run test && npm run lint && npm run dist && npm run dist-min && git commit --allow-empty -am \"Update dist\"",
    "prepublish": "npm run dist-modules",
    "postpublish": "npm run gh-pages && npm run deploy-gh-pages",
    "postinstall": "node lib/post_install.js"
  }
}
```

*preversion* hook makes sure all tests pass, lint included, generates distribution builds, and includes those into a commit. I prefer to maintain the builds this way as it's convenient and I don't feel they bloat the repository too much. So far the approach has worked well.

*prepublish* hook makes sure the npm version of the package gets generated. In short, it just triggers [Babel](https://babeljs.io/) over the source and converts possible special features and JSX I'm using into a form that's easy to consume from the Node.js world.

*postpublish* generates the package site and pushes it to the *gh-pages* branch. The setup is isomorphic and it will convert the project *README.md* into a HTML structure. This was implemented to make sure the package page works even without JavaScript. There's also a minor SEO benefit. And you get to say that your boilerplate is isomorphic so there's that.

*postinstall* portion is there to make sure that it is possible to consume the package through a GitHub reference (i.e., `bebraw/reactabular#hashgoeshere`). If I detect that there isn't expected directory, it will trigger *npm run dist-modules* just like the *prepublish* process does. The only problem is that the current solution supports only Node.js 0.12+. It would be possible to rewrite that if it becomes an issue.

## Pre-push Hook

Even though I have [Travis CI](https://travis-ci.org/) set up and make it run my tests after each push, I've gone a step further. I like to catch problems before a push. That's why I've set up a pre-push hook through a package known as [git-prepush-hook](https://www.npmjs.com/package/git-prepush-hook). It writes the Git configuration to your repository when you install it. You can control its behavior through *package.json* by a declaration like this:

```json
{
  ...
  "pre-push": [
    "test",
    "lint"
  ]
}
```

You tell it what npm scripts to execute and it does that before a push. The biggest advantage of doing this is that it allows you to fix potential issues before they end up in public consumption. You can do the fix and then make it look as if you didn't make one through an interactive rebase (`git rebase -i`). It's one of those Git features that can help to keep your version history sane.

## Other Features

There's of course [React Transform](https://github.com/gaearon/babel-plugin-react-transform) based hot loading. The Webpack configuration is a little elaborate but I've done my best to keep it readable. You can find some usual React related optimizations there (mainly env). The isomorphic portion takes some code as well.

## What Next?

I've been thinking of pushing some of the common parts to a library of its own to ease the maintenance effort. This is the way [hjs-webpack](https://www.npmjs.com/package/hjs-webpack) does it. The problem is that a boilerplate is a snapshot always. A library based approach would help in this regard. Most importantly, it would help to cut down the amount of dependencies.

I believe it could be valuable to adopt a tool such as [commitizen](https://commitizen.github.io/cz-cli/). That would make it easier to write meaningful Git commit messages. Even better, the tool can generate change logs for releases.

## Conclusion

I hope you'll find my little boilerplate useful. There might be some ideas there you could adopt for your own. Boilerplates are a little problematic maintenance-wise, but as mentioned, it might be possible to alleviate that by pushing the problem elsewhere.

Of course the situation is far worse if you don't have a boilerplate to begin with. Even a small project tends to require quite a few dependencies before you can become productive with it.
