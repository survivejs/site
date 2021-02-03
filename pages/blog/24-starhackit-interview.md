---
title: "StarHackIt - A Full Stack ES6/ES7 Starter Kit based on React and Node - Interview with Frederic Heem"
date: 2015-11-24
headerImage: "assets/img/starhackit/puntatrettu.jpg"
keywords: ["interview", "react"]
---

I discussed my [React component boilerplate](https://survivejs.github.io/react-component-boilerplate/) earlier on. It is focused and deals only with the frontend. Often you need more than just a frontend, though. This is where Frederic Heem's [StarHackIt](https://github.com/FredericHeem/starhackit) fits. It is a full stack boilerplate. Read on to learn more.

## Can you tell a bit about yourself?

<p>
  ![Frederic Heem|100|100|author](assets/img/starhackit/hf.jpg)

I studied industrial engineering in France but ended up being a software engineer for the last the last 15 years mostly in the UK and Italy. Right now, I am working on blockchain and distributed ledger technology in the city of London. During my spare time and when the wind blows, I am hooked on my kitesurf.

</p>

![dunkerque-malo](assets/img/starhackit/dunkerque-malo.jpg)

## How would you describe _StarHackIt_ to someone who has never heard of it?

_StarHackIt_ is a full stack web application boilerplate. The aim is to provide a code base to quickly create a new web application. It is a foundation on which software developers can build on top of it.

This starter kit is written in JavaScript **ES6**/**ES7**, it is composed of a frontend based on React/Reflux, a Node.js backend, the data is backed by **SQL** thanks to the Sequelize ORM, automatic deployment is done with Ansible. The code is built with Gulp, analyzed by ESLint, tested with Mocha, covered by Istanbul.

One of the main benefits is that StarHackIt comes with _authentication_:

- Users can register and login with username and password, reset the password via email.
- Social login with Facebook, Google, GitHub etc.

A fine-grained **authorization** system based on groups, permissions and resources is also provided. This allows to create users belonging to groups with a different set of permissions to the API. A simple example is to grant special access to users belonging to the _Admin_ group.

## Why did you develop StarHackIt?

Most JavaScript boilerplates are not really full stack, either they focus on the frontend or they specialize on the backend.

The data is almost always stored on non-relational **NoSQL** database like MongoDB or in the cloud with Firebase. However, most applications rely on relational data so SQL databases such as PostgreSQL or MySQL are better suited. Actually, using a NoSQL database when the data are essentially relational could lead to serious issues.

![NoSQL](assets/img/starhackit/nosql.jpg)

The **MEAN stack** is quite popular, it's composed of MongoDB, Express, Angular and Node. Instead, StarHackIt is a **SERNA stack**: SQL, Express, React, Node, and Ansible.

The Ruby fans have Ruby on Rails, but the JavaScript developers don't have Node on rails (yet). This project is a little step towards the direction of a productive JavaScript web framework.

Image that you have to attend a hackathon to create a useful app in a weekend, is there any time to lose creating from scratch an application with some basic functionalities such as login and register?

## What kind of challenges have you experienced while developing it?

The JavaScript ecosystem is vibrant with a record number of packages that have overtaken any other languages, see [modulecount](http://www.modulecounts.com/) for the facts.

![Module counts](assets/img/starhackit/modulecounts.png)

The challenge is mostly about making choice between these huge numbers of packages to build upon:

- React/Angular/Angular2/Ember/Backbone
- Reflux/Flux/Redux/Alt
- Bootstrap/Material/Foundation
- Eslint/Jscs/Jshint
- Stylus/Saas/Less/CSS
- Express/Koa/Hapi/Strongloop/Sails/Meteor
- SQL/NoSql
- Sequelize/Bookshelf
- Webpack/Browserify/RequiresJs
- Gulp/Grunt
- Ansible/Chef/Puppet
- Mocha/QUnit

It is about selecting the best tools at a given time and integrating them. Over time, new libraries will emerge, other libraries will be unmaintained. Keeping the code up to date with the new version will require some kind of maintenance.

![Red pill or blue pill?](assets/img/starhackit/choosepillsmatrix.jpg)

Writing code in _ES6_ and _ES7_ adds another layer of complexity on the build system since files need to be transpiled to plain old JavaScript. This also makes setting up code coverage and testing trickier, however, it's definitely worth it.

The most amazing feature of _ES7_ is **async/await**, forget about callbacks and Promises, async/await is an enlightenment and the way to go, it makes writing asynchronous code similar to writing synchronous code, it significantly changes the way JavaScript is written, especially on the node side.

> Twenty years ago JavaScript was a joke, now it's the future. [jster.net september-2015 ](http://jster.net/blog/monthly-jster-september-2015-part-2#.VkPBH2SKH-k)

## What next?

Next is to improve the documentation to explain the various parts of the stack, write a tutorial on how to create the famous TODO app. Then a native mobile app with react-native is definitely on the roadmap. An admin interface to manage users and other aspects of the app would be also very useful.

## What does the future look like for React and front-end in general? Can you see any particular trends?

The future of React lies in the various Flux implementations that are evolving very quickly, React is only a part of the equation for building an application. The React community is growing at fast pace, for instance, the React Meetup in London is fully booked only after 20 minutes upon publication of the event. The frontend development and software in general have a bright and sustainable future, there is no shortage of software development jobs in sight.

![React trends](assets/img/starhackit/react-trends.png)

## Who should I interview next?

What about an interview of Juho Vepsäläinen? The mind behind [jster.net](http://jster.net/) and [SurviveJS](http://survivejs.com/).

## Conclusion

Thanks a lot for the interview Frederic! I'll consider interviewing myself in the near future for sure as I might have a little announcement to make.

Best of luck to StarHackIt! Let's hope people find it and help you to push it further. Beyond the project site, consider checking [the source code on GitHub](https://github.com/FredericHeem/starhackit).
