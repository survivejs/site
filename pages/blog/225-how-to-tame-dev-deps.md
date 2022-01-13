---
title: "How to tame the devDependencies of your project?"
date: 2022-01-13
headerImage: "assets/img/web.jpg"
keywords: ["javascript", "dependencies", "npm"]
---

It's not uncommon for a normal JavaScript application to have thousands of dependencies. Once you start having multiple projects, the problem of having to maintain them is pronounced.

It's for this reason that solutions like [Create React App](https://create-react-app.dev/) and [Nx](https://nx.dev/) exist. They capture at least some of the complexity and own certain dependencies for you.

It's not only dependencies that you have to maintain. Often you have to worry about concerns such as linting, testing, and formatting. Assuming you want to keep these concerns consistent across different projects, then the question becomes how to maintain configuration.

In this post, I'll describe a package based approach that addresses both concerns. By encapsulating development dependencies and configuration to a npm package, you can maintain them in a single place to share across projects. As a side effect, doing this makes it easy to bootstrap new projects with the same defaults.

As an added benefit, as you evolve the package, you'll be able to cascade changes to the projects via version updates that then patch configuration to the most recent one by leveraging the power of mrm.

## Brief introduction to mrm

[Codemods](/blog/codemod-interview/) are pieces of code that describe changes to code. In effect, by writing codemods, you are writing small tools for yourself to make it easier to migrate to a new style of an API for example.

[mrm](https://www.npmjs.com/package/mrm) works in a similar way but at the level of configuration. By using mrm's API, you can describe what a change to configuration should look like. This is similar to what you would do with a database migration for example.

In practice, mrm works best with JSON format as it's convenient to apply patches to it. It's a good argument for favoring JSON or some other regular format over code for configuration although you lose some power in return.

Although mrm was designed for patching projects to new configuration, it happens to work well for bootstrapping new projects since in that case it will build the configuration from scratch.

T> mrm includes common tasks so you might not even use the programmatic API. You'll have to learn it to do anything more complex, though, so I'll cover the programming model briefly in this post.
## Using a package to capture dependencies and configuration

Now that we know what mrm is and what it does, it's a good spot to put everything we know together and implement a small package to contain both development dependencies and configuration. The result won't encompass everything you'll need but it's going to be enough code so that you understand how to extend the solution based on your exact needs.

### Setting up a project

To get started, create a new directory (`mkdir module-config`) and trigger `npm init -y` within it to create the initial **package.json** file.

T> This is a good spot to initialize git (`git init`) within the project if you want to create commits step by step.

### Setting up Prettier

In order to simplify formatting, let's set up [Prettier](https://prettier.io/). We'll also share this setup with the consumers of the project so it's a double win. Although Prettier can run without any configuration, let's add some anyway to illustrate the approach. Set up a file as follows:

**.prettierrc.json**

```json
{
  "printWidth": 90
}
```

You can add your favored Prettier configuration here. I went with a single change to keep this simple.

Next, add Prettier to the project using `npm add prettier --save-exact`. Doing this means that Prettier will be added to the project as a regular dependency and its version will be fixed.

T> I've found it a good idea to fix versions exactly to avoid trouble if and when a dependency breaks in a minor version. If you prefer this behavior, you can set it in [npm config](https://docs.npmjs.com/cli/v8/using-npm/config) globally.

### Using mrm to patch Prettier to projects

Although Prettier has been set up now, we still have to share it with the consumers of the package. As it's a direct dependency of our configuration package, it will be installed but it will still miss the configuration. That's where mrm will come in so let's install it first with `npm add mrm mrm-core --save-exact`.

T> `mrm` is the CLI and `mrm-core` contains API needed for handling configuration files.

To add our Prettier configuration to the consumers and include a `format` script, set up a module as follows:

**index.js**

```js
const { json, packageJson } = require("mrm-core");
const prettierConfig = require("./.prettierrc.json");

module.exports = () => {
  json(".prettierrc.json").merge(prettierConfig).save();

  packageJson().setScript("format", "prettier --write .").save();
};
```

Also make sure that **.prettierrc.json** is included to the files to publish so it won't be left behind:

**package.json**

```json
{
  ...
  "files": [
    ".prettierrc.json",
    "index.js"
  ]
}
```

The question is, how to test that our code works? To keep things simple, we can use `npm link` to link our configuration project locally and then refer to it another project that we want to patch. Try the following from the project directory:

```
npm link
cd..
mkdir module-config-demo
cd module-config-demo
npm init -y
npm link module-config
npx mrm module-config
```

When the last command runs, you should see something like this:

```bash
Running module-config...
Create .prettierrc.json
Update package.json
```

To verify that it worked as we expected, inspect the two files as well.

## Development flow

In order to move from a demonstration to production, you should publish the package behind your own npm namespace for example. After that, you can consume the package. Then you can have the consumers install `module-config` first and then have them run `node_modules/.bin/mrm module-config` since installing the package will install mrm as well.

To improve the approach further, your initial patching process could write a npm script called `update-configuration` that's running that command. Then, whenever you want to apply new configuration to project, you would invoke `npm run update-configuration` after updating the `module-config` dependency.

The core point is that you can treat configuration and dependency updates as a package dependency now and as a result you can apply the same practices you would use for any package including describing changes between releases and you could consider applying SemVer to describe the severity of the changes.

## Conclusion

I've found that the combination of using a package and mrm to manage development dependencies is powerful as it allows you to encapsulate common development concerns into a single place. In a client project, we use it to manage VS Code configuration, Jest, Karma, TypeScript, ESLint, **.gitignore**, Dependabot, licensing and even more.

Although approaches, such as monorepos, alleviate some of the related pain, I've found the package approach can complement them and give you a single place where to extract meta concerns of JavaScript projects while allowing sharing of knowledge across an organization while avoiding duplication of practices.

The side effect of this is that it's easier to move across projects as you know what kind of setup to expect assuming it's kept up to date through the package dependency.
