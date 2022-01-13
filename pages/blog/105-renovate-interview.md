---
title: 'renovate - Keep npm dependencies up-to-date - Interview with Rhys Arkins'
date: 2017-07-03
headerImage: 'assets/img/screwdrivers.jpg'
keywords: ['interview', 'javascript', 'npm', 'dependencies']
editors: ['bebraw', 'karlhorky']
---

There's one pain most JavaScript developers share - dependency management. More specifically, how to keep them up to date. Sometimes even one month is a long time as improvements keep coming and the dependencies changing.

To understand a potential solution to this problem, I'm interviewing [Rhys Arkins](https://twitter.com/rarkins), the author of [renovate](https://www.npmjs.com/package/renovate).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/3cf3527d1ff144dd61717720c458802b?s=200" alt="Rhys Arkins" class="author" width="100" height="100" />
</span>

For the past few years I've been building a rental information site in Singapore called [Key Location](https://keylocation.sg). Prior to this I was lucky to catch the tail end of a great period in "telecoms" via a startup that IPO'd and was later acquired.
</p>

## How would you describe *renovate* to someone who has never heard of it?

Renovate provides a way to automate the updating of `package.json` dependencies within a project's workflow via the use of branches, CI testing and pull requests.

## How does *renovate* work?

Renovate scans each repository for all `package.json` files, and checks with the npm registry if any existing dependencies have newer versions available.

Once *renovate* has a list of upgrade candidates, it creates branches in the repository for testing each upgrade individually, and can also open pull requests - either immediately after the branch is created or after tests have completed.

By default it also separates major releases into their own branches / pull requests. For example, you might be testing a patch update to webpack 2.x while also seeing if / where webpack 3.0 breaks in your build.

It's somewhat configurable and tries not to be too opinionated, so almost every step above could be accompanied with a "...unless you configure it to..." disclaimer.

## How does *renovate* differ from other solutions?

The main alternative that many are familiar with is [Greenkeeper](https://greenkeeper.io/), a commercial *service* for a similar purpose that has deservedly become fairly well known and used.

Philosophically, *renovate* differs by being an "open source first" project where the primary aim is to allow people to run it themselves easily (e.g. with `npm i -g renovate`). Existing commercial services had / have the approach of "telling you when updates to your dependencies break your software".

I prefer a default approach of locking down exactly what dependencies are present and not upgrading unless they pass tests. For instance, these other solutions pin dependency versions if something breaks, whereas I prefer to pin the versions by default, including using yarn or npm lock files.

Technically, *renovate* has a few nice features which I believe are currently unique:

- Support for both GitHub and GitLab
- Autodiscovery of all `package.json` files in a monorepo
- Configurable options at global-, repository-, package file-, dependency *type*- and package-level (including using regex matching patterns to group related updates)
- Fully configurable branch, commit and pull request strings, via handlebars templates
- Automatic generation of `yarn.lock` and `package-lock.json` files with any `package.json` updates, if they already existed
- Policy-based automerge of dependencies (e.g. minor updates only, `devDependencies`-only, etc) once they pass tests, to reduce human work
- Branch-only automerges: Automerges can also be done with branch commits or merge pushes - no pull request necessary - which greatly reduces the daily GitHub notifications "noise"
- Keeping dependencies versions in a `yarn.lock` updated even if `package.json` versions haven't changed
- *renovate* is itself stateless and bases its logic solely on the npm registry and whatever is in the `repository`. So if there's a crash or resumption, there is no need to rebuild anything or worry about duplicates.

## Why did you develop *renovate*?

Like many others, I had a personal itch to scratch.

I previously had needed to *disable* automatic dependency updates on my main website project because none of the existing services supported monorepo repository structures. After subsequently wasting half a day troubleshooting a browser issue which turned out to be caused and already fixed by a dependency I had missed updating, I decided I'd hack together a script to manage monorepo `package.json` updates from the CLI.

Once I found out that it could be done relatively elegantly using the GitHub REST API (not requiring any `git` cloning), I decided to make it less hacky and open source it for others in a similar situation. So primarily this was driven by a technical need rather than any particular desire to build an open source version of something.

## What next?

I've recently added [renovate as a free GitHub app](https://github.com/apps/renovate). Again, the code for this is completely open source and I was happy to find out how simple it was to add the integration. As simple as running the script is, I think a lot of people prefer not to maintain yet another server or cron job in their routines so this is another option.

Functionality-wise, I'm looking into:

- Improved traceability of logs, e.g. being able to filter to just a single dependency to work out why or why it wasn't updated to X
- Native "semantic" commit message support. Currently users can edit/override templates as they wish, but it would be nice to automatically support Angular-style semantic commits out of the box, for instance.

## What does the future look like for *renovate* and web development in general? Can you see any particular trends?

The draw of open source continues to be strong, and not just for any philosophical reasons. I now feel hesitant to adopt any libraries where I can't see the source and the issues or know what's going on under the hood, even if I don't intend to actively contribute. I was happy to see GitHub open source their Firebase JavaScript SDK recently, for example - a huge improvement on their previous approach which was closed in every way.

One related trend I would *like* to see is the end to "snippets" for embedding closed-source third party libraries into websites. Developers need to seize back more control in terms of bundling, loading timing and priority, etc. The whole "this won't slow down your website" disclaimer that most use is obviously a load of bunk.

There are few vendors supporting this approach so far (i.e. open sourcing their client JS code as an alternative to loading via snippet) and market forces would suggest this is because customer developers aren't asking loud enough.

## What advice would you give to programmers getting into web development?

You would be surprised at how much experience and exposure you can get by contributing small patches and fixes to existing open source libraries.

## Who should I interview next?

Once you start noticing certain prolific open source authors, it's like [the yellow car phenomenom](https://www.inc.com/lee-colan/how-to-use-the-yellow-car-phenomenon.html) and you start noticing the same people everywhere. [Gleb Bahmutov](https://github.com/bahmutov) is one of those for me, although I'm not sure if he could easily decide which of his libraries to make a focus of an interview.

## Any last remarks?

Naturally I need to thank the hundreds of authors and maintainers of software I use every day, including as a part of *renovate*. And thanks for having me on the blog!

## Conclusion

Thanks for the interview Rhys! *renovate* certainly looks like a solid solution to an important problem.

Learn more about [the project at GitHub](https://github.com/singapore/renovate).
