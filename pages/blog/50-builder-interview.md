---
title: 'Builder - A npm-based task runner - Interview with Ryan Roemer'
date: 2016-05-16
headerImage: 'assets/img/builder.jpg'
keywords: ['interview', 'react', 'boilerplate']
---

[Builder](https://github.com/FormidableLabs/builder) by Formidable Labs is one of those projects tackling the boilerplate issue. It is a project that repurposes npm `scripts` into something more powerful. To learn more, let's let [Ryan Roemer](https://twitter.com/ryan_roemer) discuss builder in detail.

### Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/e5b6fdf2e8af6487241497183581f87a?s=200" alt="Ryan Roemer" class="author" width="100" height="100" />
</span>

I am the CTO and co-founder of [Formidable](http://formidable.com/), a   development shop in (the delightfully weird neighborhood of) Fremont in Seattle, WA. Our main area of focus is React frontends and Node.js backends. Most of my client and open source work these days tends towards frontend build infrastructures.
</p>

Before Formidable, I've had stints as a distributed systems engineer and security researcher. And, in my deep, dark past, I used to be a patent attorney before finding my way to engineering.

## How would you describe *builder* to someone who has never heard of it?

Builder is a tool for wrangling build infrastructures and workflows for a collection of similar projects. It leverages the modern development trend of [`npm`-based workflows](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) with better scalability and flexibility.

### How does *builder* work?

Let's walk through a basic example. Imagine that we have two projects with identical `npm` tasks:

```javascript
// <project1>/package.json
"scripts": {
  "foo": "echo FOO",
  "bar": "echo BAR",
  "foobar": "npm run foo && npm run bar",
}

// <project2>/package.json
"scripts": {
  "foo": "echo FOO",
  "bar": "echo BAR",
  "foobar": "npm run foo && npm run bar",
}
```

which allows us to:

```bash
$ cd <project1>
$ npm run foobar
FOO
BAR

$ cd <project2>
$ npm run foobar
FOO
BAR
```

Great! Unfortunately, as the number of projects increases and these similar tasks change, we end up with a bit of a maintenance nightmare -- keeping up with and updating the latest task set across all projects.

Builder solves this problem with the notion of an ["archetype"](http://formidable.com/open-source/builder/#archetypes) -- a separate npm module responsible for abstracting and managing the common tasks, configurations, and dependencies. Builder allows us to move common `scripts` tasks and `dependencies` / `devDependencies` for those tasks into an archetype project. The archetype can then be published and consumed just like any normal Node.js module.

The builder version of the above example would be:

```javascript
// <project1>/package.json
"scripts": {}

// <project2>/package.json
"scripts": {}

// <archetype>/package.json
"scripts": {
  "foo": "echo FOO",
  "bar": "echo BAR",
  "foobar": "builder run foo && builder run bar",
}
```

Note that we're now using `builder run <task>` in the place of `npm run <task>`. We can execute the tasks with:

```bash
$ cd <project1>
$ builder run foobar
FOO
BAR

$ cd <project2>
$ builder run foobar
FOO
BAR
```

With this simple abstraction, builder allows us to have one central location for:

* [`scripts` tasks](https://github.com/FormidableLabs/builder#tasks)
* [configuration files](https://github.com/FormidableLabs/builder#moving-scripts-and-config-files) (typically in a `config/` directory)
* [`dependencies` / `devDependencies`](https://github.com/FormidableLabs/builder#moving-dependencies-and-devdependencies-from-an-existing-packagejson) for the tasks
* [npm `config`](https://github.com/FormidableLabs/builder#npm-config) variables in `package.json`

while still mostly behaving "just like `npm`".

Builder also provides critical *flexibility* for tasks. Many meta / build frameworks are great when you follow the given workflows, but break down when a project goes "off script". By contrast, builder supports projects doing sub-tasks differently as a first class concern and at a very granular level.

Let's tweak our example so that `<project2>` has a slightly different `bar` task like:

```javascript
// <project1>/package.json
"scripts": {}

// <project2>/package.json
"scripts": {
  "bar": "echo \"I'M GONNA BE DIFFERENT\""
}
```

If we run the specific tasks, we get the correct overrides:

```bash
$ cd <project1>
$ builder run bar
BAR

$ cd <project2>
$ builder run bar
I'M GONNA BE DIFFERENT
```

Builder resolves tasks starting with the root project and then moves up to the archetype on a _per task_ basis. This means that composed tasks like `foobar` will pick up root overrides together with existing archetype commands giving us:

```bash
$ cd <project1>
$ builder run foobar
FOO
BAR

$ cd <project2>
$ builder run foobar
FOO
I'M GONNA BE DIFFERENT
```

And just like that, a single project can easily do one-off changes from the archetype, while keeping all the overall composed tasks and workflows intact.

### What else can *builder* do?

Aside from archetypes, builder provides an enhanced script runner and a project generator.

The motivation for builder's **script runner** capabilities is that `npm run <task>` is sometimes a bit limited, particularly when you want to write cross-operating-system compatible projects. Thus, builder has a few "nice to have" extras beyond `builder run <task>`:

* [**Concurrent tasks**](https://github.com/FormidableLabs/builder#builder-concurrent): `builder concurrent <task1> <task2>` - Great for running multiple tasks at the same time.
* [**Multiple environment variables**](https://github.com/FormidableLabs/builder#builder-envs): `builder envs <task> '[{"MSG": "hi"}, {"MSG": "yo"}]'` - Run the same task many times concurrently, but with different environment variables injected into the respective processes. Great for scenarios like integration tests on various different OS / browser combinations.

At Formidable, we have a couple of one-off projects that don't need an archetype for central control, but do use builder for these task execution helpers.

Looking to builder's **project / boilerplate generation** features, archetypes usually following a defined file structure. It is thus a natural extension for builder archetypes to actually create new, idiomatic projects.

With this in mind, we created [`builder-init`](https://github.com/FormidableLabs/builder-init) -- a simple script that generates projects from special archetype files:

* [`init.js`](https://github.com/FormidableLabs/builder-init#archetype-data) - a control file with prompts for template variables. ([example](https://github.com/FormidableLabs/builder-react-component/tree/master/init.js))
* [`init/**`](https://github.com/FormidableLabs/builder-init#archetype-templates) - template files to expand into a new project. ([example](https://github.com/FormidableLabs/builder-react-component/tree/master/init))

Once these are defined in an archetype, `builder-init` can then create a new project via any means that `npm` can install a module:

```bash
$ builder-init builder-react-component
$ builder-init builder-react-component@0.3.3
$ builder-init FormidableLabs/builder-react-component#v0.3.3
$ builder-init git+ssh://git@github.com:FormidableLabs/builder-react-component.git#v0.3.3
$ builder-init /FULL/PATH/TO/builder-react-component
```

This is a great way to keep your new project boilerplate always up to date. Additionally, we utilize `builder-init` in the [CI for the archetype](https://github.com/FormidableLabs/builder-react-component/blob/master/.travis.yml#L35-L58) to check that the archetype works as expected in consuming projects. It's a fantastic sanity check on your boilerplate to ensure it's always ready to ship.

### When is *builder* appropriate? When is it not?

Builder is great for situations in which you have:

* Many nearly identical projects
* With lots of `npm` `scripts` tasks and dependencies
* Large teams of developers

We have been helping Walmart Labs migrate their web properties to React. Just looking at React components, there are already something like 60 component repositories, split across many verticals and development teams. Builder archetypes manage the components, allowing us to funnel all of the infrastructure / workflow updates, bug fixes, and everything else into _one place_.

At Formidable, we use a multi-repository strategy for our collection of [Victory](http://formidable.com/open-source/victory/) data visualization components, all controlled by a single archetype, [`builder-victory-component`](https://github.com/FormidableLabs/builder-victory-component). This has been great for having a single location for things like our [upgrade to Babel 6](https://github.com/FormidableLabs/builder-victory-component/pull/40), [switch to optimized lodash plugins](https://github.com/FormidableLabs/builder-victory-component/pull/59), etc.

At the same time, not all projects would benefit from a builder archetype solution. If you have a one-off, single-purpose project, there's no need to abstract to an archetype. And the same goes for projects (like [Babel](https://github.com/babel/babel)) that follow a [monorepo strategy](https://github.com/babel/babel/blob/4c371132ae7321f6d08567eab54a59049e07f246/doc/design/monorepo.md) with a single repository.

## How does *builder* differ from other solutions?

Builder is unlike most other "meta" approaches that I'm aware of...

Builder differs from other React infrastructure / build frameworks in that it's completely technology agnostic -- it's really a way of enhancing `npm` to work from a single, controllable location. It doesn't specify dependencies, tasks, or anything really.

While the _substantive content_ of a given archetype will end up being very opinionated (tasks, dependencies, and workflows, specific to the team writing the archetype), the underlying builder mechanics are not.

Builder differs from other task runners like [Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/) in that:

* Builder doesn't require "plugins" or depend on wrappers for task functionality. It uses the same dependencies / scripts that you would use from the command line in a normal, non-builder project.
* Builder is much more flexible for a single project going "off script" at a fine-grained level.
* Builder has a specific strategy for coordinating tasks across multiple projects.

## Why did you develop *builder*?

The motivation for writing builder really goes back to our community's ongoing conversation regarding multiple vs. single repositories.

As JavaScript has become more complex, there has been a shift to "monorepos" -- monolithic repositories that house all of the code for an organization / project. And while there definitely _are_ appropriate scenarios for monorepos, several of our client projects have run into significant difficulties with them, particularly in the cases of:

* Large teams and sub-organizations
* Many developers of varying abilities and backgrounds
* Complex production build / release cycles
* Differing team sprint and release cadences

In a monorepo, these factors can lead to higher likelihoods of bug introduction, one team stomping on the toes of another team, slower code velocity, etc. That is not to say that monorepos can't be implemented successfully, just that many of the organizations we've helped have encountered many painful experiences with them.

These days in particular, I think many teams choose a monorepo because it _appears easier_ and in large part due to the lack of effective tools for multiple-repository management. And that's really why builder was created -- to make multiple project wrangling sensible, scalable, and flexible.

Before creating builder, I kept seeing the same `scripts` tasks and dependencies copied and pasted across multiple repositories, and the end result was always the same -- a maintenance and coordination nightmare. As someone who likes to have "one source of truth" across repositories, I really wanted a way to define tasks and infrastructures _once_ for many repositories.

As we were already using `npm`-based workflows for most projects, I realized I just wanted a slightly enhanced version of `npm` for multiple projects. And that has really been the guiding direction for builder -- it's "almost" `npm`.

We support `scripts`, dependencies, and `config` just like `npm` does. And `builder-init` works with modules the same as `npm` does. And to keep us honest and grounded, we even include a section in the builder documentation on [how to abandon builder archetypes](https://github.com/FormidableLabs/builder#i-give-up-how-do-i-abandon-builder) and go back to vanilla `npm`-based workflows.

That said, it is not all roses and unicorns with builder archetypes. Turning back to the complexity of modern JavaScript, archetypes don't _reduce_ this complexity in any fashion, they just _channel_ it to one place. And because of some idiosyncrasies with Node.js `require` resolution, it's even a bit _harder_ to wrangle an archetype than straight `npm` tasks in a vanilla project.

But for us and clients like Walmart Labs, the ability to funnel complexity has been a big enough win in allowing a smaller group of senior developers to manage the really tricky build / test / transpilation / infrastructure intricacies for the larger group of developers working in individual project repositories.

## What next?

The base feature set for builder is mostly complete for folks wrangling "just a few" to "enterprise-level number" of projects. We've still got some tickets left on the roadmap, but there's nothing really transformative at this point.

Most of my current work is more broadly supporting multi-repository projects. Our latest project is [Multibot](https://github.com/FormidableLabs/multibot), which allows you to use simple JavaScript transforms to change files (text, markdown, JS, etc.) across multiple repositories, going all the way to a pull request with a single command and no files actually touching disk.

## What does the future look like for *builder* and web development in general? Can you see any particular trends?

The future looks **increasingly complex**. And extremely powerful. With the meteoric rise of [Babel](https://babeljs.io/), we're seeing developers becoming more and more interested in tweaking the language itself that we are writing. And in ways that are in no way on the eventual ECMAScript roadmap. (Witness the power of the [`babel-plugin-ken-wheeler`](https://github.com/thejameskyle/babel-plugin-ken-wheeler) plugin.)

I think developers of all levels of experience will have to work very hard to keep up with both our application and infrastructure technologies. I know I certainly do.

## Who should I interview next?

One Ryan is nice, but two would be **awesome**. Interview [Ryan Florence](https://twitter.com/ryanflorence) next. In addition to leading projects that help in the boilerplate arena, he works in the trenches with an incredibly wide swath of developers of all backgrounds and will surely have some good insights as to how all these technologies are working in the wild.

## Conclusion

Thanks for the interview Ryan! Builder definitely seems like a powerful tool especially if you have to orchestrate a complex setup. If you want to study it further, consider the links below:

* [Builder Website](http://formidable.com/open-source/builder/) (generated off GitHub README)
* [Builder GitHub](https://github.com/FormidableLabs/builder)
* [Builder-init GitHub](https://github.com/FormidableLabs/builder-init)
* Example Archetypes:
    * https://github.com/FormidableLabs/builder-react-component
    * https://github.com/FormidableLabs/builder-victory-component
