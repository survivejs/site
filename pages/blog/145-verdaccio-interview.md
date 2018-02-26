---
title: 'Verdaccio - A lightweight npm proxy registry - Interview with Juan Picado'
date: 2018-02-26
headerImage: 'assets/img/headers/skydiving.jpg'
keywords: ['interview', 'npm', 'packaging']
---

If you develop JavaScript applications, you most likely use [npm](https://www.npmjs.com/), the most famous package manager available for JavaScript. At the time of writing, it hosts over 600 thousand packages, and the amount keeps rapidly increasing year by year.

That said, npm isn't perfect. What if it goes offline for a while or you want to use private packages at your company? npm provides several commercial options, but today we'll discuss an open source one, [Verdaccio](https://github.com/verdaccio/verdaccio) by [Juan Picado](https://twitter.com/jotadeveloper).

## Can you tell a bit about yourself?

<p>
<span class="author">
  <img src="https://www.gravatar.com/avatar/fba48015a688c38cc84e5b55b07858c0?s=200" alt="Juan Picado" class="author" width="100" height="100" />
</span>
My name is Juan, and I’m super passionate about open source and always willing to contribute and to learn something new. I’ve worked with several languages on the client side, but my favorite by far is JavaScript. I started using Dojo Toolkit, and these days I code mostly using React, TypeScript, and Node.js.
</p>

Currently, I work in Austria as a Software Engineer at Mobfox. I love meetups, books, sports, software conferences and I travel a lot.

## How would you describe *Verdaccio* to someone who has never heard of it?

Verdaccio is a lightweight private proxy registry with an entirely optional configuration that allows you to host private Node.js packages and compatible with all client package managers such npm, yarn or pnpm.

## How does *Verdaccio* work?

Verdaccio emulates the main npmjs registry, its internals can be broken down into:

* **Web Interface**: A simple interface to navigate your private packages.
* **Private Storage**: The main feature is hosting private packages. For instance, you might override packages from public registries. The default storage is file system based.
* **Uplinks**: References to other registries. Verdaccio can handle as many registries as you want to link. By default, it links to npm.
* **Proxy and Cache**: The most important part - it allows to selectively cache or route packages to other registries based on a match pattern.
* **Plugin Support**: For authentication, web middleware and soon storage.
* **Authentication**: By default, Verdaccio uses htpasswd basic authentication, but there are plugins for LDAP, Gitlab, MongoDB, Bitbucket and more.
* **Packages Access**: Restrict access to packages by peer groups, users or both, based on the auth plugin you want to use.

## How does *Verdaccio* differ from other solutions?

Other solutions very often either require a long list of prerequisites before the first usage, hardware requirements are high and of course, you usually have to pay to use them.

With Verdaccio, you instead start out small with a proper default configuration and can then scale or adapt if necessary. A configuration file is created when you install Verdaccio which you can then customize using plugins created by the community.

And even if Verdaccio by default is file system based, it’s a limitation easy to resolve using our ecosystem of plugins. You can evolve Verdaccio from a small and straightforward registry to an application scaled to fit large infrastructures using the right list of plugins.

Furthermore, we provide Docker and Kubernetes support that make things even easier for companies that use Verdaccio in their development workflows.

## Why did you develop *Verdaccio*?

There is a [long history](https://github.com/rlidwka/sinopia/issues/376) behind this project. Verdaccio is one of the multiple forks of sinopia, forked initially by Trent Earl and John Wilkinson after Sinopia was abandoned. I became a regular contributor, and after some months contributing, I got the project’s ownership and evolving Verdaccio into what the project it is today.

Among other things, we went from 200 stars on GitHub, 600 downloads per month on npm and 10k on Docker Hub to 2200 stars, 14k and 250k downloads. This rise in popularity would not have been possible without the help of many contributors and especially the core team composed of Meeeeow, Ayush Sharma, Breno Rodrigues and many others.

This project is significant for the community and me, and I firmly believe it has to exist as a free and straightforward solution to emulate an npm package system in your company or local environment, as well as it being open source.

## What next?

In one word – grow. We want to be the most important and most used open source registry, and for that, we have drawn a plan along last year to provide a good base. Throughout 2017 we managed to release several stable versions, ship new releases, improve Docker support, publish a new website with documentation and we have been working on the next major release v3 in parallel, currently in Alpha stage.

v3 will provide a bunch of exciting things:

* **Scale**: Verdaccio v2 is file system based and that’s a problem if you want to scale, since Javascript is single thread and Node.js only uses one core for each process, a file system does not allow to scale properly. In v3, we are shipping the possibility to replace the default storage with a custom one, either in the cloud (Firebase, Google Cloud or Amazon S3) or any NoSQL database like CouchDB or MongoDB.
* **Plugins**: We have improved the plugin documentation to help developers to ship more and more integrations, and we've tried to make the development more accessible with a plugin generator, types definitions based on Flow and more.
* **New Web UI**: In the latest version of v2 we have been already shipped a new feature, a sidebar with a dependencies navigator. But we want more. We want to create a UI that allows users to update their profiles, tokens and even the update registry configuration. We would like to enable users to customize the theme as well which may be welcomed by companies that put a strong emphasis on consistency with their corporate identity.
* **API**: We will provide more support to the npm API, such tokens, deprecations or stars.

v3 still **will be entirely backward compatible with sinopia**, we want their users to feel comfortable with moving to Verdaccio.

## What does the future look like for *Verdaccio* and web development in general? Can you see any particular trends?

Node.js stopped to being a tool only for backend developers a long time ago. These days with Javascript bundlers such as Webpack, Rollup or Prepack, npm packages have become significant - more than 600k in the central registry and much more privately.

But not all is perfect, many incidents last years on central registry remind us we need a solution in case this happens again, and Verdaccio is the ideal tool for avoiding sudden development issues, missing packages and can also serve as an offline emergency solution.

Verdaccio has lately also been used for E2E testing of npm packages before publishing them to npm, as outlined by Strapi in a [medium post](https://medium.com/@strapi/testing-your-npm-package-before-releasing-it-using-verdaccio-ngrok-28e2832c850a).

## What advice would you give to programmers getting into web development?

Contribute to open source (it will change your life), learn, read books, enjoy and be happy doing your work. Do not try to learn all fancy frameworks, focus on the JavaScript - which is beautiful and comfortable to learn. Teach others, share your knowledge and if you drink coffee while coding, be sure that is from Nicaragua, it's magic.

## Who should I interview next?

I admire Kyle Simpson and Nicholas C. Zakas. They are great JavaScript teachers, writers, and excellent communicators; it would be great to have them here. Also, I’d like to read about Rebecca Turner (main npm contributor), Zoltan Kochan (pnpm core contributor) or Sebastian McKenzie (Yarn committer).

## Conclusion

Thanks for the interview Juan! Verdaccio is a valuable service for any company developing JavaScript-based software seriously.

To learn more, [head to Verdaccio site](http://www.verdaccio.org/) or [check out Verdaccio on GitHub](https://github.com/verdaccio/verdaccio).

